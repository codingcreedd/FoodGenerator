import { useState } from "react"
import nav from '../js/nav.js';
import {v4 as uuid} from 'uuid'
import { Link } from "react-router-dom";

export const Nav = () => {

    const [appNav, setAppNav] = useState(nav);
    const [darkMode, setDarkMode] = useState(false);


    const handleDarkChanges = () => {
        document.body.classList.toggle('dark');
    }

    const handleLightChanges = () => {
        document.body.classList.toggle('dark');
    }

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
    <nav className="flex justify-between items-center px-10 py-4 lg:px-20 lg:py-10 md:px-14 md:py-8 text-white">
        <div className="hidden md:flex items-center gap-10">
            {
                appNav.map(element => (
                    <Link to={element?.path} key={uuid()} className={`${element.toggled ? 'bg-blue-700 rounded-full text-white transition-all' : null} px-4 py-2 cursor-pointer `}
                    onClick={(e) => {handleNavClick(e)}}>
                        {element.title}        
                    </Link>
                ))
            }
        </div>

        <Link to="/" className="font-bold text-lg md:text-2xl ">
            AKLET EL BET
        </Link>

        <div className="flex items-center md:gap-6 gap-3 text-lg md:text-2xl">
            {
                !darkMode ? <button className='bx bxs-moon cursor-pointer text-2xl' onClick={() => {setDarkMode(!darkMode); handleDarkChanges()}}></button> : <button className='bx bxs-sun cursor-pointer text-2xl text-yellow-400' onClick={() => {setDarkMode(!darkMode); handleLightChanges()}}></button>
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
