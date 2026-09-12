export function DerrickMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 52"
      fill="none"
      strokeWidth="2.2"
      aria-hidden="true"
      className={`stroke-lime ${className}`}
    >
      <path d="M6 50 L15.5 4 M34 50 L24.5 4" />
      <path d="M13.4 15H26.6M11.2 26H28.8M9 37H31" />
      <path
        d="M13.4 15 L28.8 26 M26.6 15 L11.2 26 M11.2 26 L31 37 M28.8 26 L9 37 M9 37 L34 50 M31 37 L6 50"
        stroke="rgba(198,242,78,.4)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
