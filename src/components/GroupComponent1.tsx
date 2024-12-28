import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  metricPlaceholder?: string;
  tasksDueToday?: string;

  /** Style props */
  metricPlaceholderWidth?: CSSProperties["width"];
  tasksDueTodayDisplay?: CSSProperties["display"];
  tasksDueTodayMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  metricPlaceholder,
  tasksDueToday,
  metricPlaceholderWidth,
  tasksDueTodayDisplay,
  tasksDueTodayMinWidth,
}) => {
  const metricPlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      width: metricPlaceholderWidth,
    };
  }, [metricPlaceholderWidth]);

  const tasksDueTodayStyle: CSSProperties = useMemo(() => {
    return {
      display: tasksDueTodayDisplay,
      minWidth: tasksDueTodayMinWidth,
    };
  }, [tasksDueTodayDisplay, tasksDueTodayMinWidth]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.metricPlaceholder} style={metricPlaceholderStyle}>
        {metricPlaceholder}
      </div>
      <div className={styles.tasksDueToday} style={tasksDueTodayStyle}>
        {tasksDueToday}
      </div>
    </div>
  );
};

export default GroupComponent1;
