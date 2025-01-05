import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Month.module.css";

export type MonthType = {
  className?: string;
  january?: string;

  /** Style props */
  monthWidth?: CSSProperties["width"];
  monthTop?: CSSProperties["top"];
  monthRight?: CSSProperties["right"];
  monthBottom?: CSSProperties["bottom"];
  monthLeft?: CSSProperties["left"];
  monthHeight?: CSSProperties["height"];
  januaryWidth?: CSSProperties["width"];
};

const Month: FunctionComponent<MonthType> = ({
  className = "",
  monthWidth,
  monthTop,
  monthRight,
  monthBottom,
  monthLeft,
  monthHeight,
  january,
  januaryWidth,
}) => {
  const monthStyle: CSSProperties = useMemo(() => {
    return {
      width: monthWidth,
      top: monthTop,
      right: monthRight,
      bottom: monthBottom,
      left: monthLeft,
      height: monthHeight,
    };
  }, [monthWidth, monthTop, monthRight, monthBottom, monthLeft, monthHeight]);

  const januaryStyle: CSSProperties = useMemo(() => {
    return {
      width: januaryWidth,
    };
  }, [januaryWidth]);

  return (
    <div className={[styles.month, className].join(" ")} style={monthStyle}>
      <div className={styles.january} style={januaryStyle}>
        {january}
      </div>
    </div>
  );
};

export default Month;
