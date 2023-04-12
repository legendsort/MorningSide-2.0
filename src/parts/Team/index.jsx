import React from "react";
import MemberCard from "./MemberCard";
import { team } from "../../constants/team";

const Team = () => {
  return (
    <div className="container pl-3 md:pl-10">
      <div className="pt-32 container md:pb-20 xl:pb-32">
        <div className="w-full mr-20 mx-auto flex flex-col justify-center items-center ">
          <h1 className="text-primary text-4xl md:text-6xl font-bold mb-5 leading-none text-center w-2/3 mx-auo">
            We bring your ideas to life
          </h1>
          <h2 className="pt-10 text-primary underline text-lg font-bold mb-5 leading-none text-center">
            Meet the team
          </h2>
        </div>
      </div>
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
  );
};

export default Team;
