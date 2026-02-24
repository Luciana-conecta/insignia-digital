import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white relative">
      {/* Línea divisoria superior decorativa */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="../logos/LOGOPRINCIPAL.png" 
                alt="Insignia Digital" 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed font-light">
              Transformamos negocios a través de tecnología de vanguardia, diseño estratégico e innovación continua.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display text-white">Explorar</h4>
            <ul className="space-y-4 text-sm text-blue-200/70">
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link to="/conocenos" className="hover:text-accent transition-colors">Agencia</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Insights</Link></li>
              <li><Link to="/guia-estilo" className="hover:text-accent transition-colors">Guía de Estilo</Link></li>
              <li><Link to="/politica-de-privacidad" className="hover:text-accent transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display text-white">Expertise</h4>
            <ul className="space-y-4 text-sm text-blue-200/70">
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Transformación Digital</Link></li>
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Desarrollo a Medida</Link></li>
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Diseño UI/UX</Link></li>
              <li><Link to="/servicios" className="hover:text-accent transition-colors">Consultoría de Nube</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display text-white">Contacto</h4>
            <p className="text-sm text-blue-200/70 mb-2">
              Félix Bogado casi Ana Díaz,<br />
              Edificio Zenith, 6to Piso.<br />
              Asunción – Paraguay
            </p>
            <p className="text-sm text-blue-200/70 mb-4">
              <span className="block mb-1 font-bold text-blue-100">WhatsApp: +595 986 587 000</span>
              <span className="block italic opacity-60">Lun-Vie: 09:00 - 18:00</span>
            </p>
            <a href="mailto:hola@insignia.com.py" className="text-accent font-bold hover:underline transition-all">
              hola@insignia.com.py
            </a>
          </div>
        </div>

        {/* Barra Inferior con Iconos Centrados */}
        <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          
          {/* Copyright */}
          <p className="text-blue-300/50 text-[12px] text-center md:text-left order-2 md:order-1 font-medium tracking-wide">
            © 2026 INSIGNIA DIGITAL. TODOS LOS DERECHOS RESERVADOS.
          </p>
          
          {/* Social Icons Centered */}
          <div className="flex justify-center items-center space-x-10 order-1 md:order-2">
            <a href="#" className="text-blue-300 hover:text-accent transition-all transform hover:scale-125 duration-300" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-300 hover:text-accent transition-all transform hover:scale-125 duration-300" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-300 hover:text-accent transition-all transform hover:scale-125 duration-300" aria-label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>

          {/* Legal Links / Spacer */}
          <div className="text-center md:text-right order-3">
            <Link to="/guia-estilo" className="text-blue-200/40 text-[11px] hover:text-white transition-colors tracking-widest uppercase font-bold">
              Privacidad y Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;