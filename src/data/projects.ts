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
    slug: "taskforge-project-management",
    title: "TaskForge — Agile Project Management",
    description:
      "A modern project management tool built for engineering teams, featuring real-time collaboration, sprint planning, and automated workflows.",
    problem:
      "Existing project management tools were either too simplistic for complex engineering workflows or too bloated with features that slowed teams down. Engineering managers needed a tool that understood agile methodologies natively and integrated with their development pipeline.",
    solution:
      "We created TaskForge with engineering teams at the core. The platform features native Git integration, automated sprint velocity tracking, and intelligent task suggestions based on team capacity. Real-time collaboration with live cursors and inline code snippets makes standups and planning sessions seamless.",
    category: "web",
    thumbnailUrl: "/images/projects/taskforge-thumb.webp",
    bannerUrl: "/images/projects/taskforge-banner.png",
    screenshots: [
      "/images/projects/taskforge-1.webp",
      "/images/projects/taskforge-2.webp",
      "/images/projects/taskforge-3.webp",
    ],
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
    ],
    clientName: "TaskForge Labs",
    timeline: "5 months",
    results:
      "10K+ active teams, 28% improvement in sprint completion rates, 95% customer satisfaction.",
    featured: true,
    publishedAt: "2025-06-10",
  },
  {
    id: 4,
    slug: "savora-food-delivery",
    title: "Savora — Food Delivery Reimagined",
    description:
      "A premium food delivery application with real-time order tracking, AI-powered recommendations, and a seamless ordering experience.",
    problem:
      "The food delivery market was saturated with apps that offered poor UI, inaccurate delivery estimates, and generic restaurant recommendations. Restaurant partners were frustrated with high commission rates and limited control over their brand presentation.",
    solution:
      "Savora puts quality first with curated restaurant partnerships and a beautiful, brand-forward interface for each vendor. Our AI recommendation engine learns user preferences over time, while the real-time tracking system provides accurate ETAs using traffic and preparation data. Restaurant partners get a powerful dashboard with analytics and brand customization.",
    category: "mobile",
    thumbnailUrl: "/images/projects/savora-thumb.webp",
    bannerUrl: "/images/projects/savora-banner.webp",
    screenshots: [
      "/images/projects/savora-1.webp",
      "/images/projects/savora-2.webp",
      "/images/projects/savora-3.webp",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Node.js",
      "Google Maps API",
      "Stripe",
    ],
    clientName: "Savora Technologies",
    timeline: "7 months",
    results:
      "100K+ orders processed, 4.7★ average rating, 60% repeat order rate.",
    featured: false,
    publishedAt: "2025-04-05",
  },
  {
    id: 5,
    slug: "learnhub-education-platform",
    title: "LearnHub — E-Learning Platform",
    description:
      "An interactive e-learning platform with live classes, course marketplaces, and progress tracking for students and educators.",
    problem:
      "Online education platforms were either too focused on pre-recorded content with no interaction, or expensive enterprise solutions that small educators could not afford. Students lacked engagement tools and educators had limited monetization options.",
    solution:
      "LearnHub bridges the gap with a hybrid learning model. Live interactive classes with breakout rooms, collaborative whiteboards, and real-time quizzes keep students engaged. Educators get a full suite of tools — course builder, analytics, and flexible pricing models. The marketplace enables discovery through smart algorithms.",
    category: "web",
    thumbnailUrl: "/images/projects/learnhub-thumb.webp",
    bannerUrl: "/images/projects/learnhub-banner.webp",
    screenshots: [
      "/images/projects/learnhub-1.webp",
      "/images/projects/learnhub-2.webp",
      "/images/projects/learnhub-3.webp",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Strapi",
      "PostgreSQL",
      "WebSocket",
      "AWS S3",
    ],
    clientName: "LearnHub Education",
    timeline: "9 months",
    results:
      "5K+ courses published, 50K+ active learners, 89% course completion rate.",
    featured: false,
    publishedAt: "2025-02-18",
  },
  {
    id: 6,
    slug: "urbannest-real-estate",
    title: "UrbanNest — Smart Real Estate",
    description:
      "A modern real estate platform with virtual property tours, AI-powered price predictions, and streamlined buyer-seller communication.",
    category: "fullstack",
    problem:
      "The real estate buying process was opaque and stressful. Buyers couldn't accurately assess properties remotely, price negotiations lacked data-driven insights, and communication between agents, buyers, and sellers was fragmented across emails, calls, and texts.",
    solution:
      "UrbanNest brings transparency to real estate with immersive 3D virtual tours, an AI valuation engine trained on historical market data, and a centralized communication hub. Smart matching connects buyers with properties that fit their lifestyle, not just their budget. The agent dashboard streamlines the entire transaction lifecycle.",
    thumbnailUrl: "/images/projects/urbannest-thumb.webp",
    bannerUrl: "/images/projects/urbannest-banner.webp",
    screenshots: [
      "/images/projects/urbannest-1.webp",
      "/images/projects/urbannest-2.webp",
      "/images/projects/urbannest-3.webp",
    ],
    techStack: [
      "React",
      "Node.js",
      "Three.js",
      "MongoDB",
      "Elasticsearch",
      "GCP",
    ],
    clientName: "UrbanNest Realty",
    timeline: "10 months",
    results:
      "2K+ properties listed, 30% faster transaction completion, 4.9★ customer rating.",
    featured: true,
    publishedAt: "2024-12-01",
  },
];
