"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarClock,
  EyeOff,
  HeartPulse,
  LayoutDashboard,
  PieChart,
  TrendingUp,
  Users
} from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Coverage = { name: string; pct: number };

type ReportingSectionProps = {
  /** Who reads the dashboard, e.g. "HR and People teams". */
  viewerLabel: string;
  /** The population, e.g. "your team", "your members". */
  subject: string;
  /** Unit for the active-users tile, e.g. "employees", "members". */
  activeUnit: string;
  /** Heading for the coverage breakdown, e.g. "Adoption by department". */
  coverageLabel: string;
  /** 3–4 coverage rows (illustrative). */
  coverage: Coverage[];
  /** Alternating section background. */
  background?: "light" | "cream";
};

type Bar = { label: string; value: number };

type Period = {
  id: string;
  label: string;
  caption: string;
  axis: [string, string];
  bars: Bar[];
  tiles: { active: string; activeDelta: string; sessions: string; sessionsDelta: string; wellbeing: string; roi: string };
};

const periods: Period[] = [
  {
    id: "quarter",
    label: "This quarter",
    caption: "Sessions booked, last 8 weeks",
    axis: ["8 wks ago", "This week"],
    bars: [
      { label: "8 weeks ago", value: 42 },
      { label: "7 weeks ago", value: 55 },
      { label: "6 weeks ago", value: 61 },
      { label: "5 weeks ago", value: 58 },
      { label: "4 weeks ago", value: 74 },
      { label: "3 weeks ago", value: 83 },
      { label: "2 weeks ago", value: 91 },
      { label: "This week", value: 106 }
    ],
    tiles: {
      active: "1,240",
      activeDelta: "+18%",
      sessions: "3,880",
      sessionsDelta: "+12%",
      wellbeing: "72%",
      roi: "4.2×"
    }
  },
  {
    id: "year",
    label: "Last 12 months",
    caption: "Sessions booked, last 12 months",
    axis: ["12 mo ago", "This month"],
    bars: [
      { label: "12 months ago", value: 180 },
      { label: "11 months ago", value: 210 },
      { label: "10 months ago", value: 236 },
      { label: "9 months ago", value: 262 },
      { label: "8 months ago", value: 300 },
      { label: "7 months ago", value: 331 },
      { label: "6 months ago", value: 358 },
      { label: "5 months ago", value: 392 },
      { label: "4 months ago", value: 431 },
      { label: "3 months ago", value: 470 },
      { label: "2 months ago", value: 512 },
      { label: "This month", value: 560 }
    ],
    tiles: {
      active: "4,120",
      activeDelta: "+64%",
      sessions: "18,400",
      sessionsDelta: "+71%",
      wellbeing: "74%",
      roi: "4.6×"
    }
  }
];

const railItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Users, label: "Utilization", active: false },
  { icon: HeartPulse, label: "Wellbeing", active: false },
  { icon: PieChart, label: "Adoption", active: false }
];

