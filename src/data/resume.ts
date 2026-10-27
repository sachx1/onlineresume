// All resume content for the site, kept separate from the page code that displays it.
// Pages import what they need, e.g. import { experience } from "../data/resume";

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Job {
  role: string;
  company: string;
  location: string;
  start: string;
  end?: string; // left out for a current job, so pages can show "Present"
  employment?: string; // e.g. "Part-time"; left out for full-time roles
  description?: string; // one-line context for the role, when there is one
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  location: string;
  year: string;
}

export const profile: Profile = {
  name: "Sachin Khargie",
  title: "Full Stack Developer",
  location: "Brampton, ON",
  email: "sachin.khargie@gmail.com",
  github: "https://github.com/sachx1",
  linkedin: "https://www.linkedin.com/in/sachin-khargie",
  summary:
    "Full-stack developer with 3+ years building Node.js services and JavaScript front ends, plus Python and SQL for data work. " +
    "Built a notification service handling 10,000+ messages a month and migrated an on-premises order database to Microsoft Fabric.",
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML/CSS", "Vanilla JS and DOM APIs", "Three.js"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "Flask", "REST APIs"],
  },
  {
    category: "Data & Cloud",
    items: ["SQL Server", "Microsoft Fabric", "Azure", "Firebase", "Stored procedures", "Python notebooks"],
  },
  {
    category: "Tools & AI",
    items: ["Git", "CI/CD", "Claude Code", "Cowork"],
  },
];

// Most recent first
export const experience: Job[] = [
  {
    role: "Backend Developer",
    company: "Toromont Cat",
    location: "Concord, ON",
    start: "Feb 2023",
    highlights: [
      "Built a customer-facing notification service in Node.js and Twilio delivering thousands of order-status emails and SMS per month, peaking above 10,000, across the full parts-order lifecycle",
      "Replaced manual status phone calls from branch staff with automated updates, removing a recurring support task and giving customers order status without having to call in",
      "Instrumented the service with structured logging and error handling that persists every Twilio API response and delivery failure to SQL Server, giving staff a queryable record for delivery disputes",
      "Migrated the on-premises parts and order database to Microsoft Fabric using Copy Jobs and stored procedures, spanning tables from a few records to several million rows",
      "Cut a core table build from 15 minutes to 5 by rewriting full-reload stored procedures as incremental MERGE upserts, and exposed curated datasets through Materialized Lake Views",
      "Developed Python notebooks in Fabric that build the tables behind the company's data catalog report, used across the business to find where datasets live in Fabric",
    ],
    technologies: ["Node.js", "Twilio", "SQL Server", "Microsoft Fabric", "SQL", "Stored procedures", "Python"],
  },
  {
    role: "Frontend Engineer",
    company: "Chelsea Avondale",
    location: "Kitchener, ON",
    start: "Apr 2022",
    end: "Jun 2022",
    description: "Customer-facing website build for an early-stage insurance carrier",
    highlights: [
      "Built an interactive property-mapping tool with the Google Maps JavaScript API that let users draw shapes directly on a map and capture their exact coordinates, with configurable shape types and styling",
      "Developed a searchable FAQ system over a JSON content model of nested questions, including a recursive algorithm that traverses the question tree in both directions to generate breadcrumbs",
      "Built a drag-and-drop document upload page in vanilla JavaScript and CSS with a live file queue and batch submission",
      "Wrote and deployed the Python and Flask endpoints backing these pages, serving content to the front end and handling form and file submissions",
    ],
    technologies: ["JavaScript", "HTML/CSS", "Google Maps JavaScript API", "JSON", "Python", "Flask"],
  },
  {
    role: "Web Developer",
    company: "Toronto General Hospital",
    location: "Toronto, ON",
    start: "May 2019",
    end: "Apr 2022",
    employment: "Part-time",
    description: "Interactive 3D visualization tools for congenital cardiac anatomy",
    highlights: [
      "Sole developer of browser-based 3D viewers built with Three.js and ES6 JavaScript, rendering ~10 models of hearts that had undergone congenital heart surgery, used by medical students to study corrected anatomy",
      "Added per-chamber color coding and toggleable visibility with orbit and zoom controls, letting students hide outer chambers and examine internal structures at any angle",
      "Deployed through Google Firebase with CI after an initial AWS S3 static setup, and refined anatomical accuracy with feedback from the hospital's cardiac team",
    ],
    technologies: ["Three.js", "JavaScript (ES6)", "Firebase", "AWS S3", "CI/CD"],
  },
];

export const education: Education[] = [
  {
    degree: "BA",
    field: "Digital Media (Computer Science & Game Design)",
    school: "York University",
    location: "Toronto, ON",
    year: "2021",
  },
];
