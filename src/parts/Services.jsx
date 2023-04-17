import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { services } from "../constants/services";
import Veba from "../components/Veba";


const Services = () => {

  return (
    <div className="mx-auto pt-20 md:pt-44" id="services">
      <div className="flex flex-col items-center justify-center">
        <p className="md:m-10 font-['AvenirNextBold'] font-light uppercase">
          Our Services
        </p>
        <div className="w-full">
          <div className="">
            <div className="flex items-center justify-center w-full">
              <Veba />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="container grid grid-cols-3 p-5 text-center md:gap-y-24 md:p-20 justify-center items-center">
              <div className="card col-span-3 md:col-span-1 box-shadow">
                <div className="service-card">{services[0].name}</div>
                {services[0].services.map((item, index) => (
                  <p key={index} className="service-card-item  ">
                    {item}
                  </p>
                ))}
              </div>
              <div className="card col-span-3 md:col-span-1 box-shadow">
                <div className="service-card">{services[1].name}</div>
                {services[1].services.map((item, index) => (
                  <p key={index} className="service-card-item">
                    {item}
                  </p>
                ))}
              </div>
              <div className="card col-span-3 md:col-span-1 box-shadow">
                <div className="service-card">{services[2].name}</div>
                {services[2].services.map((item, index) => (
                  <p key={index} className="service-card-item">
                    {item}
                  </p>
                ))}
              </div>
              <div />
            </div>
          </div>
          <div className="md:hidden">
            <Carousel className="" infiniteLoop={true} showStatus={false}>
              {services.map((service, index) => {
                return (
                  <div className="card col-span-3 mb-10 " key={index}>
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
