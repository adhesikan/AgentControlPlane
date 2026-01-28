import Link from "next/link";

import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">AlgoPilotX</p>
          <p className="text-sm text-muted-foreground">
            AGENT CONTROL PLANE gives teams a governance layer for autonomous execution with approvals,
            budget controls, and forensic-grade audit trails.
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <span>LinkedIn</span>
            <span>Twitter/X</span>
            <span>GitHub</span>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Explore</p>
          <ul className="space-y-2 text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Policies</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/security" className="hover:text-foreground">
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <div className="container text-xs text-muted-foreground">
          © {new Date().getFullYear()} AlgoPilotX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
