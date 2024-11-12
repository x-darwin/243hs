"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Globe, Shield, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Multi-Device Streaming",
    description: "Watch on your TV, laptop, tablet, or phone with seamless synchronization.",
  },
  {
    icon: Smartphone,
    title: "Mobile Downloads",
    description: "Download your favorite content to watch offline, anywhere.",
  },
  {
    icon: Globe,
    title: "Global Content",
    description: "Access international content with our worldwide streaming network.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Advanced encryption and security measures to protect your data.",
  },
  {
    icon: Zap,
    title: "4K Streaming",
    description: "Crystal clear 4K HDR quality for the ultimate viewing experience.",
  },
  {
    icon: Headphones,
    title: "Premium Audio",
    description: "Dolby Atmos support for immersive sound quality.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16" id="features">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold from-primary">Premium Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover all the premium features that make StreamVault the ultimate entertainment solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="glassmorphism border-0">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}