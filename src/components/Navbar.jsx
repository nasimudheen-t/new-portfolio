import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "translate-y-0 bg-cream-bg/95 backdrop-blur-md border-b border-border-soft py-4 shadow-sm" : "-translate-y-full opacity-0"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-serif font-bold tracking-tight text-text-deep">
          NT<span className="text-accent-gold">.</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                active === link.name ? "text-text-deep" : "text-text-muted hover:text-text-deep"
              }`}
            >
              {link.name}
              {active === link.name && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent-gold"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-text-deep" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream-bg border-b border-border-soft shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setIsMobileMenuOpen(false);
              }}
              className={`text-lg font-medium transition-colors ${
                active === link.name ? "text-accent-gold" : "text-text-deep"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
