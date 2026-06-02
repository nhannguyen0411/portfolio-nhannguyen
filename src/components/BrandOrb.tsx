import Image from "next/image";

export function BrandOrb() {
  const dots = Array.from({ length: 8 }, (_, i) => ({
    angle: (i * 360) / 8,
  }));

  return (
    <section
      id="brand"
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-4 py-24 md:min-h-[480px]"
      aria-label="Brand"
    >
      <div
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[400px] md:w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden
      />

      <svg
        className="orbit-ring absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 md:h-80 md:w-80"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="100" r="95" stroke="rgba(167,139,250,0.15)" strokeWidth="1" />
        <circle
          cx="100"
          cy="100"
          r="75"
          stroke="rgba(124,58,237,0.2)"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />
      </svg>

      <div
        className="orbit-dot absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 md:h-96 md:w-96"
        aria-hidden
      >
        {dots.map((d) => (
          <span
            key={d.angle}
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-highlight shadow-[0_0_10px_var(--glow)]"
            style={{
              transformOrigin: "50% 144px",
              transform: `rotate(${d.angle}deg) translateY(-144px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 drop-shadow-[0_0_60px_var(--glow)]">
        <Image
          src="/logo.webp"
          alt="Nguyễn Trọng Nhân"
          width={1536}
          height={1024}
          className="h-28 w-auto object-contain md:h-36 lg:h-40"
        />
      </div>
    </section>
  );
}
