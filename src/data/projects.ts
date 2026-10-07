import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-train-booking",
    title: "Train Ticket Booking Microservices",
    tagline: "Scalable rail reservation platform built with decoupled microservices.",
    description: "A scalable rail reservation and ticketing platform built with Java, Spring Boot, React, and MySQL using RESTful microservices. Features modular service boundaries for ticket scheduling, seat allocations, dynamic fares, and passenger management.",
    category: "Full Stack",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Tailwind CSS", "Microservices"],
    featured: true,
    liveUrl: "https://github.com/AnfasArshad/Ticketbookingsystem",
    githubUrl: "https://github.com/AnfasArshad/Ticketbookingsystem",
    metrics: "Microservices Architecture & ACID Booking Guarantees",
    highlights: [
      "Decoupled microservice architecture separating booking, inventory, and passenger records",
      "Interactive seat booking and train schedule interface built with React & Tailwind CSS",
      "Transactional MySQL database schema ensuring concurrency safety and zero double-booking"
    ]
  },
  {
    id: "proj-blog-api",
    title: "Secure Blog REST API",
    tagline: "High-standard backend API with Spring Security, JWT, and OpenAPI Swagger documentation.",
    description: "A secure, production-grade backend service featuring role-based access control (RBAC), Spring Security, JWT authentication, and interactive Swagger documentation. Implements complete post, category, and comment CRUD operations with pagination.",
    category: "Full Stack",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate / JPA", "Swagger"],
    featured: true,
    liveUrl: "https://github.com/AnfasArshad/blog-application",
    githubUrl: "https://github.com/AnfasArshad/blog-application",
    metrics: "Stateless JWT RBAC & Interactive Swagger 3 Docs",
    highlights: [
      "Stateless security authentication powered by JSON Web Tokens (JWT) & Spring Security",
      "Dynamic pagination, multi-field sorting, and filtering for blog post feeds",
      "Interactive OpenAPI / Swagger 3 documentation for easy endpoint exploration and testing"
    ]
  },
  {
    id: "proj-megatech-store",
    title: "MegaTech Store Management System",
    tagline: "Desktop retail and inventory automation suite with automated billing and analytics.",
    description: "A Windows desktop retail and inventory automation suite built with .NET (C#) and MS SQL Server. Designed for electronic stores to manage stock inventories, generate customer invoices, track supplier payments, and analyze sales reports.",
    category: "Full Stack",
    technologies: [".NET", "C#", "Guna UI", "MS SQL Server", "Windows Forms", "Reporting"],
    featured: true,
    liveUrl: "https://github.com/anfasarshad/megatech-store-management",
    githubUrl: "https://github.com/anfasarshad/megatech-store-management",
    metrics: "Automated Billing, Inventory Tracking & POS",
    highlights: [
      "Modern desktop user experience built using C# and Guna UI framework",
      "Inventory alerts for low-stock items with automatic re-order notification triggers",
      "Reliable relational data persistence using Microsoft SQL Server with stored procedures"
    ]
  }
];
