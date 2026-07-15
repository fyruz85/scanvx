import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Portfolio' },
  { id: 'why', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

// Sections with dark backgrounds — header should be light text on these
const darkSections = new Set(['home', 'why']);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  // Is the header currently over a dark section?
  const overDark = darkSections.has(activeId || 'home');

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

  // Header style based on context
  const headerBg = !scrolled
    ? 'bg-transparent'
    : overDark
      ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-ink-950/20'
      : 'bg-white/90 backdrop-blur-xl border-b border-ink-100 shadow-lg shadow-ink-900/5';

  const textColor = overDark ? 'text-white' : 'text-ink-800';
  const textMuted = overDark ? 'text-ink-300' : 'text-ink-500';
  const hoverColor = overDark ? 'hover:text-white' : 'hover:text-ink-900';
  const activeColor = overDark ? 'text-white' : 'text-brand-600';
  const activeBar = overDark ? 'bg-brand-400' : 'bg-brand-500';
  const mobileMenuBg = overDark ? 'bg-ink-900/95' : 'bg-white/95 border border-ink-100';
  const mobileActiveStyle = overDark
    ? 'bg-brand-600/20 text-brand-300'
    : 'bg-brand-50 text-brand-600';
  const mobileInactiveStyle = overDark
    ? 'text-ink-300 hover:bg-white/5 hover:text-white'
    : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900';
  const toggleColor = overDark ? 'text-white hover:bg-white/10' : 'text-ink-700 hover:bg-ink-100';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-mx container-px">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo — switches between light and dark variant */}
          <button
            onClick={() => scrollTo('home')}
            className={`flex items-center gap-0.5 font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${textColor}`}
            aria-label="ScanVX Solution home"
          >
            Scan
            <span className={overDark ? 'text-brand-400' : 'text-brand-600'}>VX</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id
                    ? activeColor
                    : `${textMuted} ${hoverColor}`
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className={`absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full ${activeBar}`} />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:shadow-brand-600/50 hover:brightness-110"
            >
              Get Started
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${toggleColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className={`mb-4 flex flex-col gap-1 rounded-2xl p-3 backdrop-blur-xl lg:hidden ${mobileMenuBg}`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? mobileActiveStyle
                    : mobileInactiveStyle
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
