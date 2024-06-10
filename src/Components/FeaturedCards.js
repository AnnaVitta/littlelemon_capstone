import React from 'react';
import GreekSalad from "../Images/greek salad.jpg";
import Bruschetta from "../Images/bruschetta.JPG";
import LemonDessert from "../Images/lemon dessert.jpg";
import OrderDelivery from "../Images/order_img.JPG";
import {Link} from "react-router-dom";

const featuredMeals = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSalad,
  },
  {
    title: "Bruschetta",
    price: "$7.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    image: Bruschetta,
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "The famous Lemon dessert is back to our menu for all lemon lovers. This lemon layered dessert is a perfect combination of a crispy cracker dough, lemon cheesecake, vanilla mousse and lemon jam. ",
    image: LemonDessert,
  },
];

function FeaturedCard() {
  return (
    <>
      {featuredMeals.map((meal) => (
        <section className="card" key={meal.title}>
          <img src={meal.image} alt={meal.title} />
          <article className="card-body">
            <div className="title">
            <h5 className="card-title">{meal.title}</h5>
            <h5 className="card-price">{meal.price}</h5>
            </div>
            <p className="card-text">{meal.description}</p>
            <Link to="orderDelivery">Order a delivery</Link>
            <img src={OrderDelivery} alt="delivery" />
            </article>
        </section>
      ))}
    </>
  );
}

export default FeaturedCard;