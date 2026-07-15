import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-ink-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-mx container-px">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center"
            aria-label="ScanVX Solutions home"
          >
            <img
              src="/images/logo.png"
              alt="ScanVX Solutions"
              className="h-10 w-auto lg:h-12"
              style={{
                filter:
                  'drop-shadow(0 0 8px rgba(59,180,255,0.55)) drop-shadow(0 0 20px rgba(59,130,246,0.35)) drop-shadow(0 0 1px rgba(255,255,255,0.6)) brightness(1.1)',
              }}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id
                    ? 'text-white'
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-brand-400" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+60105448902"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              +6010 544 8902
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:shadow-brand-600/50 hover:brightness-110"
            >
              Get A Free Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="mb-4 flex flex-col gap-1 rounded-2xl bg-ink-900/95 p-3 backdrop-blur-xl lg:hidden">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? 'bg-brand-600/20 text-brand-300'
                    : 'text-ink-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Get A Free Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
