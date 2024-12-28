import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Name1 from "./Name1";
import Dataset from "./Dataset";
import styles from "./DoughnutChartS.module.css";

export type DoughnutChartSType = {
  className?: string;
};

const DoughnutChartS: FunctionComponent<DoughnutChartSType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.doughnutChartS, className].join(" ")}>
      <div className={styles.barchartS}>
        <Name1
          nameTop="18.2px"
          nameLeft="46.67%"
          nameOverflow="unset"
          nameWidth="7%"
          nameRight="46.34%"
          chartjsBarChart="Chart.js Pie Chart"
          chartjsBarChartWidth="34px"
          chartjsBarChartHeight="unset"
        />
        <div className={styles.datasets}>
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="88.93%"
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
            datasetRight="45.59%"
            datasetBottom="unset"
            datasetLeft="43%"
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
            datasetRight="0%"
            datasetBottom="unset"
            datasetLeft="87.57%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#4caf50"
            dataset1="Yellow"
            dataset1Width="11px"
            dataset1Height="unset"
          />
        </div>
        <Dataset
          datasetHeight="unset"
          datasetTop="71.1px"
          datasetRight="46.07%"
          datasetBottom="unset"
          datasetLeft="46.21%"
          datasetOverflow="unset"
          xSDatasetBarHeight="9.1px"
          xSDatasetBarWidth="21.3px"
          xSDatasetBarBackgroundColor="#ff6f3c"
          dataset1="Orange"
          dataset1Width="12px"
          dataset1Height="unset"
        />
        <div className={styles.datasetParent}>
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="0%"
            datasetBottom="unset"
            datasetLeft="78.74%"
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
            datasetRight="79.32%"
            datasetBottom="unset"
            datasetLeft="0%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Green"
            dataset1Width="10px"
            dataset1Height="unset"
          />
        </div>
        <div className={styles.barchartSChild} />
        <div className={styles.barchartSItem} />
        <div className={styles.barchartSInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.barchartSChild1} />
        <div className={styles.barchartSChild2} />
        <div className={styles.barchartSChild3} />
      </div>
    </div>
  );
};

export default DoughnutChartS;
