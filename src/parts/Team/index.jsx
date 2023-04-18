import React from "react";
import MemberCard from "./MemberCard";
import { team } from "../../constants/team";

const Team = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className="container p-20 flex items-center justify-center">
        <div className="h-[170px] lg:h-[450px]  text-center text-5xl font-bold text-gray-100 md:text-9xl">
          <div>Meet The Team</div>
        </div>
      </div>
      <div className="grid w-full grid-cols-12">
        <div className="col-span-12 ">
          <div className="container flex flex-col md:max-w-[80%]">
            {team.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                photo={member.photo}
                role={member.role}
                description={member.description}
                links={member.links}
                style={index % 2}
                mphoto={member.mphoto}
              />
            ))}
          </div>
        </div>
        <div className="relative hidden pt-10 font-['RobotoRegular'] text-base lg:text-lg xl:text-2xl">
          <div className={`sticky top-8 text-gray-400`}>
            <a href="#ceo"> {team[0].name} </a>
          </div>
          <div className={`sticky top-28 text-gray-400`}>
            <a href="#head"> {team[1].name} </a>
          </div>
          <div className={`sticky top-48 text-gray-400`}>
            <a href="#lead"> {team[2].name} </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
