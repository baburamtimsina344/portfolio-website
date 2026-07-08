"use client";

import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Activity, AlertCircle, BarChart3, Globe2, MapPin, Radio, TrendingUp, Users } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useTrackVisit } from "../hooks/useTrackVisit";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const POLL_INTERVAL_MS = 10_000;
const STARTING_TOTAL = 10_000;

type CountryVisit = {
  country_code: string;
  country_name: string;
  visit_count: number;
};

type Stats = {
  total: number;
  countries: CountryVisit[];
};

type VisitorStatsResponse = {
  total?: number | string | null;
  countries?: Array<{
    country_code?: string | null;
    country_name?: string | null;
    visit_count?: number | string | null;
  }>;
};

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  isLoading?: boolean;
  index: number;
};

const CENTROIDS: Record<string, [number, number]> = {
  US: [-98.5, 39.8], GB: [-2, 54], IN: [79, 22], NP: [84, 28], CN: [104, 35],
  DE: [10, 51], FR: [2, 47], BR: [-53, -10], AU: [134, -25], JP: [138, 38],
  CA: [-106, 56], RU: [90, 61], ZA: [24, -29], NG: [8, 9], MX: [-102, 23],
  ES: [-4, 40], IT: [12, 42], KR: [127, 36], ID: [113, -2], PK: [69, 30],
  BD: [90, 24], SG: [103.8, 1.35], AE: [54, 24], SA: [45, 24], EG: [30, 26],
  NL: [5.75, 52.1], SE: [15, 62], CH: [8, 47], PH: [122, 13], VN: [108, 16],
  TH: [101, 15], MY: [112, 2.5], NZ: [174, -41], AR: [-64, -34], KE: [38, 1],
};

const motionEase = "easeOut" as const;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: motionEase } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, delay: index * 0.05, ease: motionEase },
  }),
};

function toVisitCount(value: number | string | null | undefined) {
  const count = Number(value ?? 0);
  return Number.isFinite(count) ? count : 0;
}

function formatNumber(value: number) {
  return value.toLocaleString();
}

function MetricCard({ label, value, detail, icon: Icon, isLoading, index }: MetricCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -3 }}
      className="dashboard-panel-soft group relative overflow-hidden p-4 transition-all duration-200 hover:border-[#0F7A5A]/25 hover:shadow-lg hover:shadow-[#0B2545]/8"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#0F7A5A]/0 via-[#0F7A5A]/45 to-[#0F7A5A]/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="type-caption font-semibold text-[#4A5A6A]">{label}</p>
          {isLoading ? (
            <div className="mt-3 h-8 w-24 animate-pulse rounded-md bg-[#0F7A5A]/10" />
          ) : (
            <p className="mt-2 text-2xl font-extrabold leading-none text-[#0B2545]">{value}</p>
          )}
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#0F7A5A]/15 bg-[#0F7A5A]/8 text-[#0F7A5A] transition-transform duration-200 group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <p className="type-caption mt-3 text-[#4A5A6A]">{detail}</p>
    </motion.div>
  );
}

