import React, { useState } from 'react'
import imgAvatar from '../assets/avatar.png'
import cvFile from '../assets/CV_Taufik_Hidayah.pdf'
import { FiLinkedin, FiMail, FiMapPin, FiBriefcase, FiDownload } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Sidebar = () => {
  const [isShow, setShow] = useState(false)
  function InfoComponent() {
    return (
      <>
        <hr className="border-b-[0.5px] border-[#2b2b2c] w-full mt-6 lg:mt-0 " />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="flex flex-row space-x-4 items-center">
            <div className=" size-10 lg:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
              <FiBriefcase className=" text-[#ffdb70] size-4 lg:size-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-[#9f9f9f] uppercase text-xs lg:text-sm">Experience</div>
              <div className="text-white">6+ Years</div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <div className=" size-10 lg:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
              <FiMapPin className=" text-[#ffdb70] size-4 lg:size-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-[#9f9f9f] uppercase text-xs lg:text-sm">Location</div>
              <div className="text-white">Indonesia, Cimahi</div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <div className=" size-10 lg:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
              <FiMail className=" text-[#ffdb70] size-4 lg:size-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-[#9f9f9f] uppercase text-xs lg:text-sm">Email</div>
              <a className="text-white hover:cursor-pointer" href="mailto:thidayaaah@gmail.com">thidayaaah@gmail.com</a>
            </div>
          </div>
          {/* <div className="flex flex-row space-x-4 items-center">
            <div className=" size-10 lg:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
              <FiLinkedin className=" text-[#ffdb70] size-4 lg:size-5" />
            </div>
            <div className="flex flex-col">
              <div className="text-[#9f9f9f] uppercase text-xs lg:text-sm">LinkedIn</div>
              <a className="text-white hover:cursor-pointer" target="_blank" href="https://www.linkedin.com/in/thidayah/">@thidayah</a>
            </div>
          </div> */}
        </div>
        <hr className="border-b-[0.5px] border-[#2b2b2c] w-full lg:hidden " />
        <div className="flex lg:justify-center space-x-4 px-2">
          <a href="https://www.linkedin.com/in/thidayah" target="_blank">
            <FiLinkedin className=" text-[#9f9f9f] size-5 hover:opacity-75 duration-200" />
          </a>
          <a href="https://github.com/thidayah" target="_blank">
            <FaGithub className=" text-[#9f9f9f] size-5 hover:opacity-75 duration-200" />
          </a>
          {/* <a href="https://instagram.com" target="_blank">
            <FaInstagram className=" text-[#9f9f9f] size-5 hover:opacity-75 duration-200" />
          </a> */}
        </div>
        <a
          href={cvFile}
          download="CV_Taufik_Hidayah.pdf"
          className="flex items-center justify-center gap-2 w-full p-3 rounded-xl border border-[#383838] text-[#fcd16b] text-xs font-medium hover:border-[#fcd16b] hover:bg-[#fcd16b]/5 transition-all"
        >
          <FiDownload size={13} />
          Download CV
        </a>
      </>
    )
  }

  return (
    <div className=" flex flex-col lg:items-center bg-[#1e1e1f] max-h-screen border border-[#383838] rounded-3xl p-4 md:p-8 lg:fixed">
      <div className="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 relative">
        <div className=" rounded-3xl bg-[#333333] size-24 md:size-40 md:mt-8">
          <img src={imgAvatar} className=" p-2 md:p-4" />
        </div>
        <div className=" flex flex-col lg:items-center space-y-3 lg:space-y-4 lg:mt-6 ">
          <div className="text-white text-xl md:text-3xl font-semibold ">Taufik Hidayah</div>
          <div className="flex">
            <div className=" text-white text-xs md:text-sm bg-[#2b2b2c] p-1 px-4 rounded-lg ">Senior Frontend Developer</div>
          </div>
        </div>
        <div
          onClick={() => setShow(!isShow)}
          className=" size-8 rounded-bl-xl rounded-tr-3xl shadow shadow-[#ffdb70] flex justify-center items-center absolute -right-4 md:-right-8 -top-4 md:-top-8 lg:hidden"
        >
          <IoIosArrowDown className={` text-[#ffdb70] size-4 ${isShow ? 'rotate-180' : '' }  transition`} />
        </div>
      </div>
      <div className={` ${isShow ? 'h-auto translate-y-0 opacity-100 duration-300 delay-100' : 'h-0 -translate-y-1 z-0 opacity-0 invisible '} transition lg:hidden flex-col space-y-6 lg:space-y-10 lg:mt-12 `}>
        {InfoComponent()}
      </div>
      <div className={` hidden lg:flex flex-col space-y-6 lg:space-y-10 lg:mt-12 `}>
        {InfoComponent()}
      </div>
    </div>
  )
}

export default Sidebar