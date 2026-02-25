import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import InteractiveBentoGallery from '../components/ui/interactive-bento-gallery';



const Home: React.FC = () => {

  // Configuración de medios usando RUTAS LOCALES
  const portfolioMedia = [
    {
      id: 1,
      type: "image",
      title: "DENDE",
      desc: "Diseño local de alta fidelidad.",
      url: "../portfolio/dendeUni.jpg",
      span: "md:col-span-1 md:row-span-3 col-span-1 row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "Dende Empresarial",
      desc: "Arquitectura escalable en acción.",
      url: "../portfolio/dende.jpg",
      span: "md:col-span-2 md:row-span-2 col-span-1 row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Netbox",
      desc: "Planificación de negocio.",
      url: "../portfolio/Netbox.jpg",
      span: "md:col-span-1 md:row-span-3 col-span-1 row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Plaza Pública",
      desc: "Experiencia móvil nativa.",
      url: "../portfolio/plaza.jpg",
      span: "md:col-span-2 md:row-span-2 col-span-1 row-span-2",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-primary overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-sm uppercase tracking-wider mb-6">
              Innovación Digital
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 font-display">
              Construimos el <span className="text-accent">Futuro</span> de tu Negocio.
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transformamos ideas complejas en productos digitales de alto impacto mediante estrategia, diseño y tecnología.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/conocenos" className="bg-accent hover:bg-yellow-400 text-primary font-black px-8 py-4 rounded-xl text-lg transition-all text-center shadow-lg">
                Contacto
              </Link>
              <Link to="/servicios" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all text-center">
                Explorar Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">
            Empresas que confían en nosotros
          </p>

          <Marquee speed={50} pauseOnHover gradient={false} className="py-8">
            <img src="/clientes/CIEESI.png" alt="CIEES" className=" h-[180px] w-[180px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
            <img src="/clientes/DENDE.png" alt="DENDE" className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
            <img src="/clientes/PLAZAPUBLICA.png" alt="Plaza" className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
            <img src="/clientes/FAF.png" alt="FAF" className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
            <img src="/clientes/Horizonte.png" alt="Horizonte" className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
            <img src="/clientes/MAEUC.png" alt="MAEUC" className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
            <img src="/clientes/NETBOX.png" alt="NETBOX" className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
            <img src="/clientes/TigoConecta.png" alt="Tigo" className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 mx-12" />
          </Marquee>
        </div>
      </section>
      {/* Value Proposition */}
      <section className="py-24 bg-surface pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6 font-display text-primary">Excelencia en cada pixel</h2>
            <p className="text-lg text-gray-600">
              Nuestro enfoque asegura que cada solución no solo funcione perfectamente, sino que también enamore a sus usuarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Estrategia</h3>
              <p className="text-gray-600">Definimos una hoja de ruta clara para maximizar tu inversión digital.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">palette</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Diseño</h3>
              <p className="text-gray-600">Interfaces intuitivas y experiencias de usuario memorables.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Ingeniería</h3>
              <p className="text-gray-600">Código limpio, escalable y robusto preparado para el crecimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-12 bg-surface">
        <InteractiveBentoGallery
          mediaItems={portfolioMedia}
          title="Nuestro Portafolio Local"
          description="Explora una selección de proyectos reales desarrollados por nuestro equipo bajo el estándar Insignia."
        />
      </section>

      {/* CTA Section - AHORA CON BORDE DECORATIVO INFERIOR */}
      <section className="py-24 bg-primary text-center relative border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8 font-display">¿Listo para escalar tu negocio?</h2>
          <Link to="/conocenos" className="bg-accent text-primary font-black px-10 py-5 rounded-xl text-xl inline-block shadow-xl hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95">
            Agendar Consulta Gratis
          </Link>
          <p className="text-blue-200/50 mt-8 text-sm font-medium">Llevemos tus ideas al siguiente nivel tecnológico.</p>
        </div>

        {/* Adorno visual extra para el final del contenido principal */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-accent/30 rounded-full"></div>
      </section>
    </div>
  );
};

export default Home;