import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import DoughnutChartXS from "./DoughnutChartXS";
import DoughnutChartS from "./DoughnutChartS";
import DoughnutChartM from "./DoughnutChartM";
import DoughnutChartL from "./DoughnutChartL";
import DoughnutChartXL from "./DoughnutChartXL";
import styles from "./ResourceUtilization.module.css";

export type ResourceUtilizationType = {
  className?: string;
};

const ResourceUtilization: FunctionComponent<ResourceUtilizationType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.resourceUtilization, className].join(" ")}>
      <h1 className={styles.resourceUtilization1}>Resource Utilization</h1>
      <div className={styles.utilizationBackground} />
      <div className={styles.resize}>
        <div className={styles.vertical}>
          <div className={styles.horizontal}>
            <DoughnutChartXS />
          </div>
          <div className={styles.horizontal1}>
            <DoughnutChartS />
          </div>
          <div className={styles.horizontal2}>
            <DoughnutChartM />
          </div>
          <div className={styles.horizontal3}>
            <DoughnutChartL />
          </div>
          <div className={styles.horizontal4}>
            <DoughnutChartXL />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceUtilization;
