import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-synertech",
    role: "Trainee Software Engineer",
    company: "SynerTechVentures",
    companyUrl: "https://synertechventures.com",
    location: "Colombo, Sri Lanka",
    period: "Jan 2024 — Jun 2024",
    type: "work",
    description: "Contributed to the development of enterprise web applications and scalable backend services in an Agile team environment.",
    achievements: [
      "Built dynamic, responsive web applications using React with focus on clean state management and intuitive user experiences.",
      "Developed robust backend RESTful APIs using Spring Boot and Java, integrating secure relational database schemas.",
      "Integrated Keycloak authentication and role-based access control (RBAC) to secure web services and user sessions.",
      "Provided customer technical support, diagnosing client issues and resolving tickets within SLA limits."
    ],
    technologies: ["React", "Spring Boot", "Java", "Keycloak", "JavaScript", "REST APIs", "MySQL", "Git"],
    metrics: "Keycloak RBAC Security & Enterprise React Modules"
  },
  {
    id: "exp-datamation",
    role: "Software Engineer Intern",
    company: "Datamation Systems (Pvt) Ltd",
    companyUrl: "https://www.datamationsystems.net",
    location: "Colombo, Sri Lanka",
    period: "Mar 2023 — Apr 2023",
    type: "work",
    description: "Assisted in the deployment and configuration of enterprise sales and distribution management software.",
    achievements: [
      "Deployed and configured NewsPage by Accenture sales force and distribution management software for corporate FMCG clients.",
      "Provided enterprise-level customer technical support, logging diagnostics and troubleshooting production issues.",
      "Facilitated end-user training sessions and prepared operational support documentation to accelerate client onboarding."
    ],
    technologies: ["NewsPage by Accenture", "Enterprise Distribution Systems", "SQL", "Technical Support", "Client Training"],
    metrics: "Accenture NewsPage Enterprise Deployment & Support"
  }
];
