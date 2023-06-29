import { useEffect } from 'react';

const HomeContainer = () => {
    useEffect(()=>{
        let slideIndex = 0;
        function showSlides() {
            let i;
            let slides = document.querySelectorAll(".mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000);
        }
        function showRightSlides() {
            let i;
            let slides1 = document.querySelectorAll(".rightmySlides");
            for (i = 0; i < slides1.length; i++) {
                slides1[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides1.length) { slideIndex = 1 }
            slides1[slideIndex - 1].style.display = "block";
            setTimeout(showRightSlides, 3500);
        }
        showSlides();
        showRightSlides();
    },[ ])
    
    return (
        <>
                <div className="homeContainer">
                    <div className="leftimagesSection">
                        <div className="slideshow-container">
                            <div className="mySlides fade " >
                                <img src={require('./Images/adi-kailsah.webp')} width="100%" alt='banner' />
                            </div>
                            <div className="mySlides fade" >
                                <img src={require('./Images/Chadar-Frozen-River-Trek-Ladakh.jpg')} width="100%" alt='banner' />
                            </div>
                            <div className="mySlides fade" >
                                <img src={require('./Images/banner-img01.webp')} width="100%" alt='banner' />
                            </div>
                        </div>
                    </div>
                    <div className="content-home centerContent">
                        <div className="box">
                            <span>T</span>
                            <span>O</span>
                            <span>U</span>
                            <span>R</span>
                            <span>!</span>
                        </div>
                        <h1>Let us plan you a perfect
                            <span className="main-color"> India Holiday</span>
                        </h1>
                        <div className="quotes">
                            <blockquote>TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS</blockquote>
                            <cite>- CHIEF SEATTLE</cite>
                        </div>
                        <div className="explore">
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="rightImagesSection">
                        <div className="rightslideshow-container">
                            <div className="rightmySlides fade">
                                <img src={require('./Images/adi-kailsah.webp')} width="100%" alt='banner' />
                            </div>

                            <div className="rightmySlides fade">
                                <img src={require('./Images/banner-img.webp')} width="100%" alt='banner' />
                            </div>

                            <div className="rightmySlides fade"  onLoad={() => {
                   
                  
               }}>
                                <img src={require('./Images/banner-img01.webp')} width="100%" alt='banner' />
                            </div>

                        </div>
                    </div>
                </div>
        </>
   
    )
}
export default HomeContainer;