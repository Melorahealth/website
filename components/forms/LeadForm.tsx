type Field = {
  label: string;
  name: string;
  type?: "text" | "email" | "number" | "file";
  placeholder?: string;
  options?: string[];
  textarea?: boolean;
};

type LeadFormProps = {
  title: string;
  intro: string;
  fields: Field[];
  submitLabel: string;
  idPrefix?: string;
};

export function LeadForm({ title, intro, fields, submitLabel, idPrefix }: LeadFormProps) {
  const prefix = idPrefix ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <form action="#" className="reveal rounded-lg border border-sage/10 bg-white/70 p-6 shadow-soft sm:p-8">
      <div className="mb-8">
        <p className="eyebrow mb-3">Secure inquiry</p>
        <h2 className="font-serif text-3xl leading-tight tracking-normal text-sage">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-ink/60">{intro}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label
            className={field.textarea ? "sm:col-span-2" : ""}
            htmlFor={`${prefix}-${field.name}`}
            key={field.name}
          >
            <span className="mb-2 block text-sm font-semibold text-ink/75">{field.label}</span>
            {field.options ? (
              <select className="form-field" id={`${prefix}-${field.name}`} name={field.name}>
                <option value="">Select one</option>
                {field.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : field.textarea ? (
              <textarea
                className="form-field min-h-36 resize-y"
                id={`${prefix}-${field.name}`}
                name={field.name}
                placeholder={field.placeholder}
              />
            ) : (
              <input
                className="form-field"
                id={`${prefix}-${field.name}`}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type ?? "text"}
              />
            )}
          </label>
        ))}
      </div>
      <button
        className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-sage px-6 text-sm font-semibold text-white transition hover:bg-sage/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sage/25"
        type="submit"
      >
        {submitLabel}
      </button>
      <p className="mt-4 text-xs leading-5 text-ink/50">
        This form is ready for email, CRM, or database wiring during product integration.
      </p>
    </form>
  );
}
