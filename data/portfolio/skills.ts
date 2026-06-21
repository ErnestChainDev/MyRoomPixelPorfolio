export type SkillAccent =
  | "terminal"
  | "cyan"
  | "amber"
  | "rose"
  | "violet"
  | "steel";

export type SkillGroup = {
  title: string;
  level: string;
  focus: string;
  evidence: string;
  accent: SkillAccent;
  items: readonly string[];
};

export const skillProfile = {
  title:
    "Software Development, Quality Assurance, and AI-powered application development.",
  description:
    "Computer Science graduate with experience in web development, software testing, backend development, databases, and AI-powered systems. Skilled in building full-stack applications, validating software quality, debugging issues, and developing reliable user-focused solutions.",
  markers: [
    { label: "Primary Focus", value: "Software Development" },
    { label: "Secondary Focus", value: "Quality Assurance" },
    { label: "Specialization", value: "AI Applications" },
    { label: "Career Goal", value: "AI Engineer" },
  ],
} as const;

export const skillGroups = [
  {
    title: "Frontend Development",
    level: "Core Skills",
    focus:
      "Building responsive web applications, dashboards, landing pages, and interactive user interfaces.",
    evidence:
      "Used in Course Recommendation System, TruthFinder, Hotel Management Application, and portfolio projects.",
    accent: "terminal",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Frontend Architecture",
    ],
  },
  {
    title: "Backend Development",
    level: "Application Development",
    focus:
      "Developing APIs, business logic, authentication systems, and server-side applications.",
    evidence:
      "Implemented backend services and integrations for academic and personal projects.",
    accent: "cyan",
    items: [
      "Node.js",
      "FastAPI",
      "Python",
      "TypeScript",
      "REST APIs",
      "API Integration",
      "Server-side Development",
    ],
  },
  {
    title: "Quality Assurance & Testing",
    level: "Strong Foundation",
    focus:
      "Software validation, test case creation, bug reporting, and ensuring application reliability.",
    evidence:
      "Manual Testing Practice Project and QA activities during system development and DICT internship.",
    accent: "amber",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "User Acceptance Testing (UAT)",
      "Test Case Development",
      "Test Scenario Creation",
      "Bug Tracking",
      "Defect Documentation",
      "SDLC",
      "STLC",
      "Software QA",
    ],
  },
  {
    title: "Database Management",
    level: "Data Layer",
    focus:
      "Designing and managing structured databases for web and AI-powered applications.",
    evidence:
      "Used across academic systems and full-stack development projects.",
    accent: "rose",
    items: [
      "MySQL",
      "MongoDB",
      "Database Design",
      "CRUD Operations",
      "Data Management",
    ],
  },
  {
    title: "AI & Machine Learning",
    level: "Specialization Area",
    focus:
      "Developing intelligent systems, recommendation engines, and explainable AI solutions.",
    evidence:
      "Course Recommendation System Thesis using Machine Learning, K-Means Clustering, and Content-Based Filtering.",
    accent: "violet",
    items: [
      "Machine Learning",
      "Explainable AI (XAI)",
      "K-Means Clustering",
      "Content-Based Filtering",
      "Recommendation Systems",
      "Data Analysis",
      "AI Application Development",
    ],
  },
  {
    title: "Tools & Technologies",
    level: "Development Workflow",
    focus:
      "Version control, API testing, debugging, deployment, and development productivity.",
    evidence:
      "Used throughout academic projects, internship work, and personal development.",
    accent: "steel",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio Code",
      "Selenium (Basic)",
      "REST APIs",
      "Debugging",
      "Documentation",
      "Agile Methodology",
    ],
  },
] satisfies readonly SkillGroup[];

export const skills = skillGroups.flatMap((group) => group.items);