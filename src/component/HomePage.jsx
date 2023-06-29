import { useState } from 'react';
import About from './About';
import Alert from './Alert';
import Footer from './Footer';
import HomeContainer from './HomeContainer';
import Latest from './Latest';
import Navbar from './Navbar';
import PopularPlace from './PopularPlace';
import WhyChooseUs from './WhyChooseUs';

const HomePage = () => {
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
    return (
        <>
            <Navbar showAlert = {showAlert} />
            <Alert alert = {alert}/>
            <HomeContainer />
            <PopularPlace />
            <About />
            <Latest />
            <WhyChooseUs/>
            <Footer />
        </>
    )
}
export default HomePage;