"use client";

import type { PointerEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CalendarClock } from "lucide-react";
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
  axis: [string, string];
  bars: Bar[];
  tiles: { active: string; activeDelta: string; sessions: string; sessionsDelta: string; wellbeing: string; roi: string };
};

const periods: Period[] = [
  {
    id: "quarter",
    label: "This quarter",
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
    label: "12 months",
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

const VB_W = 640;
const VB_H = 200;
const PAD_T = 18;
const PAD_B = 8;

// Smooth line (horizontal-tangent cubic segments) through the points.
function linePath(points: [number, number][]) {
  return points
    .map((point, index) => {
      if (index === 0) return `M${point[0]},${point[1]}`;
      const prev = points[index - 1];
      const midX = (prev[0] + point[0]) / 2;
      return `C${midX},${prev[1]} ${midX},${point[1]} ${point[0]},${point[1]}`;
    })
    .join(" ");
}

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

  const geom = useMemo(() => {
    const values = period.bars.map((bar) => bar.value);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const span = max - min || 1;
    const usableH = VB_H - PAD_T - PAD_B;
    const points = period.bars.map((bar, index) => {
      const x = (index / (period.bars.length - 1)) * VB_W;
      const y = PAD_T + (1 - (bar.value - min) / span) * usableH;
      return [x, y] as [number, number];
    });
    const line = linePath(points);
    const area = `${line} L${VB_W},${VB_H} L0,${VB_H} Z`;
    return { points, line, area };
  }, [period]);

  useEffect(() => {
    setMounted(false);
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, [periodId]);

  const tiles = [
    { label: `Active ${activeUnit}`, value: period.tiles.active, delta: period.tiles.activeDelta },
    { label: "Sessions completed", value: period.tiles.sessions, delta: period.tiles.sessionsDelta },
    { label: "Reporting improvement", value: period.tiles.wellbeing, note: "aggregate" },
    { label: "Est. return", value: period.tiles.roi, note: "on spend" }
  ];

  function handlePointer(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const index = Math.min(period.bars.length - 1, Math.max(0, Math.round(ratio * (period.bars.length - 1))));
    setHovered(index);
  }

  const active = hovered ?? period.bars.length - 1;
  const activePoint = geom.points[active];

  return (
    <section className={`section-space ${background === "cream" ? "bg-cream/40" : ""}`}>
      <Container>
        <SectionHeader
          body={`See how ${subject} is using care at a glance. Built for ${viewerLabel}, every number is group-level, so you get real insight into whether the program is working, without ever seeing who booked or what was said.`}
          eyebrow="Dashboard & reporting"
          title="Visibility, without exposure."
        />

        {/* Minimal dashboard mock */}
        <div className="reveal mt-12 overflow-hidden rounded-[28px] border border-sage/10 bg-white shadow-[0_24px_70px_rgba(38,66,54,0.08)]">
          <div className="p-6 sm:p-9">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold">Overview</p>
                <p className="mt-1.5 flex items-center gap-2 font-serif text-2xl leading-tight tracking-normal text-sage">
                  Program health
                  <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold text-ink/40">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage/70" />
                    Group-level
                  </span>
                </p>
              </div>
              <div className="inline-flex self-start rounded-full bg-sage/[0.06] p-1 sm:self-auto">
                {periods.map((item) => {
                  const isActive = item.id === periodId;
                  return (
                    <button
                      aria-pressed={isActive}
                      className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                        isActive ? "bg-white text-sage shadow-[0_2px_8px_rgba(38,66,54,0.08)]" : "text-ink/50 hover:text-sage"
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

            {/* KPIs */}
            <div className="mt-9 grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:divide-x lg:divide-sage/10">
              {tiles.map((tile, index) => (
                <div className={index > 0 ? "lg:pl-6" : ""} key={tile.label}>
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-ink/40">
                    {tile.label}
                  </p>
                  <p className="mt-2.5 font-serif text-[2.6rem] leading-none tracking-tight text-sage">
                    {tile.value}
                  </p>
                  {tile.delta ? (
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-sage">
                      <ArrowUpRight aria-hidden className="h-3.5 w-3.5 text-gold" strokeWidth={2.2} />
                      {tile.delta}
                    </p>
                  ) : (
                    <p className="mt-2 text-xs font-medium text-ink/35">{tile.note}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Chart + coverage */}
            <div className="mt-10 grid gap-10 border-t border-sage/10 pt-9 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
              {/* Sessions area chart */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-semibold text-ink/70">Sessions booked</p>
                  <p className="text-xs font-semibold text-sage">
                    {period.bars[active].value}
                    <span className="ml-1.5 font-medium text-ink/40">{period.bars[active].label}</span>
                  </p>
                </div>
                <div
                  className="relative mt-4"
                  onPointerLeave={() => setHovered(null)}
                  onPointerMove={handlePointer}
                >
                  <svg
                    aria-label={`Sessions booked, ${period.label.toLowerCase()}, rising from ${
                      period.bars[0].value
                    } to ${period.bars[period.bars.length - 1].value}.`}
                    className="h-44 w-full"
                    preserveAspectRatio="none"
                    role="img"
                    viewBox={`0 0 ${VB_W} ${VB_H}`}
                  >
                    <defs>
                      <linearGradient id={`fill-${periodId}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#264236" stopOpacity="0.16" />
                        <stop offset="100%" stopColor="#264236" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="chart-area" d={geom.area} fill={`url(#fill-${periodId})`} key={`a-${periodId}`} />
                    <path
                      className="chart-line"
                      d={geom.line}
                      fill="none"
                      key={`l-${periodId}`}
                      pathLength={1}
                      stroke="#264236"
                      strokeLinecap="round"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                    {mounted ? (
                      <>
                        <line
                          stroke="#C8A46B"
                          strokeDasharray="3 3"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                          x1={activePoint[0]}
                          x2={activePoint[0]}
                          y1={PAD_T}
                          y2={VB_H}
                        />
                        <circle cx={activePoint[0]} cy={activePoint[1]} fill="#C8A46B" r="4" vectorEffect="non-scaling-stroke" />
                      </>
                    ) : null}
                  </svg>
                  <div className="mt-2.5 flex justify-between text-[0.64rem] font-semibold text-ink/35">
                    <span>{period.axis[0]}</span>
                    <span>{period.axis[1]}</span>
                  </div>
                </div>
              </div>

              {/* Coverage */}
              <div>
                <p className="text-sm font-semibold text-ink/70">{coverageLabel}</p>
                <ul className="mt-5 space-y-5">
                  {coverage.map((row) => (
                    <li key={row.name}>
                      <div className="flex items-center justify-between text-xs font-medium text-ink/60">
                        <span>{row.name}</span>
                        <span className="font-semibold text-sage">{row.pct}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sage/10">
                        <div
                          className="h-full rounded-full bg-sage/75 transition-[width] duration-700 ease-out"
                          style={{ width: mounted ? `${row.pct}%` : "0%" }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 border-t border-sage/10 pt-6 text-xs leading-5 text-ink/40">
              Every figure is aggregated. You never see individual names, bookings, or session notes.
            </p>
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
