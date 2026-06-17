import cvFile from '../assets/CV_Taufik_Hidayah.pdf'
import imagePaseeroWeb from '../assets/PaseeroWeb.webp'
import imagePaseeroMobile from '../assets/PaseeroMobile.webp'
import imageKlaklik from '../assets/Klaklik.webp'
import imageRuangPasar from '../assets/RuangPasar.webp'
import imageYubiChat from '../assets/YubiChat.webp'
import imageEzrx from '../assets/Ezrx.webp'
import imageEzview from '../assets/Ezview.webp'
import imageDailyTax from '../assets/DailyTax.webp'
import imageHRDMobile from '../assets/HRDMobile.webp'
import imageCityTours from '../assets/CityTours.webp'
import imagePrivilegez from '../assets/Privilegez.webp'
import imageSIL from '../assets/SIL.webp'
import imageCiptaKarya from '../assets/CiptaKarya.webp'
import imageBMBK from '../assets/BMBK.webp'
import imageEMA from '../assets/EMA.webp'
import imageTourizpass from '../assets/Tourizpass.webp'
import imageEdot from '../assets/Edot.webp'
import imageLNG from '../assets/LNG.webp'
import imageKNS from '../assets/KNS.webp'
import imageNex from '../assets/Nex.webp'
import imageBearny from '../assets/Bearny.webp'

export { cvFile }

export const STATS = [
  { value: '6+', label: 'Years Experience' },
  { value: '20+', label: 'Products Delivered' },
  { value: '5+', label: 'Industries Served' },
]

