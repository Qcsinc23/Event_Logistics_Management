import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./EventRows.module.css";

export type EventRowsType = {
  className?: string;
  timePlaceholder?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  groupBoxBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleBoxBackgroundColor?: CSSProperties["backgroundColor"];
  frameBoxWidth?: CSSProperties["width"];
  boxWidth?: CSSProperties["width"];
  frameBoxWidth1?: CSSProperties["width"];
};

const EventRows: FunctionComponent<EventRowsType> = ({
  className = "",
  timePlaceholder,
  groupBoxBackgroundColor,
  rectangleBoxBackgroundColor,
  frameBoxWidth,
  prop,
  boxWidth,
  frameBoxWidth1,
  prop1,
  prop2,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: groupBoxBackgroundColor,
    };
  }, [groupBoxBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleBoxBackgroundColor,
    };
  }, [rectangleBoxBackgroundColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth,
    };
  }, [frameBoxWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      width: boxWidth,
    };
  }, [boxWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: frameBoxWidth1,
    };
  }, [frameBoxWidth1]);

  return (
    <div className={[styles.eventRows, className].join(" ")}>
      <div className={styles.eventColumns}>
        <div className={styles.eventCells}>
          <div className={styles.timeSlots}>
            <div className={styles.timePlaceholder}>{timePlaceholder}</div>
          </div>
          <div className={styles.rectangleParent} style={groupDiv1Style}>
            <div className={styles.frameChild} style={rectangleDiv1Style} />
            <div className={styles.eventName000000Container}>
              <p className={styles.eventName}>Event name</p>
              <p className={styles.p}>00:00:00</p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper} style={frameDiv1Style}>
          <div className={styles.div} style={div1Style}>
            {prop}
          </div>
        </div>
        <div className={styles.container} style={frameDiv2Style}>
          <div className={styles.div1}>{prop1}</div>
        </div>
        <div className={styles.frame}>
          <div className={styles.div2}>{prop2}</div>
        </div>
      </div>
    </div>
  );
};

export default EventRows;
