import { Badge } from "@/components/ui/badge";
import { UseCaseList } from "@/components/UseCaseList";

export default function UseCasesPage() {
  return (
    <div className="container space-y-10 py-16">
      <div className="space-y-4">
        <Badge>Scenarios</Badge>
        <h1 className="text-4xl font-semibold">Use Cases for Agent Control Plane</h1>
        <p className="text-lg text-muted-foreground">
          Governance workflows for every team running autonomous agents in production.
        </p>
      </div>
      <UseCaseList />
    </div>
  );
}
