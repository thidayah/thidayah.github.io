import React from 'react'
import { useState } from "react"

// Portofolio
// import imageProject1 from './../assets/project-1.jpg'
// import imageProject2 from './../assets/project-2.jpg'
// import imageProject3 from './../assets/project-3.jpg'
import imageKlaklik from './../assets/Klaklik.png'
import imageHRDMobile from './../assets/HRDMobile.png'
import imageCityTours from './../assets/CityTours.png'
import imagePrivilegez from './../assets/Privilegez.png'
import imageYubiChat from './../assets/YubiChat.png'
import imageSIL from './../assets/SIL.png'
import imageCiptaKarya from './../assets/CiptaKarya.png'
import imageBMBK from './../assets/BMBK.png'
import imageEMA from './../assets/EMA.png'
import imageTourizpass from './../assets/Tourizpass.png'
import imageEdot from './../assets/Edot.png'
import imageRuangPasar from './../assets/RuangPasar.png'
import imageEzview from './../assets/Ezview.png'
import imageEzrx from './../assets/Ezrx.png'
import imageLNG from './../assets/LNG.png'
import imagePaseeroWeb from './../assets/PaseeroWeb.png'
import imagePaseeroMobile from './../assets/PaseeroMobile.png'
import imageKNS from './../assets/KNS.png'
import imageNex from './../assets/Nex.png'
import imageBearny from './../assets/Bearny.png'
import imageDailyTax from './../assets/DailyTax.png'

const Portofolio = () => {
  const [filterGroup, setFilterGroup] = useState('')
  const projects = [
    {
      id: 1,
      name: 'Klaklik',
      type: 'Web Development',
      image: imageKlaklik,
      url: 'https://www.klaklik.com/'
    },
    {
      id: 111,
      name: 'HRD Mobile',
      type: 'Applications',
      image: imageHRDMobile,
      url: '#'
    },
    {
      id: 2,
      name: 'CityTours',
      type: 'Web Development',
      image: imageCityTours,
      url: 'https://m.citytours.sg/'
    },
    {
      id: 3,
      name: 'Privilegez',
      type: 'Web Development',
      image: imagePrivilegez,
      url: '#'
    },
    {
      id: 331,
      name: 'Yubi Chat',
      type: 'Applications',
      image: imageYubiChat,
      url: '#'
    },
    {
      id: 4,
      name: 'SIL Tangerang',
      type: 'Web Development',
      image: imageSIL,
      url: 'https://sil.tangerangkota.go.id/'
    },
    {
      id: 5,
      name: 'Cipta Karya Tata Ruang',
      type: 'Web Development',
      image: imageCiptaKarya,
      url: 'https://dataciptakarya.tangerangkota.go.id/'
    },
    {
      id: 6,
      name: 'BMBK',
      type: 'Web Development',
      image: imageBMBK,
      url: 'https://dinasbmbk.lampungprov.go.id/'
    },
    {
      id: 7,
      name: 'Event Management',
      type: 'Web Development',
      image: imageEMA,
      url: '#'
    },
    {
      id: 8,
      name: 'Tourizpass',
      type: 'Web Development',
      image: imageTourizpass,
      url: '#'
    },
    {
      id: 9,
      name: 'Ruang Pasar',
      type: 'Web Development',
      image: imageRuangPasar,
      url: '#'
    },
    {
      id: 991,
      name: 'eDot Socmed',
      type: 'Applications',
      image: imageEdot,
      url: '#'
    },
    {
      id: 10,
      name: 'Ezview',
      type: 'Web Development',
      image: imageEzview,
      url: 'https://ezview.id/'
    },
    {
      id: 11,
      name: 'Ezrx',
      type: 'Web Development',
      image: imageEzrx,
      url: 'https://ezrx.id/'
    },
    {
      id: 12,
      name: 'LNG',
      type: 'Web Development',
      image: imageLNG,
      url: 'https://dev.indolng.co.id/'
    },
    {
      id: 13,
      name: 'Passero Web',
      type: 'Web Development',
      image: imagePaseeroWeb,
      url: 'https://paseero.ng/'
    },
    {
      id: 14,
      name: 'Passero Mobile',
      type: 'Applications',
      image: imagePaseeroMobile,
      url: 'https://play.google.com/store/apps/details?id=com.paseerorn&pcampaignid=web_share'
    },
    {
      id: 15,
      name: 'KNS',
      type: 'Web Development',
      image: imageKNS,
      url: 'https://kns.asia/'
    },
    {
      id: 15151,
      name: 'Nex Security',
      type: 'Applications',
      image: imageNex,
      url: '#'
    },
    {
      id: 15152,
      name: 'Bearny',
      type: 'Applications',
      image: imageBearny,
      url: '#'
    },
    {
      id: 16,
      name: 'Daily Tax',
      type: 'Web Development',
      image: imageDailyTax,
      url: '#'
    },
  ]

  return (
    <div className=" mt-8">
      <div className=" md:hidden border border-[#383838] rounded-2xl pr-4">
        <select 
          className=" w-full p-4 text-white focus:outline-none"
          onChange={(e) => setFilterGroup(e?.target?.value)}
        >
          <option value={''}>All</option>
          <option value={'Web Development'}>Web Development</option>
          <option value={'Applications'}>Applications</option>
        </select>
      </div>
      <div className=" hidden md:flex flex-row space-x-8 md:text-xl text-[#d6d6d6]">
        <div className={` ${filterGroup === '' ? 'text-[#fcd16b]' : ''} cursor-pointer`} onClick={() => setFilterGroup('')}>All</div>
        <div className={` ${filterGroup === 'Web Development' ? 'text-[#fcd16b]' : ''} cursor-pointer`} onClick={() => setFilterGroup('Web Development')}>Web Development</div>
        <div className={` ${filterGroup === 'Applications' ? 'text-[#fcd16b]' : ''} cursor-pointer`} onClick={() => setFilterGroup('Applications')}>Applications</div>
      </div>
      <div className=" mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {(filterGroup !== '' ? projects.filter(f => f.type === filterGroup) : projects).map((row) => (
          <a key={row?.id} href={row?.url} target={`${row?.url !== '#' ? '_blank' : '_top'}`} className={` cursor-pointer`} >
            {/* <div className=" animate-pulse w-full h-40 bg-[#fcd16b] rounded-xl">
            </div>             */}
            <img
              className=" rounded-xl transition-all hover:scale-125 duration-300 hover:cursor-zoom-in"
              src={row?.image}
              alt={row?.name}
            />
            <div className="text-[#fafafa] text-xl font-medium mt-2 ml-2">{row?.name}</div>
            <div className="text-[#9f9f9f] text-lg ml-2">{row?.type}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portofolio