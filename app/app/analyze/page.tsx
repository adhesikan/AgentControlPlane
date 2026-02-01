import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyzePage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardHeader className="space-y-2">
          <CardTitle>Create a governed run</CardTitle>
          <p className="text-sm text-muted-foreground">
            Every run captures a policy snapshot, workflow version, and audit trail before
            execution. Submit a ticker and notes to initiate the workflow pipeline.
          </p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium" htmlFor="ticker">
            Ticker symbol
            <input
              id="ticker"
              placeholder="AAPL"
              className="h-11 rounded-md border border-border/60 bg-background px-3 text-sm"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium" htmlFor="notes">
            Analyst notes (optional)
            <textarea
              id="notes"
              placeholder="Highlight any risk constraints or context for reviewers."
              className="min-h-[120px] rounded-md border border-border/60 bg-background px-3 py-2 text-sm"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">Create run</Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/app/workflows">Review workflow definition</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Policy snapshot (preview)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Tool allowlist: marketData.getSnapshot, marketData.getOHLC, news.search</p>
            <p>Max tool calls: 12</p>
            <p>Max tokens: 24,000</p>
            <p>Runtime per step: 45s</p>
            <p>Monthly budget: $120,000</p>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Workflow stages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>MarketDataStep → TechnicalAnalysisStep → FundamentalsStep</p>
            <p>NewsStep → RiskChecklistStep → SynthesisStep</p>
            <p>PolicyCheckStep → Supervisor Review</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
