import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import greekSaladImage from './assets/images/greek-salad.jpg';
import bruschettaImage from './assets/images/bruschetta.jpg';
import lemonDessertImage from './assets/images/lemon-dessert.jpg';
import AppConstants from '../../../common/constants';
import './assets/styles/Highlights.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const HOME_TEXTS = AppConstants.HOME_TEXTS;
const LINKS = AppConstants.LINKS;

const specials = [
    {
        name: HOME_TEXTS.get('greekSalad').name,
        image: greekSaladImage,
        price: HOME_TEXTS.get('greekSalad').price,
        description: HOME_TEXTS.get('greekSalad').desc,
    },
    {
        name: HOME_TEXTS.get('bruschetta').name,
        image: bruschettaImage,
        price: HOME_TEXTS.get('bruschetta').price,
        description: HOME_TEXTS.get('bruschetta').desc,
    },
    {
        name: HOME_TEXTS.get('lemonDessert').name,
        image: lemonDessertImage,
        price: HOME_TEXTS.get('lemonDessert').price,
        description: HOME_TEXTS.get('lemonDessert').desc,
    },
];

const Highlights = () => {
    return (
        <section className={HTML_TEXTS.className.highlightsSection}>
            <div className={HTML_TEXTS.className.highlightsHeader}>
                <h2>{HOME_TEXTS.get('specials').text}</h2>
                <Link className={HTML_TEXTS.className.buttonPrimary} to={LINKS.get('orderOnline').path}>
                    {HOME_TEXTS.get('onlineMenu').text}
                </Link>
            </div>
            {specials.map((special, index) =>
                <article key={index} className={HTML_TEXTS.className.specialCard}>
                    <div className={HTML_TEXTS.className.specialCardImage}>
                        <img src={special.image} alt={special.name} />
                    </div>
                    <div className={HTML_TEXTS.className.specialCardHeader}>
                        <h3>{special.name}</h3>
                        <span>{special.price}</span>
                    </div>
                    <div className={HTML_TEXTS.className.specialCardBody}>
                        <p>{special.description}</p>
                        <Link to={LINKS.get('orderOnline').path}>
                            {HOME_TEXTS.get('orderDelivery').text} <FontAwesomeIcon icon={faMotorcycle} />
                        </Link>
                    </div>
                </article>
            )}
        </section>
    );
};

export default Highlights;