"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <Card className="glassmorphism border-0">
            <CardHeader className="text-center">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold">Payment Successful!</h1>
              <p className="text-muted-foreground">
                Thank you for your purchase. You will receive an email confirmation shortly.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center space-x-4">
                <Button asChild variant="outline">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button
                  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}