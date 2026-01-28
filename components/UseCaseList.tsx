import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    title: "Runaway execution + kill switch",
    whatHappens: "An agent begins looping on a bad decision and escalates spend.",
    without: "No centralized stop button; teams discover the issue after costs spike.",
    withControl: "Kill switches pause execution and alert responders instantly.",
    whoCares: "Platform engineering"
  },
  {
    title: "First-time action approval",
    whatHappens: "A new agent requests production access for the first time.",
    without: "The request auto-executes without human review.",
    withControl: "Approvals route to the right owner before execution.",
    whoCares: "Security"
  },
  {
    title: "Budget / spend caps",
    whatHappens: "Agents spin up data collection jobs across vendors.",
    without: "Budget overages are discovered after invoices land.",
    withControl: "Hard limits stop work when budgets are hit.",
    whoCares: "Finance"
  },
  {
    title: "Audit & compliance export",
    whatHappens: "Audit teams need evidence of automated actions.",
    without: "Manual reconstruction of logs and approvals.",
    withControl: "Exportable audit trails show intent, approvals, and execution.",
    whoCares: "Compliance"
  },
  {
    title: "Multi-agent coordination",
    whatHappens: "Multiple agents collaborate on a launch sequence.",
    without: "No shared guardrails; one agent overrides another.",
    withControl: "Central policies enforce coordination rules and dependencies.",
    whoCares: "Product operations"
  },
  {
    title: "Simulation / dry-run",
    whatHappens: "You need to validate a new workflow before production.",
    without: "Testing happens in production or not at all.",
    withControl: "Run in safe mode to validate intent before execution.",
    whoCares: "Engineering"
  },
  {
    title: "Third-party agent sandboxing",
    whatHappens: "External agents request access to internal tools.",
    without: "Access is overly broad or blocked entirely.",
    withControl: "Sandboxed permissions ensure least privilege.",
    whoCares: "IT"
  },
  {
    title: "Incident response + postmortems",
    whatHappens: "An agent misconfigures infrastructure.",
    without: "Teams scramble to understand the chain of events.",
    withControl: "Audit replay provides timeline and root cause data.",
    whoCares: "Reliability"
  },
  {
    title: "Progressive autonomy ladder",
    whatHappens: "You want to graduate agents from supervised to autonomous.",
    without: "No safe way to increase autonomy over time.",
    withControl: "Policy tiers unlock more autonomy as confidence grows.",
    whoCares: "AI governance"
  },
  {
    title: "RBAC across teams",
    whatHappens: "Different teams require different levels of access.",
    without: "Permissions are global and error-prone.",
    withControl: "Role-based policies scope access by team and workflow.",
    whoCares: "Security & IT"
  }
];

export function UseCaseList() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {useCases.map((useCase) => (
        <Card key={useCase.title} className="border-border/60">
          <CardHeader>
            <CardTitle>{useCase.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">What happens:</span> {useCase.whatHappens}
            </p>
            <p>
              <span className="font-semibold text-foreground">Without control plane:</span> {useCase.without}
            </p>
            <p>
              <span className="font-semibold text-foreground">With Agent Control Plane:</span> {useCase.withControl}
            </p>
            <p>
              <span className="font-semibold text-foreground">Who cares:</span> {useCase.whoCares}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
