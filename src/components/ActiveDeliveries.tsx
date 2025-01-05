import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import HorizontalBarChartXS from "./HorizontalBarChartXS";
import HorizontalBarChartS from "./HorizontalBarChartS";
import HorizontalBarChartM from "./HorizontalBarChartM";
import HorizontalBarChartL from "./HorizontalBarChartL";
import HorizontalBarChartXL from "./HorizontalBarChartXL";
import styles from "./ActiveDeliveries.module.css";

export type ActiveDeliveriesType = {
  className?: string;
};

const ActiveDeliveries: FunctionComponent<ActiveDeliveriesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.activeDeliveries, className].join(" ")}>
      <h1 className={styles.activeDeliveries1}>Active Deliveries</h1>
      <div className={styles.activeDeliveriesChild} />
      <div className={styles.resize}>
        <div className={styles.vertical} />
        <div className={styles.vertical}>
          <HorizontalBarChartXS />
        </div>
        <div className={styles.horizontal1}>
          <HorizontalBarChartS />
        </div>
        <div className={styles.horizontal2}>
          <HorizontalBarChartM />
        </div>
        <div className={styles.horizontal3}>
          <HorizontalBarChartL />
        </div>
        <div className={styles.horizontal4}>
          <HorizontalBarChartXL />
        </div>
      </div>
    </div>
  );
};

export default ActiveDeliveries;
