import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col bg-pink-400 min-w-full-vw min-h-full-vh overflow-x-hidden">
      {children}
    </div>
  );
};

export default Container;
