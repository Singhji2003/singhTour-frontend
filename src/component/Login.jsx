import { useState } from 'react';
import Spinner from './Spinner';
const Login = (props) => {
    const [Auth, setAuth] = useState({
        email: '',
        password: ''
    })
    const [spinner, setSpinner] = useState(false);
    const [inputtype, setInputType] = useState('password');
    const URL = 'https://singh-tour.onrender.com'
    const login = async (e) => {
        e.preventDefault();
        setSpinner(true)
        const response = await fetch(`${URL}/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: Auth.email, password: Auth.password }),
        });
        const json = await response.json();
        if (json.success) {
            setSpinner(false)
            localStorage.setItem('token', json.token)
            document.querySelector('#loginpopup').classList.add('removeloginPopup')
            document.querySelector('#loginpopup').classList.remove('activeloginPopup')
            props.showAlert("Succesfull signed in", 'success')
        }
        else {
            setSpinner(false)
            props.showAlert("Login With correct Details", 'error')
        }
    }
    const onChange = (e) => {
        setAuth({ ...Auth, [e.target.name]: e.target.value })
    }
    return (
        <section>
            <div className=" login  removeloginPopup " id="loginpopup">
                <div className="close-btn loginclose"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-x-lg " viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                </div>
                <h1>Login</h1>
                <form onSubmit={login}>
                    <div className="input">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                        </div>
                        <input type="email" name="email" id="email" onChange={onChange} required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                        </div>
                        <input type={inputtype} name="password" onChange={onChange} value={Auth.password} id="password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input1">
                        <div className="checkbox" >
                            <label htmlFor="checkbox" id='showpswd'><input type="checkbox"  onClick={()=>{
                                if(inputtype === 'password'){
                                    setInputType('text')
                                }
                                else{
                                    setInputType('password')
                                }
                            }}/> Show Password </label>
                        </div>
                            <a id='forgetpswdlink' onClick={()=>{
                                document.querySelector('#loginpopup').classList.remove('activeloginPopup')
                                document.querySelector('#loginpopup').classList.add('removeloginPopup')
                                document.querySelector('#popup').classList.remove('activeregisterPopup')
                                document.querySelector('#popup').classList.add('removeregisterPopup')
                                document.querySelector('#forgetpswd').classList.remove('removeforgetPopup')
                                document.querySelector('#forgetpswd').classList.add('activeforgetPopup')
                                document.getElementById('hide').style.display = 'none'
                                document.getElementById('show').style.display = 'block'
                                document.getElementById('navrespo').style.top = '-30rem'
                                document.getElementById('rightrespo').style.top = '-30rem'
                                document.querySelector('nav').style.height = '6rem'
                                document.getElementById('logorespo').style.left = '-43vw'
                            }}>Forget Password?</a>
                    </div>
                    <div className="input1">
                        <div className="btnsubmit">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                    <div className="input1">
                        <div className="registeralready">
                            <p>Not have any account ?<a id="onregisterloginpop" >Register</a></p>
                        </div>
                    </div>
                       {spinner&& <Spinner/>}
                </form>
            </div>
        </section>
        
    )
}
export default Login;