import { ArrowUpRight, ServerCog } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const projects = [
  {
    title: 'JBPM IP Migration',
    description:
      'Seamless IP migration for JBPM infrastructure with zero downtime. Full server relocation, DNS propagation, and traffic rerouting executed with precision.',
    tag: 'Migration',
    icon: ServerCog,
  },
];

export function Projects() {
  return (
    <section className="section-pad bg-ink-50">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Projects"
          subtitle="Real-world implementations delivering measurable results for our clients."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10">
                {/* Visual header */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950">
                  <div className="absolute inset-0 hero-grid opacity-40" />
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-600/30 blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon
                      className="h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-ink-900">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {project.description}
                  </p>
                  <button className="group/btn mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700">
                    View Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Placeholder card */}
          <Reveal delay={200}>
            <article className="flex h-full min-h-[340px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-white/50 p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-100 text-ink-400">
                <span className="font-display text-xl font-bold">+</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-600">
                More Projects Coming Soon
              </h3>
              <p className="mt-2 text-sm text-ink-400">
                New case studies are being prepared. Check back shortly.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
