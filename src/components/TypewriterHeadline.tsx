"use client";

import { typewriterRoles } from "@/data/portfolio";
import { useEffect, useState } from "react";

export function TypewriterHeadline() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterRoles[roleIndex];
    const speed = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % typewriterRoles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <h2 className="w-full overflow-visible font-display text-[clamp(1.35rem,4.2vw,3.75rem)] font-bold leading-tight text-text-primary">
      <span className="inline-flex max-w-full flex-nowrap items-baseline whitespace-nowrap pr-[0.2em]">
        <span className="shrink-0">I&apos;m a&nbsp;</span>
        <span className="shrink-0 text-highlight">
          {text}
          <span className="typewriter-cursor inline-block text-accent-purple">|</span>
        </span>
      </span>
    </h2>
  );
}
