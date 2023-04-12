const Card = (props) => {  const { name, photo, role, description, links, style } = props;
  return (
    <div className={`flex pt-10`}>
      <div className="p-0 max-w-[1620px] mx-auto flex flex-col justify-center">
        <div className="text-blue-300 font-medium uppercase m-2">{role}</div>
        <div className="text-primary font-extrabold text-3xl uppercase m-2">
          {name}
        </div>
        <div className="my-5 flex items-center justify-center">
          <img className="" src={photo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
