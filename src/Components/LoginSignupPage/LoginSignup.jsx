import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/user.svg' 
import mail_icon from '../Assets/mail.svg' 
import lock_icon from '../Assets/lock.svg' 


const LoginSignup = () => {
    return (
        <div className='container' >
            <div className="header">
                <div className="text"> Sign Up </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="user" />
                </div>
                <div className="input">
                    <img src={mail_icon} alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={lock_icon} alt="" />
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password"> Lost Password <span>Click Here !</span></div>
            <div className="submit-container">
                <div className="submit">Signup</div>
                <div className="submit">Login</div>

            </div>
        </div>
    )
}

export default LoginSignup