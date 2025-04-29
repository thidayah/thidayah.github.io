import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <div className=" flex justify-center min-h-screen bg-[#121212]">    
      <div className="w-[1200px] flex justify-between py-16">
        <div className=" flex flex-col items-center bg-[#1e1e1f] w-[23%] h-full border border-[#383838] rounded-3xl p-8">
          <div className=" rounded-3xl bg-[#333333] size-40 mt-8">
            {/* <img /> */}
          </div>
          <div className="text-white text-3xl font-semibold mt-6">Taufik Hidayah</div>
          <div className=" text-white text-sm bg-[#2b2b2c] p-1 px-4 rounded-lg mt-4">Frontend Developer</div>
          <hr className="border-b-[0.5px] border-[#2b2b2c] w-full mt-12" />
          {/* <div className=" text-5xl font-bold text-amber-500">Hello World</div> */}
          <div className="flex flex-col space-y-10 mt-12">          
            <div className="flex flex-row space-x-4 items-center">
              <div className=" size-12 rounded-xl shadow shadow-amber-50"></div>
              <div className="flex flex-col">
                <div className="text-[#9f9f9f] uppercase text-sm">Birthday</div>
                <div className="text-white">September, 4 1996</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <div className=" size-12 rounded-xl shadow shadow-amber-50"></div>
              <div className="flex flex-col">
                <div className="text-[#9f9f9f] uppercase text-sm">Location</div>
                <div className="text-white">Indonesia, Cimahi 40522</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <div className=" size-12 rounded-xl shadow shadow-amber-50"></div>
              <div className="flex flex-col">
                <div className="text-[#9f9f9f] uppercase text-sm">Email</div>
                <div className="text-white">thidayaaah@gmail.com</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <div className=" size-12 rounded-xl shadow shadow-amber-50"></div>
              <div className="flex flex-col">
                <div className="text-[#9f9f9f] uppercase text-sm">LinkedIn</div>
                <div className="text-white">@thidayah</div>
              </div>
            </div>
          </div>

        </div>
        <div className=" bg-[#1e1e1f] w-[75%] h-full border border-[#383838] rounded-3xl p-8">
          <div className=" text-5xl font-bold text-white">Portofolio</div>

        </div>
      </div>
    </div>
  )
}

export default App
