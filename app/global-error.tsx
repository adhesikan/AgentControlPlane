"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  React.useEffect(() => {
    console.error("Global app error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <div className="container flex min-h-[70vh] items-center justify-center py-16">
          <div className="w-full max-w-2xl rounded-xl border border-border/60 bg-background p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Application Error
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Something went wrong.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              A fatal error prevented the application from rendering. Please reload and review the
              console logs for details.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>Digest: {error.digest ?? "n/a"}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => window.location.reload()}>Reload page</Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
