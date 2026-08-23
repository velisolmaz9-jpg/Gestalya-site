import { Check } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { siteConfig } from "../../config/site.config";
import { getWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";

const included = [
  "Accompagnement administratif",
  "Aide aux démarches",
  "Suivi de vos dossiers",
  "Assistance par WhatsApp",
  "Organisation de vos documents",
];

export default function Pricing() {
  return (
    <section id="tarifs" className="scroll-mt-24 bg-offwhite py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <Reveal>
          <SectionHeading eyebrow="Offre" title="Un accompagnement simple et transparent." />
        </Reveal>

        <Reveal delay={100} className="w-full max-w-lg">
          <div className="relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-8 shadow-card sm:p-10">
            <div
              className="absolute right-0 top-0 h-32 w-32 -translate-y-1/3 translate-x-1/3 rounded-full bg-champagne-200/50"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center gap-2 text-center">
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold text-navy-900">
                  {siteConfig.price.amount}
                  {siteConfig.price.currency}
                </span>
                <span className="text-base font-medium text-navy-500">/ {siteConfig.price.period}</span>
              </div>
              <span className="rounded-full bg-champagne-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                Sans engagement
              </span>
            </div>

            <ul className="relative mt-8 flex flex-col gap-4">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy-900">
                    <Check className="h-3.5 w-3.5 text-champagne-200" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-navy-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-9">
              <Button href={getWhatsAppLink(whatsappMessages.pricing)} variant="primary" className="w-full">
                Commencer maintenant
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
