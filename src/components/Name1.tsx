import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Name1.module.css";

export type Name1Type = {
  className?: string;
  chartjsBarChart?: string;

  /** Style props */
  nameTop?: CSSProperties["top"];
  nameLeft?: CSSProperties["left"];
  nameOverflow?: CSSProperties["overflow"];
  nameWidth?: CSSProperties["width"];
  nameRight?: CSSProperties["right"];
  chartjsBarChartWidth?: CSSProperties["width"];
  chartjsBarChartHeight?: CSSProperties["height"];
};

const Name1: FunctionComponent<Name1Type> = ({
  className = "",
  nameTop,
  nameLeft,
  nameOverflow,
  nameWidth,
  nameRight,
  chartjsBarChart,
  chartjsBarChartWidth,
  chartjsBarChartHeight,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      top: nameTop,
      left: nameLeft,
      overflow: nameOverflow,
      width: nameWidth,
      right: nameRight,
    };
  }, [nameTop, nameLeft, nameOverflow, nameWidth, nameRight]);

  const chartjsBarChartStyle: CSSProperties = useMemo(() => {
    return {
      width: chartjsBarChartWidth,
      height: chartjsBarChartHeight,
    };
  }, [chartjsBarChartWidth, chartjsBarChartHeight]);

  return (
    <div className={[styles.name, className].join(" ")} style={nameStyle}>
      <div className={styles.chartjsBarChart} style={chartjsBarChartStyle}>
        {chartjsBarChart}
      </div>
    </div>
  );
};

export default Name1;