export const SELECTED_PROJECTS = [
  {
    id: 1,
    name: 'Paseero',
    category: 'Marketplace Platform',
    description: 'Auction-based marketplace connecting users and merchants with integrated online payments. Delivered end-to-end web and mobile applications.',
    stack: ['React.js', 'React Native', 'Redux', 'Paystack'],
    image: imagePaseeroWeb,
    url: 'https://paseero.ng/',
  },
  {
    id: 2,
    name: 'Klaklik',
    category: 'Film Streaming Platform',
    description: 'Content platform for film streaming and ticketing, built with a focus on performance and cross-device responsiveness.',
    stack: ['React.js', 'RESTful APIs', 'Tailwind CSS'],
    image: imageKlaklik,
    url: 'https://www.klaklik.com/',
  },
  {
    id: 3,
    name: 'Ezrx',
    category: 'Healthcare Platform',
    description: 'Healthcare platform for medical professionals with responsive interface, secure data handling, and integrated backend services.',
    stack: ['React.js', 'TypeScript', 'RESTful APIs'],
    image: imageEzrx,
    url: 'https://ezrx.id/',
  },
  {
    id: 4,
    name: 'Yubi Chat',
    category: 'Mobile Community App',
    description: 'Real-time community management app with WebSocket-based messaging and engagement tools, built for cross-platform mobile.',
    stack: ['React Native', 'Redux', 'WebSocket'],
    image: imageYubiChat,
    url: null,
  },
  {
    id: 5,
    name: 'Daily Tax',
    category: 'Enterprise Tax Management',
    description: 'Tax management platform with accounting modules, reporting workflows, and downloadable business reports for enterprise use.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageDailyTax,
    url: null,
  },
  {
    id: 6,
    name: 'KNS',
    category: 'Corporate Web Platform',
    description: 'Corporate web platform with product catalog, multilingual content management, and company profile for a regional business.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageKNS,
    url: 'https://kns.asia/',
  },
  {
    id: 7,
    name: 'Paseero Mobile',
    category: 'Marketplace Mobile App',
    description: 'Cross-platform mobile companion to the Paseero marketplace, featuring real-time auction bidding and push notifications.',
    stack: ['React Native', 'Redux', 'Paystack'],
    image: imagePaseeroMobile,
    url: 'https://play.google.com/store/apps/details?id=com.paseerorn',
  },
  {
    id: 8,
    name: 'CityTours',
    category: 'Travel & Tourism Platform',
    description: 'Travel booking platform for city tours with itinerary management, booking flows, and payment integration.',
    stack: ['Vue.js', 'RESTful APIs'],
    image: imageCityTours,
    url: 'https://m.citytours.sg/',
  },
  {
    id: 9,
    name: 'Ezview',
    category: 'Healthcare Platform',
    description: 'Medical data viewing platform for healthcare professionals with secure document handling and role-based access control.',
    stack: ['React.js', 'TypeScript', 'RESTful APIs'],
    image: imageEzview,
    url: 'https://ezview.id/',
  },
  {
    id: 10,
    name: 'Ruang Pasar',
    category: 'Agricultural E-commerce',
    description: 'Marketplace for agricultural products with payment gateway integration and merchant management workflows.',
    stack: ['Laravel', 'RESTful APIs', 'Midtrans', 'Xendit'],
    image: imageRuangPasar,
    url: null,
  },
  {
    id: 11,
    name: 'LNG',
    category: 'Energy Industry Platform',
    description: 'Web platform for an LNG company featuring operational data management, reporting, and stakeholder communication tools.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageLNG,
    url: 'https://dev.indolng.co.id/',
  },
  {
    id: 12,
    name: 'HRD Mobile',
    category: 'HR Management App',
    description: 'Mobile HR app for employee attendance, leave requests, and payroll tracking across multiple company branches.',
    stack: ['React Native', 'Redux', 'RESTful APIs'],
    image: imageHRDMobile,
    url: null,
  },
  {
    id: 13,
    name: 'Tourizpass',
    category: 'Tourism Platform',
    description: 'Tourism pass platform for managing attraction access, digital ticketing, and visitor analytics.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageTourizpass,
    url: null,
  },
  {
    id: 14,
    name: 'eDot',
    category: 'Social Media App',
    description: 'Mobile social platform with content sharing, community feeds, and real-time interaction features.',
    stack: ['React Native', 'Redux', 'WebSocket'],
    image: imageEdot,
    url: null,
  },
  {
    id: 15,
    name: 'BMBK',
    category: 'Government Web Portal',
    description: 'Official web portal for a regional government agency, delivering public information and citizen service access.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageBMBK,
    url: 'https://dinasbmbk.lampungprov.go.id/',
  },
  {
    id: 16,
    name: 'SIL Tangerang',
    category: 'Government Web Portal',
    description: 'City government information system for managing infrastructure data and public service workflows.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageSIL,
    url: 'https://sil.tangerangkota.go.id/',
  },
  {
    id: 17,
    name: 'Cipta Karya',
    category: 'Government Data Platform',
    description: 'Spatial data management system for a city planning department, supporting GIS integration and public reporting.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageCiptaKarya,
    url: 'https://dataciptakarya.tangerangkota.go.id/',
  },
  {
    id: 18,
    name: 'Event Management',
    category: 'Event Platform',
    description: 'End-to-end event management web app for scheduling, registration, ticketing, and post-event reporting.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageEMA,
    url: null,
  },
  {
    id: 19,
    name: 'Privilegez',
    category: 'Loyalty & Rewards Platform',
    description: 'Membership and loyalty rewards platform with points tracking, merchant offers, and user redemption flows.',
    stack: ['React.js', 'RESTful APIs'],
    image: imagePrivilegez,
    url: null,
  },
  {
    id: 20,
    name: 'Nex Security',
    category: 'Security Mobile App',
    description: 'Mobile security management app for monitoring access control, incident reporting, and guard tracking.',
    stack: ['React Native', 'RESTful APIs'],
    image: imageNex,
    url: null,
  },
  {
    id: 21,
    name: 'Bearny',
    category: 'Mobile App',
    description: 'Consumer mobile application with social features, user profiles, and content discovery built for iOS and Android.',
    stack: ['React Native', 'Redux', 'RESTful APIs'],
    image: imageBearny,
    url: null,
  },
]

export const EXPERIENCE = [
  {
    role: 'Frontend & Mobile Developer',
    company: 'Codelabs Indonesia',
    period: '2020 — Present',
    highlights: [
      'Lead frontend development across 15+ client products in healthcare, fintech, marketplace, and enterprise sectors',
      'Build cross-platform mobile apps with React Native, integrating REST APIs, GraphQL, and real-time WebSocket features',
      'Collaborate with UI/UX designers, backend engineers, and stakeholders through the full product lifecycle',
    ],
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Independent',
    period: '2020 — Present',
    highlights: [
      'Deliver custom web and mobile solutions for clients across multiple industries',
      'Manage full project lifecycle from requirement analysis through testing and deployment',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Codelabs Indonesia',
    period: '2018 — 2020',
    highlights: [
      'Built APIs and backend systems for travel and enterprise applications',
      'Contributed to microservices architecture using Laravel, Lumen, CodeIgniter, and MySQL',
    ],
  },
]

export const PRIMARY_STACK = [
  { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Redux',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
]

export const SUPPORTING_STACK = [
  'Node.js', 'Laravel', 'GraphQL', 'WebSocket', 'Supabase', 'Firebase',
  'PostgreSQL', 'Git', 'Vercel', 'Figma', 'Trello',
]
