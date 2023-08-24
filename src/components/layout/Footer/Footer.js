import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AppConstants from '../../../common/constants';
import FooterLogo from '../assets/images/footer-logo.png';
import '../assets/styles/Footer.css';

const navLinks = Array.from(AppConstants.LINKS.values()).filter(link => link.isLinkVisibleOnNav);

const contacts = [
    { icon: faLocationDot, info: 'XYZ Street, Chicago, IL', },
    { icon: faPhone, info: '(321) 456-7890', },
    { icon: faEnvelope, info: 'contact@littlelemon.com', },
];

const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container grid">
                <img className="footer-logo" src={FooterLogo} alt='Little Lemon Footer Logo' />
                <nav className='footer-nav'>
                    <h4>Browse Little Lemon</h4>
                    <ul>
                        {navLinks.map((navLink, index) =>
                            <li key={index}>
                                <Link to={navLink.path}>{navLink.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className='footer-contact'>
                    <h4>Contact Us</h4>
                    <address>
                        {contacts.map((contact, index) =>
                            <p key={index}>
                                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                            </p>
                        )}
                    </address>
                </div>
                <div className='footer-social'>
                    <h4>Social Media</h4>
                    {socials.map((social, index) =>
                        <a key={index} href={`https://www.${social.name}.com`} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={social.icon} size='lg' />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;