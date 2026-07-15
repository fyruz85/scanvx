import { ArrowRight, ChevronRight, ShieldCheck, Zap, Headset } from 'lucide-react';

function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 420" className="w-full max-w-md lg:max-w-lg xl:max-w-xl" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="210" cy="210" r="190" fill="none" stroke="url(#ring1)" strokeWidth="1" opacity="0.3"/>
      <circle cx="210" cy="210" r="160" fill="none" stroke="url(#ring2)" strokeWidth="0.8" opacity="0.2" strokeDasharray="8 6"/>
      <circle cx="210" cy="210" r="130" fill="none" stroke="url(#ring3)" strokeWidth="1.2" opacity="0.25"/>

      {/* Glow behind shield */}
      <circle cx="210" cy="200" r="90" fill="url(#centerGlow)" opacity="0.4"/>

      {/* Central shield */}
      <path d="M210 120 L270 148 L270 210 C270 252 244 280 210 296 C176 280 150 252 150 210 L150 148 Z"
        fill="url(#shieldGrad)" stroke="url(#shieldStroke)" strokeWidth="1.5" opacity="0.9"/>

      {/* Lock icon inside shield */}
      <rect x="195" y="195" width="30" height="24" rx="3" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9"/>
      <path d="M200 195 L200 185 C200 178 204 174 210 174 C216 174 220 178 220 185 L220 195"
        fill="none" stroke="white" strokeWidth="1.5" opacity="0.9"/>
      <circle cx="210" cy="207" r="3" fill="white" opacity="0.9"/>
      <line x1="210" y1="210" x2="210" y2="215" stroke="white" strokeWidth="1.5" opacity="0.9"/>

      {/* Orbiting nodes */}
      {/* Top - Server */}
      <g transform="translate(210, 28)">
        <circle r="22" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
        <rect x="-8" y="-10" width="16" height="5" rx="1" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
        <rect x="-8" y="-3" width="16" height="5" rx="1" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
        <rect x="-8" y="4" width="16" height="5" rx="1" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
        <circle cx="4" cy="-7.5" r="1" fill="rgba(96,165,250,0.9)"/>
        <circle cx="4" cy="-0.5" r="1" fill="rgba(96,165,250,0.9)"/>
        <circle cx="4" cy="6.5" r="1" fill="rgba(96,165,250,0.9)"/>
      </g>

      {/* Right - Wifi */}
      <g transform="translate(385, 170)">
        <circle r="20" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
        <path d="M-8 2 C-8 -6 8 -6 8 2" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1.2"/>
        <path d="M-5 -1 C-5 -5 5 -5 5 -1" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1.2"/>
        <circle cx="0" cy="3" r="1.5" fill="rgba(147,197,253,0.8)"/>
      </g>

      {/* Bottom right - Cloud */}
      <g transform="translate(355, 330)">
        <circle r="20" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
        <path d="M-7 4 L7 4 C10 4 12 2 12 -1 C12 -4 10 -6 7 -6 C7 -6 7 -8 5 -9 C3 -10 0 -10 -2 -8 C-4 -10 -7 -9 -9 -7 C-11 -5 -11 -3 -10 -1 C-12 0 -12 3 -10 4 Z"
          fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
      </g>

      {/* Bottom left - Database */}
      <g transform="translate(65, 330)">
        <circle r="20" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
        <ellipse cx="0" cy="-5" rx="8" ry="3" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
        <path d="M-8 -5 L-8 5 C-8 8 8 8 8 5 L8 -5" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
        <path d="M-8 0 C-8 3 8 3 8 0" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
      </g>

      {/* Left - Monitor */}
      <g transform="translate(35, 170)">
        <circle r="20" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
        <rect x="-9" y="-8" width="18" height="12" rx="1" fill="none" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
        <line x1="-4" y1="7" x2="4" y2="7" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
        <line x1="0" y1="4" x2="0" y2="7" stroke="rgba(147,197,253,0.8)" strokeWidth="1"/>
      </g>

      {/* Connection lines from nodes to center */}
      <line x1="210" y1="50" x2="210" y2="120" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.4"/>
      <line x1="365" y1="170" x2="270" y2="190" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.4"/>
      <line x1="335" y1="330" x2="260" y2="260" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.4"/>
      <line x1="85" y1="330" x2="160" y2="260" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.4"/>
      <line x1="55" y1="170" x2="150" y2="190" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.4"/>

      {/* Data particles along lines */}
      <circle r="2" fill="#60A5FA" opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M210,50 L210,120"/>
      </circle>
      <circle r="2" fill="#60A5FA" opacity="0.8">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M365,170 L270,190"/>
      </circle>
      <circle r="2" fill="#60A5FA" opacity="0.6">
        <animateMotion dur="4s" repeatCount="indefinite" path="M85,330 L160,260"/>
      </circle>
      <circle r="1.5" fill="#60A5FA" opacity="0.6">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M335,330 L260,260"/>
      </circle>

      {/* Scanning arc animation */}
      <path d="M120 210 A90 90 0 0 1 300 210" fill="none" stroke="url(#scanArc)" strokeWidth="2" opacity="0.3" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="8s" repeatCount="indefinite"/>
      </path>

      <defs>
        <radialGradient id="centerGlow">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0.3)"/>
          <stop offset="100%" stopColor="rgba(59,130,246,0.1)"/>
        </linearGradient>
        <linearGradient id="shieldStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4"/>
        </linearGradient>
        <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="ring2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="ring3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="scanArc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0"/>
          <stop offset="50%" stopColor="#60A5FA" stopOpacity="1"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const trustBadges = [
  { icon: ShieldCheck, label: 'Secure by Design' },
  { icon: Zap, label: 'High Performance' },
  { icon: Headset, label: 'Expert Support' },
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-16 lg:pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-900" />
      <div className="absolute inset-0 hero-grid" />

      {/* Glow effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="container-mx container-px relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-200 backdrop-blur-sm animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
              <span>Trusted by MPOB, KPKT & Hibiscus Petroleum</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-5xl xl:text-6xl">
              Deploy. Secure.{' '}
              <span className="gradient-text">Recover.</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Your infrastructure. Our responsibility. End-to-end IT systems
              for businesses that can&apos;t afford downtime.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-all duration-300 hover:shadow-brand-600/50 hover:brightness-110 active:scale-[0.98]"
              >
                Talk to Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                See What We Do
                <ChevronRight className="h-4 w-4 text-brand-400" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-ink-400">
                  <badge.icon className="h-4 w-4 text-brand-400" strokeWidth={2} />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8 sm:gap-12">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '14+', label: 'Major Projects' },
                { value: '24/7', label: 'Monitoring' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-ink-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/50 animate-float" />
        </div>
      </div>
    </section>
  );
}
