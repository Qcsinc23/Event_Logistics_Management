import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Name1 from "./Name1";
import Dataset from "./Dataset";
import styles from "./DoughnutChartXL.module.css";

export type DoughnutChartXLType = {
  className?: string;
};

const DoughnutChartXL: FunctionComponent<DoughnutChartXLType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.doughnutChartXl, className].join(" ")}>
      <div className={styles.barchartXl}>
        <Name1
          nameTop="18.2px"
          nameLeft="45.12%"
          nameOverflow="unset"
          nameWidth="9.67%"
          nameRight="45.21%"
          chartjsBarChart="Chart.js Doughnut Chart"
          chartjsBarChartWidth="47px"
          chartjsBarChartHeight="unset"
        />
        <div className={styles.datasetParent}>
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="88.63%"
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
            datasetRight="71.84%"
            datasetBottom="unset"
            datasetLeft="16.44%"
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
            datasetRight="53.93%"
            datasetBottom="unset"
            datasetLeft="33.3%"
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
            datasetRight="36.31%"
            datasetBottom="unset"
            datasetLeft="51.28%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ffeb3b"
            dataset1="Green"
            dataset1Width="10px"
            dataset1Height="unset"
          />
          <Dataset
            datasetHeight="unset"
            datasetTop="0px"
            datasetRight="18.33%"
            datasetBottom="unset"
            datasetLeft="68.91%"
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
            datasetLeft="86.88%"
            datasetOverflow="unset"
            xSDatasetBarHeight="9.1px"
            xSDatasetBarWidth="21.3px"
            xSDatasetBarBackgroundColor="#ff6f3c"
            dataset1="Orange"
            dataset1Width="12px"
            dataset1Height="unset"
          />
        </div>
        <div className={styles.barchartXlChild} />
        <div className={styles.barchartXlItem} />
        <div className={styles.barchartXlInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.barchartXlChild1} />
        <div className={styles.barchartXlChild2} />
        <div className={styles.barchartXlChild3} />
      </div>
    </div>
  );
};

export default DoughnutChartXL;
