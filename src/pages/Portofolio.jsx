import React from 'react'
import { useState } from "react"

// Portofolio
import imageProject1 from './../assets/project-1.jpg'
import imageProject2 from './../assets/project-2.jpg'
import imageProject3 from './../assets/project-3.jpg'

const Portofolio = () => {
  const [filterGroup, setFilterGroup] = useState('')
  const projects = [
    {
      id: 1,
      name: 'Finance',
      type: 'Web Development',
      image: imageProject1,
    },
    {
      id: 2,
      name: 'Orizon',
      type: 'Web Development',
      image: imageProject2,
    },
    {
      id: 3,
      name: 'Fundo',
      type: 'Applications',
      image: imageProject3,
    },
  ]

  return (
    <div className=" mt-8">
      <div className="flex flex-row space-x-8 text-xl text-[#d6d6d6]">
        <div className={` ${filterGroup === '' ? 'text-[#fcd16b]' : ''} cursor-pointer`} onClick={() => setFilterGroup('')}>All</div>
        <div className={` ${filterGroup === 'Web Development' ? 'text-[#fcd16b]' : ''} cursor-pointer`} onClick={() => setFilterGroup('Web Development')}>Web Development</div>
        <div className={` ${filterGroup === 'Applications' ? 'text-[#fcd16b]' : ''} cursor-pointer`} onClick={() => setFilterGroup('Applications')}>Applications</div>
      </div>

      <div className=" mt-8 grid grid-cols-3 gap-8">
        {(filterGroup !== '' ? projects.filter(f => f.type === filterGroup) : projects).map((row) => (
          <div >
            <img
              className=" rounded-xl"
              src={row?.image}
              alt={row?.name}
            />
            <div className="text-[#fafafa] text-xl font-medium mt-2 ml-2">{row?.name}</div>
            <div className="text-[#9f9f9f] text-lg ml-2">{row?.type}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portofolio