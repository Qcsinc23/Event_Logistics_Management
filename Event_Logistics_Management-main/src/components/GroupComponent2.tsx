import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  className?: string;
  ongoing?: string;

  /** Style props */
  groupDivAlignSelf?: CSSProperties["alignSelf"];
  groupDivFlex?: CSSProperties["flex"];
  groupDivMinWidth?: CSSProperties["minWidth"];
  souscatgorieBackgroundColor?: CSSProperties["backgroundColor"];
  ongoingDisplay?: CSSProperties["display"];
  ongoingMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  groupDivAlignSelf,
  groupDivFlex,
  groupDivMinWidth,
  souscatgorieBackgroundColor,
  ongoing,
  ongoingDisplay,
  ongoingMinWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: groupDivAlignSelf,
      flex: groupDivFlex,
      minWidth: groupDivMinWidth,
    };
  }, [groupDivAlignSelf, groupDivFlex, groupDivMinWidth]);

  const souscatgorieStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: souscatgorieBackgroundColor,
    };
  }, [souscatgorieBackgroundColor]);

  const ongoingStyle: CSSProperties = useMemo(() => {
    return {
      display: ongoingDisplay,
      minWidth: ongoingMinWidth,
    };
  }, [ongoingDisplay, ongoingMinWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.eventDetails}>
        <div className={styles.eventTime}>
          <div className={styles.eventName}>Event name</div>
          <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
        </div>
      </div>
      <div className={styles.eventStatus}>
        <div className={styles.statusIconContainer}>
          <div className={styles.souscatgorie} style={souscatgorieStyle} />
        </div>
        <div className={styles.ongoing} style={ongoingStyle}>
          {ongoing}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;