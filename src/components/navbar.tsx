function Navbar ()  {
    const navLinks = [
    { href: "#services", label: "Servicios" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Sobre Nosotros" },
    { href: "#contact", label: "Contacto" },
  ];

    return(     
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary"
      style={{ backgroundColor: 'hsl(0 0% 7%)' }}
    >
        <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center ">
            <img
              src="/rect10.svg"
              alt="MESPROTICO Construcciones"
              className="h-20 w-auto py-2"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
           
          </button>
        </div>

        {/* Mobile Navigation */}
        
          <div className="md:hidden border-t border-primary/20 py-4">
           
          </div>
        
      </div>
    </nav> 
    )

}
export default Navbar;