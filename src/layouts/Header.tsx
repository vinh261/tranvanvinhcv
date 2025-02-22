"use client";

import { Button } from "@/components/ui/button";
import HeaderContext from "@/contexts/HeaderContext";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useContext } from "react";

const Header = () => {
  const {light, setLight } = useContext(HeaderContext);
  return (
    <div className="fixed top-0 right-0 z-100 w-fit h-14 flex justify-between items-center bg-gradient-to-r from-white to-orange-500 pr-8 pl-10">
      <Button
        variant={"outline"}
        className="p-0"
        onClick={() => setLight(!light)}
      >
        {light ? (
          <BedtimeIcon className="mx-4 bg-transparent text-black" />
        ) : (
          <WbSunnyIcon className="mx-4 bg-transparent text-white" />
        )}
      </Button>
      <ul className="flex flex-row gap-4 text-black font-semibold mr-4">
        <li className="p-4 px-5 hover:text-orange-500">
          <a href="#welcome">Home</a>
        </li>
        <li className="p-4 px-5 hover:text-orange-500">
          <a href="#about">About</a>
        </li>
        <li className="p-4 px-5 hover:text-orange-500">
          <a href="#experience">Experience</a>
        </li>
        <li className="p-4 px-5 hover:text-orange-500">
          <a href="#blog">Blog</a>
        </li>
        <li className="p-4 px-5 hover:text-orange-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
