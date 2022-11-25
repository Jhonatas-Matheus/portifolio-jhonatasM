import React from "react";
import { StyledProgressBar } from "./StylesProgreesBar";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ProgressBar = ({ children, className }: Props) => {
  return (
    <>
      <StyledProgressBar className={className}>
        <div className="skill">
          <div className="outer">
            <div className="inner"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <circle cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
      </StyledProgressBar>
      {children}
    </>
  );
};

export default ProgressBar;
