import React from 'react'
import { FaPaperPlane } from "react-icons/fa"

const Contacts = () => {
  return (
    <div className=" mt-8">
      <div className=" w-full flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between mb-4">
        <input className=" w-full md:w-[49%] p-4 px-6 rounded-xl border border-[#383838] text-white placeholder:text-[#757575] focus:outline-none" placeholder="Full name" type={'text'} />
        <input className=" w-full md:w-[49%] p-4 px-6 rounded-xl border border-[#383838] text-white placeholder:text-[#757575] focus:outline-none" placeholder="Email" type={'email'} />
      </div>
      <textarea className=" w-full p-4 rounded-xl border border-[#383838] text-white placeholder:text-[#757575] focus:outline-none" placeholder="Your message" rows={4} />
      <div className="flex md:justify-end mt-4">
        <button
          className=" flex space-x-4 items-center justify-center w-full md:w-auto p-4 px-6 rounded-xl shadow shadow-[#ffdb70] hover:opacity-75 duration-300 cursor-pointer"
          onClick={() => console.log('Soon!')}
        >
          <FaPaperPlane className="text-[#fcd16b]" />
          <span className="text-[#fcd16b] text-sm md:text-base">Send Message</span>
        </button>
      </div>
    </div>
  )
}

export default Contacts