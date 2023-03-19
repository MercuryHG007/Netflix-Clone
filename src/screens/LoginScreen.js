import React, { useState } from 'react'

import '../assests/css/loginScreen.css'

import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

    function handleNavBarClick () {
        setSignIn(true)
    }

    return (
        <div
            className='loginScreen'
        >
            <div
                className='loginScreen_bg'
            >
                <Navbar 
                    handleClicked={() => handleNavBarClick()}
                />
                <div
                    className='loginScreen_gradient'
                />

                {signIn? 
                (
                    <SignIn />
                ):(

                    <SignUp 
                        handleClicked={() => handleNavBarClick()}
                    />

                )}
            </div>
        </div>
    )
}

export default LoginScreen