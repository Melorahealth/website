import { ShieldAlert } from "lucide-react";

type CareNoticeProps = {
  className?: string;
};

export function CareNotice({ className = "" }: CareNoticeProps) {
  return (
    <div
      className={`rounded-xl border border-sage/10 bg-white/45 p-5 text-sm leading-6 text-ink/64 shadow-[0_14px_38px_rgba(38,66,54,0.04)] ${className}`}
    >
      <div className="flex gap-3">
        <ShieldAlert
          aria-hidden
          className="mt-0.5 h-5 w-5 shrink-0 text-gold"
          strokeWidth={1.7}
        />
        <p>
          MeloraHealth helps route mental health support and care inquiries. It
          is not an emergency service, crisis line, or a place for immediate
          diagnosis or treatment decisions. If someone may be in immediate
          danger, contact local emergency services or the nearest hospital.
        </p>
      </div>
    </div>
  );
}
