import React from "react";import MemberCard from "./MemberCard";
import { team } from "../../constants/team";

const Team = () => {
  return (
    <div className="flex flex-col mx-auto items-center">
      <div className="pt-16 md:pt-32 container md:pb-20 xl:pb-32">
        <div className="w-full mr-20 mx-auto flex flex-col justify-center items-center ">
          <h1 className="text-black text-3xl lg:text-6xl font-bold mb-5 leading-none text-center w-2/3 mx-auo uppercase">
            We bring your ideas to life
          </h1>
          <h2 className="pt-10 text-black text-base lg:text-lg font-bold mb-5 leading-none text-center">
            Meet the team
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 ">
          <div className="flex flex-col container md:max-w-[80%]">
            {team.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                photo={member.photo}
                role={member.role}
                description={member.description}
                links={member.links}
                style={index % 2}
              />
            ))}
          </div>
        </div>
        <div className="hidden pt-10 relative font-['RobotoRegular'] text-base lg:text-lg xl:text-2xl">
          <div className={`text-gray-400 sticky top-8`}>
            <a href="#ceo"> {team[0].name} </a>
          </div>
          <div className={`text-gray-400 sticky top-28`}>
            <a href="#head"> {team[1].name} </a>
          </div>
          <div className={`text-gray-400 sticky top-48`}>
            <a href="#lead"> {team[2].name} </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
