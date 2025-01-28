import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";

export const RESUME_DATA = {
  websiteTitle: "aj",
  name: "aj southammavong",
  initials: "aj",
  // location: "Bay Area",
  // locationLink: "https://www.google.com/maps/place/Oakland",
  about:
    "Accounting professional with years of experience in public and private accounting and advanced technical skills to streamline operations.",
  summary:
    "Detail-oriented accounting professional with 7+ years of experience in both public and private accounting, ranging from startups to large corporations. Actively pursuing full CPA licensure. Proven expertise in month-end close processes, financial reporting, and US GAAP compliance. Brings unique value to accounting operations through advanced technical skills including NetSuite, QuickBooks, Excel, and programming capabilities.",
  // avatarUrl:
  //   "https://github.com/arnxldjxy/arnold-cv/blob/main/src/app/glasses.gif?raw=true",
  websiteUrl: "https://arnold.rip",

  contact: {
    email: {
      emailAddress: "arnoldsouth@gmail.com",
      mailto: "mailto:arnoldsouth@gmail.com",
    },
    // tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arnxldjxy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arnoldsouth/",
        icon: LinkedInIcon,
      },
      {
        name: "CV",
        url: "https://drive.google.com/file/d/1YxssSR_6g5GyBPznG38MxSdjjLJiu0T2/view?usp=sharing",
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
      company: "Aronson Advertising",
      link: "https://www.aronsonads.com",
      badges: [],
      title: "Data and Web Analyst",
      start: "2023",
      end: null,
      description:
        "Analyzed and processed data from multiple sources to provide insights and recommendations to clients.",
    },
    {
      company: "Freelance Full Stack Developer",
      link: "https://arnold.rip",
      badges: [],
      title: "Full Stack Developer",
      start: "2021",
      end: null,
      description:
        "Analytical and data-driven Full Stack Engineer. Passion for building things that make people's lives easier.",
    },
    {
      company: "Curology",
      link: "https://curology.com/",
      badges: [],
      title: "Senior Accountant",
      start: "2019",
      end: "2021",
      description:
        "Created, implemented, and maintained initial cost accounting process to improve timeliness of monthend reporting and accurate financial reporting. Spearheaded NetSuite inventory implementation and migration to the new system from Quickbooks.",
    },
    {
      company: "Grant Thornton",
      link: "https://www.grantthornton.com/",
      badges: [],
      title: "Senior Audit Associate II",
      start: "2015",
      end: "2019",
      description:
        "Led multiple audit engagements for both public and private companies.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Django",
    "Google Analytics",
    "Google Tag Manager",
    "Google Ads",
  ],
  projects: [
    {
      title: "AI Budget Tracker",
      techStack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL"],
      description:
        "AI-powered budget tracking tool that helps users manage their finances.",
      link: {
        label: "https://github.com/arnxldjxy",
        href: "https://github.com/arnxldjxy",
      },
    },
  ],
} as const;
