import { useEffect } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate, Link } from 'react-router-dom'
import ForgetPassword from "./ForgetPassword";
const Navbar = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        document.querySelector('.close-btn').addEventListener('click', () => {
            document.querySelector('#popup').classList.add('removeregisterPopup')
            document.querySelector('#popup').classList.remove('activeregisterPopup')
        })
        document.querySelector('.loginclose').addEventListener('click', () => {
            document.querySelector('#loginpopup').classList.add('removeloginPopup')
            document.querySelector('#loginpopup').classList.remove('activeloginPopup')
        })
        document.querySelector('.forgetclose').addEventListener('click', () => {
            document.querySelector('#forgetpswd').classList.add('removeforgetPopup')
            document.querySelector('#forgetpswd').classList.remove('activeforgetPopup')
        })

        document.getElementById('onregisterloginpop').addEventListener('click', () => {
            document.querySelector('#loginpopup').classList.add('removeloginPopup')
            document.querySelector('#loginpopup').classList.remove('activeloginPopup')
            document.querySelector('#popup').classList.remove('removeregisterPopup')
            document.querySelector('#popup').classList.add('activeregisterPopup')
        })
        document.getElementById('onloginregisterpop').addEventListener('click', () => {
            document.querySelector('#popup').classList.add('removeregisterPopup')
            document.querySelector('#popup').classList.remove('activeregisterPopup')
            document.querySelector('#loginpopup').classList.remove('removeloginPopup')
            document.querySelector('#loginpopup').classList.add('activeloginPopup')
        })
        document.getElementById('show').addEventListener('click', () => {
            document.getElementById('navrespo').style.top = '0rem'
            document.getElementById('rightrespo').style.top = '0.8rem'
            document.querySelector('nav').style.height = '21rem'
            document.getElementById('logorespo').style.left = '0vw'
            document.getElementById('show').style.display = 'none'
            document.getElementById('hide').style.display = 'block'
        })
        document.getElementById('hide').addEventListener('click', () => {
            document.getElementById('hide').style.display = 'none'
            document.getElementById('show').style.display = 'block'
            document.getElementById('navrespo').style.top = '-30rem'
            document.getElementById('rightrespo').style.top = '-30rem'
            document.querySelector('nav').style.height = '6rem'
            document.getElementById('logorespo').style.left = '-43vw'
        })
    })
    return (
        <>
            <nav>
                <div className="logo left rotate" id="logorespo">
                    <img src={require('./Images/logo.png')} width="100px" alt="" srcSet="" />
                </div>
                <div className="center navItem" id="navrespo">
                    <ul>
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/place"> Destination</Link></li>
                        <li><a href="/"> Packages</a></li>
                        <li><a href="/"> Place to Stay</a></li>
                    </ul>
                </div>
                <div className="right loginItem" id="rightrespo">
                {!localStorage.getItem('token') ?
                        <>  <button className="btn" id="login" onClick={() => {
                            document.querySelector('#popup').classList.remove('activeregisterPopup')
                            document.querySelector('#popup').classList.add('removeregisterPopup')
                            document.querySelector('#loginpopup').classList.remove('removeloginPopup')
                            document.querySelector('#loginpopup').classList.add('activeloginPopup')
                            document.querySelector('#forgetpswd').classList.add('removeforgetPopup')
                            document.querySelector('#forgetpswd').classList.remove('activeforgetPopup')
                            document.getElementById('hide').style.display = 'none'
                            document.getElementById('show').style.display = 'block'
                            document.getElementById('navrespo').style.top = '-30rem'
                            document.getElementById('rightrespo').style.top = '-30rem'
                            document.querySelector('nav').style.height = '6rem'
                            document.getElementById('logorespo').style.left = '-43vw'
                        }}>Login</button>
                            <button className="btn" id="signup" onClick={() => {
                                document.querySelector('#loginpopup').classList.remove('activeloginPopup')
                                document.querySelector('#loginpopup').classList.add('removeloginPopup')
                                document.querySelector('#popup').classList.remove('removeregisterPopup')
                                document.querySelector('#popup').classList.add('activeregisterPopup')
                                document.querySelector('#forgetpswd').classList.add('removeforgetPopup')
                                document.querySelector('#forgetpswd').classList.remove('activeforgetPopup')
                                document.getElementById('hide').style.display = 'none'
                                document.getElementById('show').style.display = 'block'
                                document.getElementById('navrespo').style.top = '-30rem'
                                document.getElementById('rightrespo').style.top = '-30rem'
                                document.querySelector('nav').style.height = '6rem'
                                document.getElementById('logorespo').style.left = '-43vw'
                            }}>Sign Up</button></> :
                        <button className="btn" id="logout" onClick={() => {
                            localStorage.removeItem('token')
                            navigate('/')
                            props.showAlert("Succesfully Logged Out", 'success')
                        }}>Log Out</button>

                    }
                </div>
                <div className="hamberger" onLoad={() => {
                    setInterval(() => {
                        document.querySelector('.logo').classList.add('rotate')
                    }, 1000)
                    setInterval(() => {
                        document.querySelector('.logo').classList.remove('rotate')
                    }, 2000)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="show" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" id="hide" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>
            </nav>
            <hr />
            <SignUp showAlert={props.showAlert} />
            <Login showAlert={props.showAlert} />
            <ForgetPassword showAlert={props.showAlert} />
        </>
    )
}
export default Navbar;