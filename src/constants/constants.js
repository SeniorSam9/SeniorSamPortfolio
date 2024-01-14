import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  kfupm,
  dotnet,
  sol,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const hoppies = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Systems designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const progress = [
  {
    title: "BSc In Software Engineering",
    company_name: "King Fahd University of Petroleum and Minerls",
    icon: kfupm,
    iconBg: "#fff",
    date: "Sep 2018 - Jan 2024",
    points: [
      "Mastering computer science basics: Computer Arch. C programming. OOP Design & Programming. Data Structures.",
      "Web Development Course: HTML. CSS. JavaScript. Express JS. Safe SQL Queries. RESTful API's.",
      "Advanced Database, Software Requirements and Design Patterns Networking, Software Testing. Software Quality Engineering.",
      "Advanced Operating Systems. Multi-process Programming (Threads). Asynchronous Programming. Flutter Mobile Development.",
    ],
  },
  {
    title: "React - React Native Developer",
    company_name: "Self-learning | Scrimba Course",
    icon: reactjs,
    iconBg: "#fff",
    date: "Nov 2021 - Present",
    points: [
      "Learning React Components. Rendering Concept. Basic Hooks. Several Side Projects. States Practicing.",
      "KFUPM Senior Project (BokyApp) -Financial App-with React Native. Integrating React Native & Firebase as a BaaS.",
      "React JS Advanced Course. Advanced Hooks. Two-React Certificates.",
      "RayanDev Personal Portfolio React JS + Three JS (this project).",
    ],
  },
  {
    title: ".NET Developer",
    company_name:
      "Self-learning | .NET Core MVC - The Complete Guide 2023 [E-commerce]",
    icon: dotnet,
    iconBg: "#fff",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using ASP.NET and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility. Razor Pages.",
      "Participating and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Trainee at Sol Company",
    company_name: "Sol",
    icon: sol,
    iconBg: "#fff",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Contributed to maintaining and enhancing FinTech solutions for various platforms, developed and maintained\
      several backend services and RESTful APIs using ASP.NET C# for multiple areas and user actors.",
      "Managed and developed Secured SQL queries using SQL Server Management through ASP.NET data migrations.",
      "Contributed to developing Sol Admin Panel making it scalable and compatible to multiple Operating Systems.",
      "Managed the development cycle using CI/CD pipelines for the projects, contributed to manage the software\
      using Version Source Control like Git and Source Tree.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { hoppies, technologies, progress, projects };
