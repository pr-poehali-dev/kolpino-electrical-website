import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BoltIcon, PhoneIcon, WrenchIcon, LightbulbIcon, ZapIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Call to Action */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-glow">
                Вызов электрика в Колпино
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Нет ничего проще – позвоните по телефону 8 950 030-88-30 и расскажите о вашей проблеме с электричеством. В течение часа мы будем у вас!
              </p>
              <a href="tel:89500308830">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink neon-pulse">
                  <PhoneIcon className="mr-2 h-5 w-5" /> Вызвать электрика
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* Services */}
        <section className="py-12 md:py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-glow">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Все виды электромонтажных работ в Колпино
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<WrenchIcon className="h-6 w-6" />}
                title="Замена розеток и выключателей"
                description="Быстрая и профессиональная замена розеток и выключателей любого типа, включая сенсорные и умные модели."
              />
              <ServiceCard 
                icon={<ZapIcon className="h-6 w-6" />}
                title="Ремонт электропроводки"
                description="Устранение неисправностей в электропроводке, замена проводов, устранение коротких замыканий и других проблем."
              />
              <ServiceCard 
                icon={<BoltIcon className="h-6 w-6" />}
                title="Электрощиты"
                description="Замена автоматов в электрощитке, модернизация щитов, установка УЗО и дифференциальных автоматов."
              />
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                  Все услуги
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Smart Home */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-glow">
                  Умный дом
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  В 2025 году доступны все возможности для установки умного дома: сенсорные выключатели, Wi-Fi розетки и светильники, которыми вы сможете управлять со своего телефона.
                </p>
                <p className="text-gray-300 mb-8">
                  Забудьте о неудобных механических выключателях. Новые технологии позволяют управлять всей электрикой дома одним касанием экрана!
                </p>
                <Link to="/smart-home">
                  <Button className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue neon-pulse">
                    <LightbulbIcon className="mr-2 h-5 w-5" /> Узнать больше
                  </Button>
                </Link>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md h-64 md:h-80 bg-black/30 rounded-2xl overflow-hidden border border-white/10">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square bg-black/50 rounded-xl border border-white/20 flex items-center justify-center p-4">
                          <div className={`w-full h-full rounded-lg ${i % 2 === 0 ? 'bg-gradient-to-br from-electric-blue/50 to-transparent' : 'bg-black/50'} flex items-center justify-center`}>
                            {i === 1 && <LightbulbIcon className="h-8 w-8 text-white" />}
                            {i === 2 && <ZapIcon className="h-8 w-8 text-lightning-yellow" />}
                            {i === 3 && <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                              <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                            </div>}
                            {i === 4 && <WrenchIcon className="h-8 w-8 text-white/70" />}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 w-full max-w-xs">
                      <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-electric-blue to-neon-purple animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
