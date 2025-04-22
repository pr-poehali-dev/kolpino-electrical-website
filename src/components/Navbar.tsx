import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="lightning-logo">
            <svg
              className="lightning-logo-svg"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
                fill="#FFC700"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
              <a href="tel:+79500308830" className="text-white font-medium neon-glow">
                +7 950 030 88 30
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
