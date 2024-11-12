"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Shield, CreditCard, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PaymentCardIcons } from "@/components/payment/payment-card-icons";

const packages = [
  {
    name: "1-Year Plan",
    price: "$89.99",
    period: "/year",
    description: "Perfect for long-term entertainment",
    features: [
      "Full HD & 4K streaming",
      "Watch on 4 devices",
      "Unlimited downloads",
      "Ad-free experience",
      "Cancel anytime",
      "24/7 support",
    ],
    popular: false,
  },
  {
    name: "2-Year Plan",
    price: "$149.99",
    period: "/2 years",
    description: "Best value for serious streamers",
    features: [
      "Everything in 1-Year Plan",
      "Priority support",
      "Early access to new features",
      "Exclusive content",
      "Family sharing",
      "Premium audio quality",
    ],
    popular: true,
  },
];

const securityFeatures = [
  {
    icon: CreditCard,
    title: "Accepted Cards",
    description: "All major cards accepted",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "256-bit SSL encryption",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "30-day money back guarantee",
  },
];

export function PackagesSection() {
  return (
    <section className="py-20" id="packages">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold from-primary to-purple-400">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect streaming package for your entertainment needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`glassmorphism border-0 relative ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-1.5 text-sm">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="space-y-4 pb-8">
                  <h3 className="text-3xl font-bold">{pkg.name}</h3>
                  <p className="text-lg text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="mb-8">
                    <span className="text-5xl font-bold">{pkg.price}</span>
                    <span className="text-xl text-muted-foreground ml-2">{pkg.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4">
                        <Check className="h-6 w-6 text-primary shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col space-y-8 pt-8">
                  <Button asChild className="w-full h-14 text-lg" size="lg">
                    <Link href="/payment">Choose Plan</Link>
                  </Button>
                  <div className="w-full space-y-6">
                    <PaymentCardIcons />
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {securityFeatures.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center space-y-2">
                          <feature.icon className="h-6 w-6 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{feature.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}