"use client";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "StreamVault has completely transformed how I enjoy entertainment. The quality and variety are unmatched!",
    author: "Sarah Johnson",
    role: "Premium User",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    quote: "The best streaming service I've ever used. Customer support is amazing and the content library is vast.",
    author: "Michael Chen",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    quote: "Incredible value for money. The streaming quality is superb and the platform is so easy to use.",
    author: "Emma Davis",
    role: "Family Plan User",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-background/50">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold from-primary to-purple-400">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="glassmorphism border-0 h-[300px] flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground line-clamp-4">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="mt-auto border-t border-border/10 pt-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10 border-2 border-primary/10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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