import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  depotIcon?: string;
  depotLocation?: string;
  group196?: string;

  /** Style props */
  frameBoxAlignSelf?: CSSProperties["alignSelf"];
  frameBoxJustifyContent?: CSSProperties["justifyContent"];
  frameBoxWidth?: CSSProperties["width"];
  depotContainerGap?: CSSProperties["gap"];
  groupIconWidth?: CSSProperties["width"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameBoxAlignSelf,
  frameBoxJustifyContent,
  frameBoxWidth,
  depotContainerGap,
  depotIcon,
  depotLocation,
  group196,
  groupIconWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameBoxAlignSelf,
      justifyContent: frameBoxJustifyContent,
      width: frameBoxWidth,
    };
  }, [frameBoxAlignSelf, frameBoxJustifyContent, frameBoxWidth]);

  const depotContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: depotContainerGap,
    };
  }, [depotContainerGap]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth,
    };
  }, [groupIconWidth]);

  return (
    <div
      className={[styles.depotContainerWrapper, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.depotContainer} style={depotContainerStyle}>
        <div className={styles.depotDetails}>
          <img
            className={styles.depotIcon}
            loading="lazy"
            alt=""
            src={depotIcon}
          />
          <div className={styles.depotLocation}>{depotLocation}</div>
          <div className={styles.sauerLock}>
            859 Sauer Lock , Janismouth, Kansas, USA
          </div>
        </div>
        <div className={styles.depotContainerInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src={group196}
            style={groupIconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;