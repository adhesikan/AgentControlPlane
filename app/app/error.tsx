"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

export default function AppError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("App route error:", error);
  }, [error]);

  return (
    <div className="rounded-xl border border-border/60 bg-background p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Control Plane Error
      </p>
      <h2 className="mt-2 text-2xl font-semibold">We hit a rendering issue.</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Please refresh the page. If the issue persists, check the deployment logs for a client-side
        error after hydration.
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <span>Digest: {error.digest ?? "n/a"}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reload page
        </Button>
      </div>
    </div>
  );
}
