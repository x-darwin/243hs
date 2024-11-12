"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Play className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">StreamVault</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#faqs"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/#reviews"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Reviews
            </Link>
            <Button asChild>
              <Link href="/#packages">Buy Now</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/#features"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    Features
                  </Link>
                  <Link
                    href="/#faqs"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/#reviews"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    Reviews
                  </Link>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/#packages" onClick={() => setIsOpen(false)}>
                      Buy Now
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}