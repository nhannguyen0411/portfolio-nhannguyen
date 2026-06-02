import { TechBadges } from "./TechBadges";
import { ScrollReveal } from "./ScrollReveal";

export function SeekingBanner() {
  return (
    <section id="seeking" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="font-display text-2xl font-semibold leading-snug text-text-primary md:text-3xl lg:text-4xl">
            I&apos;m currently looking to join a full-time engineering team that ships great
            products and values craft.
          </p>
        </ScrollReveal>
        <TechBadges />
      </div>
    </section>
  );
}
