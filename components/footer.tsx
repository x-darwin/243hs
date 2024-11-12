"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { PaymentCardIcons } from "@/components/payment/payment-card-icons";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">StreamVault</h3>
            <p className="text-base text-muted-foreground">
              Your premium entertainment solution
            </p>
            <div className="pt-4">
              <PaymentCardIcons />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-base text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-base text-muted-foreground hover:text-primary">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#faq" className="text-base text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-base text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <Button
              variant="outline"
              size="lg"
              className="w-full text-base"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-base text-muted-foreground">
          © {new Date().getFullYear()} StreamVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}