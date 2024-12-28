import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Dataset.module.css";

export type DatasetType = {
  className?: string;
  dataset1?: string;

  /** Style props */
  datasetHeight?: CSSProperties["height"];
  datasetTop?: CSSProperties["top"];
  datasetRight?: CSSProperties["right"];
  datasetBottom?: CSSProperties["bottom"];
  datasetLeft?: CSSProperties["left"];
  datasetOverflow?: CSSProperties["overflow"];
  xSDatasetBarHeight?: CSSProperties["height"];
  xSDatasetBarWidth?: CSSProperties["width"];
  xSDatasetBarBackgroundColor?: CSSProperties["backgroundColor"];
  dataset1Width?: CSSProperties["width"];
  dataset1Height?: CSSProperties["height"];
};

const Dataset: FunctionComponent<DatasetType> = ({
  className = "",
  datasetHeight,
  datasetTop,
  datasetRight,
  datasetBottom,
  datasetLeft,
  datasetOverflow,
  xSDatasetBarHeight,
  xSDatasetBarWidth,
  xSDatasetBarBackgroundColor,
  dataset1,
  dataset1Width,
  dataset1Height,
}) => {
  const datasetStyle: CSSProperties = useMemo(() => {
    return {
      height: datasetHeight,
      top: datasetTop,
      right: datasetRight,
      bottom: datasetBottom,
      left: datasetLeft,
      overflow: datasetOverflow,
    };
  }, [
    datasetHeight,
    datasetTop,
    datasetRight,
    datasetBottom,
    datasetLeft,
    datasetOverflow,
  ]);

  const xSDatasetBarStyle: CSSProperties = useMemo(() => {
    return {
      height: xSDatasetBarHeight,
      width: xSDatasetBarWidth,
      backgroundColor: xSDatasetBarBackgroundColor,
    };
  }, [xSDatasetBarHeight, xSDatasetBarWidth, xSDatasetBarBackgroundColor]);

  const dataset1Style: CSSProperties = useMemo(() => {
    return {
      width: dataset1Width,
      height: dataset1Height,
    };
  }, [dataset1Width, dataset1Height]);

  return (
    <div className={[styles.dataset, className].join(" ")} style={datasetStyle}>
      <div className={styles.xSDatasetBar} style={xSDatasetBarStyle} />
      <div className={styles.dataset1} style={dataset1Style}>
        {dataset1}
      </div>
    </div>
  );
};

export default Dataset;
