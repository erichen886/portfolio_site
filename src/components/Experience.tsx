"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
type DetailsProps = {
  position: string;
  company: string;
  companyLink?: string;
  time: string;
  address?: string;
  work: string;
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize"
          >
            @ {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time}
          {address ? `| ${address}` : ""}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
// TODO: Fix the scroll animation progress
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 w-[4px] h-full bg-dark origin-top "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Front-End Software Engineer"
            company="stackupdesigns.com"
            companyLink="www.google.com"
            time="July 2021 - Present"
            work="Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Front-End Software Engineer"
            company="stackupdesigns.com"
            companyLink="www.google.com"
            time="July 2021 - Present"
            work="Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Front-End Software Engineer"
            company="stackupdesigns.com"
            companyLink="www.google.com"
            time="July 2021 - Present"
            work="Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Front-End Software Engineer"
            company="stackupdesigns.com"
            companyLink="www.google.com"
            time="July 2021 - Present"
            work="Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs.Collaborate with product manager and design team to develop UI and prototype for MVPs."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
