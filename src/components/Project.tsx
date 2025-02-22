"use client";
import { motion } from "motion/react";
import { ProjectChildLeft, ProjectChildRight } from "./ProjectChild";
import { Button } from "./ui/button";
import ProjectProps from "@/types/ProjectProps";

const Project = ({ onClose }: ProjectProps) => {
  return (
    <motion.div
      className="my-8"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ul>
        <li>
          <ProjectChildLeft
            imageUrl="https://github.com/vinh261/vVinhCv/blob/main/src/assets/project01.png?raw=true"
            title="Furniture Website Logo Design"
            description="Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"
            projectUrl="#"
          />
        </li>
        <li>
          <ProjectChildRight
            imageUrl="https://github.com/vinh261/vVinhCv/blob/main/src/assets/project02.png?raw=true"
            title="ERP Software Logo"
            description="Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"
            projectUrl="#"
          />
        </li>
        <li>
          <ProjectChildLeft
            imageUrl="https://github.com/vinh261/vVinhCv/blob/main/src/assets/project03.png?raw=true"
            title="Travel App Logo Design"
            description="Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"
            projectUrl="#"
          />
        </li>
        <li>
          <ProjectChildRight
            imageUrl="https://github.com/vinh261/vVinhCv/blob/main/src/assets/project04.png?raw=true"
            title="Restaurant Website Logo Design"
            description="Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu"
            projectUrl="#"
          />
        </li>
      </ul>
      <div className="flex flex-row justify-center mt-8">
        <Button
          onClick={onClose}
          variant={"destructive"}
          className="text-center bg-orange-500 text-black font-bold tracking-wider"
        >
          Hide projects
        </Button>
      </div>
    </motion.div>
  );
};

export default Project;
