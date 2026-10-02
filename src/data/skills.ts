import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    description: "Core programming languages for robust backends, web frontends, and desktop applications.",
    skills: [
      { name: "Java", category: "languages", level: "Expert", featured: true },
      { name: "JavaScript", category: "languages", level: "Expert", featured: true },
      { name: "Python", category: "languages", level: "Proficient", featured: true },
      { name: "C#", category: "languages", level: "Expert", featured: true },
      { name: "SQL", category: "languages", level: "Expert", featured: true },
      { name: "C++", category: "languages", level: "Proficient" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Web",
    description: "Modern web libraries and frameworks for clean, responsive, and intuitive user experiences.",
    skills: [
      { name: "React", category: "frontend", level: "Expert", featured: true },
      { name: "Next.js", category: "frontend", level: "Expert", featured: true },
      { name: "Tailwind CSS", category: "frontend", level: "Expert", featured: true }
    ]
  },
  {
    id: "backend-cloud",
    name: "Backend & Cloud",
    description: "Enterprise backend development, microservices, containerization, and authentication frameworks.",
    skills: [
      { name: "Spring Boot", category: "backend-cloud", level: "Expert", featured: true },
      { name: "REST APIs", category: "backend-cloud", level: "Expert", featured: true },
      { name: "Microservices", category: "backend-cloud", level: "Expert", featured: true },
      { name: "AWS", category: "backend-cloud", level: "Familiar" },
      { name: "Docker", category: "backend-cloud", level: "Proficient", featured: true },
      { name: "Keycloak", category: "backend-cloud", level: "Proficient", featured: true }
    ]
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational database engines, cloud document stores, and schema modeling.",
    skills: [
      { name: "MySQL", category: "databases", level: "Expert", featured: true },
      { name: "MS SQL Server", category: "databases", level: "Expert", featured: true },
      { name: "Firebase", category: "databases", level: "Proficient", featured: true }
    ]
  }
];
