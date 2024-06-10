import owner1 from '../Images/restaurant chef B.jpg';
import owner2 from '../Images/Mario and Adrian A.jpg';

function OwnerSection(){
    return <section className="Owners" id="about">
        <article className="Owners-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p> The Little Lemon Restaurant offers an enchanting escape to the vibrant flavors of Italy. 
            Established with a passion for authentic Italian cuisine, Little Lemon has quickly become a beloved 
            destination for both locals and tourists seeking an exceptional dining experience. Our chefs, trained 
            in the art of Italian gastronomy, create culinary masterpieces that leave a lasting impression.</p>
            <p>At Little Lemon, we believe in using only the freshest, locally sourced ingredients. Our commitment to quality 
                extends to every aspect of our restaurant, from the food we serve to the atmosphere we create. We strive to provide 
                an unforgettable dining experience that captures the heart and soul of Italian cuisine.</p>
        </article>
        <img id="owner1" src={owner1} alt="Adrian" />
        <img id="owner2" src={owner2} alt="Mario" />
        </section>
}
export default OwnerSection;