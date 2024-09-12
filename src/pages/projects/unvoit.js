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

import proj3 from "/public/images/projects/unvoit.png";

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
        Unvoit
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
              Unvoit
              </h2>
              <h3 className="mb-20 text-md font-bold  text-lightGreen dark:text-primaryDark">
              Welcome to Unvoit! Step into a world where effective project management and collaboration thrive. Our website, offers a comprehensive platform that streamlines project organization, task management, and communication. Join us as we revolutionize the way teams work together and achieve their goals.
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <h4 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Project Details</h4>
              <p className="">
              Our project revolves around the development of Unvoit, an intuitive web application designed to enhance project management and collaboration. Built with VueJS, this platform offers a user-friendly interface and a range of features aimed at optimizing productivity and fostering seamless teamwork.              </p>
              <p className="mt-5">
              Unvoit serves as a powerful multi-crud application, enabling teams to efficiently organize and manage projects. From creating and assigning tasks to tracking progress and communicating within the team, our platform provides a centralized hub for streamlined project management.              </p>
              <p className="mt-5">
              One of the notable challenges we addressed in this project was the integration of IPFS (InterPlanetary File System) and web3 storage into the VueJS application. By leveraging these technologies, Unvoit ensures secure and decentralized file storage, offering enhanced data protection and accessibility.              </p>
                <p className="mt-5">
                Throughout the development process, our team demonstrated dedication and perseverance, overcoming obstacles to create a fully functional and successful software solution. The initial concept evolved into a robust application that has the potential for scalability and growth.            </p>

              <h4 className="mb-4 mt-10 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Conlusion</h4>
              <p className="">
              In conclusion, Unvoit is a testament to our team's ability to transform an initial concept into a fully functional and successful software solution. With its VueJS foundation and a range of features dedicated to project management and collaboration, Unvoit offers a comprehensive platform for teams to streamline their workflows and achieve project success.              </p>
              <p className="mt-5">
              The integration of IPFS and web3 storage technology ensures secure and decentralized file storage, safeguarding data integrity and accessibility. By providing an intuitive interface and powerful organizational capabilities, Unvoit empowers teams to work efficiently, communicate effectively, and ultimately deliver exceptional results.              </p>
              <p className="mt-5">
              The integration of IPFS/web3 storage into our VueJS project posed a challenge. However, through perseverance and collaborative effort, we were able to overcome the obstacles and achieve a functional integration. This accomplishment stands as a testament to the dedication and skill of our team members.              </p>
              <p className="mt-5">
              We invite you to experience the transformative potential of Unvoit by visiting the website. Join us in revolutionizing project management and collaboration, and unlock the full potential of your team's capabilities.              </p>


              <div className="mt-10 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Unvoit Demo"
                  href="https://unvoit.netlify.app/"
                  target={"_blank"}
                >
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Daudmir/unvoit"
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
                src={proj3}
                alt="unvoit"
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
