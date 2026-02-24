import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const clusters = [
    {
      name: "Crecimiento & Ventas",
      items: [
        {
          icon: "hub",
          title: "Automatización Comercial y CRM (Insignia Conecta)",
          desc: "Centralizamos tus canales, ordenamos tus leads y automatizamos el seguimiento con IA para convertir más.",
          features: [
            "CRM Omnicanal (WhatsApp, redes y email)",
            "Automatizaciones y flujos inteligentes",
            "Chatbots y formularios de captura",
            "IA aplicada al seguimiento comercial"
          ],
          highlight: true
        },
        {
          icon: "trending_up",
          title: "Marketing Digital & Performance",
          desc: "Estrategias y campañas orientadas a resultados medibles: tráfico, leads y conversiones.",
          features: [
            "Campañas Meta y Google Ads",
            "Generación de leads y funnels",
            "Optimización de conversión (CRO)"
          ]
        },
        {
          icon: "rocket_launch",
          title: "Transformación Digital",
          desc: "Asesoramos a empresas para modernizar sus procesos y herramientas, asegurando competitividad.",
          features: [
            "Automatización de Procesos",
            "Migración a la Nube",
            "Estrategia de Datos"
          ]
        }
      ]
    },
    {
      name: "Tecnología & Producto",
      items: [
        {
          icon: "devices",
          title: "Desarrollo de Software",
          desc: "Aplicaciones web y móviles a medida, escalables y seguras con tecnologías líderes.",
          features: [
            "React & Node.js",
            "APIs RESTful & GraphQL",
            "Arquitectura Cloud"
          ]
        },
        {
          icon: "brush",
          title: "Diseño de Producto (UI/UX)",
          desc: "Interfaces que cautivan y retienen usuarios mediante investigación y usabilidad.",
          features: [
            "Investigación de Usuarios",
            "Prototipado Interactivo",
            "Sistemas de Diseño"
          ]
        },
        {
          icon: "store",
          title: "E-Commerce",
          desc: "Venta online optimizada para conversión e integrada con pasarelas de pago.",
          features: [
            "Shopify & WooCommerce",
            "Desarrollo Headless",
            "Integraciones ERP/CRM"
          ]
        }
      ]
    },
    {
      name: "Contenido & Marca",
      items: [
        {
          icon: "videocam",
          title: "Producción Audiovisual & Streaming",
          desc: "Contenido profesional para marcas, lanzamientos y eventos híbridos.",
          features: [
            "Video publicitario",
            "Streaming multicámara",
            "Podcast: guion y edición"
          ]
        },
        {
          icon: "photo_camera",
          title: "Fotografía Profesional",
          desc: "Fotografía estratégica que eleva la percepción de tu marca en todos tus canales.",
          features: [
            "Producto y ecommerce",
            "Eventos y cobertura",
            "Contenido para redes"
          ]
        },
        {
          icon: "palette",
          title: "Branding & Identidad Visual",
          desc: "Marcas coherentes y memorables alineadas a objetivos de negocio.",
          features: [
            "Identidad visual y manual",
            "Naming y posicionamiento",
            "Diseño gráfico estratégico"
          ]
        },
        {
          icon: "description",
          title: "Contenido & Comunicación",
          desc: "Mensajes que conectan con tu audiencia y sostienen tu estrategia digital.",
          features: [
            "Copywriting y storytelling",
            "Guiones para video",
            "Contenido para blog"
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header Minimalista */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nuestro expertise</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">Soluciones que impulsan <br/><span className="text-accent">el crecimiento real.</span></h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Combinamos estrategia, diseño y tecnología para resolver los desafíos más complejos de la era digital.
          </p>
        </div>
      </section>

      {/* Grid de Categorías */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {clusters.map((cluster, clusterIdx) => (
          <div key={clusterIdx} className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gray-200 flex-grow"></div>
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.4em]">{cluster.name}</h2>
              <div className="h-px bg-gray-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cluster.items.map((service, idx) => (
                <div 
                  key={idx} 
                  className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full ${
                    service.highlight ? 'lg:col-span-2 md:col-span-2 border-primary/20 bg-gradient-to-br from-white to-primary/[0.02]' : ''
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      Servicio Destacado
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    service.highlight ? 'bg-primary text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'
                  }`}>
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>

                  <h3 className={`font-bold mb-4 font-display leading-tight ${service.highlight ? 'text-3xl text-secondary' : 'text-xl text-secondary'}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <ul className="space-y-3 pt-6 border-t border-gray-50">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                        <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {service.highlight && (
                    <div className="mt-8">
                      <Link to="/conecta" className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        Ver detalles del producto <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Banner de Cierre */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8 font-display">¿No estás seguro de qué necesitas?</h2>
          <p className="text-gray-600 mb-10 text-lg">Nuestro equipo de consultores te ayudará a identificar las oportunidades de mejora en tu ecosistema digital actual.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/conocenos"
              className="bg-primary text-white px-12 py-4 rounded-xl font-bold shadow-lg hover:bg-secondary transition-all"
            >
              Consultar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;