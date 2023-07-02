import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset:300,
    duration:1500,
});
const Latest = ()=>{
    return(
        <>
        <div className="latestposts" onLoad={()=>{
            function animationLatest(){
                document.addEventListener('scroll', ()=>{
                  if(window.scrollY>1150){
                    document.querySelector('.latestheading').classList.add('animate')
                   document.querySelector('.latestheading').classList.add('seven')
                  }
                })
              }
              animationLatest();
        }}>
            <div className=" latestheading">
                <span>L</span><span>A</span><span>T</span><span>E</span><span>S</span><span>T</span>&nbsp;<span>P</span><span>O</span><span>S</span><span>T</span><span>S</span>
            </div>
            <div className="lposts">
                <div className="lpost" data-aos="flip-left">
                    <img src={require("./Images/hydrebad.webp")} alt="banner"/>
                    <div className="details">
                        <p>It is Telangana's largest and most-populous city and is the major urban centre for all of
                            south-central interior India. From 1956 to 2014 Hyderabad was the capital of Andhra Pradesh
                            state, but, with the creation of Telangana from Andhra Pradesh in 2014, it was redesignated
                            as the capital of both states.</p>
                        <div className="explore buttondetails">
                            <Link to='/place'> <button>Explore More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="lpost columnreverse" data-aos="flip-right">
                    <div className="details">
                        <p>Red Fort, also called Lal Qalʿah, also spelled Lal Kila or Lal Qila, Mughal fort in Old
                            Delhi, India. It was built by Shah Jahān in the mid-17th century and remains a major tourist
                            attraction. The fort was designated a UNESCO World Heritage site in 2007.</p>
                        <div className="explore buttondetails">
                            <Link to='/place'> <button>Explore More</button></Link>
                        </div>
                    </div>
                    <img src={require("./Images/lal kila.webp")} alt="banner"/>
                </div>
                <div className="lpost" data-aos="flip-left">
                    <img src={require("./Images/banglore.webp")} alt="banner"/>
                    <div className="details">
                        <p>Bangalore, officially known as Bengaluru, is the Capital of the Indian State of Karnataka .
                            It has a population of over ten million, making it a megacity and the Third populous City
                            and 5th most populous urban agglomeration in India. It is located in Southern India on the
                            Deccan Pleteau.</p>
                        <div className="explore buttondetails">
                            <Link to='/place'> <button>Explore More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="lpost columnreverse" data-aos="flip-right">
                    <div className="details">
                        <p>Chennai was previously called Madras. Madras was the shortened name of the fishing village
                            Madraspatnam, where the British East India Company built a fort and factory (trading post)
                            in 1639–40. Tamil Nadu officially changed the name of the city to Chennai in 1996</p>
                        <div className="explore buttondetails">
                            <Link to='/place'> <button>Explore More</button></Link>
                        </div>
                    </div>
                    <img src={require("./Images/cahnnai.webp")} alt="banner"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Latest;