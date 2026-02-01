import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timeline = [
  {
    step: "PolicySnapshot created",
    detail: "Pinned Global RIA Guardrails v3 (hash: 9fd3...)"
  },
  {
    step: "Workflow version locked",
    detail: "Stock Analysis Workflow v1"
  },
  {
    step: "Tool gateway pre-flight",
    detail: "Allowlist + rate limits validated"
  },
  {
    step: "Run executed",
    detail: "6 steps completed, 11 tool calls logged"
  },
  {
    step: "Supervisor review",
    detail: "Awaiting approval from L. Chen"
  }
];

export default function RunDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardHeader className="space-y-2">
          <CardTitle>Run timeline · {params.id}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Every step, tool call, and policy decision is immutable and tied to a signed audit
            event.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {timeline.map((item, index) => (
            <div key={item.step} className="flex gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-semibold">
                  {index + 1}. {item.step}
                </p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Tool call ledger</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>marketData.getSnapshot · input hash: 9b4c... · 120ms</p>
            <p>marketData.getOHLC · input hash: 7f1a... · 230ms</p>
            <p>news.search · input hash: 3d8e... · 410ms</p>
            <p>All tool calls are redacted and stored with SHA-256 hashes.</p>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Approval state</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Status: Review</p>
            <p>Supervisor: L. Chen</p>
            <p>Quarantine: Disabled</p>
            <p>Publish gate: Enabled</p>
            <Button asChild size="sm" variant="outline">
              <Link href="/app/audit">Open audit log</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
