import React, { useState } from 'react';

const About: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    service: 'Desarrollo de Software',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado a hola@insignia.com.py:', formState);
    setIsSubmitted(true);
    // Simular reset de estado después de un tiempo o dejar el mensaje de éxito
    setTimeout(() => {
      // Opcional: window.scrollTo({ top: document.getElementById('contacto-section')?.offsetTop, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Intro / Aliado Clave */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Aliado Clave</span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight font-display">
                Más que una agencia, somos tu socio estratégico.
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundada con una misión clara: cerrar la brecha entre el diseño sofisticado y la ingeniería robusta. En Insignia Digital, no solo construimos herramientas, creamos ventajas competitivas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Creemos que la tecnología debe ser invisible, intuitiva y poderosa. Nuestro equipo multidisciplinario trabaja en sintonía para entregar productos que no solo funcionan, sino que inspiran.
              </p>
            </div>
            <div className="relative animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-accent rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Experience Banner */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
              Más de <span className="text-accent">13 años</span> en la industria
            </h2>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED CONTACT SECTION (Contacto) */}
      <section id="contacto-section" className="py-24 bg-surface border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Contacto</span>
              <h2 className="text-5xl font-bold text-secondary mb-8 leading-tight font-display">
                Hablemos de tu proyecto
              </h2>
              <div className="space-y-6 mb-12">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Cada negocio es distinto. Por eso, antes de proponer soluciones, nos tomamos el tiempo de entender tus objetivos, desafíos y oportunidades.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Completá el formulario y coordinamos una conversación para analizar cómo la tecnología, la automatización y el marketing pueden ayudarte a crecer.
                </p>
                <p className="text-sm text-gray-500 font-medium italic">
                  Respondemos en menos de 24 h hábiles. Tus datos están protegidos.
                </p>
              </div>

              <div className="space-y-8 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">Email</h3>
                    <p className="text-gray-600 font-medium">hola@insignia.com.py</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">WhatsApp</h3>
                    <p className="text-gray-600 font-medium">+595 986 587 000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 min-h-[500px] flex flex-col justify-center">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-secondary mb-8 font-display">Solicitar contacto</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                          placeholder="Tu nombre" 
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Empresa</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company"
                          required
                          value={formState.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                          placeholder="Nombre de empresa" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="tu@empresa.com" 
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Interés Principal</label>
                      <select 
                        id="service" 
                        name="service"
                        value={formState.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option>Desarrollo de Software</option>
                        <option>Insignia Conecta (CRM)</option>
                        <option>Diseño UI/UX</option>
                        <option>IA & Automatización</option>
                        <option>Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Háblanos de tu proyecto</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4} 
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="¿Cómo podemos ayudarte?"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-extrabold py-5 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                      Solicitar contacto
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center animate-fade-in py-10">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl font-bold">check</span>
                  </div>
                  <h3 className="text-3xl font-bold text-secondary mb-4">¡Gracias por escribirnos!</h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Tu mensaje ha sido enviado exitosamente a nuestro equipo de consultores. Nos pondremos en contacto contigo en hola@insignia.com.py muy pronto.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;