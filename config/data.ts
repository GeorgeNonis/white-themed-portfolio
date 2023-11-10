import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

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
    title: "IT - APK Garage",
    location: "Nicosia, Cyprus",
    description: `Checking computer hardware (HDD, mice, keyboards, etc.) to ensure functionality.
      Installing and configuring appropriate software and functions according to specifications.
      Organizing and scheduling upgrades and maintenance without impeding others' work.
      Performing troubleshooting to diagnose and resolve problems (repair or replace parts, debugging, etc.).`,
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - Aug 2020",
  },
  {
    title: "Front-End Developer - Nina Global",
    location: "Nicosia, Cyprus",
    description: `Developed the frontend of an application from scratch based on Figma mockups.
     Implemented responsive design and ensured cross-browser compatibility.
     Participated in code reviews and provided constructive feedback to other developers.
     Built reusable code for future use.
     Stayed up-to-date on emerging technologies.`,
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Sep 2021",
  },
  {
    title: "Front-end Developer - Intern - RaskRask",
    location: "Aarhus, Denmark",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "July 2023 - September 2023",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Ionic",
  "Node.js",
  "Git",
  "Tailwind",
  "SCSS",
  "SASS",
  "React Stitches",
  "MongoDB",
  "Redux",
  "MobX",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
  "Framer Motion",
] as const;
