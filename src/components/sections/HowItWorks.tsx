import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { steps } from "../../data/steps";

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="scroll-mt-24 bg-champagne-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="Notre méthode" title="Comment ça marche ?" />
        </Reveal>

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-navy-900/10 lg:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <div className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-heading text-lg font-bold text-champagne-200 shadow-soft">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-navy-900">{step.title}</h3>
                <p className="text-sm text-navy-500">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
