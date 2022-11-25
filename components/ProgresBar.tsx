import React from "react";

type Props = {
  level?: "0%" | "25%" | "50%" | "75%" | "100%";
};

const ProgresBar = ({ level = "100%" }: Props) => {
  return (
    <>
      {level === "0%" && (
        <div className="w-64 h-[6px] mt-4 bg-black">
          <div className="h-[6px] w-[0] animate-progress-bar-0 bg-color-primary"></div>
        </div>
      )}
      {level === "25%" && (
        <div className="w-64 h-[6px] mt-4 bg-black">
          <div className="h-[6px] w-[25%] animate-progress-bar-25 bg-color-primary"></div>
        </div>
      )}
      {level === "50%" && (
        <div className="w-64 h-[6px] mt-4 bg-black">
          <div className="h-[6px] w-[50%] animate-progress-bar-50 bg-color-primary"></div>
        </div>
      )}
      {level === "75%" && (
        <div className="w-64 h-[6px] mt-4 bg-black">
          <div className="h-[6px] w-[75%] animate-progress-bar-75 bg-color-primary"></div>
        </div>
      )}
      {level === "100%" && (
        <div className="w-64 h-[6px] mt-4 bg-black">
          <div className="h-[6px] w-[100%] animate-progress-bar-100 bg-color-primary"></div>
        </div>
      )}
    </>
  );
};

export default ProgresBar;
