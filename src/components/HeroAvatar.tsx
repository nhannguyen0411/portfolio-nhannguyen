export function HeroAvatar() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8 md:max-w-lg">
      <div className="hero-orb left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <svg
        viewBox="0 0 320 360"
        className="relative z-10 h-auto w-64 md:w-72"
        role="img"
        aria-label="Developer avatar illustration"
      >
        <defs>
          <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd9b6" />
            <stop offset="100%" stopColor="#e8b896" />
          </linearGradient>
          <linearGradient id="shirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#5b21b6" />
          </linearGradient>
          <linearGradient id="laptop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        {/* Laptop */}
        <rect x="60" y="240" width="200" height="12" rx="4" fill="#475569" />
        <rect x="70" y="180" width="180" height="65" rx="6" fill="url(#laptop)" />
        <rect x="78" y="188" width="164" height="48" rx="4" fill="#1e293b" />
        <rect x="88" y="198" width="60" height="6" rx="2" fill="#7c3aed" opacity="0.8" />
        <rect x="88" y="210" width="100" height="4" rx="2" fill="#334155" />
        <rect x="88" y="220" width="80" height="4" rx="2" fill="#334155" />
        {/* Body */}
        <ellipse cx="160" cy="320" rx="90" ry="20" fill="#0f172a" opacity="0.5" />
        <path
          d="M110 200 Q160 170 210 200 L220 280 Q160 300 100 280 Z"
          fill="url(#shirt)"
        />
        {/* Head */}
        <circle cx="160" cy="130" r="55" fill="url(#skin)" />
        <ellipse cx="160" cy="95" rx="58" ry="25" fill="#1e1b4b" />
        {/* Face */}
        <circle cx="140" cy="128" r="5" fill="#1e293b" />
        <circle cx="180" cy="128" r="5" fill="#1e293b" />
        <path d="M150 148 Q160 158 170 148" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Glasses */}
        <rect x="125" y="118" width="30" height="22" rx="6" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
        <rect x="165" y="118" width="30" height="22" rx="6" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
        <line x1="155" y1="129" x2="165" y2="129" stroke="#7c3aed" strokeWidth="2" />
        {/* Arms */}
        <path d="M110 210 Q80 230 90 250" stroke="url(#shirt)" strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d="M210 210 Q240 230 230 250" stroke="url(#shirt)" strokeWidth="18" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
