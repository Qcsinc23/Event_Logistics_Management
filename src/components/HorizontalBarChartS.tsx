import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Name1 from "./Name1";
import Month from "./Month";
import Number1 from "./Number1";
import Dataset from "./Dataset";
import styles from "./HorizontalBarChartS.module.css";

export type HorizontalBarChartSType = {
  className?: string;
};

const HorizontalBarChartS: FunctionComponent<HorizontalBarChartSType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.horizontalBarChartS, className].join(" ")}>
      <div className={styles.nameParent}>
        <Name1
          nameTop="21.2px"
          nameLeft="calc(50% - 32.3px)"
          nameOverflow="hidden"
          nameWidth="unset"
          nameRight="unset"
          chartjsBarChart="Chart.js Horizontal Bar Chart"
          chartjsBarChartWidth="65px"
          chartjsBarChartHeight="6px"
        />
        <img
          className={styles.sVerticalAxis}
          alt=""
          src="/s-vertical-axis.svg"
        />
        <img className={styles.sValueAxis} alt="" src="/s-value-axis.svg" />
        <img className={styles.frameChild} alt="" src="/vector-77.svg" />
        <img className={styles.frameItem} alt="" src="/vector-64.svg" />
        <img
          className={styles.sVerticalGrid}
          alt=""
          src="/s-vertical-grid.svg"
        />
        <img className={styles.sMonthTick} alt="" src="/s-month-tick.svg" />
        <Month january="January" />
        <Month
          monthWidth="1.59%"
          monthTop="36.21%"
          monthRight="80.62%"
          monthBottom="62.32%"
          monthLeft="17.79%"
          monthHeight="1.47%"
          january="April"
          januaryWidth="9px"
        />
        <Month
          monthWidth="1.41%"
          monthTop="43.53%"
          monthRight="80.8%"
          monthBottom="55%"
          monthLeft="17.79%"
          monthHeight="1.47%"
          january="July"
          januaryWidth="8px"
        />
        <Number1 sValueTick="-1 000" />
        <Number1
          numberHeight="1.47%"
          numberWidth="0.53%"
          numberTop="51.56%"
          numberRight="43.66%"
          numberBottom="46.97%"
          numberLeft="55.81%"
          sValueTick="0"
          sValueTickHeight="unset"
          sValueTickWidth="unset"
          sValueTickDisplay="unset"
        />
        <Number1
          numberHeight="1.47%"
          numberWidth="1.94%"
          numberTop="51.76%"
          numberRight="15.53%"
          numberBottom="46.76%"
          numberLeft="82.53%"
          sValueTick="1 000"
          sValueTickHeight="unset"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <img className={styles.barIcon} alt="" src="/bar-4@2x.png" />
        <img className={styles.barIcon1} alt="" src="/bar-5@2x.png" />
        <img className={styles.barIcon2} alt="" src="/bar-6@2x.png" />
        <img className={styles.barIcon3} alt="" src="/bar-7@2x.png" />
        <img className={styles.barIcon4} alt="" src="/bar-8@2x.png" />
        <img className={styles.barIcon5} alt="" src="/bar-9@2x.png" />
        <img className={styles.barIcon6} alt="" src="/bar-10@2x.png" />
        <img className={styles.barIcon7} alt="" src="/bar-11@2x.png" />
        <img className={styles.barIcon8} alt="" src="/bar-12@2x.png" />
        <img className={styles.barIcon9} alt="" src="/bar-13@2x.png" />
        <img className={styles.barIcon10} alt="" src="/bar-14@2x.png" />
        <img className={styles.barIcon11} alt="" src="/bar-15@2x.png" />
        <img className={styles.barIcon12} alt="" src="/bar-16@2x.png" />
        <img className={styles.barIcon13} alt="" src="/bar-17@2x.png" />
        <div className={styles.datasetParent}>
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

export default HorizontalBarChartS;