export function ReportingSection({
  viewerLabel,
  subject,
  activeUnit,
  coverageLabel,
  coverage,
  background = "light"
}: ReportingSectionProps) {
  const [periodId, setPeriodId] = useState(periods[0].id);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const period = periods.find((item) => item.id === periodId) ?? periods[0];
  const barMax = useMemo(() => Math.max(...period.bars.map((bar) => bar.value)), [period]);

  // Grow the bars in once the card is mounted, and re-trigger on period change.
  useEffect(() => {
    setMounted(false);
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, [periodId]);

  const tiles = [
    { label: `Active ${activeUnit}`, value: period.tiles.active, delta: period.tiles.activeDelta },
    { label: "Sessions completed", value: period.tiles.sessions, delta: period.tiles.sessionsDelta },
    { label: "Reporting improvement", value: period.tiles.wellbeing, note: "aggregate" },
    { label: "Est. return", value: period.tiles.roi, note: "on program spend" }
  ];

  return (
    <section className={`section-space ${background === "cream" ? "bg-cream/40" : ""}`}>
      <Container>
        <SectionHeader
          body={`See how ${subject} is using care at a glance. Built for ${viewerLabel}, every number is group-level, so you get real insight into whether the program is working, without ever seeing who booked or what was said.`}
          eyebrow="Dashboard & reporting"
          title="Visibility, without exposure."
        />

        {/* Dashboard mock */}
        <div className="reveal mt-12 overflow-hidden rounded-[28px] border border-sage/10 bg-white/70 shadow-[0_28px_80px_rgba(38,66,54,0.1)] backdrop-blur-xl">
          {/* Window chrome */}
          <div className="flex items-center justify-between gap-4 border-b border-sage/10 bg-white/55 px-5 py-3.5">
            <div className="flex items-center gap-2" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-rose/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-sage/30" />
            </div>
            <p className="hidden text-xs font-semibold text-ink/[0.55] sm:block">
              Program overview · {period.label}
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold text-ink/[0.5]">
                <span aria-hidden className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
                </span>
                Live
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sage/15 bg-white/70 px-3 py-1 text-[0.7rem] font-bold text-sage">
                <EyeOff aria-hidden className="h-3 w-3 text-gold" strokeWidth={2} />
                Group-level only
              </span>
            </div>
          </div>

          <div className="flex">
            {/* Nav rail */}
            <div aria-hidden className="hidden w-16 shrink-0 flex-col items-center gap-1 border-r border-sage/10 bg-white/40 py-5 sm:flex">
              {railItems.map((item) => (
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition ${
                    item.active
                      ? "bg-sage text-white shadow-soft"
                      : "text-sage/50 hover:bg-sage/5 hover:text-sage"
                  }`}
                  key={item.label}
                  title={item.label}
                >
                  <item.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
                </span>
              ))}
            </div>

            <div className="min-w-0 flex-1 p-5 sm:p-7">
              {/* Period toggle */}
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="font-serif text-xl leading-tight tracking-normal text-sage">
                  Program overview
                </p>
                <div className="inline-flex rounded-full border border-sage/15 bg-white/60 p-1">
                  {periods.map((item) => {
                    const isActive = item.id === periodId;
                    return (
                      <button
                        aria-pressed={isActive}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                          isActive ? "bg-sage text-white shadow-soft" : "text-ink/55 hover:text-sage"
                        }`}
                        key={item.id}
                        onClick={() => setPeriodId(item.id)}
                        type="button"
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {tiles.map((tile) => (
                  <div
                    className="rounded-2xl border border-sage/10 bg-gradient-to-br from-white/85 to-cream/40 p-5"
                    key={tile.label}
                  >
                    <p className="text-[0.68rem] font-bold uppercase tracking-normal text-ink/[0.5]">
                      {tile.label}
                    </p>
                    <p className="mt-3 font-serif text-4xl leading-none text-sage">{tile.value}</p>
                    {tile.delta ? (
                      <p className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-sage">
                        <TrendingUp aria-hidden className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
                        {tile.delta} vs. prior
                      </p>
                    ) : (
                      <p className="mt-2.5 text-xs font-semibold text-ink/[0.45]">{tile.note}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Trend + coverage */}
              <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                {/* Sessions trend (single-series bar chart) */}
                <div className="rounded-2xl border border-sage/10 bg-white/60 p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-serif text-lg leading-tight tracking-normal text-sage">
                      Sessions booked
                    </p>
                    <p className="text-xs font-semibold text-ink/[0.5]">{period.label}</p>
                  </div>
                  <div
                    aria-label={`${period.caption}, rising from ${period.bars[0].value} to ${
                      period.bars[period.bars.length - 1].value
                    }.`}
                    className="relative mt-6 flex h-40 items-end gap-1.5 sm:gap-2"
                    role="img"
                  >
                    {period.bars.map((bar, index) => {
                      const isLast = index === period.bars.length - 1;
                      const isHovered = hovered === index;
                      return (
                        <div
                          className="group relative flex h-full flex-1 items-end"
                          key={bar.label}
                          onMouseEnter={() => setHovered(index)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <div
                            className={`w-full rounded-t-md transition-[height,background-color] duration-700 ease-out ${
                              isLast || isHovered ? "bg-gold" : "bg-sage/70"
                            }`}
                            style={{ height: mounted ? `${Math.round((bar.value / barMax) * 100)}%` : "0%" }}
                          />
                          {isHovered ? (
                            <div className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-sage px-2.5 py-1.5 text-[0.7rem] font-semibold text-white shadow-lg">
                              {bar.value} sessions
                              <span className="mt-0.5 block text-[0.6rem] font-medium text-white/70">
                                {bar.label}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-2 flex justify-between text-[0.65rem] font-semibold text-ink/[0.4]">
                    <span>{period.axis[0]}</span>
                    <span>{period.axis[1]}</span>
                  </div>
                </div>

                {/* Coverage (adoption) */}
                <div className="rounded-2xl border border-sage/10 bg-white/60 p-5 sm:p-6">
                  <p className="font-serif text-lg leading-tight tracking-normal text-sage">
                    {coverageLabel}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {coverage.map((row) => (
                      <li key={row.name}>
                        <div className="flex items-center justify-between text-xs font-semibold text-ink/[0.6]">
                          <span>{row.name}</span>
                          <span className="text-sage">{row.pct}%</span>
                        </div>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-sage/10">
                          <div
                            className="h-full rounded-full bg-sage/70 transition-[width] duration-700 ease-out"
                            style={{ width: mounted ? `${row.pct}%` : "0%" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-ink/[0.5]">
                <EyeOff aria-hidden className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.8} />
                Every figure is aggregated. You never see individual names, bookings, or session notes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/book-demo" icon={CalendarClock}>
            See the dashboard in a demo
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
