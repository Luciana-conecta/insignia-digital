import React from 'react';

const StyleGuide: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-4">Guía de Estilo Insignia</h1>
          <p className="text-gray-600">Sistema de diseño para mantener la consistencia visual de la marca.</p>
        </div>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-6 pb-2 border-b border-gray-200">Colores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="h-24 rounded-lg bg-primary shadow-lg mb-3"></div>
              <p className="font-bold text-secondary">Primary</p>
              <p className="text-sm text-gray-500">#0b4b6f</p>
            </div>
            <div>
              <div className="h-24 rounded-lg bg-accent shadow-lg mb-3"></div>
              <p className="font-bold text-secondary">Accent</p>
              <p className="text-sm text-gray-500">#F4B400</p>
            </div>
            <div>
              <div className="h-24 rounded-lg bg-secondary shadow-lg mb-3"></div>
              <p className="font-bold text-secondary">Secondary (Dark)</p>
              <p className="text-sm text-gray-500">#111518</p>
            </div>
            <div>
              <div className="h-24 rounded-lg bg-surface border border-gray-200 shadow-sm mb-3"></div>
              <p className="font-bold text-secondary">Surface</p>
              <p className="text-sm text-gray-500">#F5F7FA</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-6 pb-2 border-b border-gray-200">Tipografía</h2>
          <div className="space-y-8 bg-white p-8 rounded-xl shadow-sm">
            <div>
              <h1 className="text-6xl font-bold text-secondary font-display mb-2">Display H1</h1>
              <p className="text-xs text-gray-400">Space Grotesk / Bold / 60px</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-secondary font-display mb-2">Heading H2</h2>
              <p className="text-xs text-gray-400">Space Grotesk / Bold / 36px</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary font-display mb-2">Heading H3</h3>
              <p className="text-xs text-gray-400">Space Grotesk / Bold / 24px</p>
            </div>
            <div>
              <p className="text-base text-gray-600 font-sans leading-relaxed mb-2">
                Body Text - Manrope. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-xs text-gray-400">Manrope / Regular / 16px</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-6 pb-2 border-b border-gray-200">Botones & UI</h2>
          <div className="flex flex-wrap gap-4 bg-white p-8 rounded-xl shadow-sm items-center">
            <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors">
              Primary Button
            </button>
            <button className="bg-accent text-secondary px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors">
              Accent Button
            </button>
            <button className="bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Outline Button
            </button>
            <button className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-1">
              Link Button <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className="text-2xl font-bold text-secondary mb-6 pb-2 border-b border-gray-200">Iconografía</h2>
          <div className="flex gap-6 text-primary">
            <span className="material-symbols-outlined text-4xl">home</span>
            <span className="material-symbols-outlined text-4xl">search</span>
            <span className="material-symbols-outlined text-4xl">settings</span>
            <span className="material-symbols-outlined text-4xl">favorite</span>
            <span className="material-symbols-outlined text-4xl">shopping_cart</span>
            <span className="material-symbols-outlined text-4xl">menu</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">Google Material Symbols Outlined</p>
        </section>
      </div>
    </div>
  );
};

export default StyleGuide;