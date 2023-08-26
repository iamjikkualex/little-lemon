import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppConstants from '../../../common/constants';
import headerLogo from '../assets/images/header-logo.png';
import '../assets/styles/Header.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const LINKS = AppConstants.LINKS;
const SIZE = AppConstants.SIZE;

const navLinks = Array.from(LINKS.values()).filter(link => link.isLinkVisibleOnNav);

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { pathName } = useLocation();

    return (
        <nav className={HTML_TEXTS.className.navNav}>
            <Link className={HTML_TEXTS.className.navBarLogo} to={LINKS.get('home').path}>
                <img src={headerLogo} alt={HTML_TEXTS.alt.headerLogo} />
            </Link>
            <button className={HTML_TEXTS.className.navBarHamburger} type={HTML_TEXTS.type.button} onClick={() => setIsNavExpanded(!isNavExpanded)}>
                {isNavExpanded ? <FontAwesomeIcon icon={faXmark} size={SIZE.twoX} /> : <FontAwesomeIcon icon={faBars} size={SIZE.twoX} />}
            </button>
            <ul className={isNavExpanded ? HTML_TEXTS.className.navBarLinksExpanded : HTML_TEXTS.className.navBarLinks}>
                {navLinks.map((navLink, index) =>
                    <li key={index}>
                        <Link className={pathName === navLink.path ? HTML_TEXTS.className.currentLocation : ''} to={navLink.path}>
                            {navLink.name}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;