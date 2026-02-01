import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/app", label: "Dashboard" },
  { href: "/app/analyze", label: "Create Run" },
  { href: "/app/workflows", label: "Workflows" },
  { href: "/app/audit", label: "Audit" },
  { href: "/app/admin/policies", label: "Policies" },
  { href: "/app/admin/users", label: "Users" }
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b border-border/60 bg-background/80">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Enterprise Control Plane
            </p>
            <h1 className="text-xl font-semibold">Demo RIA Workspace</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-muted-foreground">
              Auth required · JWT + OIDC ready
            </div>
            <Button asChild size="sm" variant="secondary">
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="container grid gap-6 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-3">
          <div className="rounded-xl border border-border/60 bg-background p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Navigation
            </p>
            <nav className="mt-3 grid gap-2 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-transparent px-3 py-2 text-muted-foreground transition hover:border-border/60 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="rounded-xl border border-border/60 bg-background p-4 text-xs text-muted-foreground">
            Policy snapshots are pinned to every run. Tool calls, approvals, and cost caps are
            enforced before execution begins.
          </div>
        </aside>
        <main className="space-y-6">{children}</main>
      </div>
    </div>
  );
}
