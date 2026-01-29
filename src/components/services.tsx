import { motion } from 'framer-motion';
import { useState } from 'react';

// Animación del path del MESPROTICO
const AnimatedPath = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={470.214}
      height={110.242}
      viewBox="0 0 124.411 29.168"
      className="mx-auto"
    >
      <motion.path
        d="M282.96 309.377v-9.68h16.433v4.77h5.703v-21.051h11.614v15.14h16.695v4.562h7.57V284.66h17.11v22.191h5.08v-10.68h16.696v11.406h7.258v-3.63h5.6v-7.258h12.65v13.895"
        fill="none"
        stroke="#d6b136"
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="miter"
        transform="translate(-281.96 -282.416)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        onAnimationComplete={onComplete}
      />
    </svg>
  );
};

// Iconos minimalistas para cada servicio
const BuildingIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 5 7 13" />
    <polyline points="17 5 17 13" />
  </svg>
);

const PaletteIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const FacadeIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 3l4 0m-4 0v4" />
    <rect x="6" y="12" width="3" height="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
    <rect x="15" y="12" width="3" height="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const KeyIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.97 5.95M15 7a2 2 0 00-2-2H9m0 0a6 6 0 00-6 6v2m6-8a2 2 0 012 2m0 0V9m0 4a6 6 0 01-6-6m6 6v2m0 0H9" />
  </svg>
);

const services = [
  {
    id: 1,
    title: 'Obra Nueva y Edificación',
    icon: BuildingIcon,
    excerpt: 'Proyectos residenciales y comerciales desde cimientos con máxima calidad estructural.',
    description: 'Convertimos tu visión en realidad. Ya sea un proyecto residencial moderno o un complejo comercial, nuestro equipo especializado gestiona cada fase de la obra nueva: desde el diseño ingenieril, pasando por la cimentación, estructura y acabados finales. Garantizamos cumplimiento de normativas, cronograma y presupuesto.',
    features: [
      'Estudio geotécnico y cimentación especializada',
      'Estructura de hormigón armado o acero (según proyecto)',
      'Instalaciones completas (fontanería, electricidad, climatización)',
      'Revestimientos y acabados de calidad superior',
      'Inspecciones periódicas y supervisión técnica continua'
    ]
  },
  {
    id: 2,
    title: 'Reformas Integrales',
    icon: PaletteIcon,
    excerpt: 'Transformación total de viviendas y locales con diseño innovador y acabados premium.',
    description: 'Tu hogar o negocio merece una segunda vida. Nuestras reformas integrales no son simples retoques: son transformaciones profundas que casan funcionalidad con estética. Escuchamos tus necesidades, diseñamos soluciones innovadoras y ejecutamos con precisión quirúrgica. Resultado: espacios que potencian tu calidad de vida y valor inmobiliario.',
    features: [
      'Proyecto técnico y diseño interior personalizado',
      'Derribos selectivos y redistribución de espacios',
      'Nuevas instalaciones (actualización eléctrica, fontanería, gas)',
      'Soluciones de eficiencia energética (ventanas, aislamiento)',
      'Acabados de calidad (pintura premium, cerámica, pavimentos)'
    ]
  },
  {
    id: 3,
    title: 'Rehabilitación de Fachadas',
    icon: FacadeIcon,
    excerpt: 'Recuperación estética y estructural con SATE, impermeabilización e aislamiento avanzado.',
    description: 'Tu fachada es la carta de presentación de tu propiedad. Con el paso del tiempo, la humedad, el viento y el salitre menorquín dejan huella. Nuestros expertos en rehabilitación ofrecen soluciones integrales: desde impermeabilización profesional hasta sistemas SATE de última generación. Recuperamos belleza, durabilidad y eficiencia energética.',
    features: [
      'Diagnóstico estructural y detección de filtraciones',
      'Limpieza profesional y preparación de superficie',
      'Sistema SATE (aislamiento por el exterior) o similar',
      'Impermeabilización avanzada con tratamientos anti-humedad',
      'Pintura técnica de alta durabilidad y acabados estéticos'
    ]
  },
  {
    id: 4,
    title: 'Proyectos "Llave en Mano"',
    icon: KeyIcon,
    excerpt: 'Gestión 360º: licencias, diseño, ejecución total. Solución integral sin preocupaciones.',
    description: '¿Cansado de coordinar múltiples proveedores? Nuestro servicio "Llave en Mano" es tu solución. Nos hacemos cargo de TODO: trámites administrativos, permisos, diseño técnico, contrataciones y supervisión de obra. Tú solo disfrutas del resultado final. Un único interlocutor, responsabilidad única, tranquilidad total.',
    features: [
      'Gestión completa de licencias y permisos municipales',
      'Coordinación de proyecto arquitectónico e ingenieril',
      'Selección y supervisión de todos los proveedores',
      'Planificación y cronograma integrado',
      'Seguimiento exhaustivo de calidad y presupuesto'
    ]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const IconComponent = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
      className="group bg-white p-8 border border-gray-200 transition-all duration-300 cursor-pointer"
    >
      {/* Icono */}
      <motion.div
        whileHover={{ rotate: 5 }}
        className="text-yellow-600 mb-6"
      >
        <IconComponent />
      </motion.div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>

      {/* Extracto */}
      <p className="text-gray-600 text-sm mb-6 line-clamp-2">
        {service.excerpt}
      </p>

      {/* Botón */}
      <motion.button
        whileHover={{ backgroundColor: '#E3A82B', color: '#111111' }}
        className="px-6 py-2 border-2 border-yellow-600 text-yellow-600 font-semibold text-sm transition-all duration-300 hover:text-gray-900"
      >
        Más información
      </motion.button>
    </motion.div>
  );
};

