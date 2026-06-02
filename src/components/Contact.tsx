"use client";

import { personal } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

function ZaloIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.306-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.945 1.945 1.9453z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  const [toast, setToast] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  }, []);

  return (
    <section id="contact" className="scroll-mt-24 border-t border-accent-purple/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="section-label">Contact</p>
          <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-text-primary md:text-3xl">
            I&apos;m currently looking to join a full-time engineering team that ships great
            products and values craft. Have a role or project in mind? Let&apos;s connect.
          </h2>

          <button
            type="button"
            onClick={copyEmail}
            className="mt-8 block text-left font-mono text-base text-accent-cyan underline-offset-4 transition-colors hover:text-highlight hover:underline md:text-lg"
          >
            {personal.email}
          </button>

          <div className="mt-8 flex items-center gap-6">
            <a
              href={`https://zalo.me/${personal.zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-highlight"
              aria-label="Zalo"
            >
              <ZaloIcon />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-highlight"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-accent-purple/30 bg-bg-secondary px-5 py-3 text-sm text-text-primary shadow-[0_0_30px_var(--glow)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            role="status"
          >
            Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
