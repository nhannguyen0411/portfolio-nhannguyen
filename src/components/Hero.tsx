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
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <motion.div
            className="order-first lg:order-none"
            initial={hydrated ? { opacity: 0, scale: 0.95 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <HeroAvatar />
          </motion.div>

          <motion.div
            initial={hydrated ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <p className="text-sm text-text-muted">
              Hello! I Am{" "}
              <span className="font-semibold text-highlight">{personal.name}</span>
            </p>

            <p className="mt-8 text-base text-highlight underline decoration-highlight/60 underline-offset-4">
              A Developer who
            </p>

            <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-text-primary sm:text-5xl md:text-6xl">
              Builds ideas
              <br />
              into scalable{" "}
              <span className="bg-gradient-to-r from-accent-purple via-highlight to-accent-purple bg-clip-text text-transparent">
                products...
              </span>
            </h1>
            <p className="mt-3 text-sm text-text-muted">
              Because code should grow with your vision, not against it.
            </p>

            <span
              className="pointer-events-none absolute -right-10 top-6 hidden h-20 w-20 rounded-full border border-accent-purple/30 blur-[1px] lg:block"
              aria-hidden
            />
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
