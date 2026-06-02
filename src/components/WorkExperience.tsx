import { workExperienceCards } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

const icons: Record<string, JSX.Element> = {
  rocket: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      <defs>
        <linearGradient id="ig1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig1)"
        d="M24 4l4 14h14l-11 9 4 17-11-9-11 9 4-17-11-9h14z"
        filter="drop-shadow(0 0 8px rgba(124,58,237,0.6))"
      />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      <path
        fill="#fb923c"
        d="M8 8h32v22H20l-8 8V8z"
        filter="drop-shadow(0 0 8px rgba(251,146,60,0.5))"
      />
      <circle cx="18" cy="19" r="2.5" fill="#fff" />
      <circle cx="24" cy="19" r="2.5" fill="#fff" />
      <circle cx="30" cy="19" r="2.5" fill="#fff" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      <rect
        x="6"
        y="12"
        width="28"
        height="24"
        rx="4"
        fill="#60a5fa"
        filter="drop-shadow(0 0 8px rgba(96,165,250,0.5))"
      />
      <path d="M34 18l10 6v-12l-10 6z" fill="#93c5fd" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      <path
        fill="#4ade80"
        d="M24 6C14 6 8 18 8 28c0 8 6 14 16 14 10 0 16-6 16-14C40 18 34 6 24 6zm0 8c5 8 5 16 0 24-5-8-5-16 0-24z"
        filter="drop-shadow(0 0 8px rgba(74,222,128,0.5))"
      />
    </svg>
  ),
};

export function WorkExperience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">Work Experience</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {workExperienceCards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 0.08}>
              <a href={card.href} className="exp-card group flex gap-5 p-6">
                <div className="flex shrink-0 items-start pt-1">{icons[card.icon]}</div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-highlight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.description}</p>
                  <span className="mt-4 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple group-hover:text-highlight">
                    Learn more →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
