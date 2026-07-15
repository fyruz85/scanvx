import {
  Network,
  Monitor,
  Wifi,
  ServerCog,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Network,
    title: 'Multiwan Solution',
    description:
      'We understand the needs of high speed internet for your business and MultiWan will help you to combine your Internet speed with several ISP.',
  },
  {
    icon: Monitor,
    title: 'Digital Signage Solution',
    description:
      'In corporate spaces, digital signage is used to communicate with employees, provide information and updates on corporate events and activities in real-time, and more.',
  },
  {
    icon: Wifi,
    title: 'Wireless Environment Solution',
    description:
      'Convert your tangling cable networking with our seamless wireless environment solutions.',
  },
  {
    icon: ServerCog,
    title: 'Server And IP Migration Services',
    description:
      'Now, you can rest assured as we have a MIGRATION SERVICE for you which will resolve all your server migration doubts and issues.',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description:
      'Optimize your network structure to the highest performance with bandwidth optimizing and leverage the use of VLAN to prioritize your network speed accordingly.',
  },
  {
    icon: ShieldCheck,
    title: 'Web Security Hardening',
    description:
      'We can implement numerous security hardening measures on your web server to dramatically reduce the likelihood of a successful attack.',
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-ink-50">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Services"
          title="What We Do"
          subtitle="Comprehensive IT professional services designed to keep your business connected, secure, and running at peak performance."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10">
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-all duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30">
                    <service.icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {service.description}
                  </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
