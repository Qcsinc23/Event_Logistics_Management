import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Dataset from "./Dataset";
import Name1 from "./Name1";
import Month from "./Month";
import Number1 from "./Number1";
import Bar from "./Bar";
import styles from "./HorizontalBarChartXL.module.css";

export type HorizontalBarChartXLType = {
  className?: string;
};

const HorizontalBarChartXL: FunctionComponent<HorizontalBarChartXLType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.horizontalBarChartXl, className].join(" ")}>
      <div className={styles.barChartParent}>
        <div className={styles.barChart}>
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="0%"
            datasetBottom="unset"
            datasetLeft="0%"
            datasetOverflow="unset"
            xSDatasetBarHeight="10.6px"
            xSDatasetBarWidth="24.8px"
            xSDatasetBarBackgroundColor="#1a3e59"
            dataset1="Dataset 1"
            dataset1Width="19px"
            dataset1Height="unset"
          />
          <Dataset
            datasetHeight="unset"
            datasetTop="16.3px"
            datasetRight="0%"
            datasetBottom="unset"
            datasetLeft="0%"
            datasetOverflow="unset"
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
          nameOverflow="unset"
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
          src="/vector-72-3.svg"
        />
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/vector-73.svg"
        />
        <img className={styles.frameItem} alt="" src="/vector-74-3.svg" />
        <img className={styles.frameInner} alt="" src="/vector-75.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-76.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-77-3.svg" />
        <img className={styles.frameChild2} alt="" src="/vector-78-2.svg" />
        <img className={styles.frameChild3} alt="" src="/vector-79.svg" />
        <img className={styles.frameChild4} alt="" src="/vector-72-3.svg" />
        <img className={styles.frameChild5} alt="" src="/vector-73.svg" />
        <img className={styles.frameChild6} alt="" src="/vector-74-3.svg" />
        <img className={styles.frameChild7} alt="" src="/vector-64-3.svg" />
        <img className={styles.frameChild8} alt="" src="/vector-65-3.svg" />
        <img className={styles.frameChild9} alt="" src="/vector-66-3.svg" />
        <img className={styles.frameChild10} alt="" src="/vector-67-2.svg" />
        <img className={styles.frameChild11} alt="" src="/vector-68-2.svg" />
        <img className={styles.frameChild12} alt="" src="/vector-69-1.svg" />
        <img className={styles.frameChild13} alt="" src="/vector-64-3.svg" />
        <img
          className={styles.frameChild14}
          loading="lazy"
          alt=""
          src="/vector-71-1.svg"
        />
        <Month
          monthWidth="2.83%"
          monthTop="55.5px"
          monthRight="90.74%"
          monthBottom="unset"
          monthLeft="6.43%"
          monthHeight="unset"
          january="January"
          januaryWidth="16px"
        />
        <Month
          monthWidth="3%"
          monthTop="87.4px"
          monthRight="90.65%"
          monthBottom="unset"
          monthLeft="6.34%"
          monthHeight="unset"
          january="February"
          januaryWidth="17px"
        />
        <Month
          monthWidth="2.12%"
          monthTop="119.2px"
          monthRight="91.06%"
          monthBottom="unset"
          monthLeft="6.82%"
          monthHeight="unset"
          january="March"
          januaryWidth="12px"
        />
        <Month
          monthWidth="1.59%"
          monthTop="151.1px"
          monthRight="91.36%"
          monthBottom="unset"
          monthLeft="7.05%"
          monthHeight="unset"
          january="April"
          januaryWidth="9px"
        />
        <Month
          monthWidth="1.41%"
          monthTop="182.9px"
          monthRight="91.45%"
          monthBottom="unset"
          monthLeft="7.14%"
          monthHeight="unset"
          january="May"
          januaryWidth="8px"
        />
        <Month
          monthWidth="1.77%"
          monthTop="214.7px"
          monthRight="91.27%"
          monthBottom="unset"
          monthLeft="6.96%"
          monthHeight="unset"
          january="June"
          januaryWidth="10px"
        />
        <Month
          monthWidth="1.41%"
          monthTop="246.6px"
          monthRight="91.41%"
          monthBottom="unset"
          monthLeft="7.17%"
          monthHeight="unset"
          january="July"
          januaryWidth="8px"
        />
        <Number1
          numberHeight="unset"
          numberWidth="2.12%"
          numberTop="286.5px"
          numberRight="86.17%"
          numberBottom="unset"
          numberLeft="11.71%"
          sValueTick="-1 000"
          sValueTickHeight="unset"
          sValueTickWidth="12px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.59%"
          numberTop="286.5px"
          numberRight="80.18%"
          numberBottom="unset"
          numberLeft="18.23%"
          sValueTick="-800"
          sValueTickHeight="unset"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.59%"
          numberTop="286.5px"
          numberRight="73.92%"
          numberBottom="unset"
          numberLeft="24.49%"
          sValueTick="-600"
          sValueTickHeight="unset"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.59%"
          numberTop="286.5px"
          numberRight="67.67%"
          numberBottom="unset"
          numberLeft="30.74%"
          sValueTick="-400"
          sValueTickHeight="unset"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.59%"
          numberTop="286.5px"
          numberRight="61.43%"
          numberBottom="unset"
          numberLeft="36.98%"
          sValueTick="-200"
          sValueTickHeight="unset"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="0.53%"
          numberTop="286.5px"
          numberRight="55.71%"
          numberBottom="unset"
          numberLeft="43.76%"
          sValueTick="0"
          sValueTickHeight="unset"
          sValueTickWidth="unset"
          sValueTickDisplay="unset"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.41%"
          numberTop="286.5px"
          numberRight="49.01%"
          numberBottom="unset"
          numberLeft="49.58%"
          sValueTick="200"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.41%"
          numberTop="286.5px"
          numberRight="42.76%"
          numberBottom="unset"
          numberLeft="55.83%"
          sValueTick="400"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.41%"
          numberTop="286.5px"
          numberRight="36.52%"
          numberBottom="unset"
          numberLeft="62.07%"
          sValueTick="600"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.41%"
          numberTop="286.5px"
          numberRight="30.27%"
          numberBottom="unset"
          numberLeft="68.32%"
          sValueTick="800"
          sValueTickHeight="unset"
          sValueTickWidth="8px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="1.94%"
          numberTop="286.5px"
          numberRight="23.75%"
          numberBottom="unset"
          numberLeft="74.31%"
          sValueTick="1 000"
          sValueTickHeight="unset"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <img className={styles.barIcon} alt="" src="/bar-44@2x.png" />
        <img className={styles.barIcon1} alt="" src="/bar-45@2x.png" />
        <img className={styles.barIcon2} alt="" src="/bar-46@2x.png" />
        <img className={styles.barIcon3} alt="" src="/bar-47@2x.png" />
        <img className={styles.barIcon4} alt="" src="/bar-48@2x.png" />
        <img className={styles.barIcon5} alt="" src="/bar-49@2x.png" />
        <img className={styles.barIcon6} alt="" src="/bar-50@2x.png" />
        <img className={styles.barIcon7} alt="" src="/bar-51@2x.png" />
        <img className={styles.barIcon8} alt="" src="/bar-52@2x.png" />
        <img className={styles.barIcon9} alt="" src="/bar-53@2x.png" />
        <img className={styles.barIcon10} alt="" src="/bar-54@2x.png" />
        <img className={styles.barIcon11} alt="" src="/bar-55@2x.png" />
        <img className={styles.barIcon12} alt="" src="/bar-56@2x.png" />
        <Bar />
      </div>
    </div>
  );
};

export default HorizontalBarChartXL;
