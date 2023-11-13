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
  "Three.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SCSS",
  "SASS",
  "Emotion.js",
  "React Stitches",
  "MongoDB",
  "Redux",
  "MobX",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
  "Framer Motion",
  "Figma",
] as const;

export const projectsData = [
  {
    title: "Note Manager",
    description: `Introducing a full-stack TypeScript web app designed for efficient note management. Enjoy a range of features including easy reordering, pinning and unpinning notes, as well as convenient account settings. Experience the seamless usability of our mobile-friendly interface, ensuring smooth note management on the go.`,
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Frontend Developer",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Frontend Developer - Intern",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;
