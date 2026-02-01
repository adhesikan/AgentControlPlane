import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const policies = [
  {
    name: "Global RIA Guardrails",
    version: "v3",
    budget: "$120,000/month",
    tools: "marketData.*, news.search"
  },
  {
    name: "Macro Monitoring",
    version: "v1",
    budget: "$40,000/month",
    tools: "marketData.getOHLC"
  }
];

export default function PoliciesPage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardHeader className="space-y-2">
          <CardTitle>Policy governance</CardTitle>
          <p className="text-sm text-muted-foreground">
            Policies are versioned, immutable once published, and snapshotted per run. Configure
            budgets, tool allowlists, and approval requirements here.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {policies.map((policy) => (
            <div
              key={policy.name}
              className="rounded-lg border border-border/60 bg-background px-4 py-3 text-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-semibold">{policy.name}</p>
                  <p className="text-xs text-muted-foreground">Version: {policy.version}</p>
                </div>
                <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                  Active
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>Budget: {policy.budget}</span>
                <span>Tool allowlist: {policy.tools}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle>Policy enforcement notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Policies are evaluated before and during each step execution.</p>
          <p>Runtime checks log every decision to the audit ledger.</p>
          <p>Daily + monthly budgets trigger auto-quarantine on breach.</p>
        </CardContent>
      </Card>
    </div>
  );
}
