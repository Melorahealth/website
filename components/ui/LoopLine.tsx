export function LoopLine({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`loop-line line-draw ${className}`}
      fill="none"
      viewBox="0 0 380 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 174C64 96 111 90 153 136C195 182 222 182 256 125C289 68 341 43 368 76"
        stroke="#7A8F7F"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M55 201C105 133 146 132 186 171C226 210 279 188 306 121"
        stroke="#C98F8A"
        strokeLinecap="round"
        strokeWidth="1.3"
      />
    </svg>
  );
}
