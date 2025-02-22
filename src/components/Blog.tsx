"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ClientSay from "./ClientSay";
import { Button } from "./ui/button";

const Blog = () => {
  return (
    <div className="w-4/5 m-auto my-32" >
      <p className="medium-menu my-4">My blogs</p>
      <h3 className="big-title my-4">See My Blogs Which Will Amaze You</h3>
      <ul>
        <li className="flex flex-row gap-0 justify-between">
          <div className="relative w-1/2 h-auto">
            <Image
              src="https://github.com/vinh261/vVinhCv/blob/main/src/assets/blog02.png?raw=true"
              alt="Blog 4"
              width={500}
              height={500}
              className="w-full h-auto dark:invert"
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-orange-500 bg-opacity-0 hover:bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 p-8">
            <p className="font-bold text-white opacity-100 text-center text-xl">
                Mastering Full-Stack Development: A Comprehensive Guide
              </p>
              <p className="font-light text-white opacity-100 text-center text-sm my-4">
                Dive into the essentials of full-stack development, covering
                both front-end and back-end technologies. Learn how to create
                seamless, responsive websites and applications that stand out in
                the digital landscape.
              </p>
              <Button className="w-1/2 bg-orange-500 text-black" variant={"outline"}>
                Read more
              </Button>
            </div>
          </div>
          <div className="relative w-1/2 h-auto">
            <Image
              src="https://github.com/vinh261/vVinhCv/blob/main/src/assets/blog03.png?raw=true"
              alt="Blog 4"
              width={500}
              height={500}
              className="w-full h-auto dark:invert"
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-orange-500 bg-opacity-0 hover:bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 p-8">
            <p className="font-bold text-white opacity-100 text-center text-xl">
                Top 10 Tools Every Full-Stack Developer Should Know
              </p>
              <p className="font-light text-white opacity-100 text-center text-sm my-4">
                Explore the must-have tools and software that can enhance your
                productivity and efficiency as a full-stack developer. From code
                editors to version control systems, this blog covers it all.
              </p>
              <Button className="w-1/2 bg-orange-500 text-black" variant={"outline"}>
                Read more
              </Button>
            </div>
          </div>
        </li>
        <li className="flex justify-center flex-row">
          <div className="relative w-full h-auto">
            <Image
              src="https://github.com/vinh261/vVinhCv/blob/main/src/assets/blog01.png?raw=true"
              alt="Blog 1"
              width={500}
              height={500}
              className="w-full h-auto dark:invert"
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-orange-500 bg-opacity-0 hover:bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 p-8">
            <p className="font-bold text-white opacity-100 text-center text-xl">
                Building a Portfolio Website: Tips and Tricks
              </p>
              <p className="font-light text-white opacity-100 text-center text-sm my-4">
                Discover the best practices for creating a stunning portfolio
                website that showcases your skills and projects. Learn about
                design principles, user experience, and how to make your site
                stand out to potential employers.
              </p>
              <Button className="w-1/2 bg-orange-500 text-black" variant={"outline"}>
                Read more
              </Button>
            </div>
          </div>
        </li>
        <li className="flex flex-row gap-4 justify-between">
          <div className="relative w-1/2 h-auto">
            <Image
              src="https://github.com/vinh261/vVinhCv/blob/main/src/assets/blog04.png?raw=true"
              alt="Blog 4"
              width={500}
              height={500}
              className="w-full h-auto dark:invert"
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-orange-500 bg-opacity-0 hover:bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 p-8">
            <p className="font-bold text-white opacity-100 text-center text-xl">
                The Future of Web Development: Trends to Watch in 2023
              </p>
              <p className="font-light text-white opacity-100 text-center text-sm my-4">
                Stay ahead of the curve by understanding the latest trends in
                web development. From AI integration to progressive web apps,
                this blog discusses what’s shaping the future of the industry.
              </p>
              <Button className="w-1/2 bg-orange-500 text-black" variant={"outline"}>
                Read more
              </Button>
            </div>
          </div>
          <div className="relative w-1/2 h-auto">
            <Image
              src="https://github.com/vinh261/vVinhCv/blob/main/src/assets/blog05.png?raw=true"
              alt="Blog 4"
              width={500}
              height={500}
              className="w-full h-auto dark:invert"
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-orange-500 bg-opacity-0 hover:bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 p-8">
              <p className="font-bold text-white opacity-100 text-center text-xl">
                Debugging Like a Pro: Common Full-Stack Issues and Solutions
              </p>
              <p className="font-light text-white opacity-100 text-center text-sm my-4">
                Gain insights into common debugging challenges faced by
                full-stack developers and learn effective strategies to solve
                them. This blog provides practical tips and real-world examples
                to help you troubleshoot like a pro.
              </p>
              <Button className="w-1/2 bg-orange-500 text-black" variant={"outline"}>
                Read more
              </Button>
            </div>
          </div>
        </li>
      </ul>
      <h3 className="medium-menu my-4">Awards</h3>
      <p className="small-content my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        modi, dignissimos accusantium quisquam totam officiis autem quae aliquam
        dolorem quidem veritatis maxime recusandae consequuntur repudiandae
        laboriosam excepturi nihil molestias ratione?
      </p>
      <div className="flex flex-row gap-4 justify-evenly items-center">
        <ul className="flex flex-col items-start">
          <li className="my-4">
            <p className="small-title">Best Graphic Designer</p>
            <p className="small-content">2016</p>
          </li>
          <li className="my-4">
            <p className="small-title">Design Of The Year</p>
            <p className="small-content">2018</p>
          </li>
          <li className="my-4">
            <p className="small-title">Best Designer Award</p>
            <p className="small-content">2020</p>
          </li>
        </ul>
        <Image
          src="https://github.com/vinh261/vVinhCv/blob/main/src/assets/trophy.png?raw=true"
          alt="My awards"
          width={500}
          height={300}
          className="w-1/2 h-auto dark:invert"
        />
      </div>
      <h3 className="medium-menu my-4">TESTIMONIALS</h3>
      <p className="big-title my-4">What our clients say</p>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <ClientSay
                avtUrl="https://github.com/vinh261/vVinhCv/blob/main/src/assets/client01.png?raw=true"
                quote="Excellent fullstack developer! Not only does he have excellent technical skills, he is also very creative in problem solving. Our project was completed ahead of schedule thanks to his great contribution."
                name="John Doe"
                job="Chief Technology Officer, Tech Innovators"
              />
            </CarouselItem>
            <CarouselItem>
              <ClientSay
                avtUrl="https://github.com/vinh261/vVinhCv/blob/main/src/assets/client02.png?raw=true"
                quote="Working with Van Vinh was a great experience. He always ensures quality code and is able to work efficiently on both frontend and backend. His professionalism and dedication are truly admirable."
                name="Jane Smith"
                job="Project Manager, Digital Solutions Company"
              />
            </CarouselItem>
            <CarouselItem>
              <ClientSay
                avtUrl="https://github.com/vinh261/vVinhCv/blob/main/src/assets/client03.png?raw=true"
                quote="Vinh is a talented and versatile programmer. He helped us build a complex web system with high performance and user-friendly interface. We are very satisfied with the results and will definitely work with him again in the future."
                name="Michael Brown"
                job="CEO, Web Creators Company"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Blog;
