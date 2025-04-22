import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 bg-stars"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold cosmic-text">
              <span className="block mb-2">Электрик</span>
              <span className="block neon-glow text-electric-blue">Колпино</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
              Вызов электрика в городе Колпино по телефону <a href="tel:+79500308830" className="text-electric-blue hover:text-white transition-colors font-medium">+7 950 030 88 30</a>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="tel:+79500308830">
                <Button size="lg" className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue neon-pulse">
                  <PhoneIcon className="mr-2 h-5 w-5" /> Позвонить сейчас
                </Button>
              </a>
              <a href="https://wa.me/79500308830">
                <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/20">
                  WhatsApp
                </Button>
              </a>
              <a href="https://t.me/+79500308830">
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/20">
                  Telegram
                </Button>
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="cosmic-circle"></div>
              <div className="h-64 w-64 rounded-full bg-black/40 backdrop-blur-lg flex items-center justify-center p-8 border border-white/10 shadow-neon overflow-hidden">
                <div className="lightning-animation">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M40,15 L55,15 L45,50 L60,50 L25,85 L35,50 L20,50 Z"
                      fill="#00BFFF"
                      stroke="white"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-blue">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};
