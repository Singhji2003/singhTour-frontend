import React, { useState } from 'react'
import '../index.css'
import AOS from 'aos';
import Navbar from './Navbar'
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Alert from './Alert';
import Spinner from './Spinner';
AOS.init({
    offset:0,
    duration:1000,
});
const ContactUs = () => {
    const URL = 'https://singh-tour.onrender.com'
    const [alert, setAlert] = useState(null)
    const [spinner, setSpinner] = useState(false)
    const showAlert = (msg, type)=>{
        setAlert ( {
            msg: msg,
            type:type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const [details, setDetails] = useState({
        name :'',
        email:'',
        number:'',
        subject: '',
        msg:''
    })
    const onChange = (e)=>{
        setDetails({...details, [e.target.name]: e.target.value })
    }
    const contact = async(e)=>{
        setSpinner(true);
        e.preventDefault();
        const response = await fetch(`${URL}/contact`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: details.name ,email: details.email, number: details.number,subject: details.subject,msg: details.msg, }),
        });
        const json = await response.json();
        console.log(json)
        setSpinner(false);
        if(json.success){
            showAlert("Your Messgaes sended successfully  We will Contact Soon", "success")
            setDetails({
                name :'',
                email:'',
                number:'',
                subject: '',
                msg:''
            })
        }
        else{
            showAlert("This Email Already Sent a Message", "error")
            setDetails({
                name :'',
                email:'',
                number:'',
                subject: '',
                msg:''
            })
        }
    }
  return (
    <>
    <Navbar/>
    <Alert alert = {alert}/>
    <section className='contactUs'>
      <div class="contactForm" data-aos="flip-left">
        <form action="" method="post" onSubmit={contact} >
            <h1>Contact Us</h1>
            <div class="contactinput">
                <label for="name">Name</label>
                <input type="text" name="name" minLength={2} value={details.name} id="name" onChange={onChange}/>
            </div>
            <div class="contactinput">
                <label for="email">Email</label>
                <input type="email" name="email" value={details.email} id="email" onChange={onChange}/>
            </div>
            <div class="contactinput">
                <label for="Number">Number</label>
                <input type="number" name="number" minLength={10} maxLength={10} value={details.number} id="number" onChange={onChange}/>
            </div>
            <div class="contactinput">
                <label for="subject">Subject</label>
                <input type="text" name="subject" value={details.subject} id="subject" onChange={onChange}/>
            </div>
            <div class="contactinput">
                <label for="msg">Message</label>
                <textarea name="msg" id="msg" cols="30" rows="4" minLength={5} onChange={onChange} value={details.msg}></textarea>
            </div>
            <button type="submit">Submit Now</button>
        </form>
        { spinner && <Spinner/>}
    </div>
    </section>
    </>
  )
}

export default ContactUs
