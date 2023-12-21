import React from 'react'
import user_icon from '../../components/assets/user.svg'
import mail_icon from '../../components/assets/mail.svg'
import lock_icon from '../../components/assets/lock.svg'
import './LoginSignup.css'


const LoginSignup = () => {
    
    const [action, setAction] = React.useState("Sign Up") 
    
    return (
        <div className='container' >
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="user" placeholder="Name"/>
                </div>}
                
                <div className="input">
                    <img src={mail_icon} alt="" />
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="input">
                    <img src={lock_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password"> Lost Password?<span> Click Here !</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

            </div>
        </div>
    )
}

export default LoginSignup