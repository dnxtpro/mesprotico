import { motion } from 'framer-motion';


function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Empresa',
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Servicios', href: '/services' },
        { label: 'Proyectos', href: '/projects' },
        { label: 'Sobre Nosotros', href: '#' }
      ]
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Obra Nueva', href: '/services' },
        { label: 'Reformas Integrales', href: '/services' },
        { label: 'Rehabilitación de Fachadas', href: '/services' },
        { label: 'Proyectos Llave en Mano', href: '/services' }
      ]
    },
    {
      title: 'Contacto',
      links: [
        { label: 'administracion@mesprotico.com', href: 'mailto:administracion@mesprotico.com' },
        { label: '+34 629 66 99 57', href: 'tel:+34629669957' },
        { label: 'Menorca, Islas Baleares', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: 'ig', label: 'Instagram', href: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Sección Principal */}
      <div className="border-t-4 border-yellow-600">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* Grid de contenido */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Logo / Marca */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">MESPROTICO</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Construcciones y restauraciones de excelencia en Menorca desde 2010.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, color: '#E3A82B' }}
                    className="w-10 h-10 border-2 border-gray-600 flex items-center justify-center text-sm font-bold transition-colors duration-300 hover:border-yellow-600"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Secciones de Enlaces */}
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-white font-semibold mb-4 text-lg border-b-2 border-yellow-600 pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-yellow-600 text-sm transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        

          {/* Línea Divisoria */}
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-8"></div>

          {/* Footer Bottom */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-500"
          >
            <motion.p variants={itemVariants}>
              © {currentYear} MESPROTICO. Todos los derechos reservados.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 my-4 md:my-0"
            >
              <a href="#" className="hover:text-yellow-600 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors duration-300">
                Cookies
              </a>
            </motion.div>

            <motion.p variants={itemVariants}>
              Diseñado con precisión para resultados reales
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="h-1 bg-yellow-600"></div>
    </footer>
  );
}

export default Footer;
