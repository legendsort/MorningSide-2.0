const Card = (props) => {
  const { name, photo, role } = props;
  return (
    <div className="border-r-3 w-[406px]">
      <div className="bg-orange-color p-12 rounded-[30px] flex justify-center">
        <img className=" team max-h-[356px]" src={photo} alt="logo" />
      </div>
      <div className="pt-5 font-['SpaceGrotesk'] text-[32px] font-bold uppercase text-main-color">
        {name}
      </div>
      <div className="font-['Iter'] text-lg uppercase text-orange-color">
        {role}
      </div>
    </div>
  );
};

export default Card;
