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
    title: 'Routine Planner',
    category: 'backend',
    image: 'routineApp.jpg',
    technologies: '.NET Core • Stripe • SignalR',
    description: 'A comprehensive routine planning application with real-time notifications and payment integration.',
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
    technologies: '.NET Core API • Firebase',
    description: 'A referral management system built with .NET Core and Firebase integration.',
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
    technologies: '.NET API • React • CRM • Power Apps • Power Flows(Crone Jobs) • Microsoft Dataverse 365',
    description: 'Comprehensive certification management system for NCCCO.',
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
    technologies: 'React • MSSQL • Azure • CI/CD',
    description: 'Administrative interface for the NCCCO Learning Management System.',
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
    technologies: 'Django • React',
    description: 'A comprehensive employee management system.',
    features: [
      'Employee records management',
      'Attendance tracking',
      'Performance evaluation',
      'Reporting and analytics'
    ]
  },
  {
    id: 'intellect-gate',
    title: 'Intellect Gate',
    category: 'fullstack',
    image: 'intellectgate1.jpg',
    technologies: 'React TS, Node TS, Deployment(Railway), PostgreSQL, CI/CD Pipelines, Admin Panel, Architecture, Database Design',
    description: 'An intelligent platform for educational content management.',
    features: [
      'Modern React TypeScript frontend',
      'Node.js backend with TypeScript',
      'PostgreSQL database design',
      'Railway deployment and CI/CD'
    ]
  },
  {
    id: 'ai-business-scout',
    title: 'AI Business Scout',
    category: 'ai',
    image: 'my.png',
    technologies: 'Python • ML • React Js • Linear Regression • Rule Based System • OpenCV • Panadas • Numpy • Image Processing',
    description: 'AI-powered business intelligence and scouting tool.',
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
    technologies: 'OpenAI',
    description: 'AI-powered CV matching system using OpenAI technology.',
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
    id: 'halliburton-internal',
    title: 'Halliburton Internal',
    category: 'enterprise',
    image: 'halliburton.jpg',
    technologies: '.NET Framework • Webforms • Microsoft SQL Server • Application Insights • CI/CD Pipelines • Performance Optimization',
    description: 'Internal enterprise system for Halliburton operations.',
    features: [
      'Webforms-based interface',
      'SQL Server integration',
      'Application Insights monitoring',
      'CI/CD deployment pipelines'
    ],
    noImage: true
  }
];