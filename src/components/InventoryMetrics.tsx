import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./InventoryMetrics.module.css";

export type InventoryMetricsType = {
  className?: string;
};

const InventoryMetrics: FunctionComponent<InventoryMetricsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.inventoryMetrics, className].join(" ")}>
      <div className={styles.inventoryMetricsChild} />
      <h2 className={styles.inventoryMetrics1}>Inventory Metrics</h2>
      <div className={styles.inventoryMetricsItem} />
      <div className={styles.lowStockItems}>Low Stock Items</div>
      <div className={styles.inventoryTurnoverRates}>
        Inventory Turnover Rates
      </div>
      <div className={styles.div}>13</div>
      <div className={styles.div1}>$0.00</div>
    </div>
  );
};

export default InventoryMetrics;
