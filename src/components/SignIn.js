import React from 'react'

import '../assests/css/signIn.css'

function SignIn() {
  return (
    <div
        className='signIn'
    >
        <div
            className='signIn_card'
        >
            <form
                className='signIn_form'
            >
                <h1
                >
                    Sign In
                </h1>
                <input 
                    placeholder='Email'
                    type='email'
                />
                <input 
                    placeholder='Password'
                    type='password'
                />
                <button
                    type='submit'
                >
                    Sign In
                </button>
                <h4>
                    <span
                        style={{
                            color: "grey",
                            marginRight: "5px"
                        }}
                    >
                        New to Netflix? 
                    </span>
                    <span
                        className='signup_link'
                    >
                        Sign Up now
                    </span>
                </h4>
            </form>
        </div>
    </div>
  )
}

export default SignIn