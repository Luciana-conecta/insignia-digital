import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Política de Privacidad</h1>

        <p className="mb-4">
          En <strong>INSIGNIA CONECTA</strong> valoramos y respetamos la privacidad de
          nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos,
          utilizamos y protegemos la información personal cuando utilizás nuestros
          servicios y plataformas digitales.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Información que recopilamos</h2>
          <p>
            Podemos recopilar información personal como nombre, correo electrónico,
            número de teléfono, datos de la empresa y otra información necesaria para
            brindar nuestros servicios. También podemos recopilar datos técnicos como
            dirección IP, tipo de navegador y uso de la plataforma.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Uso de la información</h2>
          <p>
            La información recopilada se utiliza para:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Proveer, operar y mejorar nuestros servicios.</li>
            <li>Gestionar cuentas de usuarios y empresas.</li>
            <li>Enviar notificaciones operativas o comerciales.</li>
            <li>Cumplir con requisitos legales y regulatorios.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Integraciones con Meta</h2>
          <p>
            Nuestra plataforma puede integrarse con servicios de Meta (como WhatsApp,
            Facebook o Instagram) a través de sus APIs oficiales. La información
            compartida se limita estrictamente a lo necesario para el funcionamiento
            del servicio y cumple con las políticas de Meta.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Protección de datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger
            la información personal contra accesos no autorizados, pérdida o uso
            indebido.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Compartición de información</h2>
          <p>
            No vendemos ni compartimos información personal con terceros, excepto
            cuando sea necesario para la prestación del servicio o por requerimiento
            legal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Derechos del usuario</h2>
          <p>
            Los usuarios pueden solicitar el acceso, modificación o eliminación de
            sus datos personales contactándonos a través de nuestros canales
            oficiales.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Cambios en esta política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en
            cualquier momento. Los cambios serán publicados en esta misma página.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contacto</h2>
          <p>
            Si tenés dudas sobre esta Política de Privacidad o el tratamiento de tus
            datos, podés contactarnos en:
          </p>
          <p className="mt-2 font-medium">📧 contacto@insignia.com.py</p>
        </section>

        <p className="text-sm text-gray-500 mt-8 text-center">
          Última actualización: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
