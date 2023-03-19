import React, { useRef } from 'react'

import '../assests/css/signIn.css'
import { auth } from '../firebase.js';

function SignIn() {

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const registerHandler = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(
                emailRef.current.value,
                passRef.current.value
            )
            .then((authUser)=>{
                console.log(authUser)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const signInHandler = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

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
                    ref={emailRef}
                />
                <input 
                    placeholder='Password'
                    type='password'
                    ref={passRef}
                />
                <button
                    type='submit'
                    onClick={signInHandler}
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
                        onClick={registerHandler}
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