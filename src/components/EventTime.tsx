import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./EventTime.module.css";

export type EventTimeType = {
  className?: string;
  prop?: string;

  /** Style props */
  timeWidth?: CSSProperties["width"];
  boxWidth?: CSSProperties["width"];
  groupBoxBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleBoxBackgroundColor?: CSSProperties["backgroundColor"];
};

const EventTime: FunctionComponent<EventTimeType> = ({
  className = "",
  timeWidth,
  prop,
  boxWidth,
  groupBoxBackgroundColor,
  rectangleBoxBackgroundColor,
}) => {
  const timeStyle: CSSProperties = useMemo(() => {
    return {
      width: timeWidth,
    };
  }, [timeWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: boxWidth,
    };
  }, [boxWidth]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: groupBoxBackgroundColor,
    };
  }, [groupBoxBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleBoxBackgroundColor,
    };
  }, [rectangleBoxBackgroundColor]);

  return (
    <div className={[styles.eventTime, className].join(" ")}>
      <div className={styles.time} style={timeStyle}>
        <div className={styles.div} style={divStyle}>
          {prop}
        </div>
      </div>
      <div className={styles.rectangleParent} style={groupDiv1Style}>
        <div className={styles.frameChild} style={rectangleDivStyle} />
        <div className={styles.eventName000000Container}>
          <p className={styles.eventName}>Event name</p>
          <p className={styles.p}>00:00:00</p>
        </div>
      </div>
    </div>
  );
};

export default EventTime;