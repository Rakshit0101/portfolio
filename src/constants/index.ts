import { Experience, NavItem, SkillCategory, SocialLink, LearningResource } from "../types";
import { Github, Linkedin, Mail } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "LRC",
    href: "#lrc",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Certainti.AI",
    position: "Software Engineer",
    period: "2022 - Present",
    description: [
      "Worked on an AI-powered SaaS platform that automates R&D tax credit assessments for companies",
      "Developed and maintained backend services using Spring Boot and Java",
      "Integrated with various Azure cloud services including AD B2C, Blob Storage, and Queue Storage",
      "Implemented data processing pipelines and optimized database queries",
    ],
  },
  {
    company: "TheBay.com, Hudson's Bay Company",
    position: "Backend Engineer",
    period: "2020 - 2022",
    description: [
      "Contributed to the development of Hudson's Bay Company's online marketplace",
      "Worked with enterprise-grade systems and handled high-volume traffic",
      "Built RESTful APIs using Spring Boot and Java",
      "Collaborated with cross-functional teams to implement new features",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      "Java 8/17",
      "Spring Boot 3",
      "Spring Batch",
      "Spring MVC",
      "JPA/Hibernate",
      "Node.js",
      "Mockito",
    ],
  },
  {
    category: "Cloud Services",
    skills: [
      "Azure VMs",
      "Azure AD B2C",
      "Azure Blob Storage",
      "Azure Queue Storage",
      "Azure Key Vault",
      "AWS",
    ],
  },
  {
    category: "Database & Technologies",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Bash",
      "Mulesoft",
      "Git",
      "Jira",
      "Maven",
      "RabbitMQ",
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "#",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:example@example.com",
    icon: "Mail",
  },
];

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    title: "Spring Boot Best Practices",
    type: "pdf",
    url: "/path-to-your-pdf.pdf",
    description: "A comprehensive guide on Spring Boot development best practices and patterns",
  },
  {
    title: "Azure Cloud Architecture",
    type: "link",
    url: "https://learn.microsoft.com/azure/architecture/",
    description: "Microsoft's official guide on Azure cloud architecture and best practices",
  },
  // Add more resources as needed
];