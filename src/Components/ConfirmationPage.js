import Header from './Header';
import Nav from './Nav';
import restaurant from '../Images/restaurant2.JPG'

function ConfirmationPage(){
    return <>
    <Header />
    <Nav />
<section>
    <article className="Confirmation">
        <h2>Your reservation has been successfully confirmed!</h2>
        <img className="restaurant" src={restaurant} alt="restaurant room" />
        </article>
        </section>
        </>
}
export default ConfirmationPage;