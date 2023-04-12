import React from "react";
import MemberCard from "./MemberCard";
import { team } from "../../constants/team";

const Team = () => {
  return (
    <div className="container box-shadow pl-3 md:pl-10">
      <div className="pt-32 container">
        <div className="w-full mr-20 mx-auto flex flex-col justify-center items-center ">
          <h2 className="text-primary text-4xl font-bold mb-5 leading-none uppercase text-center">
            Our Team
          </h2>
          <div className="max-w-[800px]">
            <p className="text-primary font-medium text-md my-5 text-center mx-auto">
              Our team is composed of experienced and dedicated individuals who
              are passionate about artificial intelligence and its potential to
              transform industries. From software developers to data scientists,
              we work together to develop cutting-edge AI solutions that help
              businesses achieve their goals.
            </p>
          </div>
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
