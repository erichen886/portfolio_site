import React from "react";
import { CircleText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-16 flex items-center justify-center overflow-hidden">
      <div className="w-64 h-auto flex items-center justify-center relative">
        <CircleText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:erichen886@gmail.com"
          className="flex items-center justify-center absolute bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
