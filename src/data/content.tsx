import thiranexLogo from "../assets/thiranex_logo.png";
import stAgnesLogo from "../assets/st_agnes_logo.png";
import ecommerceWebAppImg from "../assets/ecommerce_web_app.png";
import vehicleRecognitionImg from "../assets/vehicle_recognition_system.png";
import attendanceCalculatorImg from "../assets/attendance_calculator.png";
import biteriteImg from "../assets/biterite.png";
import thiranexCertificate from "../assets/thiranex_internship.png";


import {
  GitHubIcon,
  LetterIcon,
  LinkedInIcon,
  PhoneIcon,
} from "@barrelrolla/react-components-library";

export const personalInfo = {
  fullName: "Shahid Patel",
  firstName: "Shahid",
  lastName: "Patel",
  title: "Full-Stack Developer",
  bioParagraph: "Full Stack Developer with a strong interest in computer vision and AI driven systems. Built projects including a vehicle recognition and number plate detection system, an AI powered nutrition planner, and Full Stack Web applications using React, Node.js, and Supabase. Focused on writing clean, working code and continuously exploring new tools and technologies.",
};

export const heroContent = {
  titlePart1: "Shahid",
  titlePart2: "Patel",
  subtitle: "Full-Stack Developer",
  description: personalInfo.bioParagraph,
  projectsBtn: "My projects",
  contactsBtn: "My contacts",
};

export const navContent = {
  brandName: "<Shahid.P/>",
  resumeBtn: "View Resume",
};

export const contactsContent = {
  heading: "Contact Me",
  tagline: "I'm available on almost every platform. Send me a message and I'll reply within 24 hours.",
  resumeCta: "See My Resume",
};

export const resumeContent = {
  title: "My Resume",
  subtitle: "View below or download a copy for your records.",
  downloadCta: "↓ Download PDF",
  downloadUrl: "/ShahidPatel.pdf",
};

export const homeSectionTitles = {
  experience: "Experience",
  education: "Education",
  projects: "Projects",
};

export const contacts = [
  {
    title: "Github",
    url: "https://github.com/shhahidd",
    text: "github.com/shhahidd",
    icon: GitHubIcon,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shhahidd",
    text: "linkedin.com/in/shhahidd",
    icon: LinkedInIcon,
  },
  {
    title: "Email",
    url: "mailto:patelshahid260@gmail.com",
    text: "patelshahid260@gmail.com",
    icon: LetterIcon,
  },
  {
    title: "Phone",
    url: "tel:+918296503928",
    text: "+91 829 650 3928",
    icon: PhoneIcon,
  },
];

export type BioCategory = "experience" | "education" | "projects";

export type BioDataType = {
  id: string;
  category: BioCategory;
  img: string;
  imgDark?: string;
  title: string;
  specialty?: string;
  description: string;
  fullInfo: string;
  dates?: string;
  website?: string;
  github?: string;
  imgClass?: string;
  bgColor?: string;
  certificate?: string;
};

export const experienceData: BioDataType[] = [
  {
    id: "thiranex",
    category: "experience",
    img: thiranexLogo,
    title: "Thiranex",
    specialty: "Full Stack Development Intern | Remote",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, Express.js, and PostgreSQL.",
    fullInfo:
      "Worked as a Full Stack Development Intern at Thiranex, building robust features and designing database layers.<ol><li>Developed and maintained full-stack web applications using React, Node.js, Express.js, and PostgreSQL.</li><li>Built responsive and user-friendly interfaces with modern web technologies.</li><li>Designed RESTful APIs and integrated frontend applications with backend services.</li><li>Implemented authentication, CRUD operations, and database management features.</li><li>Used Git and GitHub for version control and project collaboration.</li></ol>",
    dates: "Jul 2026 - Aug 2026",
    website: "",
    bgColor: "#fff",
    imgClass:
      "scale-90 object-contain group-hover:scale-100 group-focus-visible:scale-100 transition py-6",
    certificate: thiranexCertificate,
  },
];

export const educationData: BioDataType[] = [
  {
    id: "st-agnes",
    category: "education",
    img: stAgnesLogo,
    title: "St. Agnes College, Mangalore",
    specialty: "Bachelor of Computer Applications",
    description:
      "Completed Bachelor of Computer Applications, with focus on core programming, web development, and database architectures.",
    fullInfo:
      "Bachelor of Computer Applications undergraduate study at St. Agnes College, Mangalore.<ol><li>Acquiring strong foundations in logic and object-oriented programming.</li><li>Building web architectures, DOM management, and database normalization pipelines.</li></ol>",
    dates: "2023 - 2026",
    imgClass:
      "scale-[1.15] object-contain group-hover:scale-[1.25] group-focus-visible:scale-[1.25] transition py-2",
    website: "",
    bgColor: "#fff",
  },
];

