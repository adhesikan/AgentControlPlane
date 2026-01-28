import { Check } from "lucide-react";

import { governanceModules } from "@/lib/constants";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/CTAButton";

const tiers = [
  {
    name: "Starter",
    price: "$199",
    unit: "/ month + $19 / agent",
    description: "For early teams piloting autonomous workflows.",
    features: [
      "Core policy engine",
      "Agent permissions",
      "Approval workflows",
      "Basic audit log",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$799",
    unit: "/ month + $39 / agent",
    description: "For production multi-agent environments.",
    features: [
      "Everything in Starter",
      "Cost controls & rate limits",
      "Incident center + replay",
      "Advanced approvals",
      "Priority support"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Contact us",
    unit: "Custom contracts",
    description: "For regulated or high-scale autonomous fleets.",
    features: [
      "Everything in Pro",
      "SSO & SCIM",
      "Custom retention controls",
      "Dedicated success team",
      "On-prem options"
    ]
  }
];

export function PricingTable() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={tier.highlighted ? "border-primary/60 shadow-glow" : "border-border/60"}
        >
          <CardHeader className="space-y-3">
            {tier.highlighted ? <Badge>Most Popular</Badge> : null}
            <CardTitle className="text-2xl">{tier.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{tier.description}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-3xl font-semibold">{tier.price}</p>
              <p className="text-xs text-muted-foreground">{tier.unit}</p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <CTAButton
              label="Request Access"
              source={`pricing_${tier.name.toLowerCase()}`}
              className="w-full"
            />
          </CardFooter>
        </Card>
      ))}
      <div className="lg:col-span-3">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-xl">Governance modules add-ons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {governanceModules.map((module) => (
                <div
                  key={module}
                  className="flex items-center justify-between rounded-md border border-border/60 bg-muted/30 px-4 py-2 text-sm"
                >
                  <span>{module}</span>
                  <span className="text-xs text-muted-foreground">Add-on</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
