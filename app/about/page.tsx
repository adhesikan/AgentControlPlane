import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container space-y-12 py-16">
      <section className="space-y-4">
        <Badge>About</Badge>
        <h1 className="text-4xl font-semibold">We build the governance layer for autonomy</h1>
        <p className="text-lg text-muted-foreground">
          AlgoPilotX helps enterprises run autonomous agents safely with observability, approvals,
          and cost control baked into every workflow.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Empower teams to scale automation without sacrificing trust, compliance, or operational
            stability.
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Principles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Governance before autonomy.</p>
            <p>Least privilege by default.</p>
            <p>Transparency in every decision.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
