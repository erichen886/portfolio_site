import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { Metadata } from "next";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Eric Chen | About",
  description: "Generated by create next app",
};

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-stretch grow">
        <Layout className="pt-16 flex flex-col justify-stretch grow">
          <AnimatedText text="Another slogan or moto" className="text-6xl" />
          <div className="grid w-full grid-cols-8 gap-4 justify-stretch grow">
            <div className="col-span-3 flex flex-col items-start justify-start p-4 self-center">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Intro paragraph here. A little about myself.Intro paragraph
                here. A little about myself.Intro paragraph here. A little about
                myself.Intro paragraph here. A little about myself.Intro
                paragraph here. A little about myself.
              </p>
              <p className="font-medium my-4">
                Beliefs or fun stuff I do. Beliefs or fun stuff I do. Beliefs or
                fun stuff I do. Beliefs or fun stuff I do. Beliefs or fun stuff
                I do. Beliefs or fun stuff I do.{" "}
              </p>
              <p className="font-medium">
                CTA stuff here.CTA stuff here.CTA stuff here.CTA stuff here.CTA
                stuff here.CTA stuff here.
              </p>
            </div>
            <div className="col-span- relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 self-center">
              {/* TODO: add a profile pic */}
              <div className="absolute top-3 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              {/* <Image
              src={}
              alt="Eric CHen"
              className="w-full h-auto rounded-2xl"
            /> */}
              PICTURE HERE
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
