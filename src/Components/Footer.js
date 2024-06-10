import logo2 from '../Images/logo2.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer(){

    return <footer className="App-footer" id='footer'>
        <img src={logo2} alt="logo2"  />
           <ul>
            <li>Menu</li>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Reservation">Reservation</a></li>
            <li><a href="#OrderOnline">Order Online</a></li>
            <li><a href="#Login">Login</a></li>
        </ul>
        <ul>
            <li>Contacts</li>
            <li><a href="#Address">Address</a></li>
            <li><a href="#Phone">Phone Number</a></li>
            <li><a href="#Email">Email</a></li>
        </ul>
        <ul>
            <li>Social Media Links</li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} />    Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} />    Instagram</a></li>
            <li></li>
            <li></li>
        </ul>

    </footer>
}
export default Footer;