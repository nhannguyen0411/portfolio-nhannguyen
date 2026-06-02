import type { FeaturedProject } from "@/data/portfolio";

type DeviceMockupProps = {
  device: FeaturedProject["device"];
  variant: FeaturedProject["mockupVariant"];
};

function WireframeContent({ variant }: { variant: FeaturedProject["mockupVariant"] }) {
  switch (variant) {
    case "dashboard":
      return (
        <div className="space-y-3 p-4">
          <div className="flex gap-2">
            <div className="h-8 w-24 rounded bg-violet-200" />
            <div className="h-8 flex-1 rounded bg-slate-200" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 rounded-lg bg-violet-100" />
            ))}
          </div>
          <div className="h-24 rounded-lg bg-slate-100" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 rounded bg-slate-100" />
            <div className="h-12 rounded bg-violet-100" />
          </div>
        </div>
      );
    case "chat":
      return (
        <div className="space-y-3 p-4">
          <div className="ml-auto h-10 w-3/4 rounded-2xl rounded-tr-sm bg-violet-200" />
          <div className="h-10 w-2/3 rounded-2xl rounded-tl-sm bg-slate-200" />
          <div className="ml-auto h-10 w-4/5 rounded-2xl rounded-tr-sm bg-violet-200" />
          <div className="mt-6 flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-2">
            <span className="h-3 w-3 animate-pulse rounded-full bg-violet-500" />
            <div className="h-2 flex-1 rounded bg-violet-200" />
          </div>
        </div>
      );
    case "video":
      return (
        <div className="p-4">
          <div className="relative aspect-video rounded-lg bg-slate-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur" />
            </div>
            <div className="absolute bottom-2 left-2 right-2 flex gap-2">
              <div className="h-8 flex-1 rounded bg-white/10" />
              <div className="h-8 w-8 rounded bg-red-400/80" />
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-14 flex-1 rounded bg-slate-200" />
            ))}
          </div>
        </div>
      );
    case "aac":
      return (
        <div className="grid grid-cols-3 gap-2 p-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-lg text-lg ${i === 4 ? "bg-violet-300" : "bg-slate-200"}`}
            >
              {["👋", "🍎", "🏠", "❤️", "▶️", "🎵", "📚", "⭐", "✅"][i]}
            </div>
          ))}
        </div>
      );
    case "ar":
      return (
        <div className="relative aspect-[9/16] bg-gradient-to-b from-slate-300 to-slate-400 p-4">
          <div className="absolute bottom-8 left-1/2 h-20 w-16 -translate-x-1/2 rounded-full bg-green-400/80 blur-sm" />
          <div className="absolute bottom-16 left-1/2 h-28 w-20 -translate-x-1/2 rounded-t-full bg-green-500" />
          <div className="absolute top-4 left-4 rounded bg-black/40 px-2 py-1 text-[10px] text-white">
            AR View
          </div>
        </div>
      );
    case "defi":
      return (
        <div className="space-y-3 p-4">
          <div className="rounded-xl bg-violet-100 p-4">
            <p className="text-[10px] uppercase text-violet-600">Total Balance</p>
            <p className="font-mono text-xl font-bold text-slate-800">$12,450.00</p>
            <p className="text-xs text-green-600">+4.2% APY</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-slate-100 p-3 text-center text-xs font-semibold text-slate-600">
              Deposit
            </div>
            <div className="rounded-lg border border-violet-300 bg-violet-50 p-3 text-center text-xs font-semibold text-violet-700">
              Withdraw
            </div>
          </div>
          <div className="h-16 rounded-lg bg-slate-100" />
        </div>
      );
    default:
      return null;
  }
}

export function DeviceMockup({ device, variant }: DeviceMockupProps) {
  if (device === "phone") {
    return (
      <div className="mockup-frame mx-auto w-full max-w-[260px]">
        <div className="flex items-center justify-center bg-slate-200 py-2">
          <div className="h-1 w-12 rounded-full bg-slate-400" />
        </div>
        <WireframeContent variant={variant} />
      </div>
    );
  }

  return (
    <div className="mockup-frame w-full">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-2 h-4 flex-1 rounded bg-white" />
      </div>
      <WireframeContent variant={variant} />
    </div>
  );
}
