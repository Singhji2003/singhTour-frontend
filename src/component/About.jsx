import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset:200,
    duration:800,
});
const About = ()=>{
    return(
        <>
        <div id='about' className="aboutme" onLoad={()=>{
            function animationAbout(){
                document.addEventListener('scroll', ()=>{
                  if(window.scrollY>750){
                    document.querySelector('.aboutheading').classList.add('animate')
                   document.querySelector('.aboutheading').classList.add('seven')
                  }
                })
              }
              animationAbout();
        }}>
            <div className=" aboutheading">
                <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span>&nbsp;<span>M</span><span>E</span>
            </div>
            <div className="aboutContent">
                <div className="leftContent">
                    <p>Hii... I am Arpan Singh. And The vision of this site is to explore the new things with diffrent
                        point of view. So Here you will find all the details of places and after the registrations you
                        will get also best places details on email and can check on the site also. So feel free we will
                        give the all updates in details. Thak you!!!!</p>
                    <p>Enjoy Your Jouney</p>
                </div>
                <div className="fade-in">
                    <img src={require("./Images/arpanimg.jpeg")} alt=""  data-aos="zoom-in-up"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;