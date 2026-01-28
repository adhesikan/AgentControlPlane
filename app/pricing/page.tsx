import { CTAButton } from "@/components/CTAButton";
import { FAQ } from "@/components/FAQ";
import { PricingTable } from "@/components/PricingTable";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  return (
    <div className="container space-y-16 py-16">
      <section className="space-y-4">
        <Badge>Pricing</Badge>
        <h1 className="text-4xl font-semibold">Pricing built for scale</h1>
        <p className="text-lg text-muted-foreground">
          Start with the essentials and unlock advanced governance as your autonomy program grows.
        </p>
      </section>

      <PricingTable />

      <section className="grid gap-8 rounded-2xl border border-border/60 bg-muted/20 p-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">Need a custom plan?</h2>
          <p className="text-muted-foreground">
            We offer enterprise governance, on-prem deployments, and dedicated support for regulated
            teams.
          </p>
        </div>
        <div className="flex items-center justify-start md:justify-end">
          <CTAButton size="lg" source="pricing_custom" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <FAQ />
      </section>
    </div>
  );
}
