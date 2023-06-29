import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import { Link } from "react-router-dom";
import Alert from './Alert';
import Spinner from "./Spinner";
const Places = (props)=>{
    const [alert, setAlert] = useState(null)
    const showAlert = (msg, type)=>{
        setAlert ( {
            msg: msg,
            type:type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const [places, setPlaces] = useState([]);
    const [spinner, SetSpinner] = useState(false);
useEffect(()=>{
    SetSpinner(true)
    const url = 'https://singh-api.onrender.com/place';
    const options = {
        method: 'GET',
    };
    const callAPI= async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setPlaces(result);
        } catch (error) {
            console.error(error);
        }
    }
    const waiting = async()=>{
        const a = await callAPI();
    }
   waiting();
},[])
    return(
        <>
        <Navbar  showAlert = {showAlert}/>
        <Alert alert = {alert}/>
        <section>
        <div className="destinations">
      <div  className="destinationheading">  <h1 >Best Destinations For You</h1></div>
        {spinner&& <Spinner/>}
        <div className="destination" onLoad={()=>{SetSpinner(false )}}>
            {
                places.map((e)=>{
                    return(
                        <>
                        <div className="destination-item" key={e.id}>
                <img src={e.thumnbrail} alt=""/>
                <h1>{e.title}</h1>
                <p>{e.description}</p>
                <button onClick={()=>{
                   props.data(e)
                }} ><Link to = {e.title}>More Details</Link></button>
            </div>
                        </>
                    )
                })
            
            }
        </div>
        </div>
    </section>
       <Footer/>
        </>
    )
}
export default Places;