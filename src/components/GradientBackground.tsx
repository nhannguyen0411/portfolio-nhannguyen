export function GradientBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="blob blob-top" />
        <div className="blob blob-bottom" />
      </div>
      <div className="noise-overlay" aria-hidden />
    </>
  );
}
