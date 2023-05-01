import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loaderimport { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-responsive-carousel";
import { services } from "../constants/services";
import Veba from "../components/Veba";

const Services = () => {
  return (
    <div className="container mx-auto pt-32 q" id="services">
      <div className="flex flex-col items-center justify-center">
        <p className="title">Our Services</p>
        <div className="w-full">
          <div className="mb-8">
            <div className="flex w-full items-center justify-center">
              <Veba />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-3 items-center justify-center text-center mx-auto">
              {services.map((service, index) => {
                return (
                  <div key={index} className="col-span-3 md:col-span-1 card px-4 py-8 mx-10">
                    <div className="service-card">{service.name[0]}<br />{service.name[1]}</div>
                    
                    {service.services.map((item, index) => (
                      <p key={index} className="service-card-item">
                        {item}
                      </p>
                    ))}
                  </div>
                );
              })}

            </div>
          </div>
          <div className="md:hidden">
            <Carousel className="" infiniteLoop={true} showStatus={false}>
              {services.map((service, index) => {
                return (
                  <div className="card col-span-3 p-8 mb-10 gap-x-3" key={index}>
                    <div className="service-card ">{service.name}</div>
                    {service.services.map((item, index) => (
                      <p key={index} className="service-card-item ">
                        {item}
                      </p>
                    ))}
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
