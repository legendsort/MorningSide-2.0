import { Link } from "react-router-dom";
const Header = () => {

  return (
    <div className="absolute top-0 left-0 w-full h-[100px] z-[2]">
      <div className="container flex items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <a href="/">
              <img
                src="/images/Logo/mark.png"
                className="w-[60px] h-[60px]"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row font-['Inter'] text-base">
          <a className = "btn" href="#services">
            Our services
          </a>
          <Link className = "btn orange-btn" to="https://morningsideai.beehiiv.com/?_gl=1*aq9b2c*_ga*MTk5NDAyNDI3MS4xNjc5MDM1ODk5*_ga_E6Y4WLQ2EC*MTY4MTk3MTc0Ni4xMy4xLjE2ODE5NzE4NDcuMzAuMC4w">
            Join our newsletter
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
