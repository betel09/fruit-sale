import React from "react";
import Card from "./Card";
import "./Card.css";

const ProductList = () => {
  const productData = [
    {
      id: 1,
      img: "./imag/avocado.png",
      alt: "Avocado",
      name: "Avocado Product",
      price: "$10",
    },
    {
      id: 2,
      img: "./imag/papaya.png",
      alt: "Pineapple",
      name: "Pineapple Product",
      price: "$8",
    },
    {
      id: 3,
      img: "./imag/mango.png",
      alt: "Mango",
      name: "Mango Product",
      price: "$12",
    },
    {
      id: 4,
      img: "./imag/orange.png",
      alt: "Orange",
      name: "Orange Product",
      price: "$12",
    },
    {
      id: 5,
      img: "./imag/banana.png",
      alt: "Banana",
      name: "Banana Product",
      price: "$12",
    },
    {
      id: 6,
      img: "./imag/melon.png",
      alt: "lemon",
      name: "lemon Product",
      price: "$12",
    },
  ];
  return (
    <div className="row">
      {productData.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
          <Card
            variant="top"
            img={product.img}
            alt={product.alt}
            name={product.name}
            price={product.price}
            className="product-img"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
