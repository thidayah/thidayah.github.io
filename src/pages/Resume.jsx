import React from 'react'
import { HiOutlineBookOpen, HiOutlineCodeBracket } from "react-icons/hi2";

const Resume = () => {
  return (
    <>
      <div className=" mt-8">
        <div className=" flex items-center space-x-6">
          <div className=" size-10 md:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <HiOutlineBookOpen className=" text-[#ffdb70] size-4 md:size-6" />
          </div>
          <div className="text-xl md:text-3xl font-bold text-white">Education</div>
        </div>
        <div className="mt-6 ml-2 md:ml-4 space-y-4">
          <div className=" flex space-x-8 md:space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] md:text-xl font-semibold">STMIK Indonesia Mandiri</div>
              <div className=" text-[#ceb15a] text-sm md:text-lg">2017 — 2021</div>
              <div className=" text-[#d6d6d6] text-sm md:text-lg">Informatics Engineering</div>
            </div>
          </div>
          <div className=" flex space-x-8 md:space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] md:text-xl font-semibold">SMK TI Pembangunan</div>
              <div className=" text-[#ceb15a] text-sm md:text-lg">2011 — 2014</div>
              <div className=" text-[#d6d6d6] text-sm md:text-lg">Software Engineering</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8">
        <div className=" flex items-center space-x-6">
          <div className=" size-10 md:size-12 rounded-xl shadow shadow-[#ffdb70] flex justify-center items-center">
            <HiOutlineCodeBracket className=" text-[#ffdb70] size-4 md:size-6" />
          </div>
          <div className="text-xl md:text-3xl font-bold text-white">Experience</div>
        </div>
        <div className="mt-6 ml-2 md:ml-4 space-y-4">

          <div className=" flex space-x-8 md:space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] text-xl font-semibold">Mobile Developer <span className="">at Codelabs Indonesia</span></div>
              <div className=" text-[#ceb15a] text-sm md:text-lg">2022 — Present</div>
              <div className=" text-[#d6d6d6] text-sm md:text-lg">I work using React Native to build cross-platform applications. I design UI layouts from provided designs and integrate RESTful APIs and GraphQL for data handling. I've developed various apps, my role emphasizes responsive UI, smooth API integration, and real-time functionality.</div>
            </div>
          </div>
          <div className=" flex space-x-8 md:space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] md:text-xl font-semibold">Fronted Developer <span className="">at Codelabs Indonesia</span></div>
              <div className=" text-[#ceb15a] text-sm md:text-lg">2020 — Present</div>
              <div className=" text-[#d6d6d6] text-sm md:text-lg">Responsible for translating UI designs into responsive web interfaces and integrating RESTful APIs from the backend team. I've developed platforms across various domains, including film (Klaklik), laundry services (Iziloh), legal tech (Synctax), food ordering (Privilegez), healthcare (Ezview, Ezrx), and e-commerce (Ruang Pasar). My focus is on performance, usability, and clean frontend architecture.</div>
            </div>
          </div>
          <div className=" flex space-x-8 md:space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] md:text-xl font-semibold">Backend Developer <span className="">at Codelabs Indonesia</span></div>
              <div className=" text-[#ceb15a] text-sm md:text-lg">2018 — 2020</div>
              <div className=" text-[#d6d6d6] text-sm md:text-lg">I worked as a Backend Developer, building APIs and backend systems for travel applications. I developed a CMS for managing content, contributed to microservice-based architecture for better scalability, and used technologies including CodeIgniter, Lumen, Laravel, PHP, MySQL, and AdminLTE to support both web and mobile platforms.</div>
            </div>
          </div>
          <div className=" flex space-x-8 md:space-x-10 ">
            <div>
              <div className=" size-5 rounded-full bg-[#fecb66] border-4 border-[#383838] mt-1 " />
            </div>
            <div>
              <div className=" text-[#fafafa] md:text-xl font-semibold">Web Programmer <span className="">at Nusantara Citra</span></div>
              <div className=" text-[#ceb15a] text-sm md:text-lg">2016 — 2017</div>
              <div className=" text-[#d6d6d6] text-sm md:text-lg">I worked as a Web Developer responsible for designing, developing, and maintaining various web-based systems for healthcare, government. My role extended to technical infrastructure tasks, including server and network setup, OS installations, and basic IT support for office staff. I was actively involved in debugging, testing, writing technical documentation.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume