import Link from "next/link";

import { CTAButton } from "@/components/CTAButton";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Card, CardContent } from "@/components/ui/card";

const scenarios = [
  {
    title: "Budget enforcement",
    description: "Stop cost overruns before they hit billing.",
    href: "/use-cases"
  },
  {
    title: "Approval routing",
    description: "Require human sign-off for high-risk actions.",
    href: "/use-cases"
  },
  {
    title: "Incident replay",
    description: "Reconstruct every action with forensic detail.",
    href: "/use-cases"
  },
  {
    title: "Progressive autonomy",
    description: "Safely graduate agents to full autonomy.",
    href: "/use-cases"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="container pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              AGENT CONTROL PLANE by AlgoPilotX
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              The Control Plane for Autonomous Execution
            </h1>
            <p className="text-lg text-muted-foreground">
              Run 10–1,000 agents with rules, permissions, approvals, budgets, kill switches, and
              audit trails.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton size="lg" source="hero" />
              <Link
                href="/use-cases"
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                View Use Cases
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
              <span>Trusted by platform teams</span>
              <span>Built for regulated environments</span>
              <span>Audit-ready by default</span>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 via-transparent to-transparent p-6 shadow-glow">
            <div className="space-y-4 rounded-xl border border-border/60 bg-background p-6">
              <p className="text-sm font-semibold">Live execution monitor</p>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Policy checks passed</span>
                  <span>98.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Approvals pending</span>
                  <span>6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Budget remaining</span>
                  <span>$42,560</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kill switches armed</span>
                  <span>4</span>
                </div>
              </div>
              <div className="rounded-lg border border-dashed border-border/60 bg-muted/40 p-4 text-xs">
                Timeline: Intent → Policy → Approval → Execute → Audit
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/60 bg-muted/30 px-6 py-4 text-sm text-muted-foreground">
          <span>Logo: CloudOps</span>
          <span>Logo: FinTrust</span>
          <span>Logo: CortexAI</span>
          <span>Logo: RelayGrid</span>
          <span>Logo: Helix Labs</span>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Why Control Plane
          </p>
          <h2 className="text-3xl font-semibold">Govern every autonomous action.</h2>
          <p className="text-muted-foreground">
            Your agents move fast. We make sure they stay safe, compliant, and cost-aware.
          </p>
        </div>
        <FeatureGrid />
      </section>

      <section className="container space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            How it works
          </p>
          <h2 className="text-3xl font-semibold">One pipeline for every decision.</h2>
        </div>
        <div className="grid gap-4 rounded-2xl border border-border/60 bg-background/80 p-6 md:grid-cols-5">
          {[
            "Agent",
            "Intent",
            "Policy Check",
            "Approval (optional)",
            "Execution + Audit"
          ].map((step, index) => (
            <div key={step} className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-primary">Step {index + 1}</span>
              <span className="text-sm font-medium">{step}</span>
              <div className="h-1 w-full rounded-full bg-muted">
                <div className="h-1 w-3/4 rounded-full bg-primary/60" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Incident Center
          </p>
          <h2 className="text-3xl font-semibold">Stop, diagnose, and recover in minutes.</h2>
          <p className="text-muted-foreground">
            Centralize policy violations, escalations, and approvals into a single command center.
            Replay every decision, annotate timelines, and ship postmortems instantly.
          </p>
          <CTAButton source="incident_center" />
        </div>
        <Card className="border-border/60">
          <CardContent className="space-y-4 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Timeline mock
            </div>
            {[
              "Agent triggered high-risk action",
              "Policy threshold exceeded",
              "Approval requested from on-call",
              "Kill switch activated",
              "Audit package exported"
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="font-medium">{item}</p>
                  <p className="text-xs text-muted-foreground">T+{index * 3 + 1} minutes</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Scenarios
            </p>
            <h2 className="text-3xl font-semibold">Built for real-world autonomy.</h2>
          </div>
          <Link href="/use-cases" className="text-sm font-semibold text-primary">
            Explore all use cases →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario) => (
            <Card key={scenario.title} className="border-border/60">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-lg font-semibold">{scenario.title}</h3>
                <p className="text-sm text-muted-foreground">{scenario.description}</p>
                <Link href={scenario.href} className="text-sm font-semibold text-primary">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Governance modules
            </p>
            <h2 className="text-3xl font-semibold">Premium add-ons for regulated teams.</h2>
          </div>
          <CTAButton source="governance_modules" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Policy templates",
            "Versioning + rollback",
            "Compliance exports",
            "Retention controls",
            "SSO (enterprise)",
            "Custom legal holds"
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border/60 bg-muted/30 px-6 py-4 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="gradient-border rounded-2xl p-[1px]">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-background p-10 md:flex-row md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Ready to govern autonomous execution?</h2>
              <p className="text-muted-foreground">
                Book a demo to see how Agent Control Plane fits into your stack.
              </p>
            </div>
            <CTAButton size="lg" source="final_cta" />
          </div>
        </div>
      </section>
    </div>
  );
}