export const projectsData: BioDataType[] = [
  {
    id: "ecommerce-app",
    category: "projects",
    img: ecommerceWebAppImg,
    imgClass:
      "object-cover transition scale-90 mt-6 group-hover:scale-100 group-focus-visible:scale-100",
    bgColor: "#1b2834",
    title: "E-Commerce Web Application",
    description:
      "Full-stack shopping application built with Node.js, Express.js, and JWT auth, featuring admin panel and Supabase/MySQL integration.",
    fullInfo:
      "Developed a full-stack e-commerce web application using Node.js, Express.js, JavaScript, HTML, and CSS.<ol><li>Implemented JWT authentication, shopping cart, checkout, and order management features.</li><li>Built an admin dashboard for product and order management with CRUD functionality.</li><li>Integrated Supabase, MySQL  and JSON-based storage for flexible data management.</li><li>Designed a responsive user interface with product search, filtering, and inventory management.</li></ol>",
    website: "https://corsair-e-commerce-web-app.vercel.app",
    github: "https://github.com/shhahidd/E-Commerce-Web-Application",
    dates: "",
  },
  {
    id: "vehicle-recognition",
    category: "projects",
    img: vehicleRecognitionImg,
    bgColor: "#1b1c1d",
    imgClass:
      "object-cover transition scale-90 group-hover:scale-100 group-focus-visible:scale-100",
    title: "Vehicle Recognition and Plate Detection System",
    description:
      "React application utilizing OCR to detect vehicles, extract license plate numbers, and log entries in Supabase database.",
    fullInfo:
      "Developed a React based application to detect vehicles and extract number plate text using OCR.<ol><li>Processes vehicle images to parse and extract alphanumeric characters in real-time.</li><li>Implemented Tesseract.js for number plate recognition from uploaded images.</li><li>Integrated Supabase database to store vehicle detection results.</li><li>Built responsive UI using TailwindCSS and modern React components.</li></ol>",
    website: "https://vehiclerecognitionsystem.vercel.app",
    github: "https://github.com/shhahidd/Vehicle-Recognition-System",
    dates: "",
  },
  {
    id: "biterite",
    category: "projects",
    img: biteriteImg,
    imgClass:
      "object-cover transition scale-90 mt-6 group-hover:scale-100 group-focus-visible:scale-100",
    bgColor: "#0f172a",
    title: "BiteRite Smart Nutrition",
    description:
      "AI-powered health and nutrition platform developed during a college Hackathon. Features calorie tracking, meal logging, fasting timer, sleep, workout, and Ollama-based meal generation.",
    fullInfo:
      "Developed BiteRite, an AI-powered health and nutrition platform during a college Mini Hackathon, later winning 1st Prize for innovation and implementation.<ol><li>Built a comprehensive nutrition dashboard featuring calorie tracking, meal logging, water intake, fasting timer, sleep, workout, and activity monitoring.</li><li>Implemented AI-powered features, including personalized nutrition recommendations, meal suggestions, and ingredient-based meal generation using Phi-3 (Ollama).</li><li>Developed smart meal-planning tools such as an AI-based grocery list generator, \"My Fridge\" ingredient-based meal recommendations, and food nutrition search.</li><li>Built the application using React, Node.js, Express, Supabase, and JSON/CSV datasets, delivering a functional prototype within the hackathon timeframe.</li></ol>",
    website: "https://bite-rite.vercel.app",
    github: "https://github.com/shhahidd/BiteRite",
    dates: "",
  },
  {
    id: "attendance-calculator",
    category: "projects",
    img: attendanceCalculatorImg,
    imgClass:
      "object-cover transition scale-90 group-hover:scale-100 group-focus-visible:scale-100",
    bgColor: "#1b2834",
    title: "Attendance Calculator",
    description:
      "A web application designed for students to track daily attendance, manage schedule thresholds, and calculate the number of classes required to maintain a target percentage.",
    fullInfo:
      "Developed a responsive web application to calculate and track college/school attendance.<ol><li>Vibe-coded a responsive HTML, CSS, and JavaScript web application to help students calculate and manage their attendance.</li><li>Instantly calculates current attendance percentage based on classes attended and conducted.</li><li>Determines how many classes can be skipped or need to be attended to reach a target attendance percentage.</li><li>Features a clean, responsive interface optimized for desktop and mobile devices.</li></ol>",
    dates: "",
    website: "http://shhahidd.github.io/AttendanceCalculator",
    github: "https://github.com/shhahidd/AttendanceCalculator",
  },
];
