import { featuredProjects } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title mt-2">Featured Projects</h2>
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          {featuredProjects.map((project, index) => {
            const textBlock = (
              <div className="flex flex-col justify-center">
                <p className="section-label">Featured Project</p>
                <h3
                  id={`project-${project.slug}`}
                  className="mt-3 font-display text-3xl font-bold text-text-primary md:text-4xl"
                >
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                  {project.description}
                </p>
                {project.metrics && (
                  <div className="mt-4 space-y-1">
                    {project.metrics.map((m) => (
                      <p key={m} className="font-mono text-sm font-semibold text-highlight">
                        {m}
                      </p>
                    ))}
                  </div>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-highlight underline decoration-highlight/40 underline-offset-4 transition-colors hover:text-text-primary"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );

            return (
              <ScrollReveal key={project.id} delay={index * 0.05}>
                <article className="mx-auto max-w-2xl">{textBlock}</article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
