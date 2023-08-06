import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import customer01Photo from './assets/images/customer_01.jpg';
import customer02Photo from './assets/images/customer_02.jpg';
import customer03Photo from './assets/images/customer_03.jpg';
import customer04Photo from './assets/images/customer_04.jpg';
import './assets/styles/Testimonials.css';

const reviews = [
    {
        customerName: 'Ann Ben',
        customerPhoto: customer01Photo,
        rating: [1, 1, 1, 1],
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        customerName: 'Matthew Henry',
        customerPhoto: customer02Photo,
        rating: [1, 1, 1],
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        customerName: 'Jeff Haris',
        customerPhoto: customer03Photo,
        rating: [1, 1, 1, 0.5],
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        customerName: 'Kris Tom',
        customerPhoto: customer04Photo,
        rating: [1, 1, 1, 1, 0.5],
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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