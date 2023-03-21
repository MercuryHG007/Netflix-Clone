import React from 'react'
import '../assests/css/profileScreen.css'
import avatar from '../assests/img/avatar.png'

import Navbar from '../components/Navbar'

import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Plans from '../components/Plans'

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div
            className='profileScreen'
        >
            <Navbar
                isLoggedIn
            />
            <div
                className='profileScreen_body'
            >
                <h1>
                    Edit Profile
                </h1>
                <div
                    className='profileScreen_info'
                >
                    <img
                        src={avatar}
                        alt='avatar'
                    />
                    <div
                        className='profileScreen_details'
                    >
                        <h2>
                            {user.email}
                        </h2>
                        <div
                            className='profileScreen_plans'
                        >
                            <h3>
                                Plans
                            </h3>
                            <Plans />
                            <button
                                className='profileScreen_signout'
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen