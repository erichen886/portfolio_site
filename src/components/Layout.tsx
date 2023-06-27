import React from "react";
import { PropsWithChildren } from "react";

type LayoutProps = {
  className?: string;
};

const Layout = ({
  children,
  className = "",
}: PropsWithChildren<LayoutProps>) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
