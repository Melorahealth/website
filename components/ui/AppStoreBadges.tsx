import { MELORA_ANDROID_URL } from "@/lib/app-links";

type AppStoreBadgesProps = {
  className?: string;
};

const badge =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full border px-4 py-1.5 text-left text-white";

/**
 * Store badges for the mobile app, drawn for dark (sage) surfaces.
 *
 * Android is live on Google Play. The iOS app is not released yet, so its badge is
 * deliberately not a link: swap the <span> for an <a> once the App Store listing exists.
 */
export function AppStoreBadges({ className = "" }: AppStoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2.5 ${className}`}>
      <a
        aria-label="Get the Melora app on Google Play"
        className={`${badge} border-white/25 bg-white/5 transition duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25`}
        href={MELORA_ANDROID_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg aria-hidden className="h-[18px] w-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/70">
            Get it on
          </span>
          <span className="mt-1 text-sm font-semibold">Google Play</span>
        </span>
      </a>
      <span
        aria-label="Melora for iPhone, coming soon to the App Store"
        className={`${badge} cursor-default border-dashed border-white/20 text-white/70`}
        role="img"
      >
        <svg aria-hidden className="h-[18px] w-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-gold">
            Coming soon
          </span>
          <span className="mt-1 text-sm font-semibold">App Store</span>
        </span>
      </span>
    </div>
  );
}
