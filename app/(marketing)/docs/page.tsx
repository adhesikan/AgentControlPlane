import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DocsPage() {
  return (
    <div className="container space-y-12 py-16">
      <section className="space-y-4">
        <Badge>Docs</Badge>
        <h1 className="text-4xl font-semibold">Getting started with Agent Control Plane</h1>
        <p className="text-lg text-muted-foreground">
          A lightweight overview of how to route agent execution through governance policies.
        </p>
      </section>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="api">API Flow</TabsTrigger>
          <TabsTrigger value="policy">Policy Setup</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Place Agent Control Plane between your agent orchestrator and downstream tools. The
                control plane evaluates intent, enforces policies, and records audit logs before
                execution.
              </p>
              <p>
                Use the dashboard to monitor policies, approvals, and incident timelines in one
                place.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>API Flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ol className="list-decimal space-y-2 pl-5">
                <li>POST /intent with agent metadata and requested action.</li>
                <li>Receive policy decision + approval requirements.</li>
                <li>When approved, POST /execute to run downstream actions.</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="policy">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Policy Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Start with templates for budget caps, sandboxing, and approval gates. Policies can
                be versioned, tested, and rolled back instantly.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
