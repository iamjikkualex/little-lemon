import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import greekSaladImage from './assets/images/greek-salad.jpg';
import bruschettaImage from './assets/images/bruschetta.jpg';
import lemonDessertImage from './assets/images/lemon-dessert.jpg';
import AppUtils from '../../../utils/AppUtils';
import './assets/styles/Highlights.css';

const specials = [
    {
        name: 'Greek Salad',
        image: greekSaladImage,
        price: '$12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
        name: 'Bruschetta',
        image: bruschettaImage,
        price: '$7.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
        name: 'Lemon Dessert',
        image: lemonDessertImage,
        price: '$5.99',
        description: 'A simple, zingy, creamy no-bake tasty lemon dessert with impressive pud, light enough to have a slice to finish a big meal.'
    },
];

const Highlights = () => {
    return (
        <section className="container grid highlights">
            <div className="highlights-header">
                <h2>Specials</h2>
                <Link className='button-primary' to={AppUtils.links.get('orderOnline').path}>
                    Online Menu
                </Link>
            </div>
            {specials.map((special, index) =>
                <article key={index} className='special-card'>
                    <div className='special-card-image'>
                        <img src={special.image} alt={special.name} />
                    </div>
                    <div className='special-card-header'>
                        <h3>{special.name}</h3>
                        <span>{special.price}</span>
                    </div>
                    <div className='special-card-body'>
                        <p>{special.description}</p>
                        <Link to={AppUtils.links.get('orderOnline').path}>
                            Order a Delivery <FontAwesomeIcon icon={faMotorcycle} />
                        </Link>
                    </div>
                </article>
            )}
        </section>
    );
};

export default Highlights;