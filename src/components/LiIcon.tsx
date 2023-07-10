"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

// type LiProps = {
//   reference: HTMLLIElement;
// };

//TODO: look into  typing reference correctly
const LiIcon = ({ reference }: any) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <>
      <figure className="absolute left-0 -mt-1 stroke-dark">
        <svg
          className="-rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-primary stroke-1 fill-none"
          />
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-[5px] fill-light"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            className="animate-pulse stroke-1 fill-primary"
          />
        </svg>
      </figure>
    </>
  );
};

export default LiIcon;
