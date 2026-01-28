import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
  return (
    <div className="container space-y-6 py-16">
      <Badge>Terms</Badge>
      <h1 className="text-4xl font-semibold">Terms of Service</h1>
      <p className="text-sm text-muted-foreground">Last updated: April 2024</p>
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>
          By accessing Agent Control Plane, you agree to use the service responsibly and comply with
          applicable laws.
        </p>
        <p>
          The service provides governance controls and does not execute actions on your behalf
          without explicit configuration.
        </p>
        <p>
          Contact hello@algopilotx.com with any questions regarding these terms.
        </p>
      </div>
    </div>
  );
}
