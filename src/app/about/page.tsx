import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
const About = () => {
  return (
    <>
      <Head>
        <title>Eric Chen | About Page</title>
        <meta name="description" content="any description here" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText text="Another slogan or moto" />
        </Layout>
      </main>
    </>
  );
};

export default About;
