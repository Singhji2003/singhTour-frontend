import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Alert from './Alert';
import { useState } from "react";
const EachPlace = (props)=>{
    const {data} = props
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
    return(
        <>
        <ScrollToTop/>
        <Navbar showAlert = {showAlert}/>
        <Alert alert = {alert}/>

        <section>
        <div class="eachPlace">
            <div class="mainPara">
            <img src={data.imgURL} alt=""/>
            <div class="content">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </div>
        <div class="hisotrypara">
            <h1>History</h1>
            <p>{data.history}</p>
        </div>
        <div class="detailspara">
            <h1>Details</h1>
            <div class="maindetails">
                <table>
                    <tbody>
                        <tr>
                            <td>Built By</td>
                            <td>{data.owner}</td>
                        </tr>
                        <tr>
                            <td>Built In</td>
                            <td>{data.timePeriod}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{data.location}</td>
                        </tr>
                        <tr>
                            <td>Ticket Price</td>
                            <td>{data.ticketPrice}</td>
                        </tr>
                        <tr>
                            <td>Timming</td>
                            <td>{data.timing}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="hisotrypara">
            <h1>OverView</h1>
            <p>{data.overview}</p>
        </div>
        
        </div>
    </section>
    <Footer/>
        </>
    )
}
export default EachPlace;