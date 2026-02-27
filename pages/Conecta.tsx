import React, { useState } from 'react';

const Conecta: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    interest: 'Demo',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5a5971c7-7e06-4d31-9ada-7962c71cac63',
          subject: `Nueva solicitud de demo - ${formState.name} (${formState.company})`,
          from_name: 'Insignia Web',
          name: formState.name,
          email: formState.email,
          company: formState.company,
          whatsapp: formState.whatsapp,
          interest: formState.interest,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError('Hubo un problema al enviar. Intentá de nuevo.');
      }
    } catch {
      setError('Error de conexión. Intentá de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 bg-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["Omnicanal", "IA Aplicada", "Automatizaciones", "Campañas", "Reportes"].map((chip) => (
                <span key={chip} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-blue-100 text-xs font-bold uppercase tracking-widest">
                  {chip}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] font-display animate-slide-up">
              Conectá tus canales. <br />
              Automatizá el seguimiento. <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8">Vendé más.</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Insignia Conecta es el sistema de CRM y marketing que integra WhatsApp, redes sociales y email en un solo lugar, usando IA para responder rápido y convertir oportunidades en ventas.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button 
                onClick={scrollToDemo}
                className="bg-accent hover:bg-yellow-400 text-primary font-extrabold px-10 py-5 rounded-xl text-lg transition-all shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-1"
              >
                Solicitar demo
              </button>
              <a 
                href="https://wa.me/595986587000" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">chat</span>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. EL PROBLEMA --- */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <blockquote className="text-2xl md:text-3xl font-medium text-primary italic max-w-3xl mx-auto mb-6">
              "Si generás consultas pero no las seguís bien, estás perdiendo ventas todos los días."
            </blockquote>
            <h2 className="text-gray-500 font-bold uppercase tracking-widest text-sm">El desorden es el enemigo del crecimiento</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: 'share_reviews', title: 'Canales dispersos', desc: 'Leads que llegan por Facebook, Instagram y Web pero se quedan sin dueño o respuesta.' },
              { icon: 'speed', title: 'Respuestas lentas', desc: 'Si tardas más de 5 minutos en responder, la probabilidad de cierre cae un 80%.' },
              { icon: 'table_rows', title: 'Seguimiento manual', desc: 'Depender de planillas Excel o de la memoria de los vendedores es una receta para el olvido.' },
              { icon: 'query_stats', title: 'Sin medición real', desc: 'Campañas de marketing que generan clics pero no sabes cuántos se convirtieron en dinero.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary rounded-2xl text-center text-white">
            <p className="text-xl font-medium">Insignia Conecta pone orden, velocidad y control en tu proceso comercial.</p>
          </div>
        </div>
      </section>

      {/* --- 3. CÓMO FUNCIONA --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Metodología Insignia</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2 font-display">Simplicidad en 3 pasos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gray-200 z-0"></div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl ring-8 ring-white">1</div>
              <h3 className="text-2xl font-bold mb-4">Capturá</h3>
              <p className="text-gray-600">Formularios web, WhatsApp, Instagram Direct, Facebook Messenger y Email en un solo inbox centralizado.</p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl ring-8 ring-white">2</div>
              <h3 className="text-2xl font-bold mb-4">Organizá</h3>
              <p className="text-gray-600">CRM visual con pipeline de ventas, etiquetas inteligentes, estados personalizados y asignación de agentes.</p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-accent text-primary text-3xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl ring-8 ring-white">3</div>
              <h3 className="text-2xl font-bold mb-4">Automatizá</h3>
              <p className="text-gray-600">Seguimiento automático por comportamiento, campañas de email marketing y respuestas asistidas por IA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. BENEFICIOS --- */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-12 font-display">Escalá tus ventas sin aumentar el equipo.</h2>
              <div className="space-y-8">
                {[
                  { icon: 'hub', title: 'Centralización total', text: 'No más conversaciones perdidas en celulares personales. Todo tu equipo en un solo lugar.' },
                  { icon: 'bolt', title: 'Velocidad de respuesta', text: 'Respondé instantáneamente 24/7 con bots y flujos inteligentes que califican al cliente.' },
                  { icon: 'settings_suggest', title: 'Follow-up automático', text: 'El sistema envía recordatorios y contenido de valor automáticamente según la etapa del lead.' },
                  { icon: 'insights', title: 'Métricas de ROI', text: 'Sabé exactamente de dónde vienen tus mejores clientes y qué vendedor rinde más.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-accent">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-blue-100/70 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl transform rotate-3"></div>
              <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Interface Dashboard" 
                  className="rounded-xl shadow-2xl grayscale-[0.5] brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CAPACIDADES (DETALLE) --- */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary font-display">Capacidades Estratégicas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'CRM inteligente', desc: 'Gestión visual de oportunidades de principio a fin.' },
              { title: 'Omnicanalidad', desc: 'Integración nativa con Meta (FB/IG) y WhatsApp Business.' },
              { title: 'Email Marketing', desc: 'Campañas segmentadas para "calentar" leads fríos.' },
              { title: 'Workflows', desc: 'Flujos lógicos para automatizar tareas repetitivas.' },
              { title: 'IA Generativa', desc: 'Asistente que sugiere respuestas y resume conversaciones.' },
              { title: 'Reportes en Vivo', desc: 'Tableros de control con KPIs comerciales en tiempo real.' },
            ].map((cap, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                <span className="material-symbols-outlined text-primary">verified</span>
                <div>
                  <h4 className="font-bold text-secondary">{cap.title}</h4>
                  <p className="text-gray-500 text-sm">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. PARA QUIÉN ES --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary font-display">Diseñado para negocios que crecen</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Inmobiliarias', 'Empresas de Servicios', 'Clínicas & Salud', 'Educación', 'E-commerce', 'Concesionarias', 'Seguros'].map((tag) => (
              <span key={tag} className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-secondary font-bold hover:bg-primary hover:text-white transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-10">Si tu negocio genera consultas, Insignia Conecta te ayuda a convertirlas.</p>
        </div>
      </section>

      {/* --- 7. ANTES VS DESPUÉS --- */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="p-12 bg-gray-50/50">
              <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined">cancel</span> Antes
              </h3>
              <ul className="space-y-4">
                {['Chats dispersos en varios teléfonos', 'Seguimiento por "olfato" o planillas', 'Leads que se enfrían por demora', 'Ventas perdidas por falta de orden'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-500 line-through">
                    <span className="material-symbols-outlined text-sm mt-1">remove</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 bg-blue-50/20">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">check_circle</span> Después
              </h3>
              <ul className="space-y-4">
                {['Todo centralizado en un inbox multiagente', 'Automatización inteligente de follow-up', 'Incremento medible en la tasa de cierre', 'Control total de cada etapa del proceso'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-secondary font-bold">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. PLANES --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary font-display">Elegí el impulso que necesitás</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start */}
            <div className="p-10 border border-gray-200 rounded-3xl hover:border-primary transition-all group">
              <h3 className="text-2xl font-bold mb-2">Start</h3>
              <p className="text-gray-500 text-sm mb-8">Ordená tus consultas y empezá a vender mejor.</p>
              <ul className="space-y-4 mb-10 text-sm text-gray-700">
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-primary">check</span> Implementación rápida</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-primary">check</span> CRM Comercial Base</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-primary">check</span> Integración WhatsApp</li>
              </ul>
              <button onClick={scrollToDemo} className="w-full py-4 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">Quiero una demo</button>
            </div>
            {/* Growth */}
            <div className="p-10 bg-primary text-white rounded-3xl transform md:-translate-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-accent text-primary font-bold text-[10px] uppercase tracking-tighter">Más Popular</div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-blue-100/60 text-sm mb-8">Escalá con campañas y flujos automáticos.</p>
              <ul className="space-y-4 mb-10 text-sm">
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent">check</span> Todo lo de Start</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent">check</span> Campañas de Email</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent">check</span> Automatizaciones avanzadas</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-accent">check</span> Reportes personalizados</li>
              </ul>
              <button onClick={scrollToDemo} className="w-full py-4 bg-accent text-primary font-extrabold rounded-xl hover:bg-yellow-400 transition-all">Quiero una demo</button>
            </div>
            {/* Scale */}
            <div className="p-10 border border-gray-200 rounded-3xl hover:border-primary transition-all group">
              <h3 className="text-2xl font-bold mb-2">Scale</h3>
              <p className="text-gray-500 text-sm mb-8">Inteligencia artificial y potencia total.</p>
              <ul className="space-y-4 mb-10 text-sm text-gray-700">
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-primary">check</span> Todo lo de Growth</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-primary">check</span> IA para seguimiento</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-primary">check</span> Integraciones vía API</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-primary">check</span> Optimización constante</li>
              </ul>
              <button onClick={scrollToDemo} className="w-full py-4 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">Quiero una demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. CTA FINAL / FORM --- */}
      <section id="demo-section" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-8 font-display">¿Querés ver Insignia Conecta en acción?</h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Agendá una demo y descubrí cómo ordenar tus leads, automatizar el seguimiento y mejorar tus conversiones con un especialista.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent">location_on</span>
                  </div>
                  <p>Félix Bogado casi Ana Díaz, Edificio Zenith, Asunción, Paraguay</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent">chat</span>
                  </div>
                  <p>+595 986 587 000</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent">mail</span>
                  </div>
                  <p>hola@insignia.com.py</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-secondary mb-2">Nombre</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        placeholder="Tu nombre" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-secondary mb-2">Empresa</label>
                      <input 
                        type="text" 
                        name="company"
                        required
                        value={formState.company}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        placeholder="Nombre de empresa" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Email Corporativo</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                      placeholder="tu@empresa.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      required
                      value={formState.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                      placeholder="+595..." 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Interés</label>
                    <select 
                      name="interest"
                      value={formState.interest}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option>Ver una Demo</option>
                      <option>Consultar precios</option>
                      <option>Soy cliente / Soporte</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-secondary text-white font-extrabold py-5 rounded-xl transition-all shadow-lg text-lg transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? 'Enviando...' : 'Solicitar demo'}
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">Al enviar aceptás ser contactado por Insignia Digital. Respetamos tu privacidad.</p>
                </form>
              ) : (
                <div className="py-20 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl font-bold">check</span>
                  </div>
                  <h3 className="text-3xl font-bold text-secondary mb-4">¡Solicitud enviada!</h3>
                  <p className="text-gray-600 text-lg">Un consultor de Insignia Conecta te contactará pronto desde hola@insignia.com.py.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conecta;