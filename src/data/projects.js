/**
 * VERIFIED PROJECTS SHOWCASE
 * Extracted directly from T_Asil_Jamesha_Resume.pdf
 * 
 * Prioritization:
 * 01 — WORK FORGE (MERN Internship Project)
 * 02 — C2X (Flagship Independent Project)
 * 03 — AI CAREER NAVIGATOR (Hackathon Finalist)
 * 04 — AI CITY PULSE (Flutter & Firebase / UN SDG 11)
 * 05 — AI FRAUD DETECTION (92% Accuracy / 10k Dataset)
 */

export const projects = [
  {
    id: "work-forge",
    number: "01",
    title: "Work Forge — Project Management System",
    shortTitle: "Work Forge",
    category: "MERN STACK / INTERNSHIP PRODUCT",
    badge: "30% EFFICIENCY BOOST",
    isFlagship: false,
    tagline: "End-to-end engineering management tool delivering full CRUD and granular role-based task delegation.",
    description: "Built during internship at Adro IT Technologies Innovative Solutions Pvt Ltd. Full-stack MERN project management platform engineered to streamline development sprints, track deadlines, and govern team access.",
    problemStatement: "Disorganized engineering workflows and disparate task management systems lead to deadline slippages and lack of accountability across development teams.",
    verifiedFeatures: [
      "Secure JWT authentication and multi-tier role-based access control (RBAC)",
      "Comprehensive task assignment, sprint management, and project tracking",
      "Full CRUD operations powered by Express.js REST APIs and MongoDB schemas",
      "Real-time deadline monitoring and visual progress analytics",
      "Directly improved team collaboration efficiency by 30% as documented in professional evaluation"
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "Role-Based Access",
      "Tailwind CSS"
    ],
    github: "https://github.com/Asil081205",
    themeColor: "#E32B3C",
    previewType: "dashboard",
    previewData: {
      system: "MERN Architecture Core",
      stats: [
        { label: "Impact", value: "+30% Efficiency" },
        { label: "Security", value: "Role-Based RBAC" },
        { label: "Database", value: "MongoDB Schemas" }
      ]
    }
  },
  {
    id: "c2x",
    number: "02",
    title: "C2X — Collaborative Coding Experience",
    shortTitle: "C2X IDE",
    category: "COLLABORATIVE IDE / FULL STACK / DEVELOPER TOOLS",
    badge: "FLAGSHIP INDEPENDENT PROJECT",
    isFlagship: true,
    tagline: "Unifying code editing, real-time collaboration, and AI assistance into one desktop ecosystem.",
    description: "C2X is an ambitious collaborative coding platform engineered to combine code authoring, team collaboration, project management, and AI assistance into a single unified workspace.",
    problemStatement: "Developers and students constantly juggle separate tools for code editing, terminal commands, meetings, GitHub, and AI assistants. C2X eliminates context-switching.",
    verifiedFeatures: [
      "Electron + React multi-window architecture with responsive desktop layout",
      "Monaco Code Editor core integration with custom syntax themes and language servers",
      "Interactive File Explorer with local workspace directory tree persistence",
      "Real-time multi-peer synchronization powered by Socket.IO and Neon PostgreSQL",
      "Integrated contextual AI Assistant for intelligent inline code suggestions",
      "Robust authentication and Guest Mode access for frictionless entry"
    ],
    techStack: [
      "Electron",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Monaco Editor",
      "Node.js",
      "Express",
      "PostgreSQL / Neon",
      "Socket.IO",
      "JWT"
    ],
    github: "https://github.com/Asil081205",
    themeColor: "#E32B3C",
    previewType: "ide",
    previewData: {
      file: "CollaborativeWorkspace.tsx",
      language: "typescript",
      status: "AI Assistant Active · Neon PostgreSQL Sync",
      stats: [
        { label: "Architecture", value: "Electron Desktop" },
        { label: "Editor Engine", value: "Monaco Core" },
        { label: "Realtime", value: "Socket.IO" }
      ]
    }
  },
  {
    id: "ai-career-navigator",
    number: "03",
    title: "AI Career Navigator",
    shortTitle: "Career Navigator",
    category: "AI / CAREER TECHNOLOGY / HACKATHON FINALIST",
    badge: "HACKATHON FINALIST",
    isFlagship: false,
    tagline: "Intelligent resume parsing and personalized career trajectory mapping recognized in national competition.",
    description: "An AI-powered career guidance platform designed to analyze candidate resumes, identify skill proficiencies, highlight gaps, and recommend tailored job opportunities. Recognized as a Top Finalist among 50–70 competing teams.",
    problemStatement: "Job seekers struggle to understand how their existing skill sets align with evolving industry demands, leading to misdirected applications.",
    verifiedFeatures: [
      "Automated resume file upload and text extraction engine",
      "NLP-based skill extraction and candidate profile generation",
      "Algorithmic skill-gap analysis matching market expectations",
      "Domain suitability matching and personalized career recommendations",
      "Targeted job discovery module connecting skills to real positions"
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "NLP Algorithms",
      "REST APIs"
    ],
    github: "https://github.com/Asil081205",
    themeColor: "#E32B3C",
    previewType: "ai-flow",
    previewData: {
      flow: ["Resume Upload", "Skill Extraction", "Gap Analysis", "Job Discovery"],
      stats: [
        { label: "Recognition", value: "Finalist (50-70 Teams)" },
        { label: "Intelligence", value: "NLP Resume Parser" },
        { label: "Matching", value: "Domain Fit Engine" }
      ]
    }
  },
  {
    id: "ai-city-pulse",
    number: "04",
    title: "AI City Pulse — Smart City Health Monitoring App",
    shortTitle: "City Pulse",
    category: "MOBILE / FLUTTER / UN SDG 11",
    badge: "UN SDG 11 ALIGNED",
    isFlagship: false,
    tagline: "Cross-platform mobile intelligence analyzing traffic, pollution, and crowd density into a real-time City Health Score.",
    description: "A cross-platform Flutter mobile application designed to monitor urban well-being by aggregating and analyzing traffic flow, air quality indicators, and pedestrian density in real time. Aligned with UN Sustainable Development Goal 11 (Sustainable Cities and Communities).",
    problemStatement: "Urban citizens and city administrators lack a unified real-time metric reflecting environmental and infrastructural health at a glance.",
    verifiedFeatures: [
      "Cross-platform mobile application architecture built with Flutter and Dart",
      "Real-time sensor and telemetry sync powered by Firebase Cloud Firestore",
      "Multi-variable metric computation: Traffic congestion, Pollution levels, Crowd density",
      "Dynamically calculated real-time 'City Health Score' index",
      "Clean, modern data visualizations and alert triggers for citizens"
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Mobile Architecture",
      "UN SDG 11"
    ],
    github: "https://github.com/Asil081205",
    themeColor: "#F2EFEB",
    previewType: "mobile",
    previewData: {
      device: "Flutter Mobile App",
      focus: "City Health Score",
      stats: [
        { label: "Framework", value: "Flutter / Dart" },
        { label: "Backend", value: "Firebase Cloud" },
        { label: "Impact", value: "UN SDG 11" }
      ]
    }
  },
  {
    id: "ai-fraud-detection",
    number: "05",
    title: "AI-Powered Fraud Detection System",
    shortTitle: "Fraud Detection",
    category: "MACHINE LEARNING / FINANCIAL SECURITY",
    badge: "92% ACCURACY",
    isFlagship: false,
    tagline: "Statistical anomaly classification trained on 10,000 transaction records with tuned precision.",
    description: "A machine learning project focused on identifying fraudulent financial transactions through rigorous exploratory data analysis, class imbalance handling, feature engineering, and model evaluation. Achieved 92% classification accuracy.",
    problemStatement: "Financial institutions face millions in losses from subtle fraudulent transactions disguised within high-volume legitimate transaction streams.",
    verifiedFeatures: [
      "Trained and evaluated on a structured 10,000-row transaction dataset",
      "Achieved verified 92% classification accuracy through systematic model tuning",
      "Comprehensive feature engineering and correlation heatmap analysis",
      "Rigorous precision, recall, and ROC-AUC curve performance validation",
      "Optimized inference pipeline for fast risk classification"
    ],
    techStack: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Data Modeling"
    ],
    github: "https://github.com/Asil081205",
    themeColor: "#E32B3C",
    previewType: "data",
    previewData: {
      algorithm: "Supervised ML Classifier",
      stats: [
        { label: "Accuracy", value: "92% Verified" },
        { label: "Dataset", value: "10,000 Transactions" },
        { label: "Pipeline", value: "Scikit-Learn ML" }
      ]
    }
  },
  {
    id: "qyzen",
    number: "06",
    title: "Qyzen — Client Web Solutions",
    shortTitle: "Qyzen",
    category: "PRODUCT DEVELOPMENT / CLIENT PROJECTS",
    badge: "3 CLIENTS SERVED",
    isFlagship: false,
    tagline: "Delivering client-oriented digital solutions and agile product development.",
    description: "Contributed to startup-related development work and client-oriented digital solutions. Successfully built and deployed tailored web experiences.",
    problemStatement: "Early-stage ventures and clients need lean, high-performance web applications tailored to specific business operations.",
    verifiedFeatures: [
      "Successfully served 3 verified client digital engagements",
      "Client-focused requirement analysis and UI/UX prototyping",
      "Responsive, high-performance web interfaces built with React",
      "Scalable frontend architecture and modern component systems"
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "UI/UX Architecture"
    ],
    github: "https://github.com/Asil081205",
    themeColor: "#F2EFEB",
    previewType: "metrics",
    previewData: {
      metric: "3",
      metricLabel: "CLIENTS SERVED",
      metricSub: "Verified Client Engagements Delivered",
      stats: [
        { label: "Deliverables", value: "Client Solutions" },
        { label: "Stack", value: "React & Node.js" },
        { label: "UI", value: "Modern Responsive" }
      ]
    }
  }
];
