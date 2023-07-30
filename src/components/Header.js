import Nav from './Nav'
import HeaderLogo from '../assets/images/header-logo.png'

function Header() {
    return (
        <header>
            <img className='header-logo' src={HeaderLogo} alt='Little Lemon Logo' />
            <Nav/>
        </header>
    );
}

export default Header;