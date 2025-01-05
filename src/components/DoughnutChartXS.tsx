import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Name1 from "./Name1";
import Dataset from "./Dataset";
import styles from "./DoughnutChartXS.module.css";

export type DoughnutChartXSType = {
  className?: string;
};

const DoughnutChartXS: FunctionComponent<DoughnutChartXSType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.doughnutChartXs, className].join(" ")}>
      <div className={styles.barchartXs}>
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
        <Dataset
          datasetHeight="unset"
          datasetTop="38.3px"
          datasetRight="73.68%"
          datasetBottom="unset"
          datasetLeft="19.63%"
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
          datasetTop="38.3px"
          datasetRight="25%"
          datasetBottom="unset"
          datasetLeft="68.11%"
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
          datasetTop="52.3px"
          datasetRight="71.09%"
          datasetBottom="unset"
          datasetLeft="21.4%"
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
          datasetTop="66.3px"
          datasetRight="22.24%"
          datasetBottom="unset"
          datasetLeft="70.04%"
          datasetOverflow="unset"
          xSDatasetBarHeight="9.1px"
          xSDatasetBarWidth="21.3px"
          xSDatasetBarBackgroundColor="#ff6f3c"
          dataset1="Orange"
          dataset1Width="12px"
          dataset1Height="unset"
        />
        <Dataset
          datasetHeight="unset"
          datasetTop="66.3px"
          datasetRight="71.09%"
          datasetBottom="unset"
          datasetLeft="21.4%"
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
          datasetTop="52.3px"
          datasetRight="23.54%"
          datasetBottom="unset"
          datasetLeft="69.16%"
          datasetOverflow="unset"
          xSDatasetBarHeight="9.1px"
          xSDatasetBarWidth="21.3px"
          xSDatasetBarBackgroundColor="#ff6f3c"
          dataset1="Green"
          dataset1Width="10px"
          dataset1Height="unset"
        />
        <div className={styles.chartData} />
        <div className={styles.chartData1} />
        <div className={styles.chartData1} />
        <div className={styles.chartData3} />
        <div className={styles.chartData4} />
        <div className={styles.chartData3} />
        <div className={styles.chartData6} />
      </div>
    </div>
  );
};

export default DoughnutChartXS;
