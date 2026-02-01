import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workflows = [
  {
    name: "Stock Analysis Workflow",
    version: "v1",
    status: "Enabled",
    policies: "Global RIA Guardrails v3",
    roles: "Analyst, Supervisor"
  },
  {
    name: "Macro Risk Scan",
    version: "v2",
    status: "Quarantined",
    policies: "Macro Monitoring v1",
    roles: "Supervisor"
  }
];

export default function WorkflowsPage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardHeader className="space-y-2">
          <CardTitle>Workflow registry</CardTitle>
          <p className="text-sm text-muted-foreground">
            Versioned workflows define steps, dependencies, and required policies. Quarantine a
            workflow to halt future runs without deleting history.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {workflows.map((workflow) => (
            <div
              key={workflow.name}
              className="rounded-lg border border-border/60 bg-background px-4 py-3 text-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-semibold">{workflow.name}</p>
                  <p className="text-xs text-muted-foreground">Version: {workflow.version}</p>
                </div>
                <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                  {workflow.status}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>Required policies: {workflow.policies}</span>
                <span>Allowed roles: {workflow.roles}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle>Governed workflow definition</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Steps: MarketDataStep → TechnicalAnalysisStep → FundamentalsStep → NewsStep</p>
          <p>Required: PolicyCheckStep</p>
          <p>Approvals: Supervisor required before publish</p>
          <p>Policy enforcement: Pre-flight + continuous runtime checks</p>
        </CardContent>
      </Card>
    </div>
  );
}
