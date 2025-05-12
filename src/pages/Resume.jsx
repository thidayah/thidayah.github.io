import React from 'react'
import { HiOutlineBookOpen, HiOutlineCodeBracket } from "react-icons/hi2";

const Resume = () => {
  return (
    <>
      <div className=" mt-8">
        <div className=" flex items-center space-x-6">
          <div className=" size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <HiOutlineBookOpen className=" text-[#ffdb70] size-6" />
          </div>
          <div className="text-3xl font-bold text-white">Education</div>
        </div>
        <div className="mt-6 ml-4 space-y-4">
          <div className=" flex space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] text-xl font-semibold">SMK TI Pembangunan</div>
              <div className=" text-[#ceb15a] text-lg">2011 — 2014</div>
              <div className=" text-[#d6d6d6] text-lg">Software Engineering</div>
            </div>
          </div>
          <div className=" flex space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] text-xl font-semibold">STMIK Indonesia Mandiri</div>
              <div className=" text-[#ceb15a] text-lg">2017 — 2021</div>
              <div className=" text-[#d6d6d6] text-lg">Informatics Engineering</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8">
        <div className=" flex items-center space-x-6">
          <div className=" size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <HiOutlineCodeBracket className=" text-[#ffdb70] size-6" />
          </div>
          <div className="text-3xl font-bold text-white">Experience</div>
        </div>
        <div className="mt-6 ml-4 space-y-4">
          <div className=" flex space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] text-xl font-semibold">Web Programmer</div>
              <div className=" text-[#ceb15a] text-lg">2016 — 2017</div>
              <div className=" text-[#d6d6d6] text-lg">at Nusantara Citra</div>
            </div>
          </div>
          <div className=" flex space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] text-xl font-semibold">Backend Developer</div>
              <div className=" text-[#ceb15a] text-lg">2018 — 2020</div>
              <div className=" text-[#d6d6d6] text-lg">at Codelabs Indonesia</div>
            </div>
          </div>
          <div className=" flex space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] text-xl font-semibold">Fronted Developer</div>
              <div className=" text-[#ceb15a] text-lg">2020 — Now</div>
              <div className=" text-[#d6d6d6] text-lg">at Codelabs Indonesia</div>
            </div>
          </div>
          <div className=" flex space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] text-xl font-semibold">Mobile Developer</div>
              <div className=" text-[#ceb15a] text-lg">2022 — Now</div>
              <div className=" text-[#d6d6d6] text-lg">at Codelabs Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume