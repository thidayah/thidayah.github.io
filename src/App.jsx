import { useState, useEffect } from 'react'
import { About, Contacts, Portofolio, Resume } from "./pages";
import { Sidebar } from "./components";
// import iconDesign from './assets/icon-design.svg'
// import iconPhoto from './assets/icon-photo.svg'

function App() {
  const tabs = ['About', 'Resume', 'Portofolio', 'Contact']
  const [tab, setTab] = useState('About')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tab])

  return (
    <div className=" flex justify-center min-h-screen bg-[#121212] relative">
      <div className="w-[1200px] flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:justify-between p-4 pb-20 lg:py-16">
        <div className="lg:w-[23%]">
          <Sidebar />
        </div>
        <div className=" bg-[#1e1e1f] lg:w-[70%] xl:w-[75%] border border-[#383838] rounded-3xl relative ">
          <div className="hidden md:flex absolute top-0 right-0 flex-row space-x-12 bg-[#282829] border border-[#383838] p-6 px-16 rounded-bl-2xl rounded-tr-2xl text-white text-xl">
            {tabs.map((row, index) => (
              <div
                key={index}
                className={` ${tab === row ? 'text-[#fcd16b]' : 'text-white'} cursor-pointer`}
                onClick={() => setTab(row)}
              >
                {row}
              </div>
            ))}
          </div>

          <div className=" p-4 md:p-8">
            <div className=" text-2xl md:text-4xl font-bold text-white mt-2">{tab}</div>
            <div className=" w-12 h-[3px] md:h-[6px] rounded-full bg-[#fcd16b] mt-1 md:mt-4" />

            {tab === 'About' ?
              <About />
              : tab === 'Resume' ?
                <Resume />
                : tab === 'Portofolio' ?
                  <Portofolio />
                  : tab === 'Blog' ?
                    <>
                    </>
                    : tab === 'Contact' ?
                      <Contacts />
                      : null}

          </div>
        </div>
      </div>
      
      <div className=" w-full p-4 py-6 flex md:hidden flex-row justify-around bottom-0 fixed bg-[#1e1e1f]/45 backdrop-blur-3xl rounded-t-3xl border border-[#383838]">
        {tabs.map((row, index) => (
          <div
            key={index}
            className={` ${tab === row ? 'text-[#fcd16b]' : 'text-white'} cursor-pointer text-sm`}
            onClick={() => setTab(row)}
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
