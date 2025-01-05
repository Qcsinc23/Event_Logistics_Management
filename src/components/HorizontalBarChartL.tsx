import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Dataset from "./Dataset";
import Name1 from "./Name1";
import Month from "./Month";
import Number1 from "./Number1";
import styles from "./HorizontalBarChartL.module.css";

export type HorizontalBarChartLType = {
  className?: string;
};

const HorizontalBarChartL: FunctionComponent<HorizontalBarChartLType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.horizontalBarChartL, className].join(" ")}>
      <div className={styles.barChartParent}>
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
          className={styles.verticalAxisIcon}
          loading="lazy"
          alt=""
          src="/vector-72-2.svg"
        />
        <img
          className={styles.verticalAxisIcon1}
          alt=""
          src="/vector-74-2.svg"
        />
        <img
          className={styles.verticalAxisIcon2}
          alt=""
          src="/vector-77-2.svg"
        />
        <img
          className={styles.verticalAxisIcon3}
          alt=""
          src="/vector-78-1.svg"
        />
        <img
          className={styles.verticalAxisIcon4}
          alt=""
          src="/vector-82-1.svg"
        />
        <img
          className={styles.verticalAxisIcon5}
          alt=""
          src="/vector-64-2.svg"
        />
        <img
          className={styles.verticalAxisIcon6}
          alt=""
          src="/vector-65-2.svg"
        />
        <img
          className={styles.verticalAxisIcon7}
          alt=""
          src="/vector-66-2.svg"
        />
        <img
          className={styles.verticalAxisIcon8}
          alt=""
          src="/vector-67-1.svg"
        />
        <img
          className={styles.verticalAxisIcon9}
          alt=""
          src="/vector-68-1.svg"
        />
        <img
          className={styles.verticalAxisIcon10}
          alt=""
          src="/vertical-axis.svg"
        />
        <img
          className={styles.verticalAxisIcon11}
          alt=""
          src="/vertical-axis1.svg"
        />
        <img
          className={styles.verticalAxisIcon12}
          loading="lazy"
          alt=""
          src="/vector-71.svg"
        />
        <Month
          monthWidth="2.83%"
          monthTop="51.6px"
          monthRight="88.62%"
          monthBottom="unset"
          monthLeft="8.55%"
          monthHeight="unset"
          january="January"
          januaryWidth="16px"
        />
        <Month
          monthWidth="3%"
          monthTop="75.3px"
          monthRight="88.53%"
          monthBottom="unset"
          monthLeft="8.46%"
          monthHeight="unset"
          january="February"
          januaryWidth="17px"
        />
        <Month
          monthWidth="2.12%"
          monthTop="99.4px"
          monthRight="88.94%"
          monthBottom="unset"
          monthLeft="8.94%"
          monthHeight="unset"
          january="March"
          januaryWidth="12px"
        />
        <Month
          monthWidth="1.59%"
          monthTop="123.1px"
          monthRight="89.24%"
          monthBottom="unset"
          monthLeft="9.17%"
          monthHeight="unset"
          january="April"
          januaryWidth="9px"
        />
        <Month
          monthWidth="1.41%"
          monthTop="146.1px"
          monthRight="89.33%"
          monthBottom="unset"
          monthLeft="9.26%"
          monthHeight="unset"
          january="May"
          januaryWidth="8px"
        />
        <Month
          monthWidth="1.77%"
          monthTop="170.2px"
          monthRight="89.15%"
          monthBottom="unset"
          monthLeft="9.08%"
          monthHeight="unset"
          january="June"
          januaryWidth="10px"
        />
        <Month
          monthWidth="1.41%"
          monthTop="193.9px"
          monthRight="89.29%"
          monthBottom="unset"
          monthLeft="9.29%"
          monthHeight="unset"
          january="July"
          januaryWidth="8px"
        />
        <Number1
          numberHeight="unset"
          numberWidth="2.12%"
          numberTop="224.3px"
          numberRight="83.16%"
          numberBottom="unset"
          numberLeft="14.72%"
          sValueTick="-1 000"
          sValueTickHeight="unset"
          sValueTickWidth="12px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="0.53%"
          numberTop="224.3px"
          numberRight="54.89%"
          numberBottom="unset"
          numberLeft="44.58%"
          sValueTick="0"
          sValueTickHeight="unset"
          sValueTickWidth="unset"
          sValueTickDisplay="unset"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.41%"
          numberTop="224.3px"
          numberRight="40%"
          numberBottom="unset"
          numberLeft="58.59%"
          sValueTick="600"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.41%"
          numberTop="224.3px"
          numberRight="68.98%"
          numberBottom="unset"
          numberLeft="29.61%"
          sValueTick="600"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.94%"
          numberTop="224.3px"
          numberRight="25.19%"
          numberBottom="unset"
          numberLeft="72.86%"
          sValueTick="1 000"
          sValueTickHeight="unset"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <img className={styles.barIcon} alt="" src="/bar-30@2x.png" />
        <img className={styles.barIcon1} alt="" src="/bar-31@2x.png" />
        <img className={styles.barIcon2} alt="" src="/bar-32@2x.png" />
        <img className={styles.barIcon3} alt="" src="/bar-33@2x.png" />
        <img className={styles.barIcon4} alt="" src="/bar-34@2x.png" />
        <img className={styles.barIcon5} alt="" src="/bar-35@2x.png" />
        <img className={styles.barIcon6} alt="" src="/bar-36@2x.png" />
        <img className={styles.barIcon7} alt="" src="/bar-37@2x.png" />
        <img className={styles.barIcon8} alt="" src="/bar-38@2x.png" />
        <img className={styles.barIcon9} alt="" src="/bar-39@2x.png" />
        <img className={styles.barIcon10} alt="" src="/bar-40@2x.png" />
        <img className={styles.barIcon11} alt="" src="/bar-41@2x.png" />
        <img className={styles.barIcon12} alt="" src="/bar-42@2x.png" />
        <img className={styles.barIcon13} alt="" src="/bar-43@2x.png" />
      </div>
    </div>
  );
};

export default HorizontalBarChartL;
