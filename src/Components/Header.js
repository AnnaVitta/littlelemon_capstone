import logo from '../Images/Logo.svg';
import {Link} from "react-router-dom";

function Header(){
    return <header>
    <Link to="/" className="App-header"><img src={logo} alt="logo" /></Link>
    </header>
}
export default Header;