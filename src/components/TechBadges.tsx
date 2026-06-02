"use client";

import { techBadgeRow1, techBadgeRow2 } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

const labelMap: Record<string, string> = {
  react: "React",
  nextdotjs: "Next.js",
  flutter: "Flutter",
  typescript: "TypeScript",
  swift: "Swift",
  nodedotjs: "Node.js",
  figma: "Figma",
  tailwindcss: "TailwindCSS",
  firebase: "Firebase",
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  webrtc: "WebRTC",
  arkit: "ARKit",
  wagmi: "Wagmi",
};

const customIcons: Record<string, string> = {
  webrtc: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
  arkit: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z",
  wagmi:
    "M2.7391 13.2065c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696v5.4782c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6131-1.3696 1.3695-1.3696s1.3696.6132 1.3696 1.3696v8.2174c0 .7564-.6132 1.3695-1.3696 1.3695H1.3696C.6132 17.3152 0 16.7021 0 15.9457V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696zm19.4348 4.4348c1.0085 0 1.8261-.8176 1.8261-1.826 0-1.0086-.8176-1.8262-1.826-1.8262-1.0086 0-1.8262.8176-1.8262 1.8261 0 1.0085.8176 1.826 1.8261 1.826z",
};

function TechIcon({ slug }: { slug: string }) {
  const label = labelMap[slug] ?? slug;
  const custom = customIcons[slug];

  return (
    <div
      className="tech-badge flex h-14 w-14 flex-col items-center justify-center rounded-full border border-accent-purple/25 bg-bg-secondary/80 p-2 md:h-16 md:w-16"
      title={label}
    >
      {custom ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7" aria-hidden>
          <path
            d={custom}
            className={slug === "wagmi" ? "fill-[#0D63F8]" : "fill-accent-cyan"}
          />
        </svg>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`}
          alt={label}
          className="h-6 w-6 brightness-0 invert opacity-90 md:h-7 md:w-7"
          loading="lazy"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.replaceWith(
              Object.assign(document.createElement("span"), {
                className: "font-mono text-[10px] font-bold text-accent-cyan",
                textContent: label.slice(0, 2).toUpperCase(),
              }),
            );
          }}
        />
      )}
    </div>
  );
}

export function TechBadges() {
  const rows = [techBadgeRow1, techBadgeRow2];

  return (
    <div className="mt-10 flex flex-col items-center gap-5">
      {rows.map((row, rowIndex) => (
        <ScrollReveal key={rowIndex} delay={rowIndex * 0.1} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {row.map((slug) => (
              <TechIcon key={slug} slug={slug} />
            ))}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
