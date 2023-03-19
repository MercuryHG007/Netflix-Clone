import React from 'react'

function SignUp({ handleClicked }) {
    return (
        <div
            className='loginScreen_body'
        >
            <h1>
                Unlimited films, TV programmes and more.
            </h1>
            <h2>
                Watch anywhere. Cancel at anytime.
            </h2>
            <h3>
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div
                className='loginScreen_form_container'
            >
                <form>
                    <input
                        type="email"
                        placeholder='Email Address'
                    />
                    <button
                        className='loginScreen_form_button'
                        onClick={() => handleClicked()}
                    >
                        Get Started
                    </button>
                </form>
            </div>

        </div>
    )
}

export default SignUp