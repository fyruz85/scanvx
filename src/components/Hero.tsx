import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-16 lg:pt-20"
    >
      {/* Background: gradient first, then grid on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-900" />
      <div className="absolute inset-0 hero-grid" />

      {/* Glow effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-400/10 blur-[100px]" />

      <div className="container-mx container-px relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-200 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent-400" />
            <span>Trusted by MPOB, KPKT & Hibiscus Petroleum</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Deploy. Secure.{' '}
            <span className="gradient-text">Recover.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300 sm:text-xl">
            Your infrastructure. Our responsibility. End-to-end IT systems
            for businesses that can&apos;t afford downtime.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-all duration-300 hover:shadow-brand-600/50 hover:brightness-110 active:scale-[0.98]"
            >
              Talk to Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              See What We Do
              <ChevronRight className="h-4 w-4 text-brand-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 sm:gap-12">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '14+', label: 'Major Projects' },
              { value: '24/7', label: 'Monitoring' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-ink-400">{stat.label}</div>
              </div>
            ))}
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
