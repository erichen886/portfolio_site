import React from "react";

type ATProps = {
  text: string;
  className: string;
};

const AnimatedText = ({ text, className = "" }: ATProps) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`inline-block w-full text-dark font-bold capitalize  ${className}`}
      >
        {text.split(" ").map((word, idx) => (
          <span key={word + "-" + idx}>{word}&nbsp;</span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
