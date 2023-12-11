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
    icon: React.createElement(FaReact),
    date: "Sep 2020 - Sep 2021",
  },
  {
    title: "Front-end Developer Intern - RaskRask",
    location: "Aarhus, Denmark",
    description: `Collaborated on all phases of development, from planning and prototyping to design, implementation, and maintenance, utilizing Typescript, React.js, Next.js, and Ionic.
      Implemented and maintained responsive designs ensuring cross-browser compatibility.
      Developed stories for the company's NPM package.
      Kept abreast of emerging technologies.
      Tested applications with Cypress and Jest.
      Applied Object Oriented Programming (OOP) principles.
      Utilized Atomic Design Principles in projects.
      Demonstrated proficiency in web development with Reactjs and Nextjs.`,
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
    title: "Nonis Components",
    description:
      "My own NPM Package - NonisComponents, is a collection of UI components built with React and TypeScript, designed to streamline web development. By integrating TypeScript, it offers robust typing and developer-friendly features, enhancing code reliability and maintainability. This package focuses on providing a range of UI components that accelerate development workflows, making it easier for developers to create visually appealing and functional interfaces efficiently. ",
    tags: ["typescript", "react", "stitches/react", "rollup.js"],
    imageUrl: "/npm.jpg",
  },
  {
    title: "Note Manager",
    description:
      "Introducing a full-stack TypeScript web app designed for efficient note management. Enjoy a range of features including easy reordering, pinning and unpinning notes, as well as convenient account settings. Experience the seamless usability of our mobile-friendly interface, ensuring smooth note management on the go.",
    tags: ["typescript", "react", "redux", "scss", "nodejs", "expressjs"],
    imageUrl: "/notemanager.png",
  },
  {
    title: "Car Rental",
    description: `This sleek web application is crafted using the robust trio of React, TypeScript, and Tailwind CSS, ensuring a fully responsive and intuitive user experience.`,
    tags: ["typescript", "react", "tailwind", "twin-macro", "responsive"],
    imageUrl: "/carRental.png",
  },
  {
    title: "E-Shop",
    description:
      "I created a sleek and minimalist e-shop with user-friendly navigation. To enhance visual appeal, I used Midjourney's AI tools for captivating images. The UI/UX design is my own creation, showcasing intuitive and engaging interfaces. I pushed the boundaries of plain CSS, avoiding CSS libraries for a unique website. It's fully optimized for mobile devices, ensuring a seamless experience across screen sizes.",
    tags: ["typescript", "react", "redux", "scss"],
    imageUrl: "/eshop.png",
  },
  {
    title: "Nonis - Movie Seeker",
    description:
      "This project, Unraveling Noni's World, was undertaken to enhance my frontend development skills using Next.js, a popular React framework. The goal was to gain hands-on experience with Next.js and explore its features and capabilities.",
    tags: ["typescript", "next", "react", "redux", "react-stitches"],
    imageUrl: "/movieseeker.png",
  },
  {
    title: "Color Picker - Chrome Extension",
    description:
      "Color Picker - Nonis is a powerful tool designed specifically for developers and UI/UX designers. It provides an intuitive interface to generate colors, copy them, and seamlessly add them to your palette. With Color Picker - Nonis, you can effortlessly create harmonious color schemes and have them readily available for your design projects. Simplify your color workflow and elevate your design process with Color Picker - Nonis.",
    tags: ["typescript", "react", "git", "html", "css"],
    imageUrl: "/colorpicker.png",
  },
  {
    title: "Password Generator - Chrome Extension",
    description:
      "Generate strong and secure passwords with Password Generator - Nonis. Customize password length and choose from options like uppercase letters, lowercase letters, numbers, and special characters. Includes a password strength indicator and history section for easy reference. Keep your accounts secure with ease!",
    tags: ["typescript", "react", "git", "html", "css"],
    imageUrl: "/pwdgenerator.jpg",
  },
] as const;
