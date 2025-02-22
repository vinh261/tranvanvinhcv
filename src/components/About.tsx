"use client";

import { Button } from "@/components/ui/button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const About = () => {
  return (
    <div className="w-4/5 m-auto my-32 ">
      <p className="medium-menu my-4">about me</p>
      <h3 className="big-title my-4">
        I Am A Product Designer, Specialized In UI/UX Design & Digital Design
      </h3>
      <p className="small-content my-4">
        I am a passionate Product Designer specializing in UI/UX and Digital
        Design. With a keen eye for detail and a user-centered approach, I
        create intuitive and visually appealing designs that enhance user
        experiences and drive engagement.
      </p>
      <div className="flex flex-row justify-between gap-28">
        <ul className="flex flex-col w-4/5">
          <li className="flex flex-row justify-between">
            <p className="small-title">Age</p>
            <p className="small-content">26 years old</p>
          </li>
          <li className="flex flex-row justify-between">
            <p className="small-title">Residence: </p>
            <p className="small-content">Viet Nam</p>
          </li>
          <li className="flex flex-row justify-between">
            <p className="small-title">Address: </p>
            <p className="small-content">Long An Province</p>
          </li>
        </ul>
        <ul className="flex flex-col w-4/5">
          <li className="flex flex-row justify-between">
            <p className="small-title">Phone: </p>
            <p className="small-content">+84 368599987</p>
          </li>
          <li className="flex flex-row justify-between">
            <p className="small-title">Email: </p>
            <p className="small-content">vanvinh@gmail.com</p>
          </li>
          <li className="flex flex-row justify-between">
            <p className="small-title">Website</p>
            <p className="small-content">www.vvinh.com</p>
          </li>
        </ul>
      </div>
      <h3 className="big-title mt-32 mb-4">Here are my all skills</h3>
      <p className="small-content">
        I bring a diverse set of skills to the table, honed through years of
        experience and a passion for creating exceptional digital experiences.
        Below is a breakdown of my expertise:
      </p>
      <ul className="flex flex-row flex-wrap gap-10 my-4">
        <li className="flex flex-col items-center w-1/3 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 48 48"
          >
            <g fill="none">
              <rect
                width="40"
                height="32"
                x="4"
                y="8"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="4"
                rx="3"
              ></rect>
              <path
                fill="#2F88FF"
                stroke="#000"
                strokeWidth="4"
                d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"
              ></path>
              <circle
                r="2"
                fill="#fff"
                transform="matrix(0 -1 -1 0 10 14)"
              ></circle>
              <circle
                r="2"
                fill="#fff"
                transform="matrix(0 -1 -1 0 16 14)"
              ></circle>
            </g>
          </svg>
          <p className="medium-title">Web design</p>
          <p className="small-content text-center">
            I specialize in crafting visually stunning and user-friendly
            websites. My approach combines modern design principles with a deep
            understanding of user behavior to create engaging and responsive web
            interfaces. From wireframing to final implementation, I ensure every
            detail is perfect.
          </p>
          <Button
            variant={"outline"}
            className="border-orange-500 text-orange-500 my-4 bg-white"
          >
            Explore More <PlayArrowIcon />
          </Button>
        </li>
        <li className="flex flex-col items-center w-1/3 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 32 32"
          >
            <path
              fill="#00b3e0"
              d="M15.958 2a14 14 0 0 1 .091 28h-.091a14 14 0 0 1 0-28"
            ></path>
            <path
              fill="#fff"
              d="m11.971 27.829l5.346-5.165a6.52 6.52 0 0 1-5.709-1.269a6.74 6.74 0 0 1-2.447-6.162l-4.8 5.256a9.3 9.3 0 0 1-.815-3.353l8.427-6.615a7.07 7.07 0 0 1 8.427 0a6.85 6.85 0 0 1 1.269 9.152l-6.169 8.79a11.6 11.6 0 0 1-3.534-.634Z"
            ></path>
            <path
              fill="#00b3e0"
              d="M19.4 18.676a4.389 4.389 0 1 1-6.887-5.437a4.686 4.686 0 0 1 6.343-.815a4.36 4.36 0 0 1 .544 6.252"
            ></path>
          </svg>
          <p className="medium-title">App design</p>
          <p className="small-content text-center">
            Designing intuitive and aesthetically pleasing mobile applications
            is one of my core strengths. I focus on creating seamless user
            experiences that are both functional and delightful. My process
            involves thorough research, prototyping, and user testing to deliver
            apps that users love.
          </p>
          <Button
            variant={"outline"}
            className="border-orange-500 text-orange-500 my-4 bg-white"
          >
            Explore More <PlayArrowIcon />
          </Button>
        </li>
        <li className="flex flex-col items-center w-1/3 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 128 128"
          >
            <path fill="#558d6c" d="m4.92 8l10.17 87.05L64 119.95V8z"></path>
            <path
              fill="#5aa579"
              d="M64 8v111.95l.05.05l48.93-24.91L123.08 8z"
            ></path>
            <path
              fill="#60be86"
              d="m18.84 22.11l6.49 65.18L64 105.97V22.11z"
            ></path>
            <path
              fill="#65d693"
              d="M64 22.11v83.86l.05.05l38.69-18.76l6.42-65.15z"
            ></path>
            <path
              fill="#5aa579"
              d="M105.72 54.9L73.14 39.42l-1.83-.9l-1.12 2.28L64 53.41V68.3l9.15-18.08l21.5 9.57l-23.09 10.37l-.87.47v10.88L73 80.38l32.78-15.69a2 2 0 0 0 .92-2v-5.78a2 2 0 0 0-.98-2.01"
            ></path>
            <path
              fill="#558d6c"
              d="m56 69.39l-21.79-9.6l23.3-10.37l1.76-.7V37.76l-3.4 1.44l-33.93 15.69a2.26 2.26 0 0 0-1.28 2v5.77a2.22 2.22 0 0 0 1.24 2l33.44 15.52l2 .9l1.21-2.26L64 68.3V53.41z"
            ></path>
          </svg>
          <p className="medium-title">Web developer</p>
          <p className="small-content text-center">
            With a strong foundation in user interface and user experience
            design, I create digital products that are not only beautiful but
            also easy to use. I prioritize user-centered design, ensuring that
            every interaction is intuitive and every visual element enhances the
            overall experience.
          </p>
          <Button
            variant={"outline"}
            className="border-orange-500 text-orange-500 my-4 bg-white"
          >
            Explore More <PlayArrowIcon />
          </Button>
        </li>
        <li className="flex flex-col items-center w-1/3 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 50 50"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path stroke="#344054" d="m43.75 43.75l-9.042-9.042"></path>
              <path
                stroke="#306CFE"
                d="M22.917 39.583c9.204 0 16.666-7.462 16.666-16.666S32.121 6.25 22.917 6.25S6.25 13.712 6.25 22.917c0 9.204 7.462 16.666 16.667 16.666"
              ></path>
            </g>
          </svg>
          <p className="medium-title">Web SEO</p>
          <p className="small-content text-center">
            Understanding the importance of visibility, I also have skills in
            digital marketing. I can create strategies that enhance online
            presence, including SEO, content marketing, and social media
            campaigns, ensuring that the products I design reach their target
            audience effectively.
          </p>
          <Button
            variant={"outline"}
            className="border-orange-500 text-orange-500 my-4 bg-white"
          >
            Explore More <PlayArrowIcon />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default About;
