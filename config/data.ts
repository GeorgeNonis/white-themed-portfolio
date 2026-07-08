export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Volunteer Mentor",
    location: "Denmark",
    description: `One-on-one support and class mentoring for people learning to code.`,
    iconKey: "mentor",
    date: "Dec 2025 - Present",
  },
  {
    title: "Software Engineer",
    location: "Stibo DX · Aarhus, Denmark",
    description: `Cloud-native SaaS on Cue (Cue Autopilot). Mostly frontend in Angular and TypeScript; also platform work — production Kubernetes, GitOps (ArgoCD), Kong API Gateway, and observability (Prometheus, Grafana, Loki).`,
    iconKey: "react",
    date: "Feb 2024 - Present",
  },
  {
    title: "Frontend Developer Intern",
    location: "RaskRask · Aarhus, Denmark",
    description: `Worked with TypeScript, React.js, Next.js, and Ionic across planning, prototyping, design, implementation, testing, and maintenance. Developed Storybook stories for the company's NPM package. Tested with Cypress and Jest.`,
    iconKey: "react",
    date: "Jul 2023 - Sep 2023",
  },
  {
    title: "Career Transition · Self-directed study",
    location: "Aarhus, Denmark",
    description: `Transitioned into software engineering after moving to Denmark. Self-taught TypeScript, React, Next.js, and Node.js — built portfolio projects (extensions, full-stack apps) and prepared for my first developer role.`,
    iconKey: "study",
    date: "Nov 2022 - Jul 2023",
  },
] as const;

export const skillsData = [
  {
    category: "Frontend",
    items: ["Angular", "React", "Next.js", "TypeScript", "Microfrontends"],
  },
  {
    category: "Platform & infra",
    items: [
      "Kubernetes",
      "GitOps (ArgoCD)",
      "Kong API Gateway",
      "Docker",
      "CI/CD",
    ],
  },
  {
    category: "Backend & observability",
    items: [
      "Node.js",
      "NestJS",
      "CUE",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
  },
  {
    category: "Quality",
    items: ["Jest", "Cypress", "AI Integrations"],
  },
] as const;

export const projectsData = [
  {
    title: "Password Generator",
    description:
      "Strong passwords and passphrases — offline, no data collection. Custom length, character sets, presets, strength indicator, history, and keyboard shortcuts. Live on the Chrome Web Store with behavior specs and CI.",
    tags: ["typescript", "react", "chrome extension", "jest", "ci"],
    imageUrls: [
      "/projects/pwd-01-generator.png",
      "/projects/pwd-02-passphrase.png",
    ],
    demoUrl:
      "https://chromewebstore.google.com/detail/password-generator/ciplnefaommlkglhkbabmpkckccimajp",
    sourceUrl: "https://github.com/GeorgeNonis/pwd-generator-extension",
  },
  {
    title: "Color Picker",
    description:
      "Color picker, eyedropper, and palette for developer workflows. Built for fast copy-paste into code and design tools. Specs, tests, CI — live on the Chrome Web Store.",
    tags: ["typescript", "react", "chrome extension", "jest", "ci"],
    imageUrls: [
      "/projects/color-picker-empty.png",
      "/projects/color-picker-filled.png",
    ],
    demoUrl:
      "https://chromewebstore.google.com/detail/color-picker-nonis/mpcmgnbiaijedofjkmphnalpoonggcbl",
    sourceUrl: "https://github.com/GeorgeNonis/color-picker-extension",
  },
] as const;
