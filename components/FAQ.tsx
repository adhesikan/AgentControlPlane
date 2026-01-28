import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the control plane integrate with existing agents?",
    answer:
      "We sit between agent intent and execution. You can integrate via API or SDK to route every action through policy checks and approvals."
  },
  {
    question: "Can I start with a small number of agents?",
    answer:
      "Yes. Starter plans support pilot programs, and you can scale to hundreds of agents without re-architecting."
  },
  {
    question: "What approvals are supported?",
    answer:
      "Approve by role, team, or workflow. You can require first-time approvals, high-dollar approvals, or manual intervention triggers."
  },
  {
    question: "Does it support cost controls?",
    answer:
      "Budgets, per-agent limits, time windows, and rate caps are available out of the box."
  },
  {
    question: "How is data stored?",
    answer:
      "We store policy decisions, audits, and approvals. Execution data stays in your systems; you control retention and exports."
  },
  {
    question: "What compliance frameworks do you support?",
    answer:
      "Governance modules support retention controls, compliance exports, and audit-ready evidence packages."
  },
  {
    question: "Is there an on-prem or private cloud option?",
    answer:
      "Enterprise plans support private deployments and dedicated infrastructure."
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most teams integrate a first workflow in under two weeks with guided onboarding."
  }
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
