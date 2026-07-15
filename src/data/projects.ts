export interface ProjectData {
  id: string;
  title: string;
  category: 'backend' | 'fullstack' | 'ai' | 'enterprise';
  image: string;
  technologies: string;
  description: string;
  features: string[];
  challenges?: string;
  results?: string;
  demoUrl?: string;
  githubUrl?: string;
  noImage?: boolean;
}

export const projectsData: ProjectData[] = [
  {
    id: 'routine-planner',
    title: 'MySchedule Buddy',
    category: 'backend',
    image: 'routineApp.jpg',
    technologies: '.NET Core • Stripe • SignalR • Hangfire • OneSignal • JWT Authentication • Backblaze B2 Cloud Storage • React TS • CI/CD Pipelines • MSSQL Server • Somee Hosting',
    description: `Developed backend APIs and designed the SQL Server database for a routine planning application.
Built a Landing page and React-based admin dashboard for user management, analytics, and schedule monitoring.
Implemented SignalR(for child and parent same plans syncing), Hangfire(for crone jobs), OneSignal, JWT authentication, and Backblaze B2 cloud storage.
Built the admin dashboard in React with TypeScript and landing page.
Configured CI/CD pipelines and deployed frontend and backend to production.`,
    features: [
      'Real-time notifications using SignalR',
      'Secure payment processing with Stripe',
      'User-friendly routine creation and management',
      'Cross-platform compatibility'
    ],
    challenges: 'Implementing real-time features and ensuring payment security',
    results: 'Successfully deployed application with high user satisfaction'
  },
  {
    id: 'refer-app',
    title: 'Refer App',
    category: 'backend',
    image: 'refer-app.jpg',
    technologies: '.NET Core API • Stripe(connected accounts, onboarding, payouts) • Firebase',
    description: `Developed secure backend APIs for a Flutter e-commerce application.
Integrated Stripe payment gateway including connected accounts and payouts.
Customized Stripe's pre-built payment workflows to support multi-recipient payouts and platform-based payment processing.
Implemented Stripe test environment workflows, including creating test connected accounts and using test funds/cards to validate end-to-end payment and payout scenarios.
Implemented Firebase notifications and JWT authentication.`,
    features: [
      'RESTful API architecture',
      'Firebase authentication and database',
      'Referral tracking and analytics',
      'Mobile app integration ready'
    ]
  },
  {
    id: 'agentdeskai-gmail-events-automation',
    title: 'Secure Google Workspace Integration — OAuth, Gmail & Calendar Automation',
    category: 'fullstack',
    image: 'agentdeskemailcalendarautomation.png',
    technologies: 'Python · FastAPI · Angular · OAuth 2.0 · Google APIs · Gmail API · Google Calendar API · REST APIs · PostgreSQL · SQLAlchemy · Fernet Encryption · JWT · httpx · Pydantic',
    description: `Built a secure Google Workspace integration layer for AgentDeskAI using OAuth 2.0 and Google's REST APIs. Users can connect their Google account through the official consent flow, while AgentDeskAI securely exchanges authorization codes for access and refresh tokens, encrypts credentials at rest, and automatically refreshes expired access tokens. The integration enables AI employees to interact with Gmail and Google Calendar on behalf of users, including reading emails, sending messages, retrieving upcoming events, and creating calendar events.`,
    features: [
      'RESTful API architecture',
      'Firebase authentication and database',
      'Referral tracking and analytics',
      'Mobile app integration ready'
    ]
  },
  {
    id: 'lms-portal',
    title: 'LMS Portal (NCCCO)',
    category: 'fullstack',
    image: 'lms.jpg',
    technologies: 'React TS • .NET Core',
    description: 'A learning management system for NCCCO certification programs.',
    features: [
      'Course management and enrollment',
      'Interactive quizzes and assessments',
      'Progress tracking and reporting',
      'Admin dashboard for instructors'
    ]
  },
  {
    id: 'myccco-system',
    title: 'MyCCCO System',
    category: 'fullstack',
    image: 'nccco.jpg',
    technologies: '.NET Core Web API • React(Typescript) • CRM • Power Apps • Power Flows(Crone Jobs) • Microsoft Dataverse 365 • Php Webhooks',
    description: `Worked as a Full-Stack Developer on the NCCCO Certification Platform and Learning Management System (LMS).
Developed RESTful APIs using ASP.NET Core and built responsive frontend modules with React and TypeScript.
Implemented multilingual (i18n) support to provide a localized user experience.
Integrated Microsoft Dataverse and Microsoft Dynamics 365 CRM for seamless data synchronization and business process management.
Built and maintained Microsoft Power Apps workflows to automate business operations and administrative tasks.`,
    features: [
      'CRM integration',
      'Automated workflows with Power Apps',
      'Microsoft Dataverse 365 integration',
      'Advanced reporting and analytics'
    ]
  },
  {
    id: 'lms-admin',
    title: 'LMS Admin (NCCCO)',
    category: 'fullstack',
    image: 'lmsadmin.jpg',
    technologies: 'React • MSSQL • Azure • CI/CD Pipelines • .NET Core • Entity Framework • LINQ • SQL Server Profiler • Azure Application Insights',
    description: `Administrative interface for the NCCCO Learning Management System (LMS). Developed and maintained the admin portal, enabling administrators to manage courses, assign instructors, create and update learning content, upload and remove instructors, manage student application records, and perform various administrative tasks for efficient LMS operations.`,
    features: [
      'User management and permissions',
      'Course content management',
      'Azure cloud deployment',
      'CI/CD pipeline integration'
    ]
  },
  {
    id: 'employee-management',
    title: 'Employee Management',
    category: 'fullstack',
    image: 'employee.jpg',
    technologies: 'Django • Python • React • JavaScript • REST API • PostgreSQL',

    description: `Developed a comprehensive Employee Management System to streamline HR operations. Implemented features for employee records management, attendance tracking, leave management, role-based access control, department management, and administrative reporting through an intuitive web interface.`,
    features: [
      'Employee records management',
      'Attendance tracking',
      'Performance evaluation',
      'Reporting and analytics'
    ]
  },
  {
    id: 'intellect-gate',
    title: 'Intellect Gate Educational Platform and Admin Panel',
    category: 'fullstack',
    image: 'intellectgate1.jpg',
    technologies: 'React TS, Node TS, Deployment(Railway), PostgreSQL, CI/CD Pipelines, Admin Panel, Architecture, Database Design',
    description: `Developed a full-stack educational platform for a New Zealand academy.
Built responsive frontend, REST APIs, PostgreSQL database, and course enrollment system.
Implemented EmailJS integration and dynamic pricing functionality.
Managed deployment using Railway and Vercel.
Built an admin dashboard for managing courses, subjects, news, enrollments, and pricing.
Developed CRUD operations and role-based administrative functionality.
Integrated backend APIs and responsive UI components.
Improved content management efficiency for administrators.`,
    features: [
      'Modern React TypeScript frontend',
      'Node.js backend with TypeScript',
      'PostgreSQL database design',
      'Railway deployment and CI/CD'
    ]
  },
    {
    id: 'intellect-gate-seo-optimization',
    title: 'Intellect Gate SEO Optimization',
    category: 'fullstack',
    image: 'intellectgate1.jpg',
    technologies: 'SEO, Google Search Console, Bing(Microsoft Edge)',
    description: `Implemented complete on-page SEO for the educational platform.
Generated sitemap.xml and robots.txt.
Configured Google Search Console and Bing Webmaster Tools.
Improved indexing and search engine visibility.`,
    features: [
      'Modern React TypeScript frontend',
      'Node.js backend with TypeScript',
      'PostgreSQL database design',
      'Railway deployment and CI/CD'
    ]
  },
   {
    id: 'matehsSolutionsAIChatbot',
    title: 'MATechs Solutions AI Chatbot & Website',
    category: 'fullstack',
    image: 'matechs.png',
    technologies: 'React.js • TypeScript • Vite • Node.js • Groq • LLaMA • MiniLM • RAG • Vercel',
    description: `Developed the MATechs Solutions company website using React.js, TypeScript, and Vite with a responsive, modern, and SEO-friendly user interface.
Built a production-grade Retrieval-Augmented Generation (RAG) chatbot backend integrated into the website to provide AI-powered customer support.
Developed an AI assistant that answers client questions, explains company services, and recommends suitable software packages based on customer requirements.
Created a knowledge base from company documents, service descriptions, FAQs, and business information as external sources for RAG-based response generation.
Generated semantic embeddings locally using MiniLM (Sentence Transformers) and performed vector similarity search to retrieve the most relevant context.
Designed the complete RAG pipeline by retrieving relevant knowledge, injecting contextual information into prompts, and generating grounded responses using Groq-hosted LLaMA models.
Implemented REST APIs for chatbot communication and optimized serverless deployment on Vercel for scalability, low latency, and high performance.`,
    features: [
      'Modern React TypeScript frontend',
      'Node.js backend with TypeScript',
      'PostgreSQL database design',
      'Railway deployment and CI/CD'
    ]
  },
  {
  id: 'ai-business-scout',
  title: 'AI-Powered Business Scout',
  category: 'ai',
  image: 'my.png',
  technologies: 'Python • AI & Machine Learning • Data Engineering • Computer Vision • Web Scraping • Google Maps ecosystem • Fullstack development • ML • React JS • Linear Regression • Rule Based System • OpenCV • Pandas • NumPy • Image Processing',
  description: `

AI Business Location Analyst

Python, Machine Learning, React.js, Playwright, OpenCV, Pandas, Matplotlib, Computer Vision, Data Augmentation, Web Scraping, Google Maps APIs

Built an AI-powered business location recommendation system for identifying optimal business locations.
Developed machine learning models for location prediction and improved accuracy through data preprocessing, feature engineering, and data augmentation.
Automated large-scale business and location data collection using Playwright for web scraping.
Captured and analyzed Google Maps road traffic screenshots using OpenCV and computer vision techniques.
Integrated Google Maps Places API, Distance Matrix API, and other Google Maps services to retrieve business, traffic, and area-related insights.
Processed, cleaned, and visualized geospatial data using Pandas, Matplotlib, and other Python data analysis libraries.
Developed an interactive React.js web interface enabling entrepreneurs to explore location recommendations and business analytics.


    `,
    features: [
      'Machine learning algorithms',
      'Linear Regression',
      'Rule Based System',
      'Business data analysis',
      'Automated reporting',
      'Predictive analytics'
    ]
  },
  {
    id: 'cv-matcher',
    title: 'CV Matcher',
    category: 'ai',
    image: 'cv-matcher1.jpg',
    technologies: 'OpenAI • Next.js • TypeScript',
    description: `Developed an AI-powered CV matching system that compares resumes against job descriptions.
Implemented resume analysis and compatibility scoring.
Built a responsive user interface with real-time results.
Deployed on Vercel.`,
    features: [
      'Natural language processing',
      'CV parsing and analysis',
      'Job matching algorithms',
      'Automated candidate screening'
    ]
  },
  {
    id: 'halliburton-qcdoc-vendor',
    title: 'QCDOC Vendor',
    category: 'enterprise',
    image: 'halliburton.jpg',
    technologies: '.NET Framework • Microsoft SQL Server • SQL Server Profiler • Entity Framework • LINQ • Azure Application Insights • Performance Optimization • Database Optimization • CI/CD Pipelines',
    description: 'Enterprise vendor management system. Optimized and modernized a legacy enterprise system by refactoring existing code and improving overall system performance. Analyzed application bottlenecks and enhanced page response times through efficient SQL query optimization and stored procedure refactoring. Utilized Microsoft SQL Server Profiler to trace database calls, identify which actions triggered specific stored procedures, and diagnose performance issues at query level. Migrated legacy data access logic to scalable architectures using Entity Framework and LINQ. Implemented Azure Application Insights for real-time monitoring and performance tracking, enabling proactive issue detection. Conducted detailed page-level performance analysis, generated Excel reports, and applied targeted optimizations to improve system reliability and efficiency.',
    features: [
      'Legacy system modernization',
      'Performance optimization',
      'Database optimization',
      'Azure monitoring integration'
    ],
    noImage: true
  },
  {
    id: 'upwork-analytics',
    title: 'Upwork Analytics',
    category: 'enterprise',
    image: 'upwork.jpg',
    technologies: 'ASP.NET MVC • Microsoft SQL Server • Entity Framework • LINQ',
    description: `Developed frontend and backend features for an Upwork analytics browser extension.
Built modules for proposal tracking and statistics management.
Designed SQL Server database interactions.
Improved reporting and productivity features.`,
    features: [
      'Legacy system modernization',
      'Performance optimization',
      'Database optimization',
      'Azure monitoring integration'
    ],
    noImage: true
  },
   {
    id: 'hunt',
    title: 'The Hunt (E-Commerce Platform)',
    category: 'enterprise',
    image: 'hunt.jpg',
    technologies: '• ASP.NET Core Web API • C# • Entity Framework Core • TensorFlow • U²-Net • Microsoft SQL Server • Entity Framework • LINQ',
    description: `Worked as a Backend Developer on an e-commerce platform, developing scalable ASP.NET Core Web API services for the admin dashboard and core business operations.
Designed and implemented secure RESTful APIs for product management, orders, inventory, users, and other administrative modules.
Optimized API performance by designing efficient database queries that retrieved maximum required data with minimal database calls, reducing response times and improving scalability.
Designed and maintained a normalized SQL Server database following Second Normal Form (2NF) and Third Normal Form (3NF) to ensure data integrity, consistency, and efficient storage.
Developed complex LINQ and SQL queries, optimized joins, indexing strategies, and data access logic for high-performance backend operations.
Collaborated closely with frontend developers to integrate APIs and ensure seamless communication between the client and server.
Integrated an AI-powered background removal module using the U²-Net deep learning model through TensorFlow, enabling automatic background removal from uploaded product images.
Built the image-processing workflow by passing uploaded images through the TensorFlow inference pipeline, generating segmentation masks with U²-Net, and producing clean transparent-background images for product listings.
Improved overall backend maintainability through modular architecture, reusable services, and clean coding practices.`,
    features: [
      'Legacy system modernization',
      'Performance optimization',
      'Database optimization',
      'Azure monitoring integration'
    ],
    noImage: true
  },
  {
    id: 'halliburton-internal',
    title: 'QCDOC Internal',
    category: 'enterprise',
    image: 'halliburton.jpg',
    technologies: '.NET Framework  • React (Typescript) • Azure • Entity Framework • MS-SQL Profiler • Webforms • Microsoft SQL Server • Application Insights • CI/CD Pipelines • Performance Optimization',
    description: `Worked as a Full-Stack Developer on enterprise applications, including QCDOC and Vendor Portal.
Enhanced and maintained legacy ASP.NET Web Forms applications while contributing to their migration to ASP.NET Core Web API with React.js and Entity Framework.
Developed and optimized SQL Server stored procedures, asynchronous database operations, and transaction management to ensure ACID-compliant data consistency.
Implemented Azure Blob Storage for document management and Application Insights for application monitoring, diagnostics, and performance tracking.
Deployed and maintained applications on Microsoft IIS and Microsoft Azure, supporting production releases and environment configuration.
Improved application performance by optimizing legacy code, database queries, and backend processes, resulting in faster page load times.
Collaborated within enterprise Git, DevOps, and CI/CD workflows for version control, deployment, and application maintenance.`,
    features: [
      'Webforms-based interface',
      'SQL Server integration',
      'Application Insights monitoring',
      'CI/CD deployment pipelines'
    ],
    noImage: true
  }
];