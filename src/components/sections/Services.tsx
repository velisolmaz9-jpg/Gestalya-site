import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-offwhite py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Nos services"
            title="L'administratif, simplement."
            subtitle="Nous vous aidons à gérer les démarches qui vous prennent du temps."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-navy-900/5 bg-white p-7 shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 transition-colors duration-300 group-hover:bg-gold">
                  <service.icon
                    className="h-6 w-6 text-champagne-200 transition-colors duration-300 group-hover:text-navy-900"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-navy-500">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/nos-services" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            Voir tous les services
          </Button>
        </div>
      </Container>
    </section>
  );
}
