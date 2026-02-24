import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Hablemos</span>
            <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight font-display">
              ¿Tienes un proyecto en mente?
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Estamos listos para escuchar tus ideas y convertirlas en realidad. Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">Email</h3>
                  <p className="text-gray-600">hola@insignia.com.py</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">WhatsApp</h3>
                  <p className="text-gray-600">+595 986 587 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">Oficina</h3>
                  <p className="text-gray-600">Félix Bogado casi Ana Díaz, Edificio Zenith, 6to Piso. Asunción – Paraguay</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">Horario de Atención</h3>
                  <p className="text-gray-600">Lunes a viernes, de 9:00 a 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Form Iframe Container */}
          <div className="bg-surface rounded-2xl shadow-sm border border-gray-100 flex justify-center items-center overflow-hidden min-h-[600px]">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScdsrAIzLq_cy5_4qZJ8tuAgt-l32oxx7wWCJmKfQiICXuUEQ/viewform?embedded=true" 
              width="100%" 
              height="620" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;