"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "About" },
  { href: "#projects", label: "Projects" },
];

export function Navbar() {
  const hydrated = useHydrated();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8"
      initial={hydrated ? { opacity: 0, y: -12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled ? "bg-bg-primary/70 backdrop-blur-[12px]" : "bg-transparent"
        }`}
      >
        <a href="#hero" className="flex shrink-0 items-center" aria-label="Home">
          <Image
            src="/logo.webp"
            alt="Nguyễn Trọng Nhân"
            width={1536}
            height={1024}
            className="h-8 w-auto object-contain md:h-10"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-highlight"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 bg-text-muted transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-text-muted transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-text-muted transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-accent-purple/20 bg-bg-secondary/95 p-4 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-accent-purple/10 hover:text-text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
