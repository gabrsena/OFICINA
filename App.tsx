import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  ShieldAlert, 
  Cpu, 
  Gauge, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  MapPin, 
  Clock, 
  MessageCircle, 
  MonitorCheck, 
  Menu, 
  X,
  Car,
  Award,
  Search,
  CheckCircle2
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511973759325?text=Olá,%20preciso%20de%20um%20orçamento%20para%20meu%20carro%20em%20Sorocaba.";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-zinc-800/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wrench className="text-industrial glow-industrial" size={24} />
          <span className="text-lg font-[800] tracking-tight-industrial text-white uppercase">Mecânica Sorocaba</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-zinc-400 hover:text-white transition-colors text-xs font-[700] uppercase tracking-widest">Início</a>
          <a href="#servicos" className="text-zinc-400 hover:text-white transition-colors text-xs font-[700] uppercase tracking-widest">Serviços</a>
          <a href="#local" className="text-zinc-400 hover:text-white transition-colors text-xs font-[700] uppercase tracking-widest">Localização</a>
          <a 
            href={WHATSAPP_URL} 
            className="btn-industrial px-6 py-2 rounded-sm text-xs font-[800] uppercase tracking-wider shadow-lg shadow-industrial/20"
          >
            Orçamento Rápido
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-zinc-800 p-8 flex flex-col space-y-6">
          <a href="#inicio" className="text-white text-lg font-[700] uppercase tracking-tight" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#servicos" className="text-white text-lg font-[700] uppercase tracking-tight" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#local" className="text-white text-lg font-[700] uppercase tracking-tight" onClick={() => setIsOpen(false)}>Localização</a>
          <a href={WHATSAPP_URL} className="btn-industrial py-4 rounded-sm text-center font-[800] uppercase tracking-widest text-sm">
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

const TrustBar: React.FC = () => (
  <div className="py-10 bg-zinc-900 border-y border-zinc-800/50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 opacity-40">
        <span className="text-sm font-[700] text-zinc-400 uppercase tracking-[0.3em]">Especialistas:</span>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          <span className="text-xl font-[800] tracking-tighter text-white">VOLKSWAGEN</span>
          <span className="text-xl font-[800] tracking-tighter text-white">CHEVROLET</span>
          <span className="text-xl font-[800] tracking-tighter text-white">FIAT</span>
          <span className="text-xl font-[800] tracking-tighter text-white">TOYOTA</span>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ElementType; title: string; subtitle: string }> = ({ icon: Icon, title, subtitle }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm group hover:border-industrial transition-all duration-300">
    <div className="w-12 h-12 bg-zinc-800 rounded-sm flex items-center justify-center mb-6 text-industrial group-hover:bg-industrial group-hover:text-white transition-colors glow-industrial">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-[800] text-white mb-2 tracking-tight uppercase leading-tight">{title}</h3>
    <p className="text-zinc-500 font-medium text-xs uppercase tracking-wider">{subtitle}</p>
  </div>
);

