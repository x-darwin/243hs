"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What devices can I use to stream?",
    answer: "StreamVault is compatible with all major devices including smart TVs, smartphones, tablets, gaming consoles, and web browsers.",
  },
  {
    question: "Can I share my account with family?",
    answer: "Yes! Our family plan allows up to 4 simultaneous streams across different devices.",
  },
  {
    question: "Is there a commitment or contract?",
    answer: "No contracts or hidden fees. You can cancel your subscription at any time.",
  },
  {
    question: "What content is available?",
    answer: "We offer a vast library of movies, TV shows, documentaries, and exclusive content from major studios and independent creators.",
  },
  {
    question: "Do you offer offline viewing?",
    answer: "Yes, you can download content to watch offline on our mobile apps.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee if you're not completely satisfied.",
  },
];

export function FAQsSection() {
  return (
    <section className="py-16" id="faqs">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold from-primary to-purple-400">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about StreamVault.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphism border-0">
                  <AccordionTrigger className="text-left px-6">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}