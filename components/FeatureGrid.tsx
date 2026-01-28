import { AlertTriangle, BadgeCheck, Handshake, Lock, Shield, Timer } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Rules & Policies",
    description: "Codify guardrails and route every agent decision through enforceable policy gates.",
    icon: Shield
  },
  {
    title: "Permissions & RBAC",
    description: "Grant least-privilege access by agent, workflow, or environment with full scope control.",
    icon: Lock
  },
  {
    title: "Human-in-the-loop Approvals",
    description: "Require first-time or high-risk actions to get explicit approval in seconds.",
    icon: Handshake
  },
  {
    title: "Cost & Rate Limits",
    description: "Keep spend predictable with budgets, throttles, and workload quotas.",
    icon: Timer
  },
  {
    title: "Kill Switches & Safe Mode",
    description: "Pause or roll back execution instantly when behavior drifts out of bounds.",
    icon: AlertTriangle
  },
  {
    title: "Audit Trails & Replay",
    description: "Capture every intent, decision, and action for compliance and retrospectives.",
    icon: BadgeCheck
  }
];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <Card key={feature.title} className="border-border/60 bg-background/80">
          <CardHeader className="space-y-3">
            <feature.icon className="h-6 w-6 text-primary" />
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{feature.description}</CardContent>
        </Card>
      ))}
    </div>
  );
}
