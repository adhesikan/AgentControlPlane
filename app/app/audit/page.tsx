import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const auditEvents = [
  {
    timestamp: "2024-05-03T14:12:19Z",
    event: "Policy check approved",
    actor: "PolicyEngine",
    runId: "run-1024"
  },
  {
    timestamp: "2024-05-03T14:12:10Z",
    event: "Tool call logged: marketData.getOHLC",
    actor: "ToolGateway",
    runId: "run-1024"
  },
  {
    timestamp: "2024-05-03T14:11:58Z",
    event: "Supervisor review requested",
    actor: "RunOrchestrator",
    runId: "run-1024"
  },
  {
    timestamp: "2024-05-03T14:11:02Z",
    event: "Workflow version pinned",
    actor: "RunOrchestrator",
    runId: "run-1024"
  }
];

export default function AuditPage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardHeader className="space-y-2">
          <CardTitle>Audit event stream</CardTitle>
          <p className="text-sm text-muted-foreground">
            Immutable events capture policy decisions, approvals, tool calls, and exports. Export
            to JSON or CSV for compliance reviews.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {auditEvents.map((event) => (
            <div
              key={`${event.timestamp}-${event.event}`}
              className="rounded-lg border border-border/60 bg-background px-4 py-3 text-sm"
            >
              <p className="font-semibold">{event.event}</p>
              <p className="text-xs text-muted-foreground">
                {event.timestamp} · {event.actor} · {event.runId}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle>Export settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Retention window: 7 years</p>
          <p>SIEM export: stub endpoint enabled</p>
          <p>Redaction: secrets hashed before persistence</p>
        </CardContent>
      </Card>
    </div>
  );
}
