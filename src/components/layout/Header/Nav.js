import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppConstants from '../../../common/constants';
import headerLogo from '../assets/images/header-logo.png';
import '../assets/styles/Header.css';

const navLinks = Array.from(AppConstants.LINKS.values()).filter(link => link.isLinkVisibleOnNav);

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { pathName } = useLocation();

    return (
        <nav className='container grid nav-bar'>
            <Link className='nav-bar-logo' to={AppConstants.LINKS.get('home').path}>
                <img src={headerLogo} alt='Little Lemon Header Logo' />
            </Link>
            <button className='nav-bar-hamburger' type='button' onClick={() => setIsNavExpanded(!isNavExpanded)}>
                {isNavExpanded ? <FontAwesomeIcon icon={faXmark} size='2x' /> : <FontAwesomeIcon icon={faBars} size='2x' />}
            </button>
            <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}>
                {navLinks.map((navLink, index) =>
                    <li key={index}>
                        <Link className={pathName === navLink.path ? 'current-location' : ''} to={navLink.path}>
                            {navLink.name}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;