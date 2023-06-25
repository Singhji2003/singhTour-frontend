import { useState } from "react"

const ForgetPassword = ()=>{
    const [email, setEmail] = useState('')
    const onChange = (e)=>{
        setEmail(e.target.value)
    }
    const sendOtp = ()=>{
     
    }
    return(
        <>
          <section>
        <div className=" forgetpswd  removeforgetpopup  " id="forgetpopup">
            <div className="close-btn forgetclose"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-x-lg " viewBox="0 0 16 16" onClick={()=>{
                        document.querySelector('#forgetpopup').classList.remove('activeforgetpopup')
                        document.querySelector('#forgetpopup').classList.add('removeforgetpopup')
                    }}>
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </div>
            <h1>Reset Password</h1>
            <form>
                <div className="input">
                    <div className="icon">
                            <button id="sendotp" onClick={sendOtp}>Send OTP</button>
                    </div>
                      <input type="email" name="email" id="email" value={email} onChange={onChange} required/>
                      <label htmlFor="email">Email</label>
                </div>
                <div className="input">
                      <input type="number" name="otp" id="otp" required disabled/>
                      <label htmlFor="otp" >Enter OTP</label>
                </div>
                <div className="input">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                          </svg>
                    </div>
                    <input type="password" name="password" id="password" required disabled/>
                    <label htmlFor="password">New Password</label>
                </div>
                <div className="input1">
                <div className="checkbox">
                    <label htmlFor="checkbox"><input type="checkbox"/> Remember me </label>
                </div>
            </div>
            <div className="input1">
                <div className="btnsubmit">
                    <button type="submit">Change Password</button>
                </div>
            </div>
            </form>
        </div>
    </section>
        </>
    )
}
export default ForgetPassword;