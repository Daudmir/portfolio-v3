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

import proj1 from "/public/images/projects/esportligaen.png";

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
        <title>Esportligaen</title>
        <meta name="description" content="Esportligaen Project" />
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
                Esportligaen
              </h2>
              <h3 className="mb-20 text-md font-bold text-lightGreen dark:text-primaryDark">
                Welcome to Esportligaen, Denmark’s leading esports league
                connecting players, schools, and organizations through
                structured and inclusive competition. Our platform highlights
                the passion, teamwork, and community spirit that define the
                world of esports. Join us as we celebrate gaming as a unifying
                force that brings people together across all levels and ages.
              </h3>

              <h4 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Project Details
              </h4>
              <p className="">
                Our project focuses on developing an informative and dynamic
                website for Esportligaen. Built with WordPress, PHP, SASS, and
                JavaScript, the website provides a smooth and visually appealing
                experience for players, teams, and partners alike.
              </p>
              <p className="mt-5">
                The Esportligaen website serves as a digital hub for Danish
                esports, offering easy access to league schedules, standings,
                and registration details. It showcases multiple divisions such
                as School, Oldboys, and Workplace Leagues, each designed to
                create fair and engaging competition for everyone involved.
              </p>
              <p className="mt-5">
                Through a combination of modern web development and a strong
                community focus, Esportligaen ensures that every player feels
                part of something bigger. From grassroots gamers to experienced
                teams, the platform reflects the league’s mission to make
                esports accessible, organized, and socially enriching across
                Denmark.
              </p>

              <h4 className="mb-4 mt-10 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Conclusion
              </h4>
              <p className="">
                In conclusion, the Esportligaen project aims to deliver a modern
                and engaging website that embodies the league’s dedication to
                community-driven esports. With a robust foundation built on
                WordPress, PHP, SASS, and JavaScript, the site offers an
                intuitive interface and reliable performance.
              </p>
              <p className="mt-5">
                By combining creative design with functional structure, the
                website provides players, schools, and organizations with the
                tools they need to participate, compete, and connect.
                Esportligaen stands as a testament to how technology and gaming
                can come together to strengthen teamwork and inclusion.
              </p>
              <p className="mt-5">
                We invite you to explore the Esportligaen platform and
                experience how esports can inspire collaboration, skill
                development, and a shared sense of community across Denmark.
              </p>

              <div className="mt-10 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Erp Gruppen Demo"
                  href="https://Esportligaen.dk/"
                  target={"_blank"}
                >
                  Visit Website
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
