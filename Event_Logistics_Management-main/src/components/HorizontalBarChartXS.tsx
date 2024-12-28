import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import NumberSmall from "./NumberSmall";
import Dataset from "./Dataset";
import Name1 from "./Name1";
import styles from "./HorizontalBarChartXS.module.css";

export type HorizontalBarChartXSType = {
  className?: string;
};

const HorizontalBarChartXS: FunctionComponent<HorizontalBarChartXSType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.horizontalBarChartXs, className].join(" ")}>
      <div className={styles.xSVerticalAxisParent}>
        <img
          className={styles.xSVerticalAxis}
          alt=""
          src="/x-s-vertical-axis.svg"
        />
        <img
          className={styles.xSValueAxis}
          loading="lazy"
          alt=""
          src="/vector-57.svg"
        />
        <img className={styles.frameChild} alt="" src="/vector-60.svg" />
        <img className={styles.frameItem} alt="" src="/vector-60.svg" />
        <img
          className={styles.monthSmallIcon}
          alt=""
          src="/month-small@2x.png"
        />
        <img
          className={styles.monthSmallIcon1}
          alt=""
          src="/month-small-1@2x.png"
        />
        <img
          className={styles.monthSmallIcon2}
          alt=""
          src="/month-small-2@2x.png"
        />
        <NumberSmall />
        <img className={styles.barIcon} alt="" src="/bar@2x.png" />
        <img className={styles.barIcon1} alt="" src="/bar-1@2x.png" />
        <img className={styles.barIcon2} alt="" src="/bar-2@2x.png" />
        <img className={styles.barIcon3} alt="" src="/bar-3@2x.png" />
        <div className={styles.datasetParent}>
          <Dataset dataset1="Dataset 1" />
          <Dataset
            datasetHeight="39.41%"
            datasetTop="60.59%"
            datasetRight="0%"
            datasetBottom="0%"
            datasetLeft="0%"
            datasetOverflow="hidden"
            xSDatasetBarHeight="10.6px"
            xSDatasetBarWidth="24.8px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Dataset 2"
            dataset1Width="19px"
            dataset1Height="unset"
          />
        </div>
        <Name1 chartjsBarChart="Chart.js Horizontal Bar Chart" />
      </div>
    </div>
  );
};

export default HorizontalBarChartXS;