export function VisitorMap() {
  useTrackVisit();

  const [stats, setStats] = useState<Stats>({ total: STARTING_TOTAL, countries: [] });
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;
    let pollingEnabled = true;

    async function load() {
      const response = await fetch("/api/visitor-visit", {
        headers: { Accept: "application/json" },
      });

      if (!mounted) return;

      if (!response.ok) {
        if (response.status === 404) pollingEnabled = false;
        throw new Error(`Visitor stats request failed: ${response.status}`);
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) {
        pollingEnabled = false;
        throw new Error("Visitor stats endpoint did not return JSON");
      }

      const data = (await response.json()) as VisitorStatsResponse;
      const countries = (data.countries ?? [])
        .map((country) => ({
          country_code: (country.country_code ?? "XX").toUpperCase(),
          country_name: country.country_name ?? "Unknown",
          visit_count: toVisitCount(country.visit_count),
        }))
        .filter((country) => country.country_code !== "XX" && country.visit_count > 0);

      setStats({
        total: toVisitCount(data.total) || STARTING_TOTAL,
        countries,
      });
      setHasError(false);
      setLoaded(true);
    }

    load().catch(() => {
      if (mounted) {
        setHasError(true);
        setLoaded(true);
      }
    });

    const interval = window.setInterval(() => {
      if (!pollingEnabled) return;
      load().catch(() => {
        if (mounted) setHasError(true);
      });
    }, POLL_INTERVAL_MS);

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const maxCount = useMemo(
    () => Math.max(1, ...stats.countries.map((country) => country.visit_count)),
    [stats.countries]
  );

  const mappedCountries = useMemo(
    () => stats.countries.filter((country) => CENTROIDS[country.country_code]),
    [stats.countries]
  );

  const topCountries = stats.countries.slice(0, 5);
  const topCountry = topCountries[0];
  const mappedVisitCount = mappedCountries.reduce((sum, country) => sum + country.visit_count, 0);
  const coveragePercent = stats.total > 0 ? Math.min(100, Math.round((mappedVisitCount / stats.total) * 100)) : 0;

  const metrics = [
    {
      label: "Total visits",
      value: formatNumber(stats.total),
      detail: loaded ? "Tracked through Supabase" : "Syncing visitor data",
      icon: Activity,
    },
    {
      label: "Countries",
      value: formatNumber(stats.countries.length),
      detail: "Unique country records",
      icon: Globe2,
    },
    {
      label: "Mapped visits",
      value: `${coveragePercent}%`,
      detail: `${formatNumber(mappedVisitCount)} visits with map coordinates`,
      icon: MapPin,
    },
    {
      label: "Top region",
      value: topCountry ? topCountry.country_code : "-",
      detail: topCountry ? `${topCountry.country_name} leads engagement` : "Awaiting traffic data",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="dashboard-shell relative overflow-hidden px-3 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 ">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#0F7A5A]/20 to-transparent" aria-hidden="true" />
      <div className="container mx-auto max-w-7xl">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0F7A5A]/20 bg-white px-3 py-1.5 text-[#0F7A5A] shadow-soft">
                <Radio className="h-4 w-4" aria-hidden="true" />
                <span className="type-kicker">Live Global Reach</span>
              </div>
              <h2 className="type-section-title text-[#0B2545]">Visitor analytics</h2>
              <p className="type-body mt-3 max-w-2xl text-[#4A5A6A]">
                A real-time view of audience reach across regions, powered by Supabase and presented as a focused analytics dashboard.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-lg border border-[#0F7A5A]/15 bg-white px-3 py-2 shadow-soft">
              <span className={`h-2.5 w-2.5 rounded-full ${hasError ? "bg-red-500" : loaded ? "bg-[#0F7A5A]" : "animate-pulse bg-[#C9A84C]"}`} />
              <span className="type-caption font-semibold text-[#4A5A6A]">
                {hasError ? "Data delayed" : loaded ? "Data synced" : "Syncing"}
              </span>
            </div>
          </div>

          <motion.div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} {...metric} index={index} isLoading={!loaded && index !== 0} />
            ))}
          </motion.div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="dashboard-panel relative min-h-[360px] overflow-hidden p-3 sm:p-5 lg:min-h-[560px]"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="type-label text-[#0F7A5A]">Audience map</p>
                  <h3 className="type-card-title mt-1 text-[#0B2545]">Global visitor footprint</h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[#0F7A5A]/10 bg-[#F8F9FA] px-3 py-2">
                  <span className="flex items-center gap-2 type-caption text-[#4A5A6A]"><span className="h-2.5 w-2.5 rounded-full bg-[#00B894]" /> Visitor hub</span>
                  <span className="flex items-center gap-2 type-caption text-[#4A5A6A]"><span className="h-2.5 w-2.5 rounded-full border border-[#00B894] bg-[#00B894]/20" /> Visit volume</span>
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-[#0F7A5A]/10 bg-linear-to-b from-[#F8F9FA] to-white lg:min-h-[455px]">
                <ComposableMap
                  projectionConfig={{ scale: 150 }}
                  style={{ width: "100%", height: "100%", minHeight: "inherit" }}
                >
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E9F3EF"
                          stroke="#FFFFFF"
                          strokeWidth={0.65}
                          style={{
                            default: { outline: "none" },
                            hover: { outline: "none", fill: "#D9EFE7" },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {mappedCountries.map((country) => {
                    const coords = CENTROIDS[country.country_code];
                    const radius = 4 + (country.visit_count / maxCount) * 15;
                    return (
                      <Marker key={country.country_code} coordinates={coords}>
                        <circle r={radius} fill="rgba(0, 184, 148, 0.18)" stroke="#00B894" strokeWidth={1.4} />
                        <circle r={2.4} fill="#0F7A5A" />
                        <title>{`${country.country_name}: ${formatNumber(country.visit_count)} visits`}</title>
                      </Marker>
                    );
                  })}
                </ComposableMap>

                {(!loaded || hasError || mappedCountries.length === 0) && (
                  <div className="absolute inset-x-4 bottom-4 rounded-lg border border-[#0F7A5A]/10 bg-white/90 p-3 text-center shadow-soft backdrop-blur-md">
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F7A5A]/10 text-[#0F7A5A]">
                      {hasError ? <AlertCircle className="h-5 w-5" aria-hidden="true" /> : <BarChart3 className="h-5 w-5" aria-hidden="true" />}
                    </div>
                    <p className="type-caption font-semibold text-[#0B2545]">
                      {!loaded
                        ? "Loading visitor data"
                        : hasError
                          ? "Visitor data is temporarily unavailable"
                          : "Visitor locations will appear after country data is recorded"}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
              className="dashboard-panel flex flex-col p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="type-label text-[#0F7A5A]">Top countries</p>
                  <h3 className="type-card-title mt-1 text-[#0B2545]">Engagement leaders</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F7A5A]/10 text-[#0F7A5A]">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col gap-3">
                {(topCountries.length ? topCountries : [{ country_code: "NA", country_name: "Awaiting data", visit_count: 0 }]).map((country, index) => {
                  const progress = maxCount > 0 ? Math.max(4, Math.round((country.visit_count / maxCount) * 100)) : 0;
                  return (
                    <motion.div
                      key={country.country_code}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                      className="rounded-lg border border-[#0F7A5A]/10 bg-[#F8F9FA] p-3 transition-all duration-200 hover:border-[#0F7A5A]/20 hover:bg-white hover:shadow-soft"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="type-caption font-semibold text-[#0B2545]">#{index + 1} {country.country_name}</p>
                          <p className="type-caption text-[#4A5A6A]">{country.country_code}</p>
                        </div>
                        <p className="text-lg font-extrabold leading-none text-[#0F7A5A]">{formatNumber(country.visit_count)}</p>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#0F7A5A]/10">
                        <div className="h-full rounded-full bg-[#0F7A5A] transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
