import FooterLogo from '../assets/images/footer-logo.png'

function Footer() {
    return (
        <footer>
            <img src={FooterLogo} alt='Little Lemon Footer Logo'></img>
            <nav>
                <ul>
                    <li><h3>Navigation</h3></li>
                    <li><br></br></li>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Menu'>Menu</a></li>
                    <li><a href='#Reservations'>Reservations</a></li>
                    <li><a href='#Order Online'>Order Online</a></li>
                    <li><a href='#Login'>Login</a></li>
                </ul>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li><br></br></li>
                    <li><a href='#Address'>Address</a></li>
                    <li><a href='#Phone Number'>Phone Number</a></li>
                    <li><a href='#Email'>Email</a></li>
                </ul>
                <ul>
                    <li><h3>Social Media</h3></li>
                    <li><br></br></li>
                    <li><a href='#Twitter'>Twitter</a></li>
                    <li><a href='#Instagram'>Instagram</a></li>
                    <li><a href='#Facebook'>Facebook</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;