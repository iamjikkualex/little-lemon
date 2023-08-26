import { Link } from 'react-router-dom';
import heroImage from './assets/images/restaurant-food.jpg';
import AppConstants from '../../../common/constants';
import './assets/styles/Hero.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const HOME_TEXTS = AppConstants.HOME_TEXTS;
const LINKS = AppConstants.LINKS;

const Hero = () => {
    return (
        <section className={HTML_TEXTS.className.hero}>
            <div className={HTML_TEXTS.className.containerGrid}>
                <div className={HTML_TEXTS.className.heroInformation}>
                    <h1>{HOME_TEXTS.get('littleLemon').text}</h1>
                    <h2>{HOME_TEXTS.get('chicago').text}</h2>
                    <p>{HOME_TEXTS.get('heroDesc').text}</p>
                    <Link className={HTML_TEXTS.className.buttonPrimary} to={LINKS.get('reservations').path}>
                        {HOME_TEXTS.get('reserveTable').text}
                    </Link>
                </div>
                <img className={HTML_TEXTS.className.heroImage} src={heroImage} alt={HTML_TEXTS.alt.restaurantFood} />
            </div>
        </section>
    );
};

export default Hero;