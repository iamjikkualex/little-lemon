import { Link } from 'react-router-dom';
import AppConstants from '../../../common/constants';
import heroImage from './assets/images/restaurant-food.jpg';
import './assets/styles/Hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container grid'>
                <div className='hero-information'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link className='button-primary' to={AppConstants.LINKS.get('reservations').path}>
                        Reserve a Table
                    </Link>
                </div>
                <img className='hero-image' src={heroImage} alt='Restaurant Food' />
            </div>
        </section>
    );
};

export default Hero;