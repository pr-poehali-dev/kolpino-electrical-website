import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneIcon, MessageSquareIcon, ExternalLinkIcon } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">
                Контакты
              </h1>
              <p className="text-xl text-gray-300">
                Свяжитесь с электриком в Колпино для консультации или заказа услуг
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-black/30 border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-colors">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white neon-glow">Телефон</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center text-white neon-pulse">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Звоните в любое время</p>
                      <a href="tel:+79500308830" className="text-xl font-medium text-white hover:text-electric-blue transition-colors">
                        +7 950 030 88 30
                      </a>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="tel:+79500308830">
                      <Button className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-electric-blue neon-pulse">
                        Позвонить сейчас
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-colors">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white neon-glow">Мессенджеры</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white neon-pulse">
                      <MessageSquareIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">WhatsApp</p>
                      <a href="https://wa.me/79500308830" className="text-xl font-medium text-white hover:text-green-400 transition-colors">
                        +7 950 030 88 30
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white neon-pulse">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Telegram</p>
                      <a href="https://t.me/+79500308830" className="text-xl font-medium text-white hover:text-blue-400 transition-colors">
                        +7 950 030 88 30
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <a href="https://wa.me/79500308830">
                      <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-500/20">
                        WhatsApp
                      </Button>
                    </a>
                    <a href="https://t.me/+79500308830">
                      <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/20">
                        Telegram
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Other Websites */}
            <div className="max-w-4xl mx-auto mt-12">
              <Card className="bg-black/30 border border-white/10 backdrop-blur-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white neon-glow">Наши сайты</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="http://elektrikkolpino.bos.ru" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-white/10 hover:border-electric-blue/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-electric-blue/20 flex items-center justify-center">
                          <BoltIcon className="h-5 w-5 text-electric-blue" />
                        </div>
                        <span className="text-white">elektrikkolpino.bos.ru</span>
                      </div>
                      <ExternalLinkIcon className="h-5 w-5 text-gray-400" />
                    </a>
                    
                    <a 
                      href="http://elektrik-kolpino.narod.ru" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-white/10 hover:border-electric-blue/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-electric-blue/20 flex items-center justify-center">
                          <BoltIcon className="h-5 w-5 text-electric-blue" />
                        </div>
                        <span className="text-white">elektrik-kolpino.narod.ru</span>
                      </div>
                      <ExternalLinkIcon className="h-5 w-5 text-gray-400" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-12 md:py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-glow">
                Вызвать электрика в Колпино
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Нет ничего проще — позвоните по телефону +7 950 030 88 30 и забудьте о проблемах с электричеством у вас дома
              </p>
              <a href="tel:+79500308830">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink neon-pulse">
                  <PhoneIcon className="mr-2 h-5 w-5" /> Позвонить сейчас
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

const BoltIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export default Contacts;
