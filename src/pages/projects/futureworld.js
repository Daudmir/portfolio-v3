import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";

import proj2 from "/public/images/projects/futureworld.png";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>
          FutureWorld
        </title>
        <meta
          name="description"
          content="ERP Gruppen Project"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Clay - Gatsby Theme"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-6 text-4xl font-bold capitalize text-dark/75 dark:text-light/75">
              FutureWorld
              </h2>
              <h3 className="mb-20 text-md font-bold  text-lightGreen dark:text-primaryDark">
                Welcome to FutureWorld! Prepare to embark on an immersive virtual journey that will transport you into a world where innovative ideas, cutting-edge technology, and futuristic concepts converge. Through our website, you will have the opportunity to explore the limitless possibilities of the future and experience a vision of what lies ahead.
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <h4 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Project Details</h4>
              <p className="">
                Our project centers around the creation of the captivating website, FutureWorld. With its sleek design and seamless navigation, the website serves as a gateway to an unparalleled virtual experience. Upon entering FutureWorld, visitors are greeted by an interactive homepage that sets the stage for the entire journey. The website is meticulously crafted to provide an engaging and user-friendly interface, guiding users through various sections that showcase different aspects of the future.              </p>
              <p className="mt-5">
                One of the key highlights of FutureWorld is the "Technological Advancements" section, where users can immerse themselves in the latest breakthroughs in science and technology. From artificial intelligence to virtual reality and robotics, this section offers interactive presentations and multimedia content to help users grasp the transformative impact of these advancements on our lives.              </p>
              <p className="mt-5">
                Another notable feature of FutureWorld is the "Sustainable Future" section, which delves into eco-friendly solutions and green innovations. Here, visitors can explore renewable energy sources, sustainable transportation options, and smart cities, all aimed at creating a more environmentally conscious future. Through visually compelling graphics and informative articles, the website inspires users to embrace sustainable practices and actively contribute to a greener world.              </p>
                <p className="mt-5">
                Moreover, FutureWorld provides a captivating glimpse into the realm of space exploration and colonization through its "Beyond Earth" section. Users can embark on an awe-inspiring journey through the cosmos, discovering ambitious plans for human settlement on other planets and the utilization of extraterrestrial resources. This section sparks imagination and fosters a sense of wonder about the possibilities that lie beyond our own planet.              </p>

              <h4 className="mb-4 mt-10 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Conlusion</h4>
              <p className="">
              In conclusion, FutureWorld offers an immersive and thought-provoking experience that invites visitors to embark on a captivating journey into the future. Through its visually stunning design, interactive features, and comprehensive content, the website serves as a virtual platform to explore the frontiers of technological advancements, sustainable solutions, and the wonders of space exploration. By inspiring curiosity, sparking dialogue, and encouraging users to contemplate their role in shaping the future, FutureWorld opens a world of endless possibilities. Visit FutureWorld and step into the future today.
              </p>


              <div className="mt-10 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit FutureWorld Demo"
                  href="https://futureworld.vercel.app/home"
                  target={"_blank"}
                >
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Daudmir/futureworld"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={proj2}
                alt="futureworld"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
