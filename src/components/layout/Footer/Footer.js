import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AppConstants from '../../../common/constants';
import FooterLogo from '../assets/images/footer-logo.png';
import '../assets/styles/Footer.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const FOOTER_TEXTS = AppConstants.FOOTER_TEXTS;
const LINKS = AppConstants.LINKS;

const navLinks = Array.from(LINKS.values()).filter(link => link.isLinkVisibleOnNav);

const contacts = [
    { icon: faLocationDot, info: FOOTER_TEXTS.get('contacts').location, },
    { icon: faPhone, info: FOOTER_TEXTS.get('contacts').phone, },
    { icon: faEnvelope, info: FOOTER_TEXTS.get('contacts').email, },
];

const socials = [
    { icon: faFacebook, name: FOOTER_TEXTS.get('socials').facebook, },
    { icon: faTwitter, name: FOOTER_TEXTS.get('socials').twitter, },
    { icon: faInstagram, name: FOOTER_TEXTS.get('socials').instagram, },
    { icon: faYoutube, name: FOOTER_TEXTS.get('socials').youtube, },
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