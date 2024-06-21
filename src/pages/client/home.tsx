import React from "react";
import Header from "../../components/header";
import { ServiceCard } from "../../components/service-card";

const ClientHome = () => {
  const dummyDataArray = [
    {
      name: "Produto Fictício 1",
      price: 99.99,
      description: "Este é um produto fictício para fins de demonstração.",
    },
    {
      name: "Produto Fictício 2",
      price: 89.99,
      description: "Este é outro produto fictício para fins de demonstração.",
    },
    {
      name: "Produto Fictício 3",
      price: 79.99,
      description: "Este é mais um produto fictício para fins de demonstração.",
    },
    {
      name: "Produto Fictício 4",
      price: 79.99,
      description: "Este é mais um produto fictício para fins de demonstração.",
    },
    {
      name: "Produto Fictício 5",
      price: 79.99,
      description: "Este é mais um produto fictício para fins de demonstração.",
    },
    {
      name: "Produto Fictício 6",
      price: 79.99,
      description: "Este é mais um produto fictício para fins de demonstração.",
    },
  ];

  return (
    <div>
      <Header />

      <section className="mt-20 px-8 gap-6 flex flex-wrap">
        {dummyDataArray.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default ClientHome;
