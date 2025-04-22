import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-electro mb-6 leading-tight neon-glow">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-neon-purple to-neon-pink animate-shimmer">
                Электрик в Колпино
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Решение любых проблем с электричеством в вашем доме
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:89500308830">
                <Button size="lg" className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue neon-pulse">
                  <PhoneIcon className="mr-2 h-5 w-5" /> 8 950 030-88-30
                </Button>
              </a>
              <a href="https://wa.me/89500308830">
                <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:text-white">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/30 to-neon-purple/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-neon-pink/20 to-lightning-yellow/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="160" height="160" viewBox="0 0 100 100" className="text-lightning-yellow">
                  <path 
                    d="M50,5 L60,40 L90,40 L65,60 L75,95 L50,75 L25,95 L35,60 L10,40 L40,40 Z" 
                    fill="currentColor"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
