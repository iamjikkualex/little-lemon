import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import customer01Photo from './assets/images/customer_01.jpg';
import customer02Photo from './assets/images/customer_02.jpg';
import customer03Photo from './assets/images/customer_03.jpg';
import customer04Photo from './assets/images/customer_04.jpg';
import AppConstants from '../../../common/constants';
import './assets/styles/Testimonials.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const HOME_TEXTS = AppConstants.HOME_TEXTS;
const LINKS = AppConstants.LINKS;

const reviews = [
    {
        customerName: HOME_TEXTS.get('customerOne').name,
        customerPhoto: customer01Photo,
        rating: HOME_TEXTS.get('customerOne').rating,
        review: HOME_TEXTS.get('customerOne').review,
    },
    {
        customerName: HOME_TEXTS.get('customerTwo').name,
        customerPhoto: customer02Photo,
        rating: HOME_TEXTS.get('customerTwo').rating,
        review: HOME_TEXTS.get('customerTwo').review,
    },
    {
        customerName: HOME_TEXTS.get('customerThree').name,
        customerPhoto: customer03Photo,
        rating: HOME_TEXTS.get('customerThree').rating,
        review: HOME_TEXTS.get('customerThree').review,
    },
    {
        customerName: HOME_TEXTS.get('customerFour').name,
        customerPhoto: customer04Photo,
        rating: HOME_TEXTS.get('customerFour').rating,
        review: HOME_TEXTS.get('customerFour').review,
    },
];

const ratingLevels = {'0.5': faStarHalfStroke, '1': faStar, };

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container grid">
                <h2>Testimonials</h2>
                {reviews.map((review, index01) =>
                    <article key={index01} className='testimonial-card'>
                        <img src={review.customerPhoto} alt={review.customerName} />
                        <h4>{review.customerName}</h4>
                        <span>
                            {review.rating.map((rate, index02) =>
                                <FontAwesomeIcon key={index02} icon={ratingLevels[rate]} size='xs' />
                            )}
                        </span>
                        <blockquote><p>"{review.review}"</p></blockquote>
                    </article>
                )}
            </div>
        </section>
    );
};

export default Testimonials;