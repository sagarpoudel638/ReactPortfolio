import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'frosted-glass py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
          Sagar<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover-link text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? '✕' : '≡'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 top-full frosted-glass shadow-md md:hidden transition-all duration-300 overflow-hidden',
          mobileOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="container flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
