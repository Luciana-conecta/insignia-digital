import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveBentoGallery from '../components/ui/interactive-bento-gallery';

const Insignia: React.FC = () => {
  // Configuración de medios usando rutas locales
  const certifiedProjects = [
    {
      id: 1,
      type: "image",
      title: "Fintech App Alpha",
      desc: "Certificación de seguridad y rendimiento nivel Gold.",
      url: "/assets/portfolio/certified-1.jpg",
      span: "md:col-span-2 md:row-span-2 col-span-1 row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "E-commerce Premium",
      desc: "Arquitectura escalable validada.",
      url: "/assets/portfolio/certified-2.jpg",
      span: "md:col-span-2 md:row-span-2 col-span-1 row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Logística Inteligente",
      desc: "Optimización de procesos con sello Insignia.",
      url: "/assets/portfolio/certified-3.jpg",
      span: "md:col-span-2 md:row-span-4 col-span-1 row-span-2",
    },
    {
      id: 4,
      type: "video",
      title: "Demo IA",
      desc: "Validación de algoritmos de alta eficiencia.",
      url: "/assets/portfolio/certified-video.mp4",
      span: "md:col-span-4 md:row-span-2 col-span-1 row-span-2",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Concepto de Sello de Oro */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-dot-pattern opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-8">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Garantía de Calidad Elite
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight font-display">
                La Marca de la <br />
                <span className="text-accent underline decoration-white/10 underline-offset-8">Excelencia Técnica.</span>
              </h1>
              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Nuestra insignia no es solo un logo, es un compromiso de ingeniería. Cada proyecto sellado ha superado más de 50 puntos de control en rendimiento, seguridad y diseño.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-accent hover:bg-yellow-400 text-primary font-black px-10 py-5 rounded-2xl transition-all shadow-2xl active:scale-95">
                  Certificar Mi Proyecto
                </button>
                <Link to="/conocenos" className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all backdrop-blur-md">
                  Ver Estándares
                </Link>
              </div>
            </div>

            <div className="flex-1 flex justify-center relative">
              <div className="relative group">
                {/* Glow dinámico */}
                <div className="absolute inset-0 bg-accent/30 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Badge con imagen local */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center p-12 border border-white/20 transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="/assets/brand/insignia-badge.png" 
                    alt="Sello de Calidad Digital" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined font-bold">verified</span>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Status</p>
                      <p className="text-lg font-black text-primary leading-none tracking-tighter italic">AUTHENTIC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validador de Certificados */}
      <section className="py-24 bg-surface relative overflow-hidden border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-primary/5 p-10 md:p-16 border border-gray-100">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-display">Portal de Validación</h2>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
              Ingresa el código único de certificación para confirmar los estándares aplicados al desarrollo.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="ID: INS-XXXX-2026" 
                className="flex-1 px-8 py-5 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-mono text-center md:text-left text-lg"
              />
              <button className="bg-primary hover:bg-secondary text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg active:scale-95">
                Validar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Certificados con la Galería Interactiva */}
      <section className="py-24">
        <InteractiveBentoGallery 
          mediaItems={certifiedProjects}
          title="Casos de Éxito Certificados"
          description="Estos proyectos han sido validados por nuestro equipo técnico, garantizando escalabilidad y un diseño centrado en el usuario."
        />
      </section>

      {/* Pilares de Calidad */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: "analytics", title: "Rendimiento", desc: "Tiempos de carga menores a 2s en cualquier dispositivo." },
              { icon: "security", title: "Seguridad", desc: "Protección de datos bajo estándares internacionales." },
              { icon: "psychology", title: "UX Intuitiva", desc: "Diseño basado en el comportamiento real del usuario." },
              { icon: "terminal", title: "Código Limpio", desc: "Arquitectura modular lista para el crecimiento." },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <span className="material-symbols-outlined text-4xl text-accent mb-4">{p.icon}</span>
                <h4 className="text-xl font-bold mb-2 font-display">{p.title}</h4>
                <p className="text-blue-100/60 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insignia;