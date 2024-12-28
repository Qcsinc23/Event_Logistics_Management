import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Name1 from "./Name1";
import Dataset from "./Dataset";
import styles from "./DoughnutChartM.module.css";

export type DoughnutChartMType = {
  className?: string;
};

const DoughnutChartM: FunctionComponent<DoughnutChartMType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.doughnutChartM, className].join(" ")}>
      <div className={styles.barchartM}>
        <Name1
          nameTop="18.2px"
          nameLeft="46.6%"
          nameOverflow="unset"
          nameWidth="7%"
          nameRight="46.4%"
          chartjsBarChart="Chart.js Pie Chart"
          chartjsBarChartWidth="34px"
          chartjsBarChartHeight="unset"
        />
        <div className={styles.datasetParent}>
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="88.43%"
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
            datasetRight="60.04%"
            datasetBottom="unset"
            datasetLeft="28.03%"
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
            datasetRight="30.02%"
            datasetBottom="unset"
            datasetLeft="56.98%"
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
            datasetRight="0%"
            datasetBottom="unset"
            datasetLeft="87.36%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Green"
            dataset1Width="10px"
            dataset1Height="unset"
          />
        </div>
        <div className={styles.datasetGroup}>
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="70.47%"
            datasetBottom="unset"
            datasetLeft="0%"
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
            datasetRight="0%"
            datasetBottom="unset"
            datasetLeft="69.66%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Orange"
            dataset1Width="12px"
            dataset1Height="unset"
          />
        </div>
        <div className={styles.barchartMChild} />
        <div className={styles.barchartMItem} />
        <div className={styles.barchartMInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.barchartMChild1} />
        <div className={styles.barchartMChild2} />
        <div className={styles.barchartMChild3} />
      </div>
    </div>
  );
};

export default DoughnutChartM;
