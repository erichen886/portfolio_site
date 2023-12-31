import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eric Chen | Projects",
  description: "Generated by create next app",
};

const Projects = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-stretch grow">
        <Layout className="pt-16 flex flex-col justify-stretch grow">
          Hello
        </Layout>
      </main>
    </>
  );
};

export default Projects;
