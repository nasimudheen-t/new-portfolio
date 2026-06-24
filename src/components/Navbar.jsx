import { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

const Navbar = memo(() => {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];

        if (section && section.offsetTop <= scrollPosition) {
          setActive(navLinks[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e, link) => {
    e.preventDefault();

    const target = document.querySelector(link.href);

    if (target) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setActive(link.name);
    setIsMobileMenuOpen(false);
  };

  const NavItem = ({ link }) => (
    <a
      href={link.href}
      onClick={(e) => handleNavigation(e, link)}
      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active === link.name
          ? "text-white"
          : "text-white/70 hover:text-white"
      }`}
    >
      {active === link.name && (
        <motion.div
          layoutId="active-pill"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
          className="absolute inset-0 bg-orange-500 rounded-full"
        />
      )}

      <span className="relative z-10">{link.name}</span>
    </a>
  );

  return (
    <>
      <header className="fixed z-50 w-full px-6 -translate-x-1/2 top-6 left-1/2 max-w-7xl">

        <div
          className={`rounded-full border border-white/10 transition-all duration-300 ${
            isScrolled
              ? "bg-[#111111]/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,.45)]"
              : "bg-[#111111]"
          }`}
        >

          <div className="flex items-center justify-between h-16 px-5">

            {/* Left */}
            <nav className="items-center hidden gap-2 md:flex">
              {leftLinks.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </nav>

            {/* Logo */}

            <a
              href="#hero"
              className="text-xl font-bold tracking-wider text-white"
            >
              NASIM
              <span className="text-orange-500">.</span>
            </a>

            {/* Right */}

            <nav className="items-center hidden gap-2 md:flex">
              {rightLinks.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </nav>

            {/* Mobile */}

            <button
              className="text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-24 left-6 right-6 z-40 rounded-3xl bg-[#111111] border border-white/10 backdrop-blur-xl shadow-2xl p-5 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link)}
                  className={`rounded-xl px-4 py-3 transition ${
                    active === link.name
                      ? "bg-orange-500 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;