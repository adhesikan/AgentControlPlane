import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="container flex min-h-[80vh] items-center justify-center py-16">
      <Card className="w-full max-w-xl border-border/60">
        <CardHeader className="space-y-3">
          <CardTitle className="text-2xl">Sign in to Agent Control Plane</CardTitle>
          <p className="text-sm text-muted-foreground">
            Access to the control plane requires an approved organization workspace. Use your
            enterprise credentials to continue or request access.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium" htmlFor="email">
              Work email
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="h-11 rounded-md border border-border/60 bg-background px-3 text-sm"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium" htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 rounded-md border border-border/60 bg-background px-3 text-sm"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="flex-1" size="lg">
              Sign in
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
          <div className="rounded-lg border border-dashed border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
            SSO is available for approved tenants. Configure OIDC in the admin console to enable
            enterprise login.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
