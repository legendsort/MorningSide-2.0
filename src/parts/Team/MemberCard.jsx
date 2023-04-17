const Card = (props) => {
  const { name, photo, role, description, mphoto, style } = props;
  return (
    <div className={`flex pt-10`} id={description}>
      <div className="mx-auto flex max-w-[1620px] flex-col justify-center p-0">
        <div className="float-right">
          <div
            className={`m-2 font-['RobotoRegular'] text-base lg:text-3xl uppercase text-[#4277FF] ${
              style ? "text-right" : ""
            }`}
          >
            {role}
          </div>
          <div
            className={`m-2 text-3xl lg:text-7xl font-extrabold uppercase text-black ${
              style ? "text-right" : ""
            }`}
          >
            {name}
          </div>
        </div>
        <div className="lg:my-5 flex items-center justify-center lg:p-10">
          <img className="hidden md:block team" src={photo} alt="team" />
          <img className="md:hidden team" src={mphoto} alt="team" />

        </div>
      </div>
    </div>
  );
};

export default Card;
