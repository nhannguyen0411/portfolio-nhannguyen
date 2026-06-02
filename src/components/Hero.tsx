"use client";

import { HeroAvatar } from "@/components/HeroAvatar";
import { TypewriterHeadline } from "@/components/TypewriterHeadline";
import { personal } from "@/data/portfolio";
import { useHydrated } from "@/hooks/useHydrated";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  const hydrated = useHydrated();

  return (
    <section id="hero" className="scroll-mt-24 px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-6xl">
        {/* Part A — Greeting + Avatar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <motion.div
            initial={hydrated ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-text-muted">
              Hello! I Am{" "}
              <span className="font-semibold text-highlight">{personal.name}</span>
            </p>

            <blockquote className="mt-8 font-display text-3xl font-bold leading-snug text-text-primary md:text-4xl lg:text-5xl">
              &ldquo;Turns complex problems
              <br />
              into elegant products.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm italic text-text-muted">
              Because if the code doesn&apos;t scale, what else can?
            </p>
          </motion.div>

          <motion.div
            className="order-first lg:order-none"
            initial={hydrated ? { opacity: 0, scale: 0.95 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="mb-2 text-center text-sm text-text-muted lg:text-left">
              A developer who
            </p>
            <HeroAvatar />
          </motion.div>
        </div>

        {/* Part B — Identity */}
        <ScrollReveal className="mt-12 overflow-visible md:mt-16">
          <TypewriterHeadline />

          <div className="max-w-3xl">
          <p className="mt-6 flex flex-wrap items-center gap-2 text-text-muted">
            Currently, I&apos;m a{" "}
            <span className="font-semibold text-text-primary">{personal.employment}</span> Software
            Engineer for{" "}
            <span className="inline-flex items-center gap-2 font-semibold text-text-primary">
              <span
                className="h-2.5 w-2.5 rounded-full bg-accent-purple shadow-[0_0_12px_var(--glow)]"
                aria-hidden
              />
              {personal.company}
            </span>
          </p>

          <p className="mt-6 text-base leading-relaxed text-text-muted md:text-lg">
            A product-focused engineer with 5+ years of experience building SaaS web apps and
            mobile products. I craft systems for e-signature, AI-powered language learning, AR
            visualization, and real-time interviews — turning business complexity into intuitive
            user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/cv.pdf" download className="btn-primary">
              Download CV
            </a>
            <a href="#projects" className="btn-ghost">
              See Projects ↓
            </a>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
