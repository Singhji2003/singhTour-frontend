import { useState } from "react";
import Spinner from './Spinner';

const ForgetPassword = (props)=>{
    const URL = 'https://singh-tour.onrender.com'
    const [email, setEmail] = useState('');
    const [spinner, setSpinner] = useState(false);
    const onChange = (e)=>{
        setEmail(e.target.value)
    }
    const forgetpswd = async (e) => {
        e.preventDefault();
        setSpinner(true)
        const response = await fetch(`${URL}/forget-password`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        });
        const json = await response.json();
        if (json.success) {
            setSpinner(false)
            props.showAlert("Link has been sent to your Email id Succesfully.", 'success')

        }
        else {
            setSpinner(false)
            props.showAlert("Email does not Exists.", 'error')
        }
    }
    return(
        <>
         <section>
        <div className=" login removeforgetPopup" id="forgetpswd">
        <div className="close-btn forgetclose"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-x-lg " viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                </div>
            <h1>Reset Password</h1>
            <form onSubmit={forgetpswd}>
                <div className="input">
                    <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                    </div>
                    <input type="email" name="email"  id="email" onChange={onChange} required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input1">
                    <div className="btnsubmit">
                        <button type="submit">Send Link</button>
                    </div>
                </div>
                {spinner&& <Spinner/>}
            </form>
        </div>
    </section>
        </>
    )
}
export default ForgetPassword;