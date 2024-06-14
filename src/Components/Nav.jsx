import { useState } from "react"
import nav from '../js/nav.js';
import {v4 as uuid} from 'uuid'

export const Nav = () => {

    const [appNav, setAppNav] = useState(nav);
    const [darkMode, setDarkMode] = useState(false);

    const handleNavClick = (e) => {
        let newNav = nav.map(element => {
            if(e.target.innerText === element.title)
                element.toggled = true;
            else
                element.toggled = false;
            return element;
        })

        setAppNav(newNav);
    }

  return (
    <nav className="flex justify-between items-center px-20 py-10 text-white">
        <div className="flex items-center gap-10">
            {
                appNav.map(element => (
                    <div key={uuid()} className={`${element.toggled ? 'bg-blue-700 rounded-full text-white transition-all' : null} px-4 py-2 cursor-pointer `}
                    onClick={(e) => {handleNavClick(e)}}>
                        {element.title}        
                    </div>
                ))
            }
        </div>

        <p className="font-bold text-2xl ">
            AKLET EL BET
        </p>

        <div className="flex items-center gap-6">
            {
                !darkMode ? <i className='bx bxs-moon cursor-pointer text-2xl' onClick={() => {setDarkMode(!darkMode)}}></i> : <i className='bx bxs-sun cursor-pointer text-2xl text-yellow-400' onClick={() => {setDarkMode(!darkMode)}}></i>
            }
            <div>
                {
                    !darkMode ? (
                        <p>Light</p>
                    ) : (
                        <p className="text-white">Dark</p>
                    )
                }
            </div>
        </div>
    </nav>
  )
}
