import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  python,
  postman,
  sqlite,
  firebase,
  git,
  boky,
  kfupm,
  dotnet,
  sol,
  figma,
  csroot,
  yourshipment,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ASP.NET C#",
    icon: dotnet,
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
    name: "git",
    icon: git,
  },

  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Figma",
    icon: figma,
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
    name: "CSRoot",
    description:
      "👨‍💻 The first collaborative web app for sharing Software/Computer Science resources, ideas, and recommendations.",
    tags: [
      {
        name: "express JS",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite3",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "pink-text-gradient",
      },
    ],
    image: csroot,
    source_code_link: "https://csroot.onrender.com/",
  },
  {
    name: "BokyApp",
    description:
      "💻 An application that helps users have better insight into their financial performance, and increase their financial awareness by providing them with many management and planning tools 🎉.",
    tags: [
      {
        name: "react_native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: boky,
    source_code_link:
      "https://www.figma.com/file/uYlkxzNhfZuHX3PPsIYbWO/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D9%86%D9%81%D9%82%D8%A7%D8%AA?mode=dev",
  },
  {
    name: "YourShipment",
    description:
      "🚢 An app that is built to ease the process of following the progress of a shipment delivery, for both clients and administration's employees.",
    tags: [
      {
        name: "express js",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite3",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: yourshipment,
    source_code_link: "https://yourshipment.onrender.com/",
  },
];

export { hoppies, technologies, progress, projects };
