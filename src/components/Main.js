import HeroSectionImage from '../assets/images/hero-section-img.jpg';

function Main() {
    return (
        <main>
            <section className="hero-section">
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div>
                    <img src={HeroSectionImage} alt="A Restaurant Food Image" width="250px" />
                </div>
            </section>
            <section className="highlights">

            </section>
        </main>
    );
}

export default Main;