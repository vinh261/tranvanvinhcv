"use client";

import { Button } from "@/components/ui/button";
import HeaderContext from "@/contexts/HeaderContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";

const Welcome = () => {
  const showHeader = useContext(HeaderContext);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  return (
    <div className="my-60 w-4/5 m-auto">
      {showHeader && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl font-bold tracking-wider my-4">
            Tran Van Vinh
          </h1>
        </motion.div>
      )}
      <p className="small-content my-4">
        Hello I am a{" "}
        <span className="font-bold text-black">UI/UX Designer</span> from Viet
        Nam. I have rich experience of 5+ years in web site design and app
        design, also I am good at extraordinary design concept. I love to hear
        from you about your unique needs.
      </p>

      <div className="my-4">
        <Button
          variant="outline"
          className="py-5 mr-4 text-orange-500 border-orange-500 bg-white"
        >
          <a href="#contact">Contact with me</a>
        </Button>
        <Button
          variant="outline"
          className="py-5 text-orange-500 border-orange-500 bg-white"
        >
          Hire me
        </Button>
      </div>
      <ul className="flex flex-row gap-4 dark:invert">
        <li className="text-blue-700">
          <FacebookIcon />
        </li>
        <li className="text-pink-500">
          <InstagramIcon />
        </li>
        <li className="text-blue-400">
          <TwitterIcon />
        </li>
      </ul>
    </div>
  );
};

export default Welcome;
