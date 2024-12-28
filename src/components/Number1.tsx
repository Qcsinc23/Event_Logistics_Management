import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Number1.module.css";

export type Number1Type = {
  className?: string;
  sValueTick?: string;

  /** Style props */
  numberHeight?: CSSProperties["height"];
  numberWidth?: CSSProperties["width"];
  numberTop?: CSSProperties["top"];
  numberRight?: CSSProperties["right"];
  numberBottom?: CSSProperties["bottom"];
  numberLeft?: CSSProperties["left"];
  sValueTickHeight?: CSSProperties["height"];
  sValueTickWidth?: CSSProperties["width"];
  sValueTickDisplay?: CSSProperties["display"];
};

const Number1: FunctionComponent<Number1Type> = ({
  className = "",
  numberHeight,
  numberWidth,
  numberTop,
  numberRight,
  numberBottom,
  numberLeft,
  sValueTick,
  sValueTickHeight,
  sValueTickWidth,
  sValueTickDisplay,
}) => {
  const numberStyle: CSSProperties = useMemo(() => {
    return {
      height: numberHeight,
      width: numberWidth,
      top: numberTop,
      right: numberRight,
      bottom: numberBottom,
      left: numberLeft,
    };
  }, [
    numberHeight,
    numberWidth,
    numberTop,
    numberRight,
    numberBottom,
    numberLeft,
  ]);

  const sValueTickStyle: CSSProperties = useMemo(() => {
    return {
      height: sValueTickHeight,
      width: sValueTickWidth,
      display: sValueTickDisplay,
    };
  }, [sValueTickHeight, sValueTickWidth, sValueTickDisplay]);

  return (
    <div className={[styles.number, className].join(" ")} style={numberStyle}>
      <div className={styles.sValueTick} style={sValueTickStyle}>
        {sValueTick}
      </div>
    </div>
  );
};

export default Number1;
