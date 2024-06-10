import user1 from '../Images/user1.jpeg';
import user2 from '../Images/user2.jpeg';
import rating from '../Images/rating.JPG';



const reviews = [
    {
      rating: rating,
      name: "Mario Gonzalez",
      comment: "Wonderful Restaurant!",
      image: user2,
    },

    {
        rating: rating,
        name: "Maria Fernandez",
        comment: "The food is amazing!",
        image: user1,
      },

      {
        rating: rating,
        name: "Paolo Lanson",
        comment: "A very cozy place with a tasty food!",
        image: user2,
      },

      {
        rating: rating,
        name: "Maggie Tawnsent",
        comment: "My favorite restaurant!",
        image: user1,
      },

]

function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-title">
                <h2>Testimonials</h2>
            </article>
            <div className="testimonials-cards">
                {reviews.map((review) => (
                    <section className="card-review" key={review.name}>
                        <article className="review-body">
                            <img className="rating" src={review.rating} alt="rating" />
                            <h4>{review.name}</h4>
                            <img className="user-image" src={review.image} alt="user" />
                            <p className="review-text">"{review.comment}"</p>
                        </article>
                    </section>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;