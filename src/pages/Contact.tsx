import { ArrowRight, Mail, MessageCircle, Clock } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { siteConfig } from "../config/site.config";
import { getWhatsAppLink, whatsappMessages } from "../lib/whatsapp";
import { useDocumentHead } from "../hooks/useDocumentHead";

export default function Contact() {
  useDocumentHead({
    title: "Contact | Gestalya",
    description: "Contactez Gestalya par WhatsApp ou par e-mail pour être accompagné dans vos démarches administratives.",
  });

  return (
    <div className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre besoin."
            subtitle="Le plus simple est de nous écrire directement. Nous vous répondons rapidement pour comprendre votre situation."
            align="left"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-navy-900/5 bg-white p-8 shadow-softer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-semibold text-navy-900">WhatsApp</h2>
              <p className="text-sm text-navy-500">
                Le moyen le plus rapide de nous joindre pour échanger sur votre besoin.
              </p>
              <Button
                href={getWhatsAppLink(whatsappMessages.default)}
                variant="primary"
                className="mt-auto w-fit"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Écrire sur WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-navy-900/5 bg-white p-8 shadow-softer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900">
                <Mail className="h-6 w-6 text-champagne-200" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-semibold text-navy-900">E-mail</h2>
              <p className="text-sm text-navy-500">Pour toute demande écrite ou envoi de documents.</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-auto w-fit text-sm font-semibold text-gold hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex items-center gap-3 rounded-2xl bg-champagne-50 px-6 py-5 text-sm text-navy-600">
            <Clock className="h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
            Nous faisons notre possible pour vous répondre dans les meilleurs délais.
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
