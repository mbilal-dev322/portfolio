export const profile = {
  name: "Muhammad Bilal",
  role: "AI Software Engineer",
  tagline:
    "Building backend systems, AI agents, and LLM-powered applications with Python.",
  summary:
    "AI Software Engineer with 3 years of experience building backend, automation, and AI-powered applications using Python and modern web technologies. Experienced in developing LLM applications, RAG pipelines, AI agents, embeddings, vector search, and conversational systems using OpenAI, LangChain, and LangGraph. Strong backend experience with Django, Django REST Framework, FastAPI, PostgreSQL, third-party API integrations, and scalable RESTful services. Experienced in integrating AI capabilities into real-world business applications and automating data-driven workflows.",
  email: "bilaljamil100001@gmail.com",
  phone: "0336 45 74 377",
  location: "Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/muhammadbilal0/",
};

export type SkillGroup = { category: string; skills: string[] };

export const skills: SkillGroup[] = [
  {
    category: "AI / LLM",
    skills: [
      "LLMs",
      "OpenAI API",
      "LangChain",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Embeddings",
      "Vector Search",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "BigQuery", "Vector Databases"],
  },
  {
    category: "AI Technologies",
    skills: [
      "Semantic Search",
      "Retrieval-Augmented Generation",
      "Contextual Retrieval",
      "Tool Calling",
      "AI Workflows",
    ],
  },
  {
    category: "Data / Automation",
    skills: ["Pandas", "NumPy", "Playwright", "Selenium", "Google Apps Script"],
  },
  {
    category: "Integrations",
    skills: ["Amazon SP-API", "Square POS", "Stripe", "Razorpay", "Google APIs"],
  },
  {
    category: "Cloud / Tools",
    skills: ["AWS EC2", "Git", "VS Code", "JupyterLab", "Docker"],
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer – AI / Backend",
    company: "Techesthete",
    location: "Lahore, Pakistan",
    period: "December 2023 – Present",
    points: [
      "Develop and maintain backend applications and RESTful APIs using Python, Django, Django REST Framework, and Flask.",
      "Design and integrate LLM-powered applications using OpenAI APIs, LangChain, and LangGraph for conversational and task-oriented AI workflows.",
      "Build RAG-based applications by processing documents and data, generating embeddings, storing vectors, and retrieving relevant context for LLM responses.",
      "Develop AI agents capable of reasoning through multi-step tasks, interacting with application data, and using external tools and services.",
      "Implement embedding and vector search solutions using vector databases to support semantic search, contextual retrieval, and AI-powered recommendations.",
      "Integrate third-party APIs including Amazon SP-API, Square POS, Stripe, and Razorpay into business and automation platforms.",
      "Develop web scraping and data extraction solutions using Playwright and Selenium for automated data collection and processing.",
      "Build workflow automation and data-processing scripts to reduce repetitive manual operations and improve business processes.",
      "Collaborate with cross-functional teams to translate business requirements into scalable backend and AI-powered solutions.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Sigi Technologies",
    location: "Lahore, Pakistan",
    period: "March 2022 – June 2022",
    points: [
      "Developed responsive eCommerce and business websites using HTML, CSS, Bootstrap, and JavaScript.",
      "Converted Figma designs into responsive and maintainable web interfaces across different browsers and devices.",
      "Worked with senior developers to implement user feedback and improve application functionality and usability.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  stack: string;
  period: string;
  image?: string;
  points: string[];
};

export const projects: Project[] = [
  {
    name: "Growlio",
    subtitle: "AI-Powered Restaurant Management Platform",
    stack: "Django REST, PostgreSQL, OpenAI, LangChain, Vector DB",
    period: "June 2025 – Present",
    image: "/generated/project-growlio.jpg",
    points: [
      "Developed a restaurant management platform for expense tracking, financial goals, revenue analytics, and business performance monitoring.",
      "Built scalable REST APIs using Django REST Framework for users, expenses, revenue analytics, and platform operations.",
      "Developed an AI-powered conversational assistant using OpenAI and LLM technologies to answer questions using application data and external web information.",
      "Implemented RAG capabilities using embeddings and vector databases to retrieve relevant contextual information for AI-generated responses.",
      "Designed AI workflows for retrieving, processing, and presenting business information through natural-language interactions.",
      "Integrated Square POS and Stripe to synchronize business transactions and support payment-related workflows.",
      "Developed administrative functionality including user impersonation and platform management tools.",
    ],
  },
  {
    name: "Rating Raja",
    subtitle: "Amazon Seller Automation Platform",
    stack: "Django REST, Python, AWS EC2, Amazon SP-API, Razorpay",
    period: "Feb 2026 – April 2026",
    image: "/generated/project-ratingraja.jpg",
    points: [
      "Developed a platform enabling Amazon sellers to connect their accounts through Amazon SP-API for automated order and review management.",
      "Integrated Amazon SP-API to synchronize order information and determine eligibility for automated review requests.",
      "Implemented scheduled workflows and background processing for automated review-request operations.",
      "Built and managed cron-based automation for recurring data processing and business workflows.",
      "Integrated Razorpay for subscription payments and billing workflows.",
      "Deployed and managed backend services on AWS EC2.",
    ],
  },
  {
    name: "Stagger",
    subtitle: "Amazon Data Automation",
    stack: "Python, BigQuery, Amazon SP-API, Google Apps Script",
    period: "February 2025 – June 2025",
    image: "/generated/project-stagger.jpg",
    points: [
      "Integrated Amazon SP-API to retrieve sales and inventory data for automated reporting workflows.",
      "Processed and stored data in BigQuery for centralized analysis and reporting.",
      "Automated Google Sheets data population using Google Apps Script to streamline reporting workflows.",
    ],
  },
  {
    name: "Amazon Data Integration",
    subtitle: "Automated Amazon reporting pipelines",
    stack: "Python, MySQL, Google Sheets, Playwright",
    period: "October 2024 – March 2025",
    image: "/generated/project-amazon-integration.jpg",
    points: [
      "Developed Python-based integrations to retrieve and process Amazon SP-API reports and business data.",
      "Automated data synchronization between backend systems and Google Sheets using Apps Script and JDBC.",
      "Developed browser automation and scraping workflows using Playwright for automated data extraction.",
      "Optimized data-processing workflows for reliable synchronization and handling of large datasets.",
    ],
  },
  {
    name: "Sofia",
    subtitle: "Multi-Store E-commerce Platform",
    stack: "Node.js, TypeScript, PostgreSQL",
    period: "June 2024 – September 2024",
    points: [
      "Developed backend services integrating Shopify and AliExpress stores into a unified platform.",
      "Implemented product import, order management, and store synchronization workflows.",
      "Designed and optimized PostgreSQL database structures for reliable data management.",
    ],
  },
  {
    name: "Walmart Sales Forecasting",
    subtitle: "Final Year Project — ML-based sales prediction",
    stack: "Python, Pandas, NumPy, Scikit-learn",
    period: "August 2023 – October 2023",
    points: [
      "Cleaned and preprocessed Walmart sales data using Python, Pandas, and NumPy.",
      "Performed exploratory data analysis and visualization to identify sales trends and patterns.",
      "Developed machine-learning models using scikit-learn for sales forecasting.",
    ],
  },
];

export const education = [
  {
    school: "University of Punjab",
    location: "Lahore, Pakistan",
    degree: "Bachelor of Science in Information Technology",
    period: "August 2019 – September 2023",
  },
  {
    school: "Knowledge Stream",
    location: "Lahore, Pakistan",
    degree: "Data Science Bootcamp",
    period: "June 2023 – September 2023",
  },
];
