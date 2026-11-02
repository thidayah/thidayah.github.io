import { useState, useEffect, useRef } from 'react'
import { Home, Contacts } from "./pages";
import { Sidebar } from "./components";

const NAV_ITEMS = [
  { label: 'Work',        type: 'section', id: 'work' },
  { label: 'Experience',  type: 'section', id: 'experience' },
  { label: 'Tech',        type: 'section', id: 'technologies' },
  { label: 'Contact',     type: 'section', id: 'contact' },
]

function App() {
  const [tab, setTab] = useState('Home')
  const [activeNav, setActiveNav] = useState('Work')
  const pendingSectionRef = useRef(null)

  useEffect(() => {
    if (pendingSectionRef.current) {
      const id = pendingSectionRef.current
      pendingSectionRef.current = null
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [tab])

  const handleNavClick = (item) => {
    setActiveNav(item.label)
    if (item.type === 'tab') {
      setTab(item.tab)
    } else {
      if (tab !== 'Home') {
        pendingSectionRef.current = item.id
        setTab('Home')
      } else {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleNavigate = (destination) => {
    const match = NAV_ITEMS.find((n) => n.tab === destination)
    if (match) setActiveNav(match.label)
    setTab(destination)
  }

  return (
    <div className="flex justify-center min-h-screen bg-[#121212] relative">
      <div className="w-[1200px] flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:justify-between p-4 pb-20 lg:py-16">

        <div className="lg:w-[23%]">
          <Sidebar />
        </div>

        <div className="bg-[#1e1e1f] lg:w-[70%] xl:w-[75%] border border-[#383838] rounded-3xl relative">
          {/* Top navigation */}
          <div className="hidden md:flex absolute top-0 right-0 flex-row space-x-8 bg-[#282829] border border-[#383838] p-5 px-10 rounded-bl-2xl rounded-tr-2xl text-white text-sm">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`${activeNav === item.label ? 'text-[#fcd16b]' : 'text-white'} cursor-pointer hover:text-[#fcd16b] transition-colors`}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Page content */}
          <div className="p-4 md:p-8">
            {tab !== 'Home' && (
              <>
                <div className="text-2xl md:text-4xl font-bold text-white mt-2">{tab}</div>
                <div className="w-12 h-[3px] md:h-[6px] rounded-full bg-[#fcd16b] mt-1 md:mt-4" />
              </>
            )}

            {tab === 'Home'    && <Home onNavigate={handleNavigate} />}
            {tab === 'Contact' && <Contacts />}
          </div>
        </div>

      </div>

      {/* Mobile bottom navigation */}
      <div className="w-full p-4 py-5 flex md:hidden flex-row justify-around bottom-0 fixed bg-[#1e1e1f]/50 backdrop-blur-3xl rounded-t-3xl border border-[#383838]">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className={`${activeNav === item.label ? 'text-[#fcd16b]' : 'text-white'} cursor-pointer text-sm`}
            onClick={() => handleNavClick(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
