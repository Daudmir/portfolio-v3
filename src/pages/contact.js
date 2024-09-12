import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

// Netlify Form config

export default function About() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Handle success, e.g., redirect to a thank you page
        router.push("/thanks");
      } else {
        // Handle error
        console.error("Form submission failed!", response);
      }
    } catch (error) {
      // Handle error
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-5 -z-10 h-[103%] w-[101.5%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
              <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark dark:text-primaryDark">
                What’s Next?
              </h2>

              <div className="w-full"></div>
              <p className="">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out! I'll do my best to get back to you promptly. Looking forward to hearing from you!
              </p>
            </div>
            <div className="relative col-span-4 h-max xl:col-span-4 md:col-span-8 md:order-2">
              <div className="grid w-full grid-cols-2 sm:gap-6 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border  border-solid  border-dark bg-light p-6   dark:border-light dark:bg-dark xs:p-4">
                <div className="col-span-8 h-max xl:col-span-6 md:col-span-8 md:order-2">
                  <form
                    name="contact-form"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-form"
                    />
                    <p className="hidden">
                      <label>
                        Name
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark dark:text-light">
                        Your Name:
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                        Your Email:
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="off"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark/75 dark:text-light/75"
                      >
                        Message:
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows="4"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        ></textarea>
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <a
                        href="mailto:daudm.dev@gmail.com"  
                        className="px-4 py-2 font-bold capitalize text-light bg-dark border border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light dark:hover:bg-dark dark:text-dark dark:hover:text-light"
                      >
                        Send it!
                      </a>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
