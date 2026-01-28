import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
  return (
    <div className="container space-y-6 py-16">
      <Badge>Privacy</Badge>
      <h1 className="text-4xl font-semibold">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Last updated: April 2024</p>
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>
          AlgoPilotX collects contact information you submit through our forms. We use this data to
          respond to inquiries, provide demos, and share product updates.
        </p>
        <p>
          We do not sell personal data. We only share information with service providers that help
          us operate the service, and only under contractual obligations.
        </p>
        <p>
          You can request access, updates, or deletion of your data by emailing
          hello@algopilotx.com.
        </p>
      </div>
    </div>
  );
}
