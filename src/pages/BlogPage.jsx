import { blog } from "../constants/blog";
const PrivacyData = () => {
  //destructure hero data

  return (
    <div className="w-full pt-32">
      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full justify-center items-center md:p-14 p-8">
          <div className="pb-10">
            <h4 className="font-bold text-3xl">Blog </h4>
          </div>
          {blog.map((data, index) => {
            return (
              <div key={index} className="card pt-2 pb-2 text-sm text-gray-700">
                <p>{data} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrivacyData;