const App: React.FC = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const servicesTop = servicesRef.current.offsetTop;
        setShowFloatingButton(window.scrollY >= servicesTop - 300);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-industrial selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-56 md:pb-40 bg-zinc-950 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f97316_0,transparent_50%)] opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-industrial/10 border border-industrial/20 px-4 py-1.5 rounded-sm mb-10">
            <Zap className="text-industrial" size={14} />
            <span className="text-[10px] font-[800] text-industrial tracking-[0.2em] uppercase">Mecânica de Alta Performance</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-[800] text-white tracking-tight-industrial mb-8 leading-[1.1] uppercase max-w-5xl mx-auto">
            Diagnóstico Preciso e <span className="text-industrial">Solução Rápida</span> para seu Veículo em Sorocaba.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Tecnologia de ponta e scanner de última geração para que você não fique na mão. O cuidado que seu carro merece, na velocidade que você precisa.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={WHATSAPP_URL}
              className="w-full md:w-auto btn-industrial px-12 py-5 rounded-sm text-base font-[800] uppercase tracking-widest flex items-center justify-center shadow-xl shadow-industrial/30"
            >
              Falar com o Mecânico Agora
              <ArrowRight className="ml-3" size={20} />
            </a>
            <div className="flex items-center space-x-3 text-zinc-500 font-[700] text-xs uppercase tracking-widest">
              <CheckCircle2 className="text-industrial" size={16} />
              <span>Orçamento em minutos</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Grid */}
      <section id="servicos" ref={servicesRef} className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-[800] text-white tracking-tight-industrial uppercase mb-6 flex items-center gap-4">
              <div className="w-12 h-1 bg-industrial rounded-sm" />
              Serviços Urgentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <ServiceCard 
              icon={ShieldAlert}
              title="Injeção Eletrônica"
              subtitle="Luz no Painel / Falhas"
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="Freios e Segurança"
              subtitle="Pastilhas / Discos / ABS"
            />
            <ServiceCard 
              icon={Gauge}
              title="Suspensão"
              subtitle="Barulhos / Estabilidade"
            />
            <ServiceCard 
              icon={Clock}
              title="Revisão Preventiva"
              subtitle="Óleo / Filtros / Correias"
            />
          </div>
        </div>
      </section>

      {/* Technology Difference Section */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-industrial/5 rounded-sm blur-2xl group-hover:bg-industrial/10 transition-all" />
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop" 
                alt="Scanner Automotivo" 
                className="relative rounded-sm w-full grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-industrial p-4 rounded-sm glow-industrial">
                <Cpu className="text-white" size={32} />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-[800] text-white tracking-tight-industrial uppercase mb-8 leading-tight">
                Scanner de Última Geração: Sem <span className="text-industrial">"Achismos"</span>.
              </h2>
              <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-10">
                Utilizamos equipamentos originais para identificar exatamente a falha no seu veículo. Economize tempo e dinheiro indo direto ao ponto, com precisão de concessionária e agilidade de oficina local.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Diagnóstico Completo via Scanner",
                  "Histórico Digital de Manutenções",
                  "Relatório Técnico Transparente",
                  "Peças com Garantia de Fábrica"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-white font-[700] uppercase text-xs tracking-widest">
                    <CheckCircle2 className="text-industrial" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href={WHATSAPP_URL} className="inline-flex items-center text-industrial font-[800] uppercase tracking-[0.2em] text-sm group">
                Ver todos os diferenciais
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Local Section */}
      <section id="local" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-[800] text-white tracking-tight-industrial uppercase mb-6">
                Sua Oficina de Confiança na <span className="text-industrial">Zona Norte</span>, Itavuvu e Região.
              </h2>
              <p className="text-zinc-400 font-medium text-lg max-w-xl">
                Estamos localizados estrategicamente para atender toda Sorocaba com facilidade de acesso e pátio organizado.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <div className="flex items-center space-x-3 text-zinc-400">
                <MapPin className="text-industrial" size={20} />
                <span className="font-[700] uppercase tracking-widest text-xs">Av. Itavuvu, 2500 - Sorocaba/SP</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Clock className="text-industrial" size={20} />
                <span className="font-[700] uppercase tracking-widest text-xs">Seg a Sex: 08h às 18h | Sáb: 08h às 12h</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-sm aspect-video md:aspect-[21/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             <div className="w-full h-full bg-zinc-800 flex items-center justify-center flex-col text-center p-10 group">
                <MapPin className="text-industrial mb-4 group-hover:scale-110 transition-transform glow-industrial" size={48} />
                <h3 className="text-xl font-[800] text-white uppercase mb-4 tracking-widest">Acessar Google Maps</h3>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  className="bg-zinc-700 hover:bg-industrial hover:text-white text-zinc-300 px-8 py-3 rounded-sm font-[800] uppercase tracking-widest text-xs transition-all"
                >
                  Abrir Rota Agora
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center space-x-3">
              <Wrench className="text-industrial" size={24} />
              <span className="text-white font-[800] text-lg tracking-tight-industrial uppercase">Mecânica Sorocaba</span>
            </div>
            
            <p className="text-zinc-500 font-[700] text-[10px] uppercase tracking-[0.3em] text-center md:text-right leading-loose">
              © 2024 MECÂNICA SOROCABA PERFORMANCE. <br />
              ZONA NORTE / ITAVUVU / CAMPOLIM / ÉDEN.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA - High Prominence & Backdrop Blur */}
      <a 
        href={WHATSAPP_URL}
        className={`fixed bottom-8 right-8 w-20 h-20 bg-industrial/70 backdrop-blur-md text-white rounded-sm flex items-center justify-center shadow-2xl z-50 pulse-industrial transition-all duration-500 transform ${
          showFloatingButton ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
        } hover:bg-ea580c hover:bg-opacity-90 glow-intense`}
        aria-label="Agendar via WhatsApp"
      >
        <MessageCircle size={40} />
      </a>
    </div>
  );
};

export default App;