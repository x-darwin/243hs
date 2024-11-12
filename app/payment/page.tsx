"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { PaymentForm } from "@/components/payment/payment-form";
import { PaymentCardIcons } from "@/components/payment/payment-card-icons";

export default function PaymentPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/success");
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="glassmorphism border-0">
            <CardHeader>
              <h1 className="text-3xl font-bold text-center">Complete Your Order</h1>
              <p className="text-muted-foreground text-center">
                Enter your payment details to continue
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <PaymentCardIcons />
              <PaymentForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}