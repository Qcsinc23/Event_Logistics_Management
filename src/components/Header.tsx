import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.headerChild} />
      <div className={styles.headerRow}>
        <div className={styles.deliveryIdCell}>
          <div className={styles.cellBackground} />
        </div>
        <div className={styles.deliveryId}>Delivery ID</div>
      </div>
      <div className={styles.headerItems}>
        <div className={styles.relatedEvent}>Related Event</div>
        <div className={styles.relatedEvent}>Driver Assigned</div>
        <div className={styles.relatedEvent}>Pickup Location</div>
        <div className={styles.relatedEvent}>Drop-off Location</div>
        <div className={styles.relatedEvent}>Scheduled Time</div>
        <div className={styles.status}>Status</div>
      </div>
      <div className={styles.eta}>ETA</div>
    </div>
  );
};

export default Header;
