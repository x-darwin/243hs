"use client";

import Image from "next/image";

const brands = [
  { name: "Netflix", logo: "/brands/netflix.svg" },
  { name: "Disney+", logo: "/brands/disney.svg" },
  { name: "HBO", logo: "/brands/hbo.svg" },
  { name: "Prime", logo: "/brands/prime.svg" },
  { name: "Hulu", logo: "/brands/hulu.svg" },
  { name: "Laliga", logo: "/brands/LaLiga.svg" },
  { name: "Premiere League", logo: "/brands/Premier_League.svg" },
  { name: "UEFA", logo: "/brands/UEFA_Champions_League.svg" },
  { name: "BEIN Sport", logo: "/brands/Bein_sport.svg" },
  { name: "ESPN", logo: "/brands/ESPN.svg" },  
];

export function TrustedBySection() {
  return (
    <section className="py-12 md:py-20 overflow-hidden bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Trusted by Leading Entertainment Brands
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access content from the world's top entertainment providers
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="overflow-hidden mx-auto">
              <div className="flex space-x-16 animate-infinite-scroll hover:pause">
                {[...brands, ...brands].map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="relative w-32 md:w-40 h-16 md:h-20 flex-shrink-0 transition-all duration-300 
                             filter grayscale hover:grayscale-0 hover:scale-110 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-purple-500/0 
                                  group-hover:from-primary/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300" />
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}