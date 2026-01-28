import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const rateLimitMap = new Map<string, number[]>();

interface LeadPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  agents: string;
  useCase: string;
  website?: string;
}

function getIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.ip ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = ratelimitMap.get(ip) ?? [];

  // keep only timestamps inside the window
  const recent = timestamps.filter(
    (time) => now - time < rateLimitWindowMs
  );

  // add current request
  recent.push(now);

  // ✅ FIX: clean up empty entries to prevent memory growth
  if (recent.length === 0) {
    ratelimitMap.delete(ip);
  } else {
    ratelimitMap.set(ip, recent);
  }

  return recent.length > rateLimitMax;
}


async function storeLead(payload: LeadPayload) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "leads.json");

  await fs.mkdir(dataDir, { recursive: true });

  let existing: LeadPayload[] = [];
  try {
    const file = await fs.readFile(filePath, "utf-8");
    existing = JSON.parse(file) as LeadPayload[];
  } catch (error) {
    existing = [];
  }

  existing.push({ ...payload });
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
}

async function sendEmail(payload: LeadPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
    console.info("SMTP not configured; lead logged", payload);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: `Agent Control Plane <${SMTP_USER}>`,
    to: SMTP_TO,
    subject: `New lead: ${payload.company}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nRole: ${payload.role}\nAgents: ${payload.agents}\nUse case: ${payload.useCase}`
  });
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Rate limit exceeded" }, { status: 429 });
  }

  const payload = (await request.json()) as LeadPayload;

  if (payload.website) {
    return NextResponse.json({ message: "Success" }, { status: 200 });
  }

  if (!payload.name || !payload.email || !payload.company) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  await storeLead(payload);
  await sendEmail(payload);

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
