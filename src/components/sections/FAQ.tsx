import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import Reveal from "../ui/Reveal";
import { faqItems } from "../../data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-offwhite py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Questions fréquentes" title="Vous vous posez des questions ?" />
        </Reveal>
        <Reveal delay={100} className="mx-auto w-full max-w-2xl">
          <Accordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
