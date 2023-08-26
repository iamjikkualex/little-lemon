import aboutChefsImage01 from './assets/images/chefs-mario-and-adrian_01.jpg';
import aboutChefsImage02 from './assets/images/chefs-mario-and-adrian_02.jpg';
import AppConstants from '../../../common/constants';
import './assets/styles/About.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const HOME_TEXTS = AppConstants.HOME_TEXTS;

const About = () => {
    return (
        <section className={HTML_TEXTS.className.aboutSection}>
            <div className={HTML_TEXTS.className.aboutDescription}>
                <h1>{HOME_TEXTS.get('littleLemon').text}</h1>
                <h2>{HOME_TEXTS.get('chicago').text}</h2>
                <p>
                    {HOME_TEXTS.get('aboutDesc').text}
                </p>
            </div>
            <div className={HTML_TEXTS.className.aboutChefsImage}>
                <div className={HTML_TEXTS.className.chefImageTop}>
                    <img src={aboutChefsImage01} alt={HTML_TEXTS.alt.chefsMarioAndAdrian} />
                </div>
                <div className={HTML_TEXTS.className.chefImageBottom}>
                    <img src={aboutChefsImage02} alt={HTML_TEXTS.alt.chefsMarioAndAdrian} />
                </div>
            </div>
        </section>
    );
};

export default About;