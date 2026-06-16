import React from 'react'
import { useState } from "react"

import imageKlaklik from './../assets/Klaklik.webp'
import imageHRDMobile from './../assets/HRDMobile.webp'
import imageCityTours from './../assets/CityTours.webp'
import imagePrivilegez from './../assets/Privilegez.webp'
import imageYubiChat from './../assets/YubiChat.webp'
import imageSIL from './../assets/SIL.webp'
import imageCiptaKarya from './../assets/CiptaKarya.webp'
import imageBMBK from './../assets/BMBK.webp'
import imageEMA from './../assets/EMA.webp'
import imageTourizpass from './../assets/Tourizpass.webp'
import imageEdot from './../assets/Edot.webp'
import imageRuangPasar from './../assets/RuangPasar.webp'
import imageEzview from './../assets/Ezview.webp'
import imageEzrx from './../assets/Ezrx.webp'
import imageLNG from './../assets/LNG.webp'
import imagePaseeroWeb from './../assets/PaseeroWeb.webp'
import imagePaseeroMobile from './../assets/PaseeroMobile.webp'
import imageKNS from './../assets/KNS.webp'
import imageNex from './../assets/Nex.webp'
import imageBearny from './../assets/Bearny.webp'
import imageDailyTax from './../assets/DailyTax.webp'

const Portfolio = () => {
  const [filterGroup, setFilterGroup] = useState('')

  const projects = [
    { id: 1,   name: 'Klaklik',             type: 'Web Development', image: imageKlaklik,       url: 'https://www.klaklik.com/' },
    { id: 111, name: 'HRD Mobile',           type: 'Applications',    image: imageHRDMobile,     url: null },
    { id: 2,   name: 'CityTours',            type: 'Web Development', image: imageCityTours,     url: 'https://m.citytours.sg/' },
    { id: 3,   name: 'Privilegez',           type: 'Web Development', image: imagePrivilegez,    url: null },
    { id: 331, name: 'Yubi Chat',            type: 'Applications',    image: imageYubiChat,      url: null },
    { id: 4,   name: 'SIL Tangerang',        type: 'Web Development', image: imageSIL,           url: 'https://sil.tangerangkota.go.id/' },
    { id: 5,   name: 'Cipta Karya Tata Ruang', type: 'Web Development', image: imageCiptaKarya, url: 'https://dataciptakarya.tangerangkota.go.id/' },
    { id: 6,   name: 'BMBK',                type: 'Web Development', image: imageBMBK,           url: 'https://dinasbmbk.lampungprov.go.id/' },
    { id: 7,   name: 'Event Management',     type: 'Web Development', image: imageEMA,           url: null },
    { id: 8,   name: 'Tourizpass',           type: 'Web Development', image: imageTourizpass,    url: null },
    { id: 9,   name: 'Ruang Pasar',          type: 'Web Development', image: imageRuangPasar,    url: null },
    { id: 991, name: 'eDot Socmed',          type: 'Applications',    image: imageEdot,          url: null },
    { id: 10,  name: 'Ezview',              type: 'Web Development', image: imageEzview,         url: 'https://ezview.id/' },
    { id: 11,  name: 'Ezrx',               type: 'Web Development', image: imageEzrx,           url: 'https://ezrx.id/' },
    { id: 12,  name: 'LNG',                type: 'Web Development', image: imageLNG,            url: 'https://dev.indolng.co.id/' },
    { id: 13,  name: 'Paseero Web',         type: 'Web Development', image: imagePaseeroWeb,    url: 'https://paseero.ng/' },
    { id: 14,  name: 'Paseero Mobile',      type: 'Applications',    image: imagePaseeroMobile, url: 'https://play.google.com/store/apps/details?id=com.paseerorn&pcampaignid=web_share' },
    { id: 15,  name: 'KNS',                type: 'Web Development', image: imageKNS,            url: 'https://kns.asia/' },
    { id: 15151, name: 'Nex Security',      type: 'Applications',    image: imageNex,           url: null },
    { id: 15152, name: 'Bearny',            type: 'Applications',    image: imageBearny,        url: null },
    { id: 16,  name: 'Daily Tax',           type: 'Web Development', image: imageDailyTax,      url: null },
  ]

  const filtered = filterGroup ? projects.filter((p) => p.type === filterGroup) : projects

  return (
    <div className="mt-8">
      {/* Mobile filter */}
      <div className="md:hidden border border-[#383838] rounded-2xl pr-4">
        <select
          className="w-full p-4 bg-[#1e1e1f] text-white focus:outline-none rounded-2xl"
          onChange={(e) => setFilterGroup(e.target.value)}
          value={filterGroup}
        >
          <option value="">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Applications">Applications</option>
        </select>
      </div>

      {/* Desktop filter tabs */}
      <div className="hidden md:flex flex-row space-x-8 text-[#d6d6d6] text-base">
        {['', 'Web Development', 'Applications'].map((group) => (
          <button
            key={group}
            className={`cursor-pointer transition-colors ${filterGroup === group ? 'text-[#fcd16b]' : 'hover:text-white'}`}
            onClick={() => setFilterGroup(group)}
          >
            {group === '' ? 'All' : group}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((row) => {
          const inner = (
            <>
              <img
                className="rounded-xl transition-transform hover:scale-105 duration-300"
                src={row.image}
                alt={row.name}
              />
              <div className="text-[#fafafa] text-base font-medium mt-2 ml-1">{row.name}</div>
              <div className="text-[#9f9f9f] text-sm ml-1">{row.type}</div>
            </>
          )

          return row.url ? (
            <a key={row.id} href={row.url} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div key={row.id} className="cursor-default">
              {inner}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
