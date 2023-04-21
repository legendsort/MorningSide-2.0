const Card = (props) => {
  const { name, photo, role, index } = props;
  return (
    <div className="col-span-3 md:col-span-1 border-r-3">
      <div className={`bg-orange-color p-12 rounded-[30px] ${index === 0 ? "flex justify-end pr-2" : (index === 2 ? "pl-20" : "")}`}>
        <img className={`team max-h-[336px] md:min-h-[216px] md:max-h-[216px] lg:min-h-[306px] lg:max-h-[306px]`} src={photo} alt="logo" />
      </div>
      <div className="pt-5 font-['SpaceGrotesk'] text-[32px] font-bold uppercase text-main-color text-center md:text-left">
        {name}
      </div>
      <div className="font-['Inter'] text-lg uppercase text-orange-color text-center md:text-left">
        {role}
      </div>
    </div>
  );
};

export default Card;
