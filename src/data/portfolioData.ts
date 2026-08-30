import { Project, SkillCategory, TimelineItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammad Umair",
  role: "Mechanical Engineer & AI Application Developer",
  status: "Available for hire",
  location: "Pakistan & Remote Worldwide",
  email: "m.umairehsan2@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  bio: "Dual-domain engineer fusing rigorous mechanical engineering principles with modern full-stack development and Agentic AI workflows. Experienced in building end-to-end web apps, generative AI automations, and thermal/physical systems simulation.",
  summaryText: "I bridge physical mechanics and modern software intelligence. Whether designing robust thermodynamic solar heating models or deploying agentic AI pipelines with React, Node, and Python, I build deterministic, user-centric systems.",
};

export const STATS: StatItem[] = [
  { value: "15+", label: "Projects Completed", description: "From AI pipelines to mechanical prototypes" },
  { value: "3+", label: "Specialized Internships & Certs", description: "Cisco, CodeAlpha, & AI Fellowships" },
  { value: "99.4%", label: "System Accuracy / Reliability", description: "RAG & diagnostic benchmark rate" },
  { value: "100%", label: "Commitment to Clean Code", description: "Vercel/Linear design ethos & SOLID principles" },
];

export const PROJECTS: Project[] = [
  {
    id: "autocare-pro",
    title: "AutoCare Pro",
    tagline: "Full-Stack Automotive Service & Telematics Platform",
    category: "Full-Stack",
    description: "An enterprise-grade workshop management and vehicle health telemetry platform enabling real-time booking, mechanic dispatch, diagnostic report generation, and invoice tracking.",
    longDescription: "Engineered to solve disconnected customer-to-mechanic workflows. Features automated service stage notifications, vehicle fault code analysis, automated PDF billing, and responsive mobile-first diagnostics.",
    tags: ["React 19", "Node.js", "Express", "Tailwind CSS", "REST API", "PostgreSQL Ready"],
    metrics: "Reduced booking turnaround by 45%",
    highlights: [
      "Modular booking pipeline with dynamic time-slot reservation",
      "Real-time diagnostic report generator with vehicle maintenance logs",
      "Interactive status tracker with live progress stepping"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://autocare-pro.demo.dev",
    featured: true,
    iconName: "Wrench",
    architecture: ["Client SPA (React)", "Node.js API Middleware", "Vehicle Telematics Parser", "Tailwind Component Engine"]
  },
  {
    id: "ai-linkedin-post-generator",
    title: "AI LinkedIn Post Generator",
    tagline: "Autonomous Agentic Content Creator with Tone Tuning",
    category: "AI & LLM",
    description: "Generative AI web tool that crafts viral, domain-specific technical write-ups and carousel outlines using structured prompt engineering, tone analyzers, and hook generators.",
    longDescription: "Combines LLM prompt orchestration with viral hook heuristics. Users customize niche, target audience, technical depth, and emoji density with instant copy-to-clipboard formatting.",
    tags: ["Python", "OpenAI / Gemini API", "React", "Prompt Orchestration", "n8n Automation"],
    metrics: "Over 5,000+ posts formatted",
    highlights: [
      "Custom hook generator with viral engineering patterns",
      "One-click multi-format export (Markdown, Rich Text, Carousel structure)",
      "Automated hashtag generation based on semantic relevance"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://linkedin-ai.demo.dev",
    featured: true,
    iconName: "Sparkles",
    architecture: ["React UI Layer", "Python FastAPIs", "LLM Reasoning Engine", "n8n Webhook Trigger"]
  },
  {
    id: "solar-water-heating-system",
    title: "Solar Water Heating System",
    tagline: "Thermodynamic Modeling & Physical System Design",
    category: "Engineering & IoT",
    description: "CAD-modelled and mathematically simulated solar thermal collector system optimizing heat absorption efficiency under fluctuating solar irradiance patterns.",
    longDescription: "A flagship mechanical engineering project analyzing flat-plate vs. evacuated tube solar collectors. Includes fluid flow simulations, thermodynamic loss equations, and payback period calculators.",
    tags: ["SolidWorks", "MATLAB / Python", "Thermodynamics", "Fluid Mechanics", "Energy Simulation"],
    metrics: "+32% thermal capture efficiency",
    highlights: [
      "3D CAD assembly modeling of thermal exchanger manifold and insulation jackets",
      "Computational heat transfer calculations validated against solar irradiance dataset",
      "Life-cycle cost and carbon abatement calculation model"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://solar-thermal.demo.dev",
    featured: true,
    iconName: "Sun",
    architecture: ["SolidWorks CAD Assemblies", "Python Thermo Models", "Solar Irradiance Datasets", "Simulation Graphs"]
  },
  {
    id: "agentic-rag-pipeline",
    title: "Autonomous Agentic RAG Pipeline",
    tagline: "Multi-Source Document Retrieval & Citation Engine",
    category: "AI & LLM",
    description: "Intelligent document retrieval pipeline that indexes technical engineering manuals and research papers, outputting grounded answers with exact source page citations.",
    tags: ["Python", "LangChain", "Vector DB", "Embeddings", "FastAPI"],
    metrics: "Sub-200ms semantic search latency",
    highlights: [
      "Recursive chunking algorithm preserving tables and technical formulas",
      "Hallucination guardrails with fallback web search validation",
      "Interactive Streamlit & React query interface"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://rag-agent.demo.dev",
    featured: false,
    iconName: "Cpu",
    architecture: ["Vector Store", "Embedding Pipeline", "Agentic Dispatcher", "FastAPI Service"]
  },
  {
    id: "smart-iot-monitor",
    title: "Industrial Telemetry & Sensor Hub",
    tagline: "Microcontroller Real-Time Vibration & Temp Tracker",
    category: "Engineering & IoT",
    description: "ESP32-based hardware telemetry hub capturing thermal fluctuations and vibrational anomalies for predictive maintenance on rotating mechanical machinery.",
    tags: ["ESP32 / Arduino", "C++", "MQTT", "Node.js", "WebSockets"],
    metrics: "24/7 continuous sensor uptime",
    highlights: [
      "Real-time chart streaming via WebSockets",
      "Threshold anomaly detection triggering automated alerts",
      "Custom 3D printed sensor housing"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://iot-telemetry.demo.dev",
    featured: false,
    iconName: "Activity",
    architecture: ["Hardware Sensor Rig", "MQTT Broker", "Express Event Server", "Live Telemetry Dashboard"]
  },
  {
    id: "n8n-automation-suite",
    title: "Enterprise Workflow Automation Suite",
    tagline: "Self-Hosted Agentic Integration Mesh",
    category: "Full-Stack",
    description: "Automated business workflow system linking GitHub webhooks, CRM leads, automated code quality checks, and Discord/Slack notification channels.",
    tags: ["n8n", "Docker", "JavaScript", "Webhooks", "PostgreSQL"],
    metrics: "Saved 12+ manual hours weekly",
    highlights: [
      "Multi-branch conditional logic and error-retry mechanisms",
      "Automated daily summary digest sent via encrypted webhooks",
      "Zero-downtime Docker containerized deployment"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://n8n-suite.demo.dev",
    featured: false,
    iconName: "Workflow",
    architecture: ["n8n Core Engine", "Docker Compose", "Postgres State Store", "API Integrations"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    description: "Clean UI/UX architectures with precise micro-interactions and low-latency rendering.",
    icon: "Layout",
    skills: [
      { name: "React 18/19", level: "Advanced", badge: "Primary", description: "State hooks, memoization, component decomposition" },
      { name: "Tailwind CSS", level: "Expert", badge: "Core", description: "Design systems, responsive flex/grid, zero-runtime styling" },
      { name: "TypeScript", level: "Proficient", badge: "Standard", description: "Type guards, generic models, interface contracts" },
      { name: "HTML5 / Semantic Web", level: "Expert", description: "Accessible ARIA roles, modern semantic layouts" },
      { name: "Modern CSS / Motion", level: "Proficient", description: "Transitions, keyframe animations, UI polish" }
    ]
  },
  {
    name: "Backend & Automation",
    description: "Robust API servers, workflow schedulers, and high-reliability data persistence.",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: "Advanced", badge: "Primary", description: "RESTful architecture, JWT auth, middleware piping" },
      { name: "Python", level: "Advanced", badge: "Core", description: "FastAPI, script automation, data manipulation" },
      { name: "n8n Automation", level: "Proficient", badge: "Workflow", description: "Complex webhook chains, integration mesh" },
      { name: "PostgreSQL & SQLite", level: "Proficient", description: "Relational schema design, indexed queries" },
      { name: "REST APIs & WebSockets", level: "Advanced", description: "Full-duplex data streaming, structured payloads" }
    ]
  },
  {
    name: "AI, LLMs & Agentic Systems",
    description: "Building production-ready Generative AI tools, RAG architectures, and computer vision models.",
    icon: "Bot",
    skills: [
      { name: "Generative AI APIs", level: "Advanced", badge: "Specialist", description: "Gemini 2.5/3, OpenAI, structured outputs" },
      { name: "Agentic Pipelines", level: "Proficient", badge: "Cutting-Edge", description: "Tool calling, autonomous reasoning, LangChain" },
      { name: "RAG & Vector Retrieval", level: "Proficient", description: "Document chunking, cosine similarity, embeddings" },
      { name: "Teachable Machine & CV", level: "Proficient", description: "Visual classification, model export, edge inference" },
      { name: "Prompt Engineering", level: "Expert", description: "Few-shot examples, system role enforcement, jailbreak guardrails" }
    ]
  },
  {
    name: "Mechanical Engineering & CAD",
    description: "Hardware modeling, thermodynamic calculations, and physical system simulations.",
    icon: "Cog",
    skills: [
      { name: "SolidWorks CAD", level: "Advanced", badge: "Hardware", description: "Part modeling, complex assemblies, drawing sheets" },
      { name: "Thermodynamics & Heat Transfer", level: "Academic Mastery", description: "Energy balances, solar radiation modeling, fluid dynamics" },
      { name: "MATLAB & Engineering Sim", level: "Proficient", description: "Numerical analysis, algorithmic validation" },
      { name: "IoT & Microcontrollers (ESP32)", level: "Proficient", description: "Sensor calibration, serial communications" }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "cert-genai",
    year: "2025 - Present",
    period: "Recent Milestone",
    title: "Generative AI Application Developer — Top Performer",
    issuer: "AI Excellence Cohort & Certification",
    category: "Award",
    badgeText: "Top 5% Cohort",
    description: "Recognized as a leading developer for architecting multi-agent reasoning pipelines, autonomous prompt chaining systems, and production AI prototypes.",
    skillsGained: ["Agentic AI", "Prompt Architecture", "Vector Embeddings", "Full-Stack AI Integration"]
  },
  {
    id: "intern-codealpha",
    year: "2024",
    period: "Internship",
    title: "Artificial Intelligence Developer Intern",
    issuer: "CodeAlpha Tech Solutions",
    category: "Experience",
    badgeText: "Distinction",
    description: "Engineered computer vision classification systems, conversational agents, and automated data extraction pipelines with Python and modern ML frameworks.",
    skillsGained: ["Computer Vision", "Python Automation", "Model Fine-Tuning", "Agile Sprints"]
  },
  {
    id: "cert-cisco",
    year: "2024",
    period: "Certification",
    title: "Modern AI & Network Fundamentals",
    issuer: "Cisco Networking Academy",
    category: "Certification",
    badgeText: "Verified Credential",
    description: "Completed comprehensive coursework spanning neural network architectures, modern AI ethics, distributed networking, and secure enterprise infrastructure.",
    skillsGained: ["Enterprise AI", "Cloud Networking", "Data Protocols", "Security Principles"]
  },
  {
    id: "edu-engineering",
    year: "2022 - 2026",
    period: "Degree in Progress",
    title: "B.S. in Mechanical Engineering (Minor in Computational AI)",
    issuer: "University College of Engineering & Technology",
    category: "Education",
    badgeText: "Dean's Honor List",
    description: "Specializing in thermal-fluid systems, computational mechanics, automated control systems, and data-driven physical modeling.",
    skillsGained: ["Fluid Dynamics", "Thermo Design", "Finite Element Analysis", "Control Theory"]
  }
];
