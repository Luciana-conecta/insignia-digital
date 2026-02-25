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

import postsData from '../data/posts.json';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Separar los posts normales del post destacado
  const posts = postsData.filter(p => !p.featured) as Post[];
  const featuredPost = (postsData.find(p => p.featured) || postsData[0]) as Post;

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