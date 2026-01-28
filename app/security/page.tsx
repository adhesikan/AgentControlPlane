import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const controls = [
  "RBAC and scoped permissions",
  "Human approvals for risky actions",
  "Immutable audit logs",
  "Retention policies and exports",
  "Kill switches and safe mode"
];

const checklist = [
  "SOC-aligned operational controls",
  "Encryption in transit and at rest",
  "Separation of duties by role",
  "Configurable retention windows",
  "Secure webhook delivery"
];

export default function SecurityPage() {
  return (
    <div className="container space-y-12 py-16">
      <section className="space-y-4">
        <Badge>Security</Badge>
        <h1 className="text-4xl font-semibold">Governance, audit, and controls</h1>
        <p className="text-lg text-muted-foreground">
          Agent Control Plane provides the guardrails your teams need to run autonomous systems
          safely.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {controls.map((control) => (
          <Card key={control} className="border-border/60">
            <CardHeader>
              <CardTitle>{control}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Enforce this control across every workflow with centralized policies and alerts.
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Security posture checklist</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="rounded-xl border border-border/60 bg-muted/30 px-6 py-4">
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/20 p-8 text-sm text-muted-foreground">
        Agent Control Plane is a governance layer. Your systems remain the source of execution, and
        you maintain full control over what agents can do. We never execute actions without your
        explicit policies and permissions.
      </section>
    </div>
  );
}
