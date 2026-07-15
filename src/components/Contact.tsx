import { MapPin, Clock, Phone, Mail, CheckCircle2, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';

const ADDRESS = 'A/9, Taman Sayang, Jalan Putra 06250 Alor Setar, Kedah';
const MAPS_URL = 'https://maps.google.com/?q=A/9+Taman+Sayang+Jalan+Putra+Alor+Setar+Kedah';
const WHATSAPP_NUMBER = '60105448902';
const WHATSAPP_MSG = encodeURIComponent(
  'Hi ScanVX! I would like to enquire about your IT services and get a free quote.'
);

const contactItems = [
  {
    icon: MapPin,
    label: 'Operation Office',
    value: ADDRESS,
    actions: true,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday: 8am – 10pm\nSaturday & Sunday: Closed',
    actions: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+6010 544 8902',
    actions: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@scanvx.my',
    actions: false,
  },
];

const waBenefits = [
  'Fast, direct conversation',
  'Prefilled enquiry message',
  'Continue securely in WhatsApp',
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/20"
    >
      {copied ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? 'Copied!' : 'Copy address'}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-ink-50">
      <div className="container-mx container-px">
        {/* Heading */}
        <Reveal className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-600">
            Contact Details
          </span>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Reach out for a free consultation — we respond within 24 hours.
          </p>
        </Reveal>

        <div className="overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/15 lg:grid lg:grid-cols-2">
          {/* LEFT — dark panel */}
          <Reveal className="relative overflow-hidden bg-ink-900 p-8 sm:p-10 lg:p-12">
            {/* subtle grid bg */}
            <div className="absolute inset-0 hero-grid opacity-40" />
            {/* decorative icon watermark */}
            <div className="pointer-events-none absolute right-4 top-6 opacity-5">
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
                <rect x="2" y="2" width="8" height="8" rx="1" />
                <rect x="14" y="2" width="8" height="8" rx="1" />
                <rect x="2" y="14" width="8" height="8" rx="1" />
                <line x1="18" y1="14" x2="18" y2="22" />
                <line x1="14" y1="18" x2="22" y2="18" />
                <line x1="6" y1="6" x2="18" y2="6" />
                <line x1="12" y1="2" x2="12" y2="10" />
              </svg>
            </div>

            <div className="relative space-y-6">
              {contactItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <item.icon className="h-5 w-5 text-brand-300" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
                        {item.label}
                      </h4>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ink-200">
                        {item.value}
                      </p>
                      {item.actions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <CopyButton text={ADDRESS} />
                          <a
                            href={MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-brand-500/50 bg-brand-600/20 px-3 py-1.5 text-xs font-medium text-brand-300 transition-all hover:bg-brand-600/40"
                          >
                            <MapPin className="h-3.5 w-3.5" />
                            Open in Maps
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                      {item.label === 'Phone' && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          <a
                            href="tel:+60105448902"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/20"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            Call now
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — light panel */}
          <Reveal delay={150} className="flex flex-col justify-center bg-white p-8 sm:p-10 lg:p-12">
            {/* WA icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-[#25D366]/30">
              <MessageCircle className="h-8 w-8 text-white" strokeWidth={1.75} />
            </div>

            <span className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Direct Enquiry
            </span>
            <h3 className="mt-2 text-2xl font-bold text-ink-900 sm:text-3xl">
              Speak with our team
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-500">
              Tell us what you need and our team will assist with service
              enquiries, project requirements, and quotation requests.
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-3">
              {waBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#25D366]" strokeWidth={2} />
                  {b}
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20bc5a] hover:shadow-[#25D366]/50 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              Chat on WhatsApp
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 text-center text-xs text-ink-400">
              WhatsApp will open in a new tab. Replies subject to business-hour availability.
            </p>

            {/* Divider */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-ink-100" />
              <span className="text-xs text-ink-400">or send a message</span>
              <div className="h-px flex-1 bg-ink-100" />
            </div>

            {/* Quick email */}
            <a
              href="mailto:info@scanvx.my?subject=IT Services Enquiry"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-500/30 bg-brand-50 px-6 py-3.5 text-sm font-semibold text-brand-700 transition-all hover:border-brand-500 hover:bg-brand-100"
            >
              <Mail className="h-4 w-4" />
              Send an Email
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
