const Card = (props) => {
  const { name, photo, role, description, links, style } = props;
  return (
    <div className={`flex pt-10`} id={description}>
      <div className="p-0 max-w-[1620px] mx-auto flex flex-col justify-center">
        <div className="float-right">
          <div className={`text-[#4277FF] text-3xl font-['RobotoRegular'] uppercase m-2 ${style ? "text-right" : ""}`}>
            {role}
          </div>
          <div className={`text-black font-extrabold text-7xl uppercase m-2 ${style ? "text-right" : ""}`}>
            {name}
          </div>
        </div>
        <div className="my-5 flex items-center justify-center">
          <img className="team" src={photo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
