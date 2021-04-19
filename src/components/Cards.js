import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>
        Please feel free to browse this simple yet complex site designed to
        demonstrate my coding abilities.
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/contact.jpg"
              text="All ways to get in touch with me."
              label="Contact Me"
              path="/contact"
            />
            <CardItem
              src="images/port.jpg"
              text="Here are just a few examples besides of my abilities."
              label="Coding Skills"
              path="/portfolio"
            />
              <CardItem
              src="images/about.jpg"
              text="A brief description about myself."
              label="About Me"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
