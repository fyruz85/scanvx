import {
  Activity,
  Server,
  Network,
  ShieldCheck,
  Globe,
  GraduationCap,
  Cable,
  Stethoscope,
  DatabaseBackup,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

interface Project {
  title: string;
  client: string;
  icon: LucideIcon;
  tag: string;
}

const projects: Project[] = [
  { title: 'Zabbix Configuration', client: 'Datakraf Sdn Bhd', icon: Activity, tag: 'Monitoring' },
  { title: 'Zabbix Redeployment', client: 'Hibiscus Petroleum Bhd', icon: Activity, tag: 'Monitoring' },
  { title: 'Zabbix Installation', client: 'Malaysian Palm Oil Board', icon: Activity, tag: 'Monitoring' },
  { title: 'Proxmox Server Installation', client: 'Perda Ventures Icc Sdn Bhd', icon: Server, tag: 'Infrastructure' },
  { title: 'Network Maintenance', client: 'Perda Ventures Icc Sdn Bhd', icon: Network, tag: 'Networking' },
  { title: 'Server Configuration', client: 'KPKT (Jabatan Bomba dan Penyelamat)', icon: Server, tag: 'Infrastructure' },
  { title: 'Disaster Recovery', client: 'Aizo Digital Works Sdn Bhd', icon: ShieldCheck, tag: 'DR & Backup' },
  { title: 'Disaster Recovery', client: 'Aizo Group Bhd', icon: ShieldCheck, tag: 'DR & Backup' },
  { title: 'Web Development', client: 'RidhoTravel', icon: Globe, tag: 'Development' },
  { title: 'Web Development', client: 'Stellar Engineering Sdn Bhd', icon: Globe, tag: 'Development' },
  { title: 'Linux Training', client: 'SUK Negeri Sembilan', icon: GraduationCap, tag: 'Training' },
  { title: 'Fiber Optic Troubleshoot & Repair', client: 'Jabatan Penjara Pokok Sena', icon: Cable, tag: 'Networking' },
  { title: 'Cymagsys Troubleshoot', client: 'Dr Boo Clinic & Surgery', icon: Stethoscope, tag: 'Healthcare IT' },
  { title: 'Backup Cymagsys', client: 'Chenang Clinic Medical & Surgery', icon: DatabaseBackup, tag: 'Healthcare IT' },
];

interface DigitalProduct {
  title: string;
  desc: string;
}

const digitalProducts: DigitalProduct[] = [
  {
    title: 'Sistem Pengurusan Maklumat ICT Sekolah',
    desc: 'Complete ICT asset and information management system for schools.',
  },
  {
    title: 'Sistem Pengurusan Perpustakaan Sekolah',
    desc: 'School library management with KPM/PSS Dewey Decimal classification.',
  },
  {
    title: 'Sistem Pengurusan Asrama Sekolah',
    desc: 'Hostel management system — attendance, wardens, complaints, and reporting.',
  },
  {
    title: 'KikoMate',
    desc: 'Math learning app designed for children with ADHD — adaptive, engaging, and progress-tracked.',
  },
];

const tagColors: Record<string, string> = {
  Monitoring: 'bg-blue-100 text-blue-700',
  Infrastructure: 'bg-purple-100 text-purple-700',
  Networking: 'bg-emerald-100 text-emerald-700',
  'DR & Backup': 'bg-amber-100 text-amber-700',
  Development: 'bg-cyan-100 text-cyan-700',
  Training: 'bg-rose-100 text-rose-700',
  'Healthcare IT': 'bg-teal-100 text-teal-700',
};

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-ink-50">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects We've Delivered"
          subtitle="From government agencies to oil & gas — real infrastructure work for real organizations."
        />

        {/* Project grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={`${project.title}-${project.client}`} delay={i * 50}>
              <article className="group flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-all duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-600/30">
                  <project.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-ink-900 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-ink-500">{project.client}</p>
                  <span
                    className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tagColors[project.tag] || 'bg-ink-100 text-ink-600'
                    }`}
                  >
                    {project.tag}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Digital Products */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Digital Products"
            title="Software We've Built"
            subtitle="Purpose-built systems running in production — not templates, not demos."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {digitalProducts.map((product, i) => (
              <Reveal key={product.title} delay={i * 100}>
                <article className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10">
                  {/* Dark header */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 px-7 py-6">
                    <div className="absolute inset-0 hero-grid opacity-40" />
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-600/30 blur-2xl" />
                    <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-accent-500/20 blur-2xl" />
                    <h3 className="relative text-lg font-bold text-white leading-snug">
                      {product.title}
                    </h3>
                  </div>
                  {/* Body */}
                  <div className="p-7">
                    <p className="text-sm leading-relaxed text-ink-500">
                      {product.desc}
                    </p>
                    <span className="mt-4 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                      In Production
                    </span>
                  </div>
                  {/* Top accent on hover */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
