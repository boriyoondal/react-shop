import React from "react";
import { css, Theme } from "@emotion/react";
import { CircularProgress } from "@material-ui/core";

const Spinner = () => {
  return (
    <div css={container}>
      <CircularProgress
        style={{
          opacity: "none",
          color: "#0d6efd",
        }}
      />
    </div>
  );
};

export default Spinner;

export const container = (theme: Theme) => css`
  background-color: rgba(85, 144, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
