import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agent Control Plane by AlgoPilotX",
    template: "%s | Agent Control Plane"
  },
  description:
    "Control plane for autonomous execution with permissions, guardrails, approvals, cost controls, kill switches, and audit trails.",
  metadataBase: new URL("https://agentcontrolplane.com"),
  openGraph: {
    title: "Agent Control Plane by AlgoPilotX",
    description:
      "Control plane for autonomous execution with permissions, guardrails, approvals, cost controls, kill switches, and audit trails.",
    url: "https://agentcontrolplane.com",
    siteName: "Agent Control Plane",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Control Plane by AlgoPilotX",
    description:
      "Control plane for autonomous execution with permissions, guardrails, approvals, cost controls, kill switches, and audit trails."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
