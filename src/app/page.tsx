"use client";

import HeaderContext from "@/contexts/HeaderContext";
import LeftSide from "@/layouts/LeftSide";
import RightSide from "@/layouts/RightSide";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  // document.title = "Tran Van Vinh"
  const [showHeader, setShowHeader] = useState(true);
  const [light, setLight] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  return (
    <div
      className={clsx("relative", {
        "dark": !light,
      })}
    >
      <HeaderContext.Provider
        value={{ showHeader, setShowHeader, light, setLight }}
      >
        <LeftSide />
        <RightSide />
      </HeaderContext.Provider>
    </div>
  );
}
