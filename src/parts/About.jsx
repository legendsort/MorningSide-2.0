import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    // Create the observer
    const squares = document.querySelectorAll(".square");
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          squares[0].classList.add("fade", "fade-out-0");
          squares[1].classList.add("fade", "fade-out-1");
          squares[2].classList.add("fade", "fade-out-2");
          squares[3].classList.add("fade", "fade-out-3");
          squares[4].classList.add("fade", "fade-out-4");
          squares[5].classList.add("fade", "fade-out-5");
          squares[6].classList.add("fade", "fade-out-6");
          squares[7].classList.add("fade", "fade-out-7");
          squares[8].classList.add("fade", "fade-out-8");
          squares[9].classList.add("fade", "fade-out-9");
          squares[10].classList.add("fade", "fade-out-10");
        } else {
          squares[0].classList.remove("fade", "fade-out-0");
          squares[1].classList.remove("fade", "fade-out-1");
          squares[2].classList.remove("fade", "fade-out-2");
          squares[3].classList.remove("fade", "fade-out-3");
          squares[4].classList.remove("fade", "fade-out-4");
          squares[5].classList.remove("fade", "fade-out-5");
          squares[6].classList.remove("fade", "fade-out-6");
          squares[7].classList.remove("fade", "fade-out-7");
          squares[8].classList.remove("fade", "fade-out-8");
          squares[9].classList.remove("fade", "fade-out-9");
          squares[10].classList.remove("fade", "fade-out-10");
        }
      });
    });
    observer.observe(squares[0]);
  }, []);

  return (
    <div className="py-10 flex items-center justify-center bg-[#090A11]">
      <div className="mx-auto">
        <div className="text-xl md:text-[40px] text-white font-bold py-8">
          <article className="text-center space-y-3 md:space-y-10">
            <div className="">
              <span className="square ">leverage </span>
              <span className="square ">morningside's </span>
            </div>
            <div className=" ">
              <span className="square ">comprehensive </span>
              <span className="square ">AI </span>
              <span className="square ">development </span>
            </div>
            <div className="">
              <span className="square ">expertise </span>
              <span className="square ">to </span>
              <span className="square ">maximize </span>
              <span className="square ">your </span>
            </div>
            <div className="">
              <span className="square ">businesses </span>
              <span className="square ">potential </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
