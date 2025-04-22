import { Link } from "react-router-dom";
import { BoltIcon } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 bg-lightning-yellow rounded-full flex items-center justify-center lightning-effect">
                <BoltIcon className="h-6 w-6 text-black" />
              </div>
              <span className="font-electro text-xl font-bold rainbow-text">
                Электрик Колпино
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Профессиональные электромонтажные работы в Колпино
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4 neon-glow">Наши услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Замена розеток</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Замена выключателей</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Электрощиты</Link></li>
              <li><Link to="/smart-home" className="text-gray-300 hover:text-white transition-colors">Умный дом</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4 neon-glow">Контакты</h3>
            <p className="text-gray-300 mb-2">Телефон: <a href="tel:89500308830" className="hover:text-white transition-colors">8 950 030-88-30</a></p>
            <div className="flex gap-2 mb-4">
              <SocialLinks />
            </div>
            <h4 className="text-white text-sm mb-2">Наши сайты:</h4>
            <div className="space-y-1">
              <a href="http://elektrikkolpino.bos.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-electric-blue hover:text-white transition-colors block">
                elektrikkolpino.bos.ru
              </a>
              <a href="http://elektrik-kolpino.narod.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-electric-blue hover:text-white transition-colors block">
                elektrik-kolpino.narod.ru
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © 2025 Электрик Колпино | Все права защищены
        </div>
      </div>
    </footer>
  );
};
