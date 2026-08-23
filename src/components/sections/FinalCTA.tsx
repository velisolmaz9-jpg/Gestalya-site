import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { getWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
            Marre de perdre du temps avec vos démarches administratives ?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="max-w-xl text-champagne-100/80">
            Confiez-nous votre administratif et concentrez-vous sur l'essentiel.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Button
            href={getWhatsAppLink(whatsappMessages.finalCta)}
            variant="secondary"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Contacter Gestalya
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
