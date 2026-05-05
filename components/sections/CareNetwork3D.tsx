import { ArrowRight, Building2, Gift, ShieldCheck } from "lucide-react";

export function CareNetwork3D() {
  const steps = [
    { label: "Request", body: "Need and context" },
    { label: "Match", body: "Right professional" },
    { label: "Support", body: "Private care route" }
  ];

  return (
    <div className="care-map relative h-full min-h-[360px] w-full overflow-hidden">
      <div className="care-map-top">
        <span>Care routing</span>
        <span>Private by design</span>
      </div>

      <div className="routing-card">
        <div className="routing-card-header">
          <span className="routing-dot" />
          <div>
            <strong>MeloraHealth</strong>
            <span>Need becomes a clear next step.</span>
          </div>
        </div>

        <div className="routing-steps">
          {steps.map((step, index) => (
            <div className="routing-step" key={step.label}>
              <span className="routing-step-index">0{index + 1}</span>
              <strong>{step.label}</strong>
              <span>{step.body}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="routing-access">
        <div>
          <Building2 aria-hidden className="h-4 w-4" strokeWidth={1.7} />
          <span>Partners</span>
        </div>
        <ArrowRight aria-hidden className="h-4 w-4 text-gold" strokeWidth={1.7} />
        <div>
          <Gift aria-hidden className="h-4 w-4" strokeWidth={1.7} />
          <span>Gift care</span>
        </div>
      </div>

      <div className="routing-footer">
        <ShieldCheck aria-hidden className="h-4 w-4" strokeWidth={1.7} />
        <span>Culturally aware care, routed with privacy.</span>
      </div>
    </div>
  );
}
