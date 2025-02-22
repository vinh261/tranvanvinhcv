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
    <div className="w-2/3 bg-white float-right z-0 dark:invert">
      <div className="m-auto">
      <section id="welcome">
          <Welcome />
        </section>
        <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
        <section id="about">
          <About />
        </section>
        <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
        <section id="experience">
          <Experience />
        </section>
        <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
        <section id="blog">
          <Blog />
        </section>
        <Separator className="w-4/5 h-0.5 bg-orange-500 m-auto" />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
        <Header/>
      </div>
    </div>
  );
};

export default RightSide;