function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      {/* HERO SECTION */}
      <div className="bg-gray-100 py-20 mb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedPath onComplete={() => {}} />
             <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl text-gray-700 font-black max-w-3xl mx-auto mt-8"
          >
            Servicios
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-8"
          >
            Desde la obra nueva hasta la reforma integral, ejecutamos tus proyectos con precisión, 
            calidad y transparencia. Experiencia, compromiso y resultados tangibles en cada proyecto.
          </motion.p>
        </div>
      </div>

      {/* GRILLA DE SERVICIOS */}
      <div className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* DETALLES EXPANDIDOS */}
      <div className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="space-y-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: expandedService === service.id ? 1 : 0,
                height: expandedService === service.id ? 'auto' : 0
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              {expandedService === service.id && (
                <div className="bg-white p-12 border-l-4 border-yellow-600">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  
                  {/* Descripción persuasiva */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Lo que incluye */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Lo que incluye:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start text-gray-700"
                      >
                        <span className="text-yellow-600 font-bold mr-3 text-lg">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA dentro del detalle */}
                  <motion.a
                    whileHover={{ backgroundColor: '#E3A82B', color: '#111111' }}
                    href="#contacto"
                    className="inline-block px-8 py-3 border-2 border-yellow-600 text-yellow-600 font-semibold transition-all duration-300"
                  >
                    Solicitar presupuesto
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Tu proyecto, nuestra responsabilidad
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-8"
          >
            No importa la complejidad de tu proyecto: somos expertos en encontrar soluciones sólidas, 
            eficientes y dentro de tu presupuesto. Hace años que familias y empresas en Menorca confían 
            en MESPROTICO. ¿Será el tuyo el próximo?
          </motion.p>

          {/* Botones CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.a
              whileHover={{ backgroundColor: '#E3A82B', color: '#111111' }}
              href="#contacto"
              className="px-8 py-3 bg-yellow-600 text-gray-900 font-bold transition-all duration-300"
            >
              Solicita tu Presupuesto Gratis
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: '#E3A82B', borderColor: '#E3A82B', color: '#111111' }}
              href="#"
              className="px-8 py-3 border-2 border-yellow-600 text-yellow-600 font-bold transition-all duration-300"
            >
              Descubre Nuestros Proyectos
            </motion.a>
          </motion.div>

          {/* Texto complementario */}
          <p className="text-sm text-gray-400">
            ⚡ Respuesta en 24h • Sin compromiso • Evaluación técnica gratuita
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
