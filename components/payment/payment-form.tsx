"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PaymentCardIcons } from "./payment-card-icons";
import { Shield, Lock, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const packages = [
  {
    id: "1year",
    name: "1-Year Plan",
    price: 89.99,
    period: "year",
    description: "Perfect for long-term entertainment",
  },
  {
    id: "2year",
    name: "2-Year Plan",
    price: 149.99,
    period: "2 years",
    description: "Best value for serious streamers",
    popular: true,
  },
];

const additionalFeatures = [
  { id: "4k", label: "4K Ultra HD", price: 9.99 },
  { id: "offline", label: "Offline Downloads", price: 4.99 },
  { id: "devices", label: "Additional Devices", price: 7.99 },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "Secure Payment",
    description: "256-bit SSL encryption",
  },
  {
    icon: Lock,
    title: "Card Security",
    description: "All major cards accepted",
  },
  {
    icon: RotateCcw,
    title: "Money Back",
    description: "30-day guarantee",
  },
];

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [selectedPackageId, setSelectedPackageId] = useState("2year");
  const [couponCode, setCouponCode] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const selectedPackage = packages.find((pkg) => pkg.id === selectedPackageId);

  const calculateTotal = () => {
    let total = selectedPackage?.price || 0;
    selectedFeatures.forEach((feature) => {
      const additionalFeature = additionalFeatures.find((f) => f.id === feature);
      if (additionalFeature) {
        total += additionalFeature.price;
      }
    });
    return total.toFixed(2);
  };

  const createCheckout = async () => {
    try {
      const response = await fetch("/api/sumup/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(calculateTotal()),
          currency: "EUR",
          checkout_reference: `ORDER-${Date.now()}`,
          description: `StreamVault ${selectedPackage?.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout");
      }

      const checkout = await response.json();
      return checkout.id;
    } catch (error) {
      console.error("Error creating checkout:", error);
      throw error;
    }
  };

  const completeCheckout = async (checkoutId: string, cardData: any) => {
    try {
      const response = await fetch(`/api/sumup/complete-checkout/${checkoutId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_type: "card",
          card: cardData,
        }),
      });

      if (!response.ok) {
        throw new Error("Payment failed");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error completing checkout:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setShowDialog(true);

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);
      const cardData = {
        name: formData.get("name"),
        number: formData.get("card"),
        expiry_month: formData.get("expiry")?.toString().split("/")[0],
        expiry_year: formData.get("expiry")?.toString().split("/")[1],
        cvv: formData.get("cvv"),
      };

      // Create checkout
      const checkoutId = await createCheckout();

      // Complete checkout with card details
      const result = await completeCheckout(checkoutId, cardData);

      if (result.status === "PAID") {
        toast({
          title: "Payment Successful",
          description: "Your subscription has been activated.",
        });
        onSubmit(e);
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setShowDialog(false);
    }
  };

  return (
    <>
      <div className="space-y-8">
        <Card className="border-0 glassmorphism">
          <CardHeader>
            <CardTitle>Choose Your Package</CardTitle>
            <CardDescription>Select the plan that works best for you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={selectedPackageId}
              onValueChange={setSelectedPackageId}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {packages.map((pkg) => (
                <label
                  key={pkg.id}
                  className={`relative flex flex-col p-6 cursor-pointer rounded-lg border-2 transition-all
                    ${selectedPackageId === pkg.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'}`}
                >
                  <RadioGroupItem
                    value={pkg.id}
                    id={pkg.id}
                    className="sr-only"
                  />
                  {pkg.popular && (
                    <span className="absolute -top-3 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                    <div className="text-2xl font-bold">
                      ${pkg.price}
                      <span className="text-base font-normal text-muted-foreground">/{pkg.period}</span>
                    </div>
                  </div>
                </label>
              ))}
            </RadioGroup>

            <div className="space-y-4">
              <Label>Additional Features</Label>
              {additionalFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center justify-between p-4 rounded-lg border bg-background/50">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={feature.id}
                      checked={selectedFeatures.includes(feature.id)}
                      onCheckedChange={(checked) => {
                        setSelectedFeatures(
                          checked
                            ? [...selectedFeatures, feature.id]
                            : selectedFeatures.filter((id) => id !== feature.id)
                        );
                      }}
                    />
                    <label htmlFor={feature.id} className="text-sm cursor-pointer">
                      {feature.label}
                    </label>
                  </div>
                  <span className="text-sm font-semibold">+${feature.price}/mo</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="coupon">Coupon Code</Label>
              <div className="flex space-x-2">
                <Input
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                />
                <Button variant="outline">Apply</Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="border-0 glassmorphism">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Enter your payment information securely</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (234) 567-8900"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="card">Card Number</Label>
                <Input
                  id="card"
                  name="card"
                  placeholder="4242 4242 4242 4242"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    type="password"
                    maxLength={4}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <PaymentCardIcons />
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="text-center space-y-2">
                    <feature.icon className="h-6 w-6 mx-auto text-muted-foreground" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Pay ${calculateTotal()} EUR Now`}
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                className="w-full"
              >
                <Icons.whatsapp className="mr-2 h-4 w-4" />
                Need help? Contact Support
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Processing Payment</DialogTitle>
            <DialogDescription>
              Please wait while we process your payment...
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}