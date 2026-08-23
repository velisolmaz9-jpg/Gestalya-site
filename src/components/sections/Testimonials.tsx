import { MessageSquareHeart } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-champagne-50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <SectionHeading eyebrow="Avis clients" title="Ce que nos clients en pensent" />
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal delay={100}>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-navy-900/15 bg-white/60 px-8 py-14 text-center">
              <MessageSquareHeart className="h-8 w-8 text-gold" aria-hidden="true" />
              <p className="max-w-md text-navy-600">Les premiers avis de nos clients arriveront bientôt.</p>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl bg-white p-6 shadow-softer">
                <p className="text-sm italic text-navy-600">“{testimonial.text}”</p>
                <p className="mt-4 text-sm font-semibold text-navy-900">
                  {testimonial.name}
                  {testimonial.role && <span className="font-normal text-navy-400"> — {testimonial.role}</span>}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
