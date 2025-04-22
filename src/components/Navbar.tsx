import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BoltIcon, PhoneIcon } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 bg-lightning-yellow rounded-full flex items-center justify-center lightning-effect">
            <BoltIcon className="h-6 w-6 text-black" />
          </div>
          <span className="font-electro text-xl font-bold rainbow-text">
            Электрик Колпино
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/">
            <Button variant="ghost" className="neon-glow text-white">Главная</Button>
          </Link>
          <Link to="/services">
            <Button variant="ghost" className="neon-glow text-white">Услуги</Button>
          </Link>
          <Link to="/smart-home">
            <Button variant="ghost" className="neon-glow text-white">Умный дом</Button>
          </Link>
          <Link to="/contacts">
            <Button variant="ghost" className="neon-glow text-white">Контакты</Button>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-electric-blue" />
              <a href="tel:89500308830" className="text-white font-medium neon-glow">
                8 950 030-88-30
              </a>
            </div>
            <div className="flex gap-2">
              <SocialLinks />
            </div>
          </div>
          
          <Link to="/contacts" className="sm:hidden">
            <Button size="icon" className="rounded-full bg-gradient-to-r from-electric-blue to-neon-purple neon-pulse">
              <PhoneIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
