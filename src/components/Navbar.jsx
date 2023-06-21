import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to = {`/`}> 
                <h2>Nutri.io</h2>
            </Link>
           
            
            {/* <ul className='navbar-list'>
                <li>Sing-In</li>
                <li>Sing-Up</li>
            </ul> */}
        </nav>
    );
  };
  
export default Navbar;
  