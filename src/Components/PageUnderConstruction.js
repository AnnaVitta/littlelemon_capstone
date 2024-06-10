import Header from './Header';
import Nav from './Nav';
import owner from '../Images/restaurant chef B.jpg';

function UnderConstruction(){
    return <>
    <Header />
    <Nav />
<section>
    <article className="Construction">
        <h1>Coming Soon</h1>
        <img src={owner} alt="restaurant food" />
        </article>
        </section>
        </>
}
export default UnderConstruction;