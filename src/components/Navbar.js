import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assests/css/nav.css'

import navLogo from '../assests/img/navLogo.png'
import avatar from '../assests/img/avatar.png'

function Navbar({handleClicked, isLoggedIn = false}) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [click, setClick] = useState(false)
    // const [selected, setSelected] = useState(false)

    function clicked() {
        setClick(true)
        handleClicked()
    }

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
                        onClick={() => navigate("/")}
                        className='nav_logo'
                        src={navLogo}
                        alt='MercuryFlix Logo'
                        style={{
                            cursor: isLoggedIn ? "pointer" : ""
                        }}
                    />
                </div>
                {isLoggedIn? (
                    <img
                        className='nav_avatar'
                        src={avatar}
                        alt='Avatar'
                        onClick={() => navigate('/profile')}
                    />
                ):!click?(
                    <button
                        className='nav_login_button'
                        onClick={()=> clicked()}
                    >
                        Sign Up
                    </button>
                ):(
                    <>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Navbar