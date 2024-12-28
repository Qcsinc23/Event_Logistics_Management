import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Name1 from "./Name1";
import Dataset from "./Dataset";
import styles from "./DoughnutChartL.module.css";

export type DoughnutChartLType = {
  className?: string;
};

const DoughnutChartL: FunctionComponent<DoughnutChartLType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.doughnutChartL, className].join(" ")}>
      <div className={styles.barchartL}>
        <Name1
          nameTop="18.2px"
          nameLeft="45.95%"
          nameOverflow="unset"
          nameWidth="9.67%"
          nameRight="44.38%"
          chartjsBarChart="Chart.js Doughnut Chart"
          chartjsBarChartWidth="47px"
          chartjsBarChartHeight="unset"
        />
        <div className={styles.datasetParent}>
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="90.68%"
            datasetBottom="unset"
            datasetLeft="0%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#00e893"
            dataset1="Red"
            dataset1Width="7px"
            dataset1Height="unset"
          />
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="73.5%"
            datasetBottom="unset"
            datasetLeft="16.89%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#1a3e59"
            dataset1="Blue"
            dataset1Width="8px"
            dataset1Height="unset"
          />
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="55.26%"
            datasetBottom="unset"
            datasetLeft="34.27%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#4caf50"
            dataset1="Yellow"
            dataset1Width="11px"
            dataset1Height="unset"
          />
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="37.17%"
            datasetBottom="unset"
            datasetLeft="52.65%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Green"
            dataset1Width="10px"
            dataset1Height="unset"
          />
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="18.78%"
            datasetBottom="unset"
            datasetLeft="70.75%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Purple"
            dataset1Width="11px"
            dataset1Height="unset"
          />
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="0.03%"
            datasetBottom="unset"
            datasetLeft="89.22%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Orange"
            dataset1Width="12px"
            dataset1Height="unset"
          />
        </div>
        <div className={styles.barchartLChild} />
        <div className={styles.barchartLItem} />
        <div className={styles.barchartLInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.barchartLChild1} />
        <div className={styles.barchartLChild2} />
        <div className={styles.barchartLChild3} />
      </div>
    </div>
  );
};

export default DoughnutChartL;
