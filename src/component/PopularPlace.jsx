import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset:300,
    duration:1000,
});
const PopularPlace = ()=>{
    return(
        <>
        <div className="popularplace" onLoad={()=>{
            function animationPosts(){
                document.addEventListener('scroll', ()=>{
                  if(window.scrollY>150){
                    document.querySelector('.post1').classList.add('leftpost')
                    document.querySelector('.post2').classList.add('centerpost')
                    document.querySelector('.post3').classList.add('rightpost')
                   document.querySelector('.postheading').classList.add('animate')
                   document.querySelector('.postheading').classList.add('seven')
                  }
                })
              }
              animationPosts();
        }}>
            <div className=" postheading">
                <span>P</span><span>O</span><span>P</span><span>U</span><span>L</span><span>A</span><span>R</span>&nbsp;<span>P</span><span>L</span><span>A</span><span>C</span><span>E</span>
            </div>
            <div className="posts">
                <div className=" post post1" data-aos="slide-right"><img src={require("./Images/greatwall.jpg")} alt="Great Wall Of china"/>
                    <h1>Great Wall Of china </h1>
                    <p>The Great Wall begins in the east at Shanhaiguan in Hebei province and ends at Jiayuguan in Gansu
                        province to the west. Its main body consists of walls, horse tracks, watch towers, and shelters
                        on the wall, and includes fortresses and passes along the Wall.</p>
                </div>
                <div className=" post post2" data-aos="slide-up"><img src={require("./Images/2wonders.jpg")} alt="Wonders"/>
                    <h1>Petra Jordan</h1>
                    <p>Petra is half-built, half-carved into the rock, and is surrounded by mountains riddled with
                        passages and gorges. An ingenious water management system allowed extensive settlement of an
                        essentially arid area during the Nabataean, Roman and Byzantine periods.</p>
                </div>
                <div className=" post post3" data-aos="slide-left"><img src={require("./Images/wonderbridge.jpg")} alt="Golden Gate Bridge "/>
                    <h1>Golden Gate Bridge</h1>
                    <p>The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait
                        connecting San Francisco Bay and the Pacific Ocean. When constructed in 1937, it set the world
                        record for the longest bridge span, the distance between supports (4,200 ft, 1,280 m) and also
                        the tallest towers</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default PopularPlace;