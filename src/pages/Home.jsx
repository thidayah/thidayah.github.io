import React, { useState, useEffect, useRef } from 'react'
import { FiArrowRight, FiDownload, FiExternalLink, FiMail, FiLinkedin } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import { cvFile, STATS, SELECTED_PROJECTS, EXPERIENCE, PRIMARY_STACK, SUPPORTING_STACK } from '../data/portofolioData'

const Home = ({ onNavigate }) => {
  const [visibleCount, setVisibleCount] = useState(6)
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="space-y-20 mt-4 md:mt-10">

        {/* ── 1. Hero ── */}
        <section ref={(el) => { sectionRefs.current[0] = el }} className="section-reveal">
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
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#fcd16b] text-[#121212] text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            >
              View My Work <FiArrowRight size={14} />
            </button>
            <a
              href={cvFile}
              download="CV_Taufik_Hidayah.pdf"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#383838] text-[#d6d6d6] text-sm rounded-xl hover:border-[#fcd16b] hover:text-[#fcd16b] transition-colors duration-200"
            >
              <FiDownload size={14} /> Download CV
            </a>
          </div>
        </section>

        {/* ── 2. Selected Work ── */}
        <section ref={(el) => { sectionRefs.current[1] = el }} id="work" className="section-reveal scroll-mt-4 pt-2">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
            <div className="w-10 h-[5px] rounded-full bg-[#fcd16b] mt-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {SELECTED_PROJECTS.slice(0, visibleCount).map((project) => (
              <div
                key={project.id}
                className="bg-[#222224] rounded-2xl overflow-hidden border border-[#383838] hover:border-[#fcd16b]/30 hover:-translate-y-1 transition-all duration-200 group flex flex-col"
              >
                <div className="overflow-hidden aspect-video shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
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
                        className="text-[#9f9f9f] hover:text-[#fcd16b] transition-colors duration-200 ml-2 shrink-0"
                      >
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>
                  <p className="text-[#9f9f9f] text-sm mt-2 leading-relaxed flex-1">{project.description}</p>
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

          {visibleCount < SELECTED_PROJECTS.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((c) => c + 4)}
                className="flex items-center gap-2 px-6 py-2.5 border border-[#383838] text-[#d6d6d6] text-sm rounded-xl hover:border-[#fcd16b] hover:text-[#fcd16b] transition-colors cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* ── 3. Experience Highlights ── */}
        <section ref={(el) => { sectionRefs.current[2] = el }} id="experience" className="section-reveal scroll-mt-4 pt-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
          <div className="w-10 h-[5px] rounded-full bg-[#fcd16b] mt-3 mb-8" />
          <div className="space-y-4">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="bg-[#222224] rounded-2xl p-6 border border-[#383838] hover:border-[#fcd16b]/30 hover:-translate-y-1 transition-all duration-200">
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
        <section ref={(el) => { sectionRefs.current[3] = el }} id="technologies" className="section-reveal scroll-mt-4 pt-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Core Technologies</h2>
          <div className="w-10 h-[5px] rounded-full bg-[#fcd16b] mt-3 mb-8" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-5">
            {PRIMARY_STACK.map((tech) => (
              <div
                key={tech.name}
                className="bg-[#222224] border border-[#383838] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-[#fcd16b]/40 hover:-translate-y-1 transition-all duration-200"
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
        <section ref={(el) => { sectionRefs.current[4] = el }} id="contact" className="section-reveal scroll-mt-4 pt-2 pb-8">
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
              {/* <button
              onClick={() => onNavigate('Contact')}
              className="flex items-center gap-2 px-5 py-2.5 border border-[#383838] text-[#d6d6d6] text-sm rounded-xl hover:border-[#fcd16b] hover:text-[#fcd16b] transition-colors cursor-pointer"
            >
              Use Contact Form <FiArrowRight size={13} />
            </button> */}
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
    </>
  )
}

export default Home
