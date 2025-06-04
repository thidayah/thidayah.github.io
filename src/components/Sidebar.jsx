import React from 'react'
import imgAvatar from '../assets/avatar.png'
import { FiLinkedin, FiMail, FiMapPin, FiUser } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className=" flex flex-col items-center bg-[#1e1e1f] max-h-screen border border-[#383838] rounded-3xl p-8 fixed">
      <div className=" rounded-3xl bg-[#333333] size-40 mt-8">
        <img src={imgAvatar} className="p-4" />
      </div>
      <div className="text-white text-3xl font-semibold mt-6">Taufik Hidayah</div>
      <div className=" text-white text-sm bg-[#2b2b2c] p-1 px-4 rounded-lg mt-4">Frontend Developer</div>
      <hr className="border-b-[0.5px] border-[#2b2b2c] w-full mt-12" />
      <div className="flex flex-col space-y-10 mt-12">
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiUser className=" text-[#ffdb70] size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-sm">Birthday</div>
            <div className="text-white">September, 4 1996</div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiMapPin className=" text-[#ffdb70] size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-sm">Location</div>
            <div className="text-white">Indonesia, Cimahi 40522</div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiMail className=" text-[#ffdb70] size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-sm">Email</div>
            <a className="text-white hover:cursor-pointer" href="mailto:thidayaaah@gmail.com">thidayaaah@gmail.com</a>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <div className=" size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <FiLinkedin className=" text-[#ffdb70] size-5" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#9f9f9f] uppercase text-sm">LinkedIn</div>
            <a className="text-white hover:cursor-pointer" target="_blank" href="https://www.linkedin.com/in/thidayah/">@thidayah</a>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Sidebar