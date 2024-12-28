import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./ActivityList.module.css";

export type ActivityListType = {
  className?: string;
  assignedATask?: string;
  robertSteve?: string;
  justNow?: string;
  assignedATask1?: string;
  robertSteve1?: string;

  /** Style props */
  frameDivHeight?: CSSProperties["height"];
};

const ActivityList: FunctionComponent<ActivityListType> = ({
  className = "",
  assignedATask,
  robertSteve,
  frameDivHeight,
  justNow,
  assignedATask1,
  robertSteve1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  return (
    <div className={[styles.activityList, className].join(" ")}>
      <div className={styles.activityItems}>
        <h3 className={styles.sherwynGrahamAssignedContainer}>
          <span>
            <span>Sherwyn Graham</span>
            <span className={styles.assignedATask}>
              <span className={styles.span}>{` `}</span>
              <span className={styles.robertSteve}>{assignedATask1}</span>
            </span>
            <span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.to}>{`to `}</span>
              <span className={styles.robertSteve}>{robertSteve1}</span>
            </span>
          </span>
        </h3>
        <div className={styles.activityDetails}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </div>
          <div className={styles.timeWrapper} style={frameDivStyle}>
            <div className={styles.time}>
              <div className={styles.justNow}>{justNow}</div>
              <div className={styles.feedItemIcon}>
                <div className={styles.adobedbcpng} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.uberbcbapng} />
    </div>
  );
};

export default ActivityList;
