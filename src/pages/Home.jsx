import React from 'react'
import { FiArrowRight, FiDownload, FiExternalLink, FiMail } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'

import imagePaseeroWeb from '../assets/PaseeroWeb.webp'
import imageKlaklik from '../assets/Klaklik.webp'
import imageRuangPasar from '../assets/RuangPasar.webp'
import imageYubiChat from '../assets/YubiChat.webp'
import imageEzrx from '../assets/Ezrx.webp'
import imageDailyTax from '../assets/DailyTax.webp'

const STATS = [
  { value: '6+', label: 'Years Experience' },
  { value: '20+', label: 'Products Delivered' },
  { value: '5+', label: 'Industries Served' },
]

const SELECTED_PROJECTS = [
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
    name: 'Ruang Pasar',
    category: 'Agricultural E-commerce',
    description: 'Marketplace for agricultural products with payment gateway integration and merchant management workflows.',
    stack: ['Laravel', 'RESTful APIs', 'Midtrans', 'Xendit'],
    image: imageRuangPasar,
    url: null,
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
    name: 'Ezrx',
    category: 'Healthcare Platform',
    description: 'Healthcare platform for medical professionals with responsive interface, secure data handling, and integrated backend services.',
    stack: ['React.js', 'TypeScript', 'RESTful APIs'],
    image: imageEzrx,
    url: 'https://ezrx.id/',
  },
  {
    id: 6,
    name: 'Daily Tax',
    category: 'Enterprise Tax Management',
    description: 'Tax management platform with accounting modules, reporting workflows, and downloadable business reports for enterprise use.',
    stack: ['React.js', 'RESTful APIs'],
    image: imageDailyTax,
    url: null,
  },
]

const EXPERIENCE = [
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

const PRIMARY_STACK = [
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
]

const SUPPORTING_STACK = [
  'Node.js', 'Laravel', 'GraphQL', 'WebSocket', 'Supabase', 'Firebase',
  'PostgreSQL', 'Git', 'Figma', 'Trello', 'Vercel',
]

const Home = ({ onNavigate }) => {
  return (
    <div className="space-y-20 mt-4 md:mt-10">

      {/* ── 1. Hero ── */}
      <section>
        <p className="text-[#fcd16b] text-[10px] font-semibold tracking-[0.25em] uppercase mb-5">
          Senior Frontend Developer
        </p>
        <h1 className="text-3xl md:text-[2.6rem] font-bold text-white leading-tight">
          Building digital products that<br className="hidden md:block" />  users actually love.
        </h1>
        <p className="text-[#9f9f9f] text-sm md:text-base mt-5 leading-relaxed">
          6+ years delivering fast, scalable web and mobile solutions — from healthcare platforms and fintech apps to marketplaces and enterprise systems. Specializing in React.js, Next.js, and React Native.
        </p>
        <div className="flex flex-wrap gap-8 mt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-bold text-[#fcd16b]">{s.value}</div>
              <div className="text-[#9f9f9f] text-[10px] uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <button
            onClick={() => onNavigate('Portfolio')}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#fcd16b] text-[#121212] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
          >
            View My Work <FiArrowRight size={14} />
          </button>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 border border-[#383838] text-[#d6d6d6] text-sm rounded-xl hover:border-[#fcd16b] hover:text-[#fcd16b] transition-colors"
          >
            <FiDownload size={14} /> Download CV
          </a>
        </div>
      </section>

      {/* ── 2. Selected Work ── */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
            <div className="w-10 h-[5px] rounded-full bg-[#fcd16b] mt-3" />
          </div>
          <button
            onClick={() => onNavigate('Portfolio')}
            className="flex items-center gap-1.5 text-[#9f9f9f] text-sm hover:text-[#fcd16b] transition-colors group cursor-pointer"
          >
            View all
            <FiArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SELECTED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#222224] rounded-2xl overflow-hidden border border-[#383838] hover:border-[#fcd16b]/30 transition-colors group"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-semibold text-[#fcd16b] tracking-[0.18em] uppercase">
                  {project.category}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="text-white font-semibold text-base leading-tight">{project.name}</h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9f9f9f] hover:text-[#fcd16b] transition-colors ml-2 shrink-0"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  )}
                </div>
                <p className="text-[#9f9f9f] text-sm mt-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[11px] px-2.5 py-1 rounded-lg bg-[#2b2b2c] text-[#d6d6d6]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Experience Highlights ── */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
        <div className="w-10 h-[5px] rounded-full bg-[#fcd16b] mt-3 mb-8" />
        <div className="space-y-4">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="bg-[#222224] rounded-2xl p-6 border border-[#383838]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                <div>
                  <div className="text-white font-semibold text-sm md:text-base">{exp.role}</div>
                  <div className="text-[#fcd16b] text-sm mt-0.5">{exp.company}</div>
                </div>
                <div className="text-[#9f9f9f] text-[10px] uppercase tracking-widest shrink-0 sm:text-right mt-1">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-[#9f9f9f] text-sm flex gap-3 leading-relaxed">
                    <span className="text-[#fcd16b] shrink-0 mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Core Technologies ── */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Core Technologies</h2>
        <div className="w-10 h-[5px] rounded-full bg-[#fcd16b] mt-3 mb-8" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-5">
          {PRIMARY_STACK.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#222224] border border-[#383838] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-[#fcd16b]/40 transition-colors"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <span className="text-[#9f9f9f] text-[11px] text-center leading-tight">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {SUPPORTING_STACK.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-full bg-[#1e1e1f] text-[#9f9f9f] border border-[#383838]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── 5. Contact CTA ── */}
      <section className="pb-8">
        <div className="bg-[#222224] rounded-2xl p-8 md:p-12 border border-[#383838] text-center">
          <p className="text-[#fcd16b] text-[10px] font-semibold tracking-[0.25em] uppercase mb-4">
            Available for new opportunities
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to build something together?
          </h2>
          <p className="text-[#9f9f9f] mt-3 text-sm max-w-sm mx-auto leading-relaxed">
            Open to full-time roles and contract work — remote or on-site. Let's talk about what we can create.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="mailto:thidayaaah@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#fcd16b] text-[#121212] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              <FiMail size={14} /> Send an Email
            </a>
            <button
              onClick={() => onNavigate('Contact')}
              className="flex items-center gap-2 px-5 py-2.5 border border-[#383838] text-[#d6d6d6] text-sm rounded-xl hover:border-[#fcd16b] hover:text-[#fcd16b] transition-colors cursor-pointer"
            >
              Use Contact Form <FiArrowRight size={13} />
            </button>
          </div>
          <div className="flex justify-center gap-5 mt-6">
            <a
              href="https://github.com/thidayah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9f9f9f] hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/thidayah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9f9f9f] hover:text-white transition-colors"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
