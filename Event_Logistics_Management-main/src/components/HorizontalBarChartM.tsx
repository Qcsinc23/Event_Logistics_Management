import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Name1 from "./Name1";
import Month from "./Month";
import Number1 from "./Number1";
import Dataset from "./Dataset";
import styles from "./HorizontalBarChartM.module.css";

export type HorizontalBarChartMType = {
  className?: string;
};

const HorizontalBarChartM: FunctionComponent<HorizontalBarChartMType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.horizontalBarChartM, className].join(" ")}>
      <div className={styles.nameParent}>
        <Name1
          nameTop="21.2px"
          nameLeft="calc(50% - 32.5px)"
          nameOverflow="hidden"
          nameWidth="unset"
          nameRight="unset"
          chartjsBarChart="Chart.js Horizontal Bar Chart"
          chartjsBarChartWidth="65px"
          chartjsBarChartHeight="6px"
        />
        <img
          className={styles.mVerticalAxis}
          loading="lazy"
          alt=""
          src="/vector-72-1.svg"
        />
        <img className={styles.mValueAxis} alt="" src="/vector-74-1.svg" />
        <img className={styles.frameChild} alt="" src="/vector-77-1.svg" />
        <img className={styles.frameItem} alt="" src="/vector-78.svg" />
        <img
          className={styles.mVerticalGrid}
          alt=""
          src="/m-vertical-grid.svg"
        />
        <img className={styles.mMonthTick} alt="" src="/vector-64-1.svg" />
        <img className={styles.mMonthLabel} alt="" src="/vector-65-1.svg" />
        <img className={styles.mMonthGrid} alt="" src="/vector-66-1.svg" />
        <img className={styles.frameInner} alt="" src="/vector-67.svg" />
        <img
          className={styles.mValueLabel}
          loading="lazy"
          alt=""
          src="/vector-68.svg"
        />
        <Month
          monthWidth="2.83%"
          monthTop="16.09%"
          monthRight="91.13%"
          monthBottom="82.44%"
          monthLeft="6.04%"
          monthHeight="1.47%"
          january="January"
          januaryWidth="16px"
        />
        <Month
          monthWidth="2.12%"
          monthTop="23.38%"
          monthRight="91.54%"
          monthBottom="75.15%"
          monthLeft="6.34%"
          monthHeight="1.47%"
          january="March"
          januaryWidth="12px"
        />
        <Month
          monthWidth="1.41%"
          monthTop="30.82%"
          monthRight="91.84%"
          monthBottom="67.71%"
          monthLeft="6.75%"
          monthHeight="1.47%"
          january="May"
          januaryWidth="8px"
        />
        <Month
          monthWidth="1.41%"
          monthTop="38.12%"
          monthRight="91.89%"
          monthBottom="60.41%"
          monthLeft="6.7%"
          monthHeight="1.47%"
          january="July"
          januaryWidth="8px"
        />
        <Number1
          numberHeight="1.47%"
          numberWidth="2.12%"
          numberTop="45.53%"
          numberRight="84.15%"
          numberBottom="53%"
          numberLeft="13.73%"
          sValueTick="-1 000"
          sValueTickHeight="unset"
          sValueTickWidth="12px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="1.47%"
          numberWidth="0.53%"
          numberTop="45.53%"
          numberRight="56.04%"
          numberBottom="53%"
          numberLeft="43.43%"
          sValueTick="0"
          sValueTickHeight="unset"
          sValueTickWidth="unset"
          sValueTickDisplay="unset"
        />
        <Number1
          numberHeight="1.47%"
          numberWidth="1.41%"
          numberTop="45.53%"
          numberRight="41.17%"
          numberBottom="53%"
          numberLeft="57.42%"
          sValueTick="600"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="1.47%"
          numberWidth="1.41%"
          numberTop="45.53%"
          numberRight="70.02%"
          numberBottom="53%"
          numberLeft="28.57%"
          sValueTick="600"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="1.47%"
          numberWidth="1.94%"
          numberTop="45.53%"
          numberRight="26.48%"
          numberBottom="53%"
          numberLeft="71.57%"
          sValueTick="1 000"
          sValueTickHeight="unset"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <img className={styles.barIcon} alt="" src="/bar-18@2x.png" />
        <img className={styles.barIcon1} alt="" src="/bar-19@2x.png" />
        <img className={styles.barIcon2} alt="" src="/bar-20@2x.png" />
        <img className={styles.barIcon3} alt="" src="/bar-21@2x.png" />
        <img className={styles.barIcon4} alt="" src="/bar-22@2x.png" />
        <img className={styles.barIcon5} alt="" src="/bar-23@2x.png" />
        <img className={styles.barIcon6} alt="" src="/bar-24@2x.png" />
        <img className={styles.barIcon7} alt="" src="/bar-25@2x.png" />
        <img className={styles.barIcon8} alt="" src="/bar-26@2x.png" />
        <img className={styles.barIcon9} alt="" src="/bar-27@2x.png" />
        <img className={styles.barIcon10} alt="" src="/bar-28@2x.png" />
        <img className={styles.barIcon11} alt="" src="/bar-29@2x.png" />
        <div className={styles.barChart}>
          <Dataset
            datasetHeight="39.41%"
            datasetTop="0%"
            datasetRight="0%"
            datasetBottom="60.59%"
            datasetLeft="0%"
            datasetOverflow="hidden"
            xSDatasetBarHeight="10.6px"
            xSDatasetBarWidth="24.8px"
            xSDatasetBarBackgroundColor="#1a3e59"
            dataset1="Dataset 1"
            dataset1Width="19px"
            dataset1Height="unset"
          />
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
      </div>
    </div>
  );
};

export default HorizontalBarChartM;
