import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, Clock, ArrowRight } from 'lucide-react';

interface Post {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
      id: 1,
      category: "Tecnología",
      date: "15 Oct 2023",
      readTime: "5 min",
      title: "El futuro de la IA en el desarrollo web",
      excerpt: "Cómo la inteligencia artificial está redefiniendo los flujos de trabajo de los desarrolladores y la experiencia del usuario final.",
      content: "La inteligencia artificial no es solo una tendencia pasajera; es la columna vertebral de la próxima generación de la web. Desde la generación automática de código hasta la personalización hiper-segmentada de interfaces en tiempo real, la IA está permitiendo que equipos pequeños construyan productos con una complejidad antes reservada para gigantes tecnológicos. En Insignia, estamos integrando modelos de lenguaje para agilizar el prototipado y asegurar que cada línea de código cumpla con los estándares más altos de eficiencia.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "Diseño",
      date: "28 Sep 2023",
      readTime: "4 min",
      title: "Minimalismo vs. Brutalismo: Tendencias 2024",
      excerpt: "Un análisis profundo sobre las corrientes estéticas que dominarán el diseño de interfaces en el próximo año.",
      content: "Mientras que el minimalismo sigue reinando por su claridad y facilidad de uso, el brutalismo digital emerge como una respuesta rebelde y auténtica. En 2024, veremos una fusión de ambos: interfaces limpias con toques tipográficos audaces y colores crudos. El objetivo es destacar en un mar de diseños genéricos. La clave está en no sacrificar la accesibilidad por la estética, un equilibrio que perfeccionamos en cada proyecto de diseño UI/UX que emprendemos.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Negocios",
      date: "10 Sep 2023",
      readTime: "6 min",
      title: "Transformación Digital: Más allá del Buzzword",
      excerpt: "Guía práctica para directivos que buscan implementar cambios tecnológicos reales y medibles en sus organizaciones.",
      content: "La verdadera transformación digital no ocurre cuando compras software nuevo, sino cuando cambias la mentalidad de la organización. Se trata de usar la tecnología para crear nuevos modelos de negocio y eficiencias operativas. Muchas empresas fallan porque intentan digitalizar procesos analógicos ineficientes. En Insignia, acompañamos a los líderes a repensar sus procesos desde cero, usando la automatización para liberar el talento humano de tareas repetitivas.",
      image: "https://images.unsplash.com/photo-1553484771-371af2725614?q=80&w=2033&auto=format&fit=crop"
    },
    {
      id: 4,
      category: "Ingeniería",
      date: "05 Ago 2023",
      readTime: "8 min",
      title: "Arquitectura Serverless: ¿Vale la pena?",
      excerpt: "Ventajas, desventajas y casos de uso ideales para migrar tu infraestructura a un modelo sin servidores.",
      content: "Serverless promete escalabilidad infinita y pago por uso, pero no es una bala de plata. Para aplicaciones con tráfico esporádico o microservicios específicos, es imbatible. Sin embargo, para cargas constantes, los costos pueden dispararse y el 'cold start' puede afectar la latencia. Analizamos los pros y contras técnicos para que tu arquitectura sea siempre costo-efectiva y de alto rendimiento.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "UX",
      date: "22 Jul 2023",
      readTime: "3 min",
      title: "La importancia de la accesibilidad web",
      excerpt: "Por qué diseñar para todos no es solo una obligación moral, sino una estrategia de negocio inteligente.",
      content: "Una web accesible es una web mejor posicionada y con mayor alcance. No se trata solo de cumplir normativas, sino de asegurar que personas con diversas capacidades puedan consumir tu contenido sin barreras. Esto incluye contrastes adecuados, navegación por teclado y etiquetas ARIA correctas. La accesibilidad es el estándar de oro de la ingeniería moderna.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      category: "Cultura",
      date: "10 Jun 2023",
      readTime: "7 min",
      title: "Construyendo equipos remotos de alto nivel",
      excerpt: "Lecciones aprendidas tras 5 años de operar como una agencia distribuida globalmente.",
      content: "El trabajo remoto exitoso se basa en la confianza y en la comunicación asíncrona efectiva. Hemos desarrollado rituales digitales que mantienen la cohesión del equipo sin la necesidad de reuniones interminables. La clave es la documentación y el uso de herramientas que fomenten la colaboración creativa, permitiéndonos atraer talento sin importar las fronteras geográficas.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
    }
  ];

  const featuredPost: Post = {
    id: 0,
    category: "Sostenibilidad",
    date: "20 Nov 2023",
    readTime: "10 min",
    title: "Innovación Sostenible: El reto de la década",
    excerpt: "Exploramos cómo las empresas tecnológicas pueden liderar el camino hacia un futuro más verde mediante la optimización de código y centros de datos eficientes.",
    content: "La sostenibilidad digital es el nuevo imperativo. Cada byte transferido y cada ciclo de CPU consumido tiene una huella de carbono. Como ingenieros, tenemos la responsabilidad de escribir código eficiente que no solo funcione rápido, sino que consuma menos energía. La optimización de imágenes, la carga diferida y el uso de CDNs no son solo técnicas de SEO, son herramientas de preservación ambiental. En este artículo detallamos nuestra estrategia para reducir el impacto ambiental de cada producto digital que entregamos.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <div className="bg-surface min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest mb-4"
          >
            Blog & Conocimiento
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-display">Insignia Insights</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Pensamientos, tutoriales y noticias sobre tecnología, diseño y estrategia digital para líderes del mañana.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 group cursor-pointer"
          onClick={() => setSelectedPost(featuredPost)}
        >
          <div className="h-80 lg:h-auto overflow-hidden">
             <img 
              src={featuredPost.image} 
              alt="Featured" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-accent font-black uppercase tracking-widest text-[10px] bg-accent/10 px-3 py-1 rounded-full">Destacado</span>
              <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                <Calendar size={12} /> {featuredPost.date}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-display group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              {featuredPost.excerpt}
            </p>
            <button className="text-primary font-black flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase text-xs tracking-[0.2em]">
              Leer Artículo Completo <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-black text-white bg-primary px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors font-display">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>
                <button className="text-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-accent transition-colors">
                  Leer más <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-primary/20 backdrop-blur-xl"
              onClick={() => setSelectedPost(null)}
            />
            
            {/* Modal Card */}
            <motion.div 
              layoutId={`post-${selectedPost.id}`}
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full text-secondary hover:bg-primary hover:text-white transition-all shadow-lg active:scale-90"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto">
                {/* Modal Image Header */}
                <div className="h-[300px] md:h-[450px] relative">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                {/* Modal Content */}
                <div className="px-8 md:px-16 pb-16 -mt-20 relative z-10">
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <span className="px-4 py-1 bg-accent text-primary font-black rounded-full text-[10px] uppercase tracking-widest shadow-lg">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {selectedPost.date}</span>
                      <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {selectedPost.readTime} lectura</span>
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-10 font-display leading-[1.1]">
                    {selectedPost.title}
                  </h2>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light italic border-l-4 border-accent pl-6">
                      {selectedPost.excerpt}
                    </p>
                    <div className="text-gray-700 leading-[1.8] text-lg space-y-6">
                      {selectedPost.content.split('\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                      <p>
                        En Insignia Digital, creemos que el conocimiento debe ser compartido. 
                        Este artículo es parte de nuestra iniciativa para elevar los estándares 
                        de la industria tecnológica en la región. Si tienes dudas sobre cómo 
                        implementar estas estrategias en tu negocio, no dudes en contactarnos.
                      </p>
                    </div>
                  </div>

                  {/* Footer Modal */}
                  <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">person</span>
                      </div>
                      <div>
                        <p className="text-sm font-black text-secondary uppercase tracking-tighter">Equipo Insignia</p>
                        <p className="text-xs text-gray-400">Expertos en Innovación Digital</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all shadow-xl"
                    >
                      Cerrar Lectura
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;