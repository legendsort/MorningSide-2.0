import React from "react";import MemberCard from "./MemberCard";
import { team } from "../../constants/team";

const Team = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center justify-center pt-32">
        <div className="title">
          <div>Meet The Team</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-8">
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
  );
};

export default Team;
