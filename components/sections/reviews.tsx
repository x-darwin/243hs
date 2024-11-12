"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    review: "Amazing streaming quality and content selection. Worth every penny!",
    verified: true,
  },
  {
    name: "Jessica Lee",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    review: "The family plan is perfect for us. Kids love the children's content.",
    verified: true,
  },
  {
    name: "David Martinez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 4,
    review: "Great platform with excellent customer support.",
    verified: true,
  },
  {
    name: "Emily Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    review: "Incredible streaming experience. No buffering issues!",
    verified: true,
  },
  {
    name: "James Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    review: "Best streaming service I've used. Highly recommended!",
    verified: true,
  },
  {
    name: "Sarah Brown",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 4,
    review: "Love the exclusive content and new releases.",
    verified: true,
  },
  {
    name: "Michael Scott",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    review: "Outstanding service and great value for money.",
    verified: true,
  },
  {
    name: "Lisa Anderson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    review: "The mobile app is fantastic. Perfect for my commute!",
    verified: true,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16" id="reviews">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold from-primary to-purple-400">User Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our community has to say about StreamVault.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="glassmorphism border-0 h-[250px] flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-10 w-10 border-2 border-primary/10">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-2">
                        {review.name}
                        {review.verified && (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">{review.review}</p>
                  {review.verified && (
                    <Badge variant="secondary" className="mt-4 w-fit">
                      Verified Purchase
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}