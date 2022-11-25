import styled from "styled-components";

export const StyledProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  .skill {
    position: relative;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    .outer {
      width: 100%;
      height: 100%;
      border-radius: 50%;

      padding: 8px;
      .inner {
        width: 120%;
        height: 120px;
        border-radius: 50%;
      }
    }
    svg {
      circle {
        fill: none;
        stroke: green;
        stroke-width: 8px;
        stroke-dasharray: 472;
        stroke-dashoffset: 472;
        animation: anim 2s linear forwards;
      }
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  @keyframes anim {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;
