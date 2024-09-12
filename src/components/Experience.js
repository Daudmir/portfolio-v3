import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer"
            company="Personalezonen"
            time="2024 - Present"
            address="Personalezonen, Høje Taastrup"
            work="As a Frontend Developer at Personalezonen, I've been working on their website using Next.js, Prisma, Tailwind, and Shadcn. My experience also includes developing for Reepark and Esportligaen, where I contributed to their websites using WordPress, PHP, SASS, and MySQL. This role has allowed me to refine my skills across multiple modern web technologies."
          />

          <Details
            position="Software Developer/Internship"
            company="OvertagLeasing ApS"
            time="2023 - 2023"
            address="Nykøbing F"
            work="During my internship, I was developing a new Next.js website that should have the ability to show and display their cars and also have a payment method for a subscription, Within this website they also wanted a admin dashboard where they could delete and update the cars."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-center"> 
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center justify-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              md:p-2 md:px-4 md:text-base
              `}
        >
          View Projects
        </Link>
      </div>

    </div>
  );
};

export default Experience;
