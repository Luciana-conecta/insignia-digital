import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Insignia from './pages/Insignia';
import Conecta from './pages/Conecta';
import StyleGuide from './pages/StyleGuide';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/Politicas';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conecta" element={<Conecta />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/conocenos" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/insignia" element={<Insignia />} />
            <Route path="/guia-estilo" element={<StyleGuide />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </HashRouter>
  );
};

export default App;