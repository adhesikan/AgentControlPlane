import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const runSummaries = [
  {
    id: "run-1024",
    name: "AAPL Weekly Risk Review",
    status: "Review",
    owner: "Analyst · J. Patel",
    policy: "Global RIA Guardrails v3"
  },
  {
    id: "run-1023",
    name: "NVDA Earnings Brief",
    status: "Approved",
    owner: "Supervisor · L. Chen",
    policy: "Equity Research v2"
  },
  {
    id: "run-1022",
    name: "MSFT Momentum Scan",
    status: "Running",
    owner: "Analyst · D. Rivera",
    policy: "Macro Monitoring v1"
  }
];

export default function AppDashboardPage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardHeader className="space-y-2">
          <CardTitle>Governance Command Center</CardTitle>
          <p className="text-sm text-muted-foreground">
            Monitor active runs, policy posture, and approvals in one workspace. All data is
            captured in immutable audit events and tied to a policy snapshot.
          </p>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href="/app/analyze">Create a governed run</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/app/audit">Review audit stream</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/app/workflows">Workflow registry</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Policy enforcement",
            value: "99.1%",
            description: "Runs passing pre-flight policy checks"
          },
          {
            title: "Monthly budget",
            value: "$82,400",
            description: "Remaining across tenant cost caps"
          },
          {
            title: "Supervision queue",
            value: "6",
            description: "Runs awaiting approval"
          }
        ].map((item) => (
          <Card key={item.title} className="border-border/60">
            <CardContent className="space-y-2 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {item.title}
              </p>
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/60">
        <CardHeader>
          <CardTitle>Recent governed runs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {runSummaries.map((run) => (
            <div
              key={run.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border/60 bg-background px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold">{run.name}</p>
                <p className="text-xs text-muted-foreground">
                  {run.id} · {run.owner}
                </p>
              </div>
              <div className="text-xs text-muted-foreground">Policy: {run.policy}</div>
              <Button asChild size="sm" variant="outline">
                <Link href={`/app/runs/${run.id}`}>View timeline</Link>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
