import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./DeliveryPerformance.module.css";

export type DeliveryPerformanceType = {
  className?: string;
};

const DeliveryPerformance: FunctionComponent<DeliveryPerformanceType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.deliveryPerformance, className].join(" ")}>
      <div className={styles.performanceMetrics} />
      <h2 className={styles.deliveryPerformance1}>Delivery Performance</h2>
      <div className={styles.chartResize} />
      <div className={styles.onTime}>On-time</div>
      <div className={styles.averageDeliveryTime}>Average Delivery Time</div>
      <div className={styles.delayed}>Delayed</div>
      <div className={styles.div}>55</div>
      <div className={styles.mins}>
        <span className={styles.minsTxt}>
          <span className={styles.span}>{`45 `}</span>
          <span className={styles.mins1}>Mins</span>
        </span>
      </div>
      <div className={styles.div1}>15</div>
    </div>
  );
};

export default DeliveryPerformance;
