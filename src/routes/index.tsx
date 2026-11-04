import type React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Waves,
  Dumbbell,
  Mountain,
  Gamepad2,
  X,
} from "lucide-react";
import water from "@/assets/deep-water.jpg";
import sand from "@/assets/sea-sand.jpg";
import coral from "@/assets/sea-coral.jpg";
import diver from "@/assets/sea-diver.jpg";
import octopus from "@/assets/sea-octopus.jpg";

const motif = (src: string) =>
  ({ ["--chapter-img" as string]: `url(${src})` }) as React.CSSProperties;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "George Nonis — Software Engineer, Aarhus" },
      {
        name: "description",
        content:
          "George Nonis — software engineer at Stibo DX on Cue Autopilot. Ships product and makes the path to production faster.",
      },
      { property: "og:title", content: "George Nonis — Software Engineer" },
      {
        property: "og:description",
        content: "Engineer from Cyprus in Aarhus. Angular, platform, GitOps — and the sea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["About", "#about"],
  ["Craft", "#craft"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Life", "#life"],
];

const daily = [
  "Angular",
  "TypeScript",
  "Kubernetes / OpenShift",
  "GitOps · Argo CD",
  "CI/CD",
  "Kong / APISIX",
  "Prometheus · Grafana · Loki",
  "Dynatrace",
];
const growing = ["Quarkus / JVM microservices", "Microfrontends"];

const work = [
  {
    name: "Password Generator",
    text: "A Chrome extension for strong passwords in one click — live on the Web Store.",
    href: "https://chromewebstore.google.com/detail/password-generator/ciplnefaommlkglhkbabmpkckccimajp",
    label: "Chrome Web Store",
  },
  {
    name: "Color Picker",
    text: "A Chrome extension to grab any colour from the page you're on.",
    href: "https://github.com/GeorgeNonis/color-picker-extension",
    label: "GitHub",
  },
  {
    name: "Everything else",
    text: "Experiments, tools and things built for fun, in public.",
    href: "https://github.com/GeorgeNonis",
    label: "github.com/GeorgeNonis",
  },
];

const career = [
  {
    depth: "−10 m",
    when: "2023",
    role: "Learning to code",
    org: "Career transition · Aarhus",
    points: [
      "Went all-in on software engineering, self-directed.",
      "TypeScript, React, Node — built projects and prepared for a first developer role.",
    ],
  },
  {
    depth: "−30 m",
    when: "Jul – Sep 2023",
    role: "Frontend Developer Intern",
    org: "RaskRask · Aarhus",
    points: [
      "TypeScript, React, Next.js and Ionic — from planning through maintenance.",
      "Storybook for the company's NPM package.",
      "Testing with Cypress and Jest.",
    ],
  },
  {
    depth: "−60 m",
    when: "Feb 2024 – Present",
    role: "Software Engineer",
    org: "Stibo DX · Aarhus",
    points: [
      "Build and ship Cue Autopilot features in Angular/TypeScript on a cloud-native SaaS platform.",
      "Owned improvements to the main Cue CI pipeline that cut build time significantly.",
      "Production platform work: Kubernetes/OpenShift, GitOps (Argo CD), Kong, secrets in Git, Prometheus/Grafana/Loki, Dynatrace.",
      "Helping extract Angular microfrontends for modular delivery and clearer team boundaries.",
      "Quarkus microservices (PostgreSQL, OpenTelemetry/Dynatrace) alongside frontend ownership.",
      "AI-assisted development day to day; member of the AI and frontend guilds.",
      "AI-driven integrations on Cue Autopilot.",
    ],
  },
];

const life = [
  {
    icon: Waves,
    title: "Free diving",
    tone: "life-diving",
    text: "Grew up in the Cyprus sea. One breath, deep blue, total quiet.",
  },
  {
    icon: Dumbbell,
    title: "Training",
    tone: "life-training",
    text: "Consistent work in the gym — same mindset as shipping.",
  },
  {
    icon: Mountain,
    title: "Mountains",
    tone: "life-mountains",
    text: "Hiking and exploring ridgelines whenever I can get out.",
  },
  {
    icon: Gamepad2,
    title: "Games",
    tone: "life-games",
    text: "Gamer for life. Good systems design is everywhere.",
  },
];

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg italic">
            G.N.
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="transition-colors hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-primary/50 px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
            >
              Get in touch
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={water} alt="" className="drift absolute inset-0 h-full w-full object-cover" />
        <div className="hero-fade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 md:pb-28">
          <p className="rise font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Software Engineer · Aarhus, DK
          </p>
          <h1
            className="rise text-glow mt-5 font-display text-[clamp(3.5rem,13vw,11rem)] font-light leading-[0.88] tracking-tight"
            style={{ animationDelay: ".15s" }}
          >
            George
            <br />
            <span className="italic text-sand">Nonis</span>
          </h1>
          <p className="rise mt-8 max-w-xl text-xl md:text-2xl" style={{ animationDelay: ".35s" }}>
            I build cloud-native product at Stibo DX — and make the road to production shorter.
          </p>
          <p
            className="rise mt-3 max-w-xl text-muted-foreground"
            style={{ animationDelay: ".45s" }}
          >
            Angular up front, Kubernetes and GitOps underneath. I like shipping, and I like making
            shipping easier for everyone else.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: ".6s" }}>
            <a
              href="#work"
              className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-foreground/30 px-6 py-3 font-medium transition-colors hover:border-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5">
        {/* About */}
        <section
          id="about"
          className="chapter chapter-about reveal grid gap-8 py-28 md:grid-cols-[1fr_2fr]"
          style={motif(sand)}
        >
          <Label n="01" t="Who I am" />
          <div className="space-y-5 text-lg leading-relaxed md:text-2xl md:leading-snug">
            <p>
              I'm George — Giorgos to friends back home — from{" "}
              <span className="text-sand">Cyprus</span>, living in{" "}
              <span className="text-sand">Aarhus</span>. I changed careers and went all-in on
              engineering in 2023: self-taught, then an internship, then Stibo DX.
            </p>
            <p className="text-muted-foreground">
              I build in public when I can, and when there's a chance to help someone learn, I take
              it.
            </p>
          </div>
        </section>

        {/* Craft */}
        <section
          id="craft"
          className="chapter chapter-craft reveal grid gap-8 border-t border-border py-28 md:grid-cols-[1fr_2fr]"
          style={motif(coral)}
        >
          <Label n="02" t="Craft" />
          <div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                [
                  "Ship product",
                  "Angular & TypeScript work on Cue Autopilot, a cloud-native SaaS.",
                ],
                [
                  "Speed up the path",
                  "Pipelines, GitOps and processes that get code to prod faster.",
                ],
                ["Enable people", "Tooling that unblocks teammates instead of slowing them down."],
              ].map(([h, p]) => (
                <div key={h}>
                  <h3 className="font-display text-2xl">{h}</h3>
                  <p className="mt-2 text-muted-foreground">{p}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 space-y-6">
              <Stack title="Day to day" items={daily} strong />
              <Stack title="Also in the mix" items={growing} />
            </div>
          </div>
        </section>

        <Experience />

        {/* Work */}
        <section
          id="work"
          className="chapter chapter-work reveal grid gap-8 border-t border-border py-28 md:grid-cols-[1fr_2fr]"
          style={motif(diver)}
        >
          <Label n="04" t="Selected work" />
          <div className="divide-y divide-border border-y border-border">
            {work.map((w) => (
              <a
                key={w.name}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-6 py-8 transition-colors hover:bg-card/50 md:px-4"
              >
                <div>
                  <h3 className="font-display text-3xl transition-colors group-hover:text-primary md:text-4xl">
                    {w.name}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{w.text}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-sand">
                    {w.label}
                  </p>
                </div>
                <ArrowUpRight className="mt-2 h-7 w-7 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>

        {/* Life */}
        <section
          id="life"
          className="chapter chapter-life reveal border-t border-border py-28"
          style={motif(octopus)}
        >
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <Label n="05" t="Beyond code" />
            <p className="font-display text-3xl leading-tight md:text-5xl">
              Sea, mountains, iron and pixels.{" "}
              <span className="italic text-muted-foreground">
                Same curiosity, different terrain.
              </span>
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {life.map(({ icon: I, title, tone, text }) => (
              <div key={title} className={`life-panel ${tone} p-7`}>
                <I className="h-6 w-6 text-life-accent" />
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl font-mono text-sm text-muted-foreground">
            <span className="text-primary">$ geek --corner</span> — tinkering with tooling, reading
            about how things work, building small things just because.
          </p>
        </section>
      </main>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-border bg-abyss py-32"
      >
        <div className="reveal mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">06 — Contact</p>
          <h2 className="mt-6 font-display text-5xl leading-none md:text-8xl">
            Let's talk <span className="italic text-sand">shop.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Feel free to get in touch — collaboration, an interesting problem, or just to say hi.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Contact
              icon={Mail}
              label="Email"
              value="georgenonis@gmail.com"
              href="mailto:georgenonis@gmail.com"
            />
            <Contact
              icon={Linkedin}
              label="LinkedIn"
              value="george-nonis"
              href="https://www.linkedin.com/in/george-nonis-697430234/"
            />
            <Contact
              icon={Github}
              label="GitHub"
              value="GeorgeNonis"
              href="https://github.com/GeorgeNonis"
            />
          </div>
          <p className="mt-20 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} George Nonis · Cyprus → Aarhus
          </p>
        </div>
      </section>
    </div>
  );
}

function Label({ n, t }: { n: string; t: string }) {
  return (
    <div>
      <p className="font-mono text-xs text-primary">{n}</p>
      <h2 className="mt-2 font-display text-2xl italic text-muted-foreground">{t}</h2>
    </div>
  );
}

function Stack({ title, items, strong }: { title: string; items: string[]; strong?: boolean }) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className={`rounded-full border px-3.5 py-1.5 text-sm ${strong ? "border-primary/40 text-foreground" : "border-border text-muted-foreground"}`}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function Contact({
  icon: I,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-primary"
    >
      <I className="h-5 w-5 text-primary" />
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="truncate">{value}</p>
      </div>
      <ArrowUpRight className="ml-auto h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="chapter chapter-experience reveal border-t border-border py-28"
    >
      <Label n="03" t="Experience — the descent" />
      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="relative mx-auto h-56 w-40 md:sticky md:top-28 md:h-[28rem] md:w-full">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-primary/70 via-primary/20 to-transparent" />
          {[12, 30, 48, 66].map((t, i) => (
            <span
              key={t}
              className="bubble absolute rounded-full border border-primary/50"
              style={{
                top: `${t}%`,
                left: `${42 + (i % 2) * 14}%`,
                width: 6 + i * 2,
                height: 6 + i * 2,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
          <svg
            viewBox="0 0 120 200"
            className="diver-float absolute left-1/2 top-1/3 h-40 -translate-x-1/2 text-primary md:h-56"
            aria-label="Diver descending"
            role="img"
          >
            <g fill="currentColor" opacity="0.9">
              <circle cx="60" cy="168" r="11" />
              <path d="M50 158 C46 130 48 110 54 92 L66 92 C72 110 74 130 70 158 Z" />
              <path d="M52 150 L36 176 L42 179 L58 154 Z" />
              <path d="M54 92 L50 50 L58 50 L60 90 Z" />
              <path d="M66 92 L72 50 L64 50 L60 90 Z" />
              <path d="M46 52 L40 8 L58 14 L56 52 Z" />
              <path d="M74 52 L82 8 L64 14 L66 52 Z" />
            </g>
          </svg>
        </div>
        <ol className="relative space-y-14 border-l border-primary/30 pl-8">
          {career.map((c) => (
            <li key={c.role} className="relative">
              <span className="absolute -left-[2.45rem] top-1 grid h-5 w-5 place-items-center rounded-full border border-primary bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {c.depth} · <span className="text-sand">{c.when}</span>
              </p>
              <h3 className="mt-2 font-display text-3xl md:text-4xl">{c.role}</h3>
              <p className="mt-1 text-muted-foreground">{c.org}</p>
              <ul className="mt-4 space-y-2">
                {c.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-foreground/90">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const menuLinks: [string, string][] = [...nav, ["Contact", "#contact"]] as [string, string][];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLAnchorElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    first.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      btn.current?.focus();
    };
  }, [open]);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() =>
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }),
    );
  };

  return (
    <>
      <button
        ref={btn}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="depth-btn grid h-11 w-11 place-items-center rounded-full border border-primary/50 text-primary md:hidden"
      >
        <span className="flex flex-col items-end gap-[5px]">
          <span className="h-px w-5 bg-current" />
          <span className="h-px w-3.5 bg-current" />
          <span className="h-px w-2 bg-current" />
        </span>
      </button>
      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            aria-hidden={!open}
            inert={!open}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
            className={`menu-sheet fixed inset-0 z-[60] flex flex-col px-6 pb-10 pt-5 md:hidden ${open ? "is-open" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Descend to
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-foreground/25 text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav
              className="mt-10 flex flex-1 flex-col"
              onClick={(e) => e.target === e.currentTarget && setOpen(false)}
            >
              {menuLinks.map(([l, h], i) => (
                <a
                  key={h}
                  ref={i === 0 ? first : undefined}
                  href={h}
                  onClick={(e) => go(e, h)}
                  className="menu-link flex items-baseline gap-4 border-b border-foreground/10 py-4"
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                >
                  <span className="w-12 font-mono text-xs text-primary">−{(i + 1) * 10}m</span>
                  <span className="font-display text-4xl">{l}</span>
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="mt-8 rounded-full bg-primary py-4 text-center font-medium text-primary-foreground"
            >
              Get in touch
            </a>
          </div>,
          document.body,
        )}
    </>
  );
}
