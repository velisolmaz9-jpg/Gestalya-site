import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { benefits } from "../../data/benefits";

export default function WhyGestalya() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="Nos engagements" title="Pourquoi choisir Gestalya ?" light />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <benefit.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <p className="font-medium text-champagne-50">{benefit.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <blockquote className="mx-auto max-w-2xl text-center font-heading text-xl font-semibold italic text-champagne-100 sm:text-2xl">
            « Vous n'avez pas besoin de tout comprendre.
            <br />
            Vous avez simplement besoin de savoir à qui faire confiance. »
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
