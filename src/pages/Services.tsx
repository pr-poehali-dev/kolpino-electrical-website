import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { WrenchIcon, ZapIcon, BoltIcon, LightbulbIcon, HomeIcon, ShieldIcon } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">
                Услуги электрика в Колпино
              </h1>
              <p className="text-xl text-gray-300">
                Профессиональные электромонтажные работы в Колпинском районе Санкт-Петербурга
              </p>
            </div>
          </div>
        </section>
        
        {/* All Services */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<WrenchIcon className="h-6 w-6" />}
                title="Замена розеток"
                description="Быстрая и аккуратная замена старых розеток на новые, включая установку сенсорных и умных моделей."
              />
              <ServiceCard 
                icon={<WrenchIcon className="h-6 w-6" />}
                title="Замена выключателей"
                description="Установка современных выключателей, в том числе сенсорных, диммеров и умных моделей с дистанционным управлением."
              />
              <ServiceCard 
                icon={<ZapIcon className="h-6 w-6" />}
                title="Поиск неисправностей"
                description="Диагностика и устранение проблем с электропроводкой, коротких замыканий и других неисправностей."
              />
              <ServiceCard 
                icon={<BoltIcon className="h-6 w-6" />}
                title="Ремонт электрощитов"
                description="Замена автоматов, УЗО, модернизация электрощитов, устранение неисправностей."
              />
              <ServiceCard 
                icon={<LightbulbIcon className="h-6 w-6" />}
                title="Установка светильников"
                description="Монтаж и подключение люстр, бра, точечных светильников и других осветительных приборов."
              />
              <ServiceCard 
                icon={<HomeIcon className="h-6 w-6" />}
                title="Умный дом"
                description="Установка и настройка систем умного дома, Wi-Fi управление освещением и электроприборами."
              />
              <ServiceCard 
                icon={<ShieldIcon className="h-6 w-6" />}
                title="Электробезопасность"
                description="Проверка и улучшение электробезопасности в квартире или доме, устранение рисков поражения током."
              />
              <ServiceCard 
                icon={<ZapIcon className="h-6 w-6" />}
                title="Комплексные работы"
                description="Полное обновление электропроводки, перенос розеток и выключателей, прокладка новых линий."
              />
              <ServiceCard 
                icon={<BoltIcon className="h-6 w-6" />}
                title="Срочный вызов"
                description="Срочный выезд при аварийных ситуациях, оперативное устранение критических неисправностей."
              />
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center neon-glow">
              Почему выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center hover:border-electric-blue/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center text-white neon-pulse">
                  <BoltIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Оперативность</h3>
                <p className="text-gray-300">Выезд в течение часа после вашего звонка в любой район Колпино</p>
              </div>
              
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center hover:border-electric-blue/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center text-white neon-pulse">
                  <WrenchIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Профессионализм</h3>
                <p className="text-gray-300">Большой опыт работы с электромонтажными системами любой сложности</p>
              </div>
              
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center hover:border-electric-blue/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center text-white neon-pulse">
                  <ShieldIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Гарантия</h3>
                <p className="text-gray-300">Гарантия на все выполненные работы и установленное оборудование</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
