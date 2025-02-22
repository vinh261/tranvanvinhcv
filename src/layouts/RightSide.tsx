"use client";

import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Separator } from "@radix-ui/react-separator";
import About from "../components/About";
import Experience from "../components/Experience";
import Welcome from "../components/Welcome";
import Header from "./Header";

const RightSide = () => {
  return (
    <div className="xl:w-2/3 bg-white xl:float-right z-0 dark:invert md:relative md:w-full sm:relative sm:w-full">
      <div className="m-auto">
        <section id="welcome">
          <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
          <Welcome />
        </section>
        <section id="about">
          <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
          <About />
        </section>
        <section id="experience">
          <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
          <Experience />
        </section>
        <section id="blog">
          <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
          <Blog />
        </section>
        <section id="contact">
          <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
          <Contact />
        </section>
        <Footer />
        <Header />
      </div>
    </div>
  );
};

export default RightSide;
