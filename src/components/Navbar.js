import React, { useState, useEffect } from 'react'
import '../assests/css/nav.css'

import navLogo from '../assests/img/navLogo.png'
import avatar from '../assests/img/avatar.png'

function Navbar() {
    const [show, setShow] = useState(false);
    // const [selected, setSelected] = useState(false)

    const navTransition = () => {
        if (window.scrollY > 100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navTransition)
        return () => {
            window.removeEventListener("scroll", navTransition)
        }
    }, [])

    return (
        <div
            className={`nav ${show && 'nav_black'}`}
        >
            <div
                className='nav_contents'
            >
                <div
                    className='nav_left'
                >
                    <img
                        className='nav_logo'
                        src={navLogo}
                        alt='MercuryFlix Logo'
                    />
                    {/* <ul
                        className='nav_linklist'
                    >
                        <li
                            className="nav_link"
                        >
                            Home
                        </li>
                    </ul> */}
                </div>
                <img
                    className='nav_avatar'
                    src={avatar}
                    alt='Avatar'
                />
            </div>
        </div>
    )
}

export default Navbar