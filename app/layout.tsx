import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RequestAccessProvider } from "@/components/RequestAccessModal";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body>
        <ThemeProvider>
          <RequestAccessProvider>
            <Navbar />
            <main className="min-h-screen bg-background">{children}</main>
            <Footer />
          </RequestAccessProvider>
        </ThemeProvider>
        <Script id="data-layer" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        {process.env.NEXT_PUBLIC_POSTHOG_KEY ? (
          <Script id="posthog" strategy="afterInteractive">
            {`
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init("${process.env.NEXT_PUBLIC_POSTHOG_KEY}", { api_host: "${process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://app.posthog.com"}" });
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
