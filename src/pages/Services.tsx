import { ArrowRight } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { services } from "../data/services";
import { useDocumentHead } from "../hooks/useDocumentHead";
import { getWhatsAppLink, whatsappMessages } from "../lib/whatsapp";

export default function ServicesPage() {
  useDocumentHead({
    title: "Nos services | Gestalya",
    description:
      "Découvrez l'ensemble des services d'accompagnement administratif proposés par Gestalya : courriers, formulaires, démarches en ligne, suivi de dossiers et organisation de documents.",
  });

  return (
    <div className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Nos services"
            title="Tous nos services d'accompagnement"
            subtitle="Un accompagnement humain, pensé pour vous simplifier l'administratif au quotidien."
            align="left"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-navy-900/5 bg-white p-8 shadow-softer">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900">
                  <service.icon className="h-6 w-6 text-champagne-200" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-navy-900">{service.title}</h2>
                <p className="text-sm leading-relaxed text-navy-500">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-navy-950 px-8 py-12 text-center text-white">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Une situation particulière ?</h2>
            <p className="max-w-xl text-champagne-100/80">
              Chaque situation est différente. Contactez-nous pour évaluer ensemble votre besoin.
            </p>
            <Button
              href={getWhatsAppLink(whatsappMessages.default)}
              variant="secondary"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Contacter Gestalya
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
