import React from 'react'
import imgAvatar from '../assets/avatar.png'
import { FiLinkedin, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaGithub } from "react-icons/fa";


import { useState } from "react";

const Sidebar = () => {
  const [isShow, setShow] = useState(false)
  
  return (
    <div className=" flex flex-col md:items-center bg-[#1e1e1f] max-h-screen border border-[#383838] rounded-3xl p-4 md:p-8 md:fixed">
      <div className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 relative">
        <div className=" rounded-3xl bg-[#333333] size-24 md:size-40 md:mt-8">
          <img src={imgAvatar} className=" p-2 md:p-4" />
        </div>
        <div className=" flex flex-col items-center space-y-3 md:space-y-4 md:mt-6 ">
          <div className="text-white text-xl md:text-3xl font-semibold ">Taufik Hidayah</div>
          <div className="flex">
            <div className=" text-white text-xs md:text-sm bg-[#2b2b2c] p-1 px-4 rounded-lg ">Frontend Developer</div>
          </div>
        </div>

        <div 
          onClick={() => setShow(!isShow)}
          className=" size-8 rounded-bl-xl rounded-tr-3xl shadow shadow-[#ffdb70] flex justify-center items-center absolute -right-4 -top-4 md:hidden"
        >
          <IoIosArrowDown className=" text-[#ffdb70] size-4" />
        </div>
      </div>
      <div className={` ${isShow ? 'h-auto translate-y-0 opacity-100 duration-300 delay-100' : 'h-0 -translate-y-1 z-0 opacity-0 invisible '} transition  md:flex flex-col space-y-6 md:space-y-10 md:mt-12 `}>
        <hr className="border-b-[0.5px] border-[#2b2b2c] w-full mt-6 md:mt-0 " />
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-10 md:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiUser className=" text-[#ffdb70] size-4 md:size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-xs md:text-sm">Birthday</div>
            <div className="text-white">September, 4 1996</div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-10 md:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiMapPin className=" text-[#ffdb70] size-4 md:size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-xs md:text-sm">Location</div>
            <div className="text-white">Indonesia, Cimahi 40522</div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-10 md:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiMail className=" text-[#ffdb70] size-4 md:size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-xs md:text-sm">Email</div>
            <a className="text-white hover:cursor-pointer" href="mailto:thidayaaah@gmail.com">thidayaaah@gmail.com</a>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-10 md:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiLinkedin className=" text-[#ffdb70] size-4 md:size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-xs md:text-sm">LinkedIn</div>
            <a className="text-white hover:cursor-pointer" target="_blank" href="https://www.linkedin.com/in/thidayah/">@thidayah</a>
          </div>
        </div>
        <div className="flex md:justify-center space-x-4 px-2">
          <a href="https://github.com/thidayah" target="_blank">
            <FaGithub className=" text-[#9f9f9f] size-5 hover:opacity-75 duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram className=" text-[#9f9f9f] size-5 hover:opacity-75 duration-200"  />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar