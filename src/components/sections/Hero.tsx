import { ArrowRight, FileText, FolderOpen, MessageSquareText, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { getWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-champagne-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy-100/50 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col items-start gap-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-champagne-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy-700">
              Accompagnement administratif
            </span>
            <h1 className="text-4xl font-bold leading-tight text-navy-900 sm:text-5xl lg:text-[3.25rem]">
              Votre bras droit administratif.
            </h1>
            <p className="text-lg font-medium text-navy-700">
              Vous nous transmettez vos documents.
              <br />
              Nous nous occupons du reste.
            </p>
            <p className="max-w-xl text-base text-navy-500 sm:text-lg">
              Gestalya vous accompagne dans vos démarches administratives et vous aide à gagner du temps,
              éviter les erreurs et avancer sereinement.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                href={getWhatsAppLink(whatsappMessages.hero)}
                variant="primary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Être accompagné
              </Button>
              <Button href="#services" variant="outline" external={false}>
                Découvrir nos services
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center sm:h-96">
            <div
              className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 sm:h-80 sm:w-80"
              aria-hidden="true"
            />

            <div className="absolute -left-2 top-6 w-48 -rotate-6 rounded-2xl bg-white p-4 shadow-card sm:left-0 sm:top-8 sm:w-56">
              <FileText className="h-6 w-6 text-gold" aria-hidden="true" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-navy-100" />
                <div className="h-1.5 w-4/5 rounded-full bg-navy-100" />
                <div className="h-1.5 w-3/5 rounded-full bg-navy-100" />
              </div>
            </div>

            <div className="absolute right-0 top-0 flex w-40 rotate-6 items-center gap-3 rounded-2xl bg-white p-4 shadow-card sm:w-44">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy-900">
                <MessageSquareText className="h-5 w-5 text-champagne-200" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-navy-700">Suivi en temps réel</p>
            </div>

            <div className="absolute bottom-2 left-4 flex w-44 -rotate-3 items-center gap-3 rounded-2xl bg-white p-4 shadow-card sm:bottom-6">
              <FolderOpen className="h-6 w-6 flex-shrink-0 text-gold" aria-hidden="true" />
              <p className="text-xs font-medium text-navy-700">Dossiers organisés</p>
            </div>

            <div className="absolute bottom-16 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-champagne-300 shadow-card sm:right-6">
              <CheckCircle2 className="h-6 w-6 text-navy-900" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
