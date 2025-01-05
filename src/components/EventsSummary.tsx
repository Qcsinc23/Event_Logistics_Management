import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./EventsSummary.module.css";

export type EventsSummaryType = {
  className?: string;
};

const EventsSummary: FunctionComponent<EventsSummaryType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.eventsSummary, className].join(" ")}>
      <div className={styles.summaryBackground} />
      <h2 className={styles.eventsSummary1}>Events Summary</h2>
      <div className={styles.summarySeparator} />
      <div className={styles.inProgress}>In Progress</div>
      <div className={styles.upcoming}>Upcoming</div>
      <div className={styles.eventCounts}>8</div>
      <div className={styles.eventCounts1}>15</div>
      <div className={styles.past}>Past</div>
      <div className={styles.totalEvents}>Total Events</div>
      <div className={styles.eventCounts2}>12</div>
      <div className={styles.eventCounts3}>35</div>
    </div>
  );
};

export default EventsSummary;
