import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Anfas Arshad",
  role: "Software Engineer & Full-Stack Developer",
  tagline: "Passionate about architecting scalable web platforms, resilient backend services, and clean user interfaces. Driven by modern software engineering practices, algorithmic problem-solving, and continuous learning.",
  bioParagraphs: [
    "I am a Software Engineer and Full-Stack Developer with hands-on industrial experience engineering responsive web applications, secure REST APIs, and microservices architectures. Grounded in strong computer science fundamentals from NIBM and Coventry University, I enjoy tackling complex architectural problems and transforming ideas into robust, production-ready digital products.",
    "My technical core revolves around Java, Spring Boot, React, Next.js, and relational database systems, backed by hands-on exposure to Keycloak authentication and containerized deployments. Whether collaborating across cross-functional Agile sprints or building solo full-stack systems, I emphasize maintainable design patterns, clean code, and intuitive user experiences."
  ],
  location: "Mabola, Wattala, Sri Lanka",
  email: "anfasarshad@gmail.com",
  phone: "+94 788 999 196",
  image: "/profile.jpg",
  availability: "Available for opportunities • Sri Lanka",
  statusText: "Available for opportunities • Sri Lanka",
  openToRelocation: true,
  resumeUrl: "/resume.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/anfasarshad",
      icon: "github",
      handle: "@anfasarshad"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anfas-arshad",
      icon: "linkedin",
      handle: "in/anfas-arshad"
    },
    {
      name: "Email",
      url: "mailto:anfasarshad@gmail.com",
      icon: "mail",
      handle: "anfasarshad@gmail.com"
    }
  ],
  stats: [
    {
      label: "Degree in Computing",
      value: "Coventry Uni",
      description: "BSc (Hons) Computing candidate via NIBM"
    },
    {
      label: "Industry Experience",
      value: "2+ Roles",
      description: "Trainee & intern experience in enterprise environments"
    },
    {
      label: "Deployed Systems",
      value: "Multiple",
      description: "Enterprise rollouts, microservices & desktop suites"
    },
    {
      label: "Core Tech Stack",
      value: "15+ Tools",
      description: "Spring Boot, React, Next.js, Java, SQL, Keycloak"
    }
  ],
  education: [
    {
      degree: "BSc (Hons) Computing",
      institution: "Coventry University via NIBM",
      period: "2025 — Present",
      location: "Colombo, Sri Lanka",
      description: "Advanced curriculum covering enterprise software architecture, cloud platforms, and distributed systems design.",
      highlights: [
        "Advanced software engineering methodologies & architectural patterns",
        "Agile team development & research projects"
      ]
    },
    {
      degree: "Higher National Diploma in Software Engineering",
      institution: "National Institute of Business Management (NIBM)",
      period: "2022 — 2023",
      location: "Colombo, Sri Lanka",
      description: "Comprehensive software engineering program spanning OOP, Java, Spring Boot, React, and Database Management.",
      highlights: [
        "Specialized in full-stack web architectures and RESTful microservices",
        "Group capstone projects delivering full-lifecycle systems"
      ]
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "National Institute of Business Management (NIBM)",
      period: "2020 — 2022",
      location: "Colombo, Sri Lanka",
      description: "Foundational diploma in algorithms, data structures, C#, and relational database development.",
      highlights: [
        "Object-oriented software development with C# and .NET",
        "Relational database design and SQL query optimization"
      ]
    }
  ]
};
