import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import user from '../assets/images/user.svg'
import login from '../assets/images/login.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to = {`/`} className='logo'> 
                NUTRI.IO
            </Link>
           
            

             <ul className='navbar-list'>
                <Link className='navButton'><img src={user} alt="" className='navBarIcon' /> Sign-In </Link>
                <Link className='navButton'><img src={login} alt="" className='navBarIcon' />Login</Link>
            </ul> 
        </nav>
    );
  };
  
export default Navbar;
  