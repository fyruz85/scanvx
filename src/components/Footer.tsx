import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Our Services' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-mx container-px py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="ScanVX Solutions"
              className="h-10 w-auto"
              style={{
                filter:
                  'drop-shadow(0 0 8px rgba(59,180,255,0.55)) drop-shadow(0 0 20px rgba(59,130,246,0.35)) drop-shadow(0 0 1px rgba(255,255,255,0.6)) brightness(1.1)',
              }}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Extreme IT solutions you can trust. Professional IT services and
              technology consulting for companies of all sizes.
            </p>
            <p className="mt-4 text-sm font-medium text-brand-400">
              scanvx.com.my
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="h-4 w-4 shrink-0 text-brand-400 mt-0.5" />
                A/9, Taman Sayang, Jalan Putra 06250 Alor Setar, Kedah
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <Phone className="h-4 w-4 shrink-0 text-brand-400 mt-0.5" />
                <a href="tel:+60105448902" className="transition-colors hover:text-brand-400">
                  +6010 544 8902
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href="mailto:info@scanvx.com.my"
                  className="transition-colors hover:text-brand-400"
                >
                  info@scanvx.com.my
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            &copy; 2018 ScanVX Solutions (AS0377850-V). All rights reserved.
          </p>
          <p className="text-xs text-ink-600">
            Designed &amp; built for scanvx.com.my
          </p>
        </div>
      </div>
    </footer>
  );
}
