import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import Name1 from "./Name1";
import Dataset from "./Dataset";
import Number1 from "./Number1";
import styles from "./DeliveryHeatmaps.module.css";

export type DeliveryHeatmapsType = {
  className?: string;
};

const DeliveryHeatmaps: FunctionComponent<DeliveryHeatmapsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.deliveryHeatmaps, className].join(" ")}>
      <h1 className={styles.deliveryHeatmaps1}>Delivery Heatmaps</h1>
      <div className={styles.deliveryHeatmapsChild} />
      <div className={styles.nameParent}>
        <Name1
          nameTop="calc(50% - 136.1px)"
          nameLeft="calc(50% + 28.5px)"
          nameOverflow="unset"
          nameWidth="unset"
          nameRight="unset"
          chartjsBarChart="Chart.js Scatter Chart"
          chartjsBarChartWidth="69px"
          chartjsBarChartHeight="8px"
        />
        <Dataset
          datasetHeight="unset"
          datasetTop="2px"
          datasetRight="unset"
          datasetBottom="unset"
          datasetLeft="calc(50% - 58.3px)"
          datasetOverflow="unset"
          xSDatasetBarHeight="15.1px"
          xSDatasetBarWidth="35.3px"
          xSDatasetBarBackgroundColor="#ff6f3c"
          dataset1="A dataset"
          dataset1Width="26px"
          dataset1Height="7px"
        />
        <img className={styles.frameChild} alt="" src="/vector-339.svg" />
        <img className={styles.frameItem} alt="" src="/vector-340.svg" />
        <img className={styles.frameInner} alt="" src="/vector-341.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-342.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-343.svg" />
        <img className={styles.frameChild2} alt="" src="/vector-344.svg" />
        <img className={styles.frameChild3} alt="" src="/vector-345.svg" />
        <img className={styles.frameChild4} alt="" src="/vector-346.svg" />
        <img className={styles.frameChild5} alt="" src="/vector-347.svg" />
        <img className={styles.frameChild6} alt="" src="/vector-348.svg" />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="42.4px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 182.8px)"
          sValueTick="100"
          sValueTickHeight="7px"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="77.7px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 179.8px)"
          sValueTick="50"
          sValueTickHeight="7px"
          sValueTickWidth="7px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="113px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 176.5px)"
          sValueTick="0"
          sValueTickHeight="7px"
          sValueTickWidth="unset"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="148.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 181.6px)"
          sValueTick="-50"
          sValueTickHeight="7px"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="183.6px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 184.8px)"
          sValueTick="-100"
          sValueTickHeight="7px"
          sValueTickWidth="12px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 151.5px)"
          sValueTick="-100"
          sValueTickHeight="7px"
          sValueTickWidth="12px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% - 67.6px)"
          sValueTick="-50"
          sValueTickHeight="7px"
          sValueTickWidth="9px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% + 18.1px)"
          sValueTick="0"
          sValueTickHeight="7px"
          sValueTickWidth="unset"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% + 95.6px)"
          sValueTick="50"
          sValueTickHeight="7px"
          sValueTickWidth="7px"
          sValueTickDisplay="inline-block"
        />
        <Number1
          numberHeight="unset"
          numberWidth="unset"
          numberTop="203.3px"
          numberRight="unset"
          numberBottom="unset"
          numberLeft="calc(50% + 173.3px)"
          sValueTick="100"
          sValueTickHeight="7px"
          sValueTickWidth="11px"
          sValueTickDisplay="inline-block"
        />
        <div className={styles.dot} />
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild7} />
        <div className={styles.frameChild8} />
        <div className={styles.frameChild9} />
        <div className={styles.frameChild10} />
        <div className={styles.frameChild11} />
        <div className={styles.frameChild12} />
        <div className={styles.frameChild13} />
        <div className={styles.frameChild14} />
        <div className={styles.frameChild15} />
        <div className={styles.frameChild16} />
        <div className={styles.frameChild17} />
        <div className={styles.frameChild18} />
        <div className={styles.frameChild19} />
        <div className={styles.frameChild20} />
        <div className={styles.frameChild21} />
        <div className={styles.frameChild22} />
        <div className={styles.frameChild23} />
        <div className={styles.frameChild24} />
        <div className={styles.frameChild25} />
        <div className={styles.frameChild26} />
        <div className={styles.frameChild27} />
        <div className={styles.frameChild28} />
        <div className={styles.frameChild29} />
        <div className={styles.frameChild30} />
        <div className={styles.frameChild31} />
        <div className={styles.frameChild32} />
        <div className={styles.frameChild33} />
        <div className={styles.frameChild34} />
        <div className={styles.frameChild35} />
        <div className={styles.frameChild36} />
        <div className={styles.frameChild37} />
        <div className={styles.frameChild38} />
        <div className={styles.frameChild39} />
        <div className={styles.frameChild40} />
        <div className={styles.frameChild41} />
        <div className={styles.frameChild42} />
        <div className={styles.frameChild43} />
        <div className={styles.frameChild44} />
        <div className={styles.frameChild45} />
        <div className={styles.frameChild46} />
        <div className={styles.frameChild47} />
        <div className={styles.frameChild48} />
        <div className={styles.frameChild49} />
        <div className={styles.frameChild50} />
        <div className={styles.frameChild51} />
        <div className={styles.frameChild52} />
        <div className={styles.frameChild53} />
        <div className={styles.frameChild54} />
        <div className={styles.frameChild55} />
        <div className={styles.frameChild56} />
        <div className={styles.frameChild57} />
        <div className={styles.frameChild58} />
        <div className={styles.frameChild59} />
        <div className={styles.frameChild60} />
        <div className={styles.frameChild61} />
        <div className={styles.frameChild62} />
        <div className={styles.frameChild63} />
        <div className={styles.frameChild64} />
        <div className={styles.frameChild65} />
        <div className={styles.frameChild66} />
        <div className={styles.frameChild67} />
      </div>
    </div>
  );
};

export default DeliveryHeatmaps;
