import FeaturedCard from "./FeaturedCards";
import {Link} from "react-router-dom";


function Featured() {
    return <section id='orderOnline'>
    <section className="Featured-title">
    <article className="featured-text"><h2>This weeks specials!</h2></article>
    <Link to="onlineMenu" ><button type="submit" className="featured-button" >Online Menu</button></Link>
    </section>
    <section className="Featured-cards">
     <FeaturedCard />
     </section>
    </section>

}
export default Featured;