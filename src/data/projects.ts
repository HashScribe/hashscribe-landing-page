import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "medyping-whatsapp-medication-reminder",
    title: "MedyPing — WhatsApp Medication Reminder Platform",
    description:
      "A simple medication reminder platform that helps patients remember their medicines through WhatsApp reminders, follow-up messages, and an easy-to-use scheduling flow without requiring users to install another app.",
    problem:
      "Many patients forget to take their medication on time, especially elderly users or people managing multiple medicines daily. Traditional reminder apps often require installation, setup, and regular app usage, which creates friction for users who are already comfortable with WhatsApp.",
    solution:
      "We built MedyPing as a WhatsApp-first medication reminder platform. Users can add their medication name, dosage, and reminder time, then receive timely WhatsApp reminders. If a dose is missed, MedyPing can send follow-up messages to encourage better adherence. The product is designed to be simple, personal, and accessible without requiring an extra mobile app.",
    category: "web",
    thumbnailUrl: "/images/projects/medy-ping/cover.png",
    bannerUrl: "/images/projects/medy-ping/cover.png",
    screenshots: [
      "/images/projects/finflow-1.webp",
      "/images/projects/finflow-2.webp",
      "/images/projects/finflow-3.webp",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "WhatsApp API",
      "PostgreSQL",
    ],
    clientName: "MedyPing",
    timeline: "MVP in progress",
    results:
      "Built an early MVP with core medication scheduling and WhatsApp reminder functionality. The product is currently being validated with potential users and healthcare-related feedback.",
    featured: true,
    publishedAt: "2026-05-15",
  },
  {
    id: 2,
    slug: "pawbid-pet-auction-platform",
    title: "PawBid — Online Pet Bidding Platform",
    description:
      "A modern pet marketplace platform that allows users to browse, bid, and connect with pet sellers through a seamless mobile-first experience available on both iOS and Android.",
    problem:
      "Traditional pet selling processes were fragmented and mostly handled through social media groups or classified ads, making it difficult for buyers to discover trusted listings and participate in transparent bidding. Sellers also lacked a dedicated platform to showcase pets professionally and manage inquiries efficiently.",
    solution:
      "We built PawBid as a mobile-first pet bidding platform where users can explore pet listings, place bids in real time, and communicate with sellers through a streamlined experience. The platform includes live bidding flows, image-based listings, user authentication, and real-time updates powered by Firebase, creating a fast and engaging marketplace experience across mobile and web.",
    category: "mobile",
    thumbnailUrl: "/images/projects/paw-bid/cover.png",
    bannerUrl: "/images/projects/paw-bid/cover.png",
    screenshots: [
      "/images/projects/medisync-1.webp",
      "/images/projects/medisync-2.webp",
      "/images/projects/medisync-3.webp",
    ],
    techStack: [
      "React Native",
      "React",
      "TypeScript",
      "Firebase",
      "Express.js",
    ],
    clientName: "PawBid",
    timeline: "5 months",
    results:
      "Successfully launched cross-platform iOS and Android applications with real-time bidding functionality, scalable backend services, and an optimized mobile-first user experience.",
    featured: true,
    publishedAt: "2025-08-20",
  },
  {
    id: 3,
    slug: "nexora-ai-crm",
    title: "Nexora AI CRM",
    description:
      "An AI-powered customer relationship management platform designed for modern businesses to manage leads, automate communication, and gain actionable sales insights through intelligent workflows.",

    problem:
      "Small and medium-sized businesses were struggling with fragmented customer communication across WhatsApp, email, and social platforms. Sales teams manually tracked leads using spreadsheets, resulting in lost opportunities, delayed follow-ups, and poor customer engagement. Existing CRM solutions were either too expensive, overly complex, or lacked automation tailored for fast-moving businesses.",

    solution:
      "Nexora AI CRM centralizes customer interactions into a single intelligent platform. The system provides AI-generated email and WhatsApp responses, smart lead prioritization, automated follow-up workflows, and real-time analytics dashboards. Businesses can track their sales pipeline, monitor customer engagement, and automate repetitive communication tasks while maintaining a personalized customer experience.",

    category: "fullstack",

    thumbnailUrl: "/images/projects/nexora/cover.png",

    bannerUrl: "/images/projects/nexora/cover.png",

    screenshots: [
      "/images/projects/nexora-dashboard.webp",
      "/images/projects/nexora-leads.webp",
      "/images/projects/nexora-analytics.webp",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "OpenAI API",
      "Tailwind CSS",
      "Socket.IO",
      "AWS S3",
      "Docker",
    ],

    clientName: "Internal Product Concept",

    timeline: "4 Months",

    results:
      "Reduced manual lead management effort by 65% through workflow automation and AI-assisted communication. Improved average customer response time from hours to minutes using automated WhatsApp and email follow-ups. Designed with scalable multi-tenant architecture capable of supporting multiple organizations within a single platform.",

    featured: true,

    publishedAt: "2026-05-16",
  },
];
