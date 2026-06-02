export const personal = {
  name: "Nguyen Trong Nhan",
  role: "Software Engineer",
  location: "Ho Chi Minh City, Vietnam",
  email: "trongnhan.nguyen1104@gmail.com",
  company: "2FSOFT",
  employment: "Freelance",
  zaloPhone: "0776766725",
  linkedin: "https://www.linkedin.com/in/nhannt1104/",
};

export const typewriterRoles = [
  "Software Engineer",
  "React Developer",
  "Mobile Engineer",
];

export const workExperienceCards = [
  {
    id: "koffi",
    icon: "rocket",
    title: "Koffi Ecosystem",
    description: "Enterprise SaaS — e-signature, invoicing, HR & tax",
    href: "#project-koffi",
  },
  {
    id: "buddy",
    icon: "chat",
    title: "Buddy Talk",
    description: "AI-powered language learning with real-time audio",
    href: "#project-buddy-talk",
  },
  {
    id: "mock",
    icon: "video",
    title: "Mock Interview",
    description: "Real-time video interview platform with WebRTC",
    href: "#project-mock-interview",
  },
  {
    id: "green2fit",
    icon: "leaf",
    title: "Green2Fit",
    description: "AR iOS app for indoor plant visualization",
    href: "#project-green2fit",
  },
];

export const techBadgeRow1 = [
  "react",
  "nextdotjs",
  "flutter",
  "typescript",
  "swift",
  "nodedotjs",
  "figma",
] as const;

export const techBadgeRow2 = [
  "tailwindcss",
  "firebase",
  "mongodb",
  "postgresql",
  "webrtc",
  "arkit",
  "wagmi",
] as const;

export type FeaturedProject = {
  id: string;
  slug: string;
  title: string;
  description: string;
  metrics?: string[];
  tags: string[];
  layout: "text-left" | "text-right";
  device: "browser" | "phone";
  mockupVariant: "dashboard" | "chat" | "video" | "aac" | "ar" | "defi";
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "koffi",
    slug: "koffi",
    title: "Koffi Ecosystem",
    description:
      "A multi-product SaaS platform supporting enterprise workflows — e-signature with dynamic PDF positioning, invoice sync and classification, PIT tax management, and HR flows. Built across web and mobile for ZAMO.",
    metrics: ["↓ 30% page load time", "Removed browser extension dependency"],
    tags: ["React", "Next.js", "Flutter", "TailwindCSS", "Turborepo", "TanStack"],
    layout: "text-left",
    device: "browser",
    mockupVariant: "dashboard",
  },
  {
    id: "buddy",
    slug: "buddy-talk",
    title: "Buddy Talk",
    description:
      "An AI-powered mobile language learning app where users practice speaking through real-time conversational exercises. Reduced AI response latency from 3s to 1.7s via chunked audio streaming architecture.",
    metrics: ["↓ Response time: 3s → 1.7s"],
    tags: ["Flutter", "Dart", "Riverpod", "Audio Streaming", "REST API"],
    layout: "text-right",
    device: "phone",
    mockupVariant: "chat",
  },
  {
    id: "mock",
    slug: "mock-interview",
    title: "Mock Interview",
    description:
      "A browser-based mock interview platform supporting real-time video and audio sessions with AI or LinkedIn-based interviewers. Integrated WebRTC via Janus Gateway with OIDC/Keycloak authentication.",
    tags: ["React", "WebRTC", "Janus", "Keycloak", "TanStack"],
    layout: "text-left",
    device: "browser",
    mockupVariant: "video",
  },
  {
    id: "ibook",
    slug: "ibook",
    title: "IBook",
    description:
      "An offline-first AAC communication app for students with developmental delays. Users compose phrases from image buttons and the app reads them aloud. Designed for real-world classroom use with eventual consistency.",
    tags: ["Flutter", "flutter_bloc", "sqflite", "flutter_tts", "Offline-first"],
    layout: "text-right",
    device: "phone",
    mockupVariant: "aac",
  },
  {
    id: "green2fit",
    slug: "green2fit",
    title: "Green2Fit",
    description:
      "An AR iOS application for a Nordic indoor plant company. Users point their camera at any room and place plants or panels in real-time with accurate real-world scaling — eliminating manual design cycles.",
    tags: ["Swift", "ARKit", "RealityKit", "SwiftUI"],
    layout: "text-left",
    device: "phone",
    mockupVariant: "ar",
  },
  {
    id: "defi",
    slug: "defi-saving-platform",
    title: "DeFi Saving Platform",
    description:
      "A decentralized savings web app integrating Aave yield vaults. Users deposit tokens and earn hourly interest displayed in real-time from on-chain data. Includes wallet connection and full deposit/withdrawal flows.",
    tags: ["React", "Wagmi", "Viem", "Aave SDK", "TailwindCSS"],
    layout: "text-right",
    device: "browser",
    mockupVariant: "defi",
  },
];
