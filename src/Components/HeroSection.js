import banner from '../Images/restauranfood.jpg';
import {Link} from "react-router-dom";


function HeroSection(){
    return <section className="Hero">
        <article className="Hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused 
            on traditional recipes served with a modern twist.</p>
           <Link to="reservation"> <button type="submit" className="hero-button">Reserve a Table</button></Link>
            </article>
            <img src={banner} alt="banner" />
            
    </section>
}
export default HeroSection;