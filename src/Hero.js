
const Hero = () => {
    return ( 
        <div className="hero">
            <div className="hero-details">
                <h1>Don't worry. <br /> We are here for every solution.</h1>
                <p className="para">Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf moon. Actually beard single-origin coffee, twee 90's PBR Echo Park</p>
                <a href="https://thesocialcomment.com/" target="_blank" className="primary-button B1">Get Started</a>
                <a href="https://www.youtube.com/channel/UCvvzAW9OAAzSO1yWAXj8VkA/featured" target="_blank" className="primary-button B2"> <i class="fas fa-play-circle"></i>Watch video</a>
                <p className="logos">Integrations 
                <i class="fab fa-google"></i>
                <i class="fab fa-amazon"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-reddit-alien"></i></p>
            </div>
            <div className="hero-img">
                <img src="../public/images/img.png"/>
            </div>
        </div>
     );
}
 
export default Hero;