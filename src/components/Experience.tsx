"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Project from "./Project";

const Experience = () => {
  const [viewPrj, setViewPrj] = useState(false);
  const handleView = () => {
    setViewPrj(true)
  }
  return (
    <div className="w-4/5 m-auto my-32" >
      <h3 className="medium-menu my-4">My Experience</h3>
      <p className="big-title my-4">
        I Have 6+ Years Of Experience With Many Awards
      </p>
      <p className="small-content my-4">
      I have over 6 years of experience in the design industry, working on a variety of projects that have honed my skills and expertise. Below is a summary of my professional journey:
      </p>
      <ul className="flex flex-col gap-4 my-4">
        <li className="flex flex-row gap-4  my-4">
          <p className=" small-title basis-10">2014-2016</p>
          <p className=" small-title basis-96">Graphic Designer, Art Company, DC</p>
          <p className="small-content grow">
          Developed creative concepts and visual designs for a wide range of marketing materials, including brochures.
          </p>
        </li>
        <li className="flex flex-row gap-4 my-4">
          <p className=" small-title basis-10">2016-2017</p>
          <p className=" small-title basis-96">UX/UI Designer, Dribble</p>
          <p className="small-content grow">
          Designed user interfaces for web and mobile applications, focusing on usability and aesthetic appeal.
          </p>
        </li>
        <li className="flex flex-row gap-4 justify-between my-4">
          <p className=" small-title basis-10">2017-2018</p>
          <p className=" small-title basis-96">Product Designer, Dribble</p>
          <p className="small-content grow">
          Led the design of digital products from concept to completion, ensuring a user-centered approach.
          </p>
        </li>
        <li className="flex flex-row gap-4 justify-between my-4">
          <p className=" small-title basis-10">2018-2023</p>
          <p className=" small-title basis-96">Senior Designer, Dribble</p>
          <p className="small-content grow">
          Oversaw design projects, providing guidance and mentorship to junior designers.
          </p>
        </li>
      </ul>
      <p className="small-content my-4">
        I have also done many freelance work alongside with the company&apos;s
        work which helps me to upgrade my skills and passion.
      </p>
      <div className="flex flex-row justify-center">
        <Button
          variant={"destructive"}
          className="text-center bg-orange-500 text-black font-bold"
          onClick={handleView}
        >
          View my product
        </Button>
      </div>
      {viewPrj ? <Project onClose={() => setViewPrj(false)}/> : null}
    </div>
  );
};

export default Experience;
