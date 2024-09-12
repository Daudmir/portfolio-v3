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

import proj1 from "/public/images/projects/erp-gruppen.png";

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
          ERP Gruppen
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
              ERP Gruppen
              </h2>
              <h3 className="mb-20 text-md font-bold  text-lightGreen dark:text-primaryDark">
              Welcome to ERP Gruppen, a comprehensive website showcasing a range of services and offerings tailored to meet the needs of businesses. 
              Through our website, we provide valuable insights into our expertise in enterprise resource planning (ERP) solutions. 
              Join us on this journey as we explore the world of efficient business management.
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <h4 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Project Details</h4>
              <p className="">
              Our project focuses on the development of an informative and user-friendly website for ERP Gruppen. Built with Next.js and Tailwind CSS, the website offers a fast, responsive, and visually appealing interface, ensuring an optimal user experience.
              </p>
              <p className="mt-5">
              At ERP Gruppen, we understand the importance of seamless data management and process optimization for businesses. With this in mind, our website showcases a powerful web application designed specifically for decentralized web environments. This application allows for secure storage, uploading, editing, and duplication of invoice data, streamlining the invoicing process for companies.              </p>
              <p className="mt-5">
              Using a combination of Firebase collections database and web3 blockchain file storage, we ensure the utmost security and efficiency in handling sensitive data. This ERP software solution empowers companies worldwide by enabling them to store, view, and download invoice data, facilitating seamless payment requests. With our software, companies can easily manage their invoicing processes, track payments, and efficiently request money from clients and customers across the globe.              </p>
              
              <h4 className="mb-4 mt-10 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Conlusion</h4>
              <p className="">
              In conclusion, the ERP Gruppen project aimed to create an informative and user-friendly website that showcases our expertise in enterprise resource planning solutions. The website, built with Next.js and Tailwind CSS, offers a seamless user experience and highlights our commitment to efficient business management.
              </p>
              <p className="mt-5">
              The integration of a powerful web application for decentralized web environments allows companies to optimize their invoicing processes. With the ability to securely store, upload, edit, and duplicate invoice data using Firebase collections database and web3 blockchain file storage, our software solution provides a valuable tool for businesses worldwide.              </p>
              <p className="mt-5">
              We invite you to explore the ERP Gruppen website and discover the transformative potential of our enterprise resource planning solutions. By leveraging cutting-edge technology and emphasizing process optimization, we aim to empower businesses and drive their success in an increasingly digital world.              </p>


              <div className="mt-10 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Erp Gruppen Demo"
                  href="https://erp-gruppen.vercel.app/"
                  target={"_blank"}
                >
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Daudmir/erp-gruppen-landingpage"
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
                src={proj1}
                alt="erp"
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
