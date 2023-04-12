import React from "react";
import Card from "../components/Card";
import { services } from "../constants/services";

const Services = () => {
  return (
    <div className="container pt-20 mx-auto" id="services">
      <div className="container flex flex-col justify-center items-center">
        <p className="text-primary uppercase m-5">Our Services</p>
        <h1 className="text-primary text-4xl md:text-5xl font-bold leading-80 tracking[-0.1875] m-8">
          What We Do
        </h1>
        <div className="flex flex-col md:flex-row w-full">
          {services.map((service, index) => (
            <Card key={index} name={service.name} list={service.services} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
