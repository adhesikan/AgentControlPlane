import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { governanceModules, integrations } from "@/lib/constants";

const featureDetails = [
  {
    title: "Policy engine",
    what: "Define policies in plain language or JSON rules with version control.",
    why: "Keep every agent aligned with business, legal, and security constraints."
  },
  {
    title: "Approvals workflow",
    what: "Route approvals to Slack, email, or dashboard queues.",
    why: "Guarantee human oversight when it matters without slowing velocity."
  },
  {
    title: "Execution guardrails",
    what: "Budget caps, rate limits, and environment allowlists.",
    why: "Prevent runaway cost and keep actions within safe bounds."
  },
  {
    title: "Audit + replay",
    what: "Capture every intent, decision, and action in a single timeline.",
    why: "Answer compliance questions and build confidence with stakeholders."
  }
];

export default function ProductPage() {
  return (
    <div className="container space-y-16 py-16">
      <section className="space-y-6">
        <Badge>Control Plane</Badge>
        <h1 className="text-4xl font-semibold">Product: Agent Control Plane</h1>
        <p className="text-lg text-muted-foreground">
          A governance layer that sits between agent intent and execution. Centralize approvals,
          permissions, and cost controls without rewriting your agent stack.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">What you get, why it matters</h2>
          <div className="space-y-4">
            {featureDetails.map((feature) => (
              <Card key={feature.title} className="border-border/60">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">What you get:</span> {feature.what}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Why it matters:</span> {feature.why}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Screenshots</h3>
          <div className="space-y-4">
            {[
              "Policy dashboard",
              "Approval queue",
              "Incident timeline"
            ].map((label) => (
              <div
                key={label}
                className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/40 text-sm text-muted-foreground"
              >
                {label} placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Governance modules</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {governanceModules.map((module) => (
            <div
              key={module}
              className="rounded-xl border border-border/60 bg-muted/30 px-6 py-4 text-sm font-medium"
            >
              {module}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Integrations</h2>
        <div className="flex flex-wrap gap-3">
          {integrations.map((integration) => (
            <span
              key={integration}
              className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm"
            >
              {integration}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
