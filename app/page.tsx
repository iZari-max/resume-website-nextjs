import About from "./comps/About"
import Navigation from "./comps/Navigation"
import { Inter } from 'next/font/google'
import Services from "./comps/Services"
import Skills from "./comps/Skills"
import Work from './comps/Work';
import History from "./comps/History"
import Contacts from "./comps/Contacts"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-[100%] flex flex-row">
      <div className="w-1/5">
      <Navigation/>
    </div>
    <div className=" flex flex-col overflow-hidden">
      <About />
      {/* <hr className=' bg-gray-700 my-6' /> */}
      <Services />
      <Skills />
      <Work />
      <History />
      <Contacts />
    </div>
    </div>
  )
}
