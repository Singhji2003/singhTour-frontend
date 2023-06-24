import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset: 50,
    duration:1500,
});
const Footer = ()=>{
    return(
        <>
         <section id="why-choose-us" >
        <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="icon-box"  data-aos="flip-left">
                        <i className="fa fa-map-marker"></i>
                        <h3>Expert Local Knowledge</h3>
                        <p>Our team of travel experts has first-hand knowledge of the destinations we offer, ensuring
                            you get the best advice and guidance for your trip.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="icon-box" data-aos="flip-right">
                        <i className="fa fa-users" ></i>
                        <h3>Personalized Service</h3>
                        <p>We understand that every traveler is unique, which is why we offer personalized service to
                            help you create your ideal itinerary.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="icon-box" data-aos="flip-right">
                        <i className="fa fa-lock"></i>
                        <h3>Secure Booking</h3>
                        <p>You can trust us with your personal information and payments. Our website uses the latest
                            security measures to protect your data.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>| Copyright &copy; All Right Reserved @Singh ji | </p>
    </footer>
        </>
    )
}
export default Footer;