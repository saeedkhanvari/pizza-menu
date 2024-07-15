import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>fast react pizza</h1>
      </header>
    </>
  );
};
const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza, index) => {
            const { name, ingredients, photoName, price, soldOut } = pizza;
            return (
              <Pizza
                name={name}
                ingredients={ingredients}
                photoName={photoName}
                price={price}
                key={index}
              />
            );
          })}
        </ul>
      ) : null}
    </main>
  );
};

function Pizza(props) {
  const { name, ingredients, photoName, price } = props;
  return (
    <>
      <li className="pizza">
        <img src={photoName} alt="#" />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{parseInt(price) + 3}</span>
        </div>
      </li>
    </>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const OpenHour = 12;
  const closeHour = 22;
  const isOpen = hour >= OpenHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <>
      <footer className="footer">
        {isOpen && (
          <div className="order">
            <p>
              We're open until {closeHour}:00. come visit us or order online.
            </p>
            <button className="btn">Order</button>
          </div>
        )}
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
