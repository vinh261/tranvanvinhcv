"use client";
import ProjectChildProps from "@/types/ProjectChildProps";
import Image from "next/image";
import { Button } from "./ui/button";

const ProjectChildRight = ({
  imageUrl,
  title,
  description,
  projectUrl,
}: ProjectChildProps) => {
  console.log(imageUrl);
  return (
    <div className="flex lg:flex-row justify-between my-4 flex-col xl:flex-row">
      <div className="relative w-full my-4 xl:my-0">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full rounded-xl dark:invert"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-orange-500 bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 rounded-xl">
          <span className="opacity-100 text-white font-bold z-10">{title}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mx-4">
        <p className="medium-title mt-4 text-left">{title}</p>
        <p className="small-content my-4 text-left">{description}</p>
        <Button className="w-1/2 bg-orange-500 text-black">
          <a href={projectUrl} target="_blank">
            Demo
          </a>
        </Button>
      </div>
    </div>
  );
};

const ProjectChildLeft = ({
  imageUrl,
  title,
  description,
  projectUrl,
}: ProjectChildProps) => {
  return (
    <div className="flex lg:flex-row justify-between my-4 flex-col xl:flex-row">
      <div className="flex flex-col justify-center items-end mx-4">
        <p className="medium-title mt-4 text-right">{title}</p>
        <p className="small-content my-4 text-right">{description}</p>
        <Button className="w-1/2 bg-orange-500 text-black">
          <a href={projectUrl} target="_blank">
            Demo
          </a>
        </Button>
      </div>
      <div className="relative w-full my-4 xl:my-0">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full rounded-xl dark:invert"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-orange-500 bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 rounded-xl">
          <span className="opacity-100 text-white font-bold z-10">{title}</span>
        </div>
      </div>
    </div>
  );
};
export { ProjectChildLeft, ProjectChildRight };
