import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";

export const RESUME_DATA = {
  websiteTitle: "aj",
  name: "aj southammavong",
  initials: "aj",
  location: "Bay Area",
  // locationLink: "https://www.google.com/maps/place/Oakland",
  about:
    "Accounting professional with years of experience in public and private accounting and advanced technical skills to streamline operations.",
  summary:
    "Detail-oriented accounting professional with 7+ years of experience in both public and private accounting, ranging from startups to large corporations. Actively pursuing full CPA licensure. Proven expertise in month-end close processes, financial reporting, and US GAAP compliance. Brings unique value to accounting operations through advanced technical skills including NetSuite, QuickBooks, Excel, and programming capabilities.",
  avatarUrl:
    // "https://raw.githubusercontent.com/arnxldjxy/cv-arnold-wtf/84099fdced9fd3d2e0c0e1cf6fd10c2b388ac6bf/src/app/glasses.gif",
    "https://raw.githubusercontent.com/arnxldjxy/assets/refs/heads/main/glasses.gif",
  websiteUrl: "https://cv.arnold.wtf",

  contact: {
    email: {
      emailAddress: "arnoldsouth@gmail.com",
      mailto: "mailto:arnoldsouth@gmail.com",
    },
    // tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arnoldsouth/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/arnxldjxy",
        icon: GitHubIcon,
      },
      {
        name: "CV",
        url: "https://drive.google.com/file/d/1v078wQHy0wqXGXaDnM7-rn5np5wSZjhe/view?usp=sharing",
        icon: ResumeIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Illinois at Chicago",
      degree: "Bachelor of Science in Accounting",
      // start: "",
      // end: "",
    },
  ],
  work: [
    {
      company: "Curology",
      link: "https://curology.com/",
      badges: [],
      title: "Senior Accountant",
      start: "2019",
      end: "2021",
      description:
        "Led end-to-end NetSuite implementation for inventory and fixed assets modules, designing scalable infrastructure to support business growth. Executed month-end close processes including inventory valuation, COGS calculations, AP and accrual entries.",
    },
    {
      company: "Grant Thornton",
      link: "https://www.grantthornton.com/",
      badges: [],
      title: "Senior Audit Associate II",
      start: "2015",
      end: "2019",
      description:
        "Conducted financial statement audits across diverse industries ensuring US GAAP compliance.",
    },
    {
      company: "Aronson Advertising",
      link: "https://www.aronsonads.com",
      badges: [],
      title: "Data and Web Analyst",
      start: "2023",
      end: null,
      description:
        "Optimized, implemented and managed marketing analytics measurement/reporting systems, utilizing industry best practices and procedures to ensure accurate data flow and analysis.",
    },
    {
      company: "Freelance",
      link: "https://arnold.wtf",
      badges: [],
      title: "Software Developer",
      start: "2021",
      end: null,
      description:
        "Developed automation tools for accounting processes using Python and SQL. Built and maintained web applications using React, Node, and Express.",
    },
  ],
  skills: [
    "NetSuite",
    "QuickBooks",
    "Excel",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Django",
    "Google Tag Manager",
    "Google Analytics",
    "Google Ads",
  ],
  projects: [
    {
      title: "AI Financial Tracker",
      techStack: ["Python", "Django", "PostgreSQL"],
      description:
        "AI-powered financial tracking tool that helps users manage their finances.",
      link: {
        label: "https://github.com/arnxldjxy",
        href: "https://github.com/arnxldjxy",
      },
    },
  ],
} as const;
