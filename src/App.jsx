import { useState } from 'react'
import { FiLinkedin, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import imgAvatar from './assets/avatar.png'
import iconApp from './assets/icon-app.svg'
import iconDev from './assets/icon-dev.svg'
// import iconDesign from './assets/icon-design.svg'
// import iconPhoto from './assets/icon-photo.svg'

function App() {
  const tabs = ['About', 'Resume', 'Portofolio', 'Blog', 'Contact']
  const [tab, setTab] = useState('About')

  return (
    <div className=" flex justify-center min-h-screen bg-[#121212]">
      <div className="w-[1200px] flex justify-between py-16">
        <div className=" flex flex-col items-center bg-[#1e1e1f] w-[23%] h-full border border-[#383838] rounded-3xl p-8">
          <div className=" rounded-3xl bg-[#333333] size-40 mt-8">
            <img src={imgAvatar} className="p-4" />
          </div>
          <div className="text-white text-3xl font-semibold mt-6">Taufik Hidayah</div>
          <div className=" text-white text-sm bg-[#2b2b2c] p-1 px-4 rounded-lg mt-4">Frontend Developer</div>
          <hr className="border-b-[0.5px] border-[#2b2b2c] w-full mt-12" />
          {/* <div className=" text-5xl font-bold text-amber-500">Hello World</div> */}
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
          </div>

        </div>
        <div className=" bg-[#1e1e1f] w-[75%] h-full border border-[#383838] rounded-3xl relative">
          <div className=" absolute top-0 right-0 flex flex-row space-x-12 bg-[#282829] border border-[#383838] p-6 px-16 rounded-bl-2xl rounded-tr-2xl text-white text-xl">
            {tabs.map((row, index) => (
              <div 
                key={index} 
                className={` ${tab === row ? 'text-[#fcd16b]' : 'text-white' } cursor-pointer`}
                onClick={() => setTab(row)}
              >
                {row}
              </div>
            ))}
            {/* <div className="text-[#fcd16b]">About</div>
            <div>Resume</div>
            <div>Portofolio</div>
            <div>Blog</div>
            <div>Contact</div> */}
          </div>

          <div className="p-8">
            <div className=" text-4xl font-bold text-white mt-2">{tab}</div>
            <div className=" w-12 h-[6px] rounded-full bg-[#fcd16b] mt-4" />

            {tab === 'About' ?
              <>
                <p className="text-[#d6d6d6] text-xl mt-8">
                  I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                  <br />
                  <br />
                  My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                </p>

                <div className=" text-3xl font-bold text-white mt-12">What I'm Doing</div>
                <div className=" grid grid-cols-2 gap-6 mt-8">
                  {/* <div className=" flex flex-row space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
                    <img src={iconDesign} className="size-10" />
                    <div>
                      <div className="text-[#fafafa] font-bold text-xl">Web Design</div>
                      <div className="text-[#d6d6d6] text-lg mt-2">The most modern and high-quality design made at a professional level.</div>
                    </div>
                  </div> */}
                  <div className=" flex flex-row space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
                    <img src={iconDev} className="size-10" />
                    <div>
                      <div className="text-[#fafafa] font-bold text-xl">Web Development</div>
                      <div className="text-[#d6d6d6] text-lg mt-2">High-quality development of sites at the professional level.</div>
                    </div>
                  </div>
                  <div className=" flex flex-row space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
                    <img src={iconApp} className="size-10" />
                    <div>
                      <div className="text-[#fafafa] font-bold text-xl">Mobile Apps</div>
                      <div className="text-[#d6d6d6] text-lg mt-2">Professional development of applications for iOS and Android.</div>
                    </div>
                  </div>
                  {/* <div className=" flex flex-row space-x-6 bg-[#222224] rounded-2xl p-8 shadow shadow-[#ffffff]">
                    <img src={iconPhoto} className="size-10" />
                    <div>
                      <div className="text-[#fafafa] font-bold text-xl">Photography</div>
                      <div className="text-[#d6d6d6] text-lg mt-2">I make high-quality photos of any category at a professional level.</div>
                    </div>
                  </div> */}
                </div>
              </>
              : tab === 'Resume' ?
                <>
                  <div>
                    Resumm
                  </div>
                </>
            : null}

          </div>


        </div>
      </div>
    </div>
  )
}

export default App
