import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneIcon, LightbulbIcon, WifiIcon, HomeIcon, SmartphoneIcon } from "lucide-react";

const SmartHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">
                Умный дом в Колпино
              </h1>
              <p className="text-xl text-gray-300">
                Современные технологии автоматизации для вашего дома
              </p>
            </div>
          </div>
        </section>
        
        {/* Smart Home Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 neon-glow">Сенсорные выключатели</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Забудьте о механических выключателях, которые постоянно ломаются! 
                  Современные сенсорные выключатели не только выглядят стильно, но и 
                  гораздо удобнее в использовании.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Элегантный современный дизайн</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Простое управление одним касанием</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-electric-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Долгий срок службы без механического износа</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 bg-black/70 rounded-xl border border-electric-blue/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center cursor-pointer hover:from-electric-blue/40 hover:to-neon-purple/40 transition-all">
                        <LightbulbIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-electric-blue/30 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="relative w-40 h-64 flex flex-col items-center justify-center gap-4">
                      <div className="w-20 h-20 bg-black/70 rounded-xl border border-neon-pink/30 flex items-center justify-center relative">
                        <WifiIcon className="h-8 w-8 text-neon-pink/70 animate-pulse" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink rounded-full"></div>
                      </div>
                      <div className="w-20 h-20 bg-black/70 rounded-xl border border-neon-purple/30 flex items-center justify-center">
                        <div className="w-12 h-6 bg-neon-purple/20 rounded-full flex items-center px-1">
                          <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 transition-transform"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 neon-glow">Wi-Fi розетки и выключатели</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Управляйте электроприборами и освещением прямо со своего смартфона! 
                  Wi-Fi розетки и выключатели позволяют контролировать электроприборы 
                  удаленно из любой точки мира.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-neon-pink flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Дистанционное управление через приложение</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-neon-pink flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Установка таймеров и расписаний работы</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-neon-pink flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Мониторинг энергопотребления приборов</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 neon-glow">Полная система умного дома</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Объедините все устройства в единую экосистему умного дома.
                  Управляйте освещением, климатом, безопасностью и бытовой техникой 
                  с одного устройства.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-lightning-yellow flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Единый центр управления всей электрикой</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-lightning-yellow flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Голосовое управление через популярные ассистенты</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-lightning-yellow flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">Автоматизация процессов по сценариям</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="w-48 h-48 relative">
                      <div className="absolute top-0 left-0 w-20 h-20 bg-black/70 rounded-xl border border-lightning-yellow/30 flex items-center justify-center">
                        <HomeIcon className="h-8 w-8 text-lightning-yellow/70" />
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-black/70 rounded-xl border border-electric-blue/30 flex items-center justify-center">
                        <LightbulbIcon className="h-8 w-8 text-electric-blue/70" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/70 rounded-xl border border-neon-purple/30 flex items-center justify-center">
                        <WifiIcon className="h-8 w-8 text-neon-purple/70" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-black/70 rounded-xl border border-neon-pink/30 flex items-center justify-center">
                        <SmartphoneIcon className="h-8 w-8 text-neon-pink/70" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-electric-blue to-neon-purple animate-pulse"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 md:py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-glow">
                Готовы начать?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Позвоните нам сегодня для консультации и установки систем умного дома в вашей квартире в Колпино
              </p>
              <a href="tel:89500308830">
                <Button size="lg" className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue neon-pulse">
                  <PhoneIcon className="mr-2 h-5 w-5" /> 8 950 030-88-30
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartHome;
