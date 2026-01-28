"use client";

import * as React from "react";
import Link from "next/link";

import { trackEvent } from "@/lib/analytics";
import { CTAButton } from "@/components/CTAButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
  website?: string;
}

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formState, setFormState] = React.useState<ContactFormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    website: ""
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          role: "Contact",
          agents: "N/A",
          useCase: formState.message,
          website: formState.website
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      trackEvent("lead_submit", { source: "contact_form" });
      setStatus("success");
      setFormState({ name: "", email: "", company: "", message: "", website: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <Badge>Contact</Badge>
        <h1 className="text-4xl font-semibold">Talk to our team</h1>
        <p className="text-lg text-muted-foreground">
          Share your goals and we will build a governance plan tailored to your agent stack.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            Email us directly: <Link href="mailto:hello@algopilotx.com">hello@algopilotx.com</Link>
          </p>
          <p>Response time: under 1 business day.</p>
        </div>
        <CTAButton size="lg" source="contact_sidebar" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border/60 bg-background p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={formState.company}
            onChange={(event) => setFormState((prev) => ({ ...prev, company: event.target.value }))}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website (leave blank)</Label>
          <Input
            id="website"
            value={formState.website}
            onChange={(event) => setFormState((prev) => ({ ...prev, website: event.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            rows={5}
            value={formState.message}
            onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
            required
          />
        </div>
        {status === "success" ? (
          <p className="rounded-md border border-border/60 bg-muted p-3 text-sm">
            Thanks! We will follow up shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-destructive">Submission failed. Please email us directly.</p>
        ) : null}
        <Button type="submit" disabled={status === "submitting"} className="w-full">
          {status === "submitting" ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
