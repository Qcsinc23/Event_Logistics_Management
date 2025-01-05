import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Button } from "@mui/material";
import styles from "./Card1.module.css";

export type Card1Type = {
  className?: string;
  inApp?: string;

  /** Style props */
  card2BoxShadow?: CSSProperties["boxShadow"];
  rectangleBoxBoxShadow?: CSSProperties["boxShadow"];
  statusIconShapeLeft?: CSSProperties["left"];
  statusIconShapeBackgroundColor?: CSSProperties["backgroundColor"];
  statusIconShapeBoxShadow?: CSSProperties["boxShadow"];
};

const Card1: FunctionComponent<Card1Type> = ({
  className = "",
  card2BoxShadow,
  rectangleBoxBoxShadow,
  statusIconShapeLeft,
  statusIconShapeBackgroundColor,
  statusIconShapeBoxShadow,
  inApp,
}) => {
  const card2Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: card2BoxShadow,
    };
  }, [card2BoxShadow]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: rectangleBoxBoxShadow,
    };
  }, [rectangleBoxBoxShadow]);

  const statusIconShapeStyle: CSSProperties = useMemo(() => {
    return {
      left: statusIconShapeLeft,
      backgroundColor: statusIconShapeBackgroundColor,
      boxShadow: statusIconShapeBoxShadow,
    };
  }, [
    statusIconShapeLeft,
    statusIconShapeBackgroundColor,
    statusIconShapeBoxShadow,
  ]);

  return (
    <div className={[styles.card2, className].join(" ")} style={card2Style}>
      <div className={styles.card2Child} style={rectangleDiv2Style} />
      <div className={styles.frameParent}>
        <div className={styles.alertStatusIconsParent}>
          <img
            className={styles.alertStatusIcons}
            loading="lazy"
            alt=""
            src="/vector-21.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div
              className={styles.statusIconShape}
              style={statusIconShapeStyle}
            />
          </div>
        </div>
        <div className={styles.alertNameWrapper}>
          <div className={styles.alertName}>Alert Name</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.triggerTypeLowStock10Parent}>
            <div className={styles.triggerTypeLowContainer}>
              <span className={styles.triggerType}>{`Trigger Type: `}</span>
              <span className={styles.lowStock}>{`"Low Stock < 10"`}</span>
            </div>
            <div className={styles.triggerTypeLowContainer}>
              <span
                className={styles.triggerType}
              >{`Notification Channels: `}</span>
              <span className={styles.lowStock}>{inApp}</span>
            </div>
          </div>
        </div>
        <div className={styles.frequencyImmediateWrapper}>
          <div className={styles.triggerTypeLowContainer}>
            <span className={styles.triggerType}>{`Frequency: `}</span>
            <span className={styles.lowStock}>Immediate</span>
          </div>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <Button
          className={styles.button}
          startIcon={
            <img width="20.9px" height="20.9px" src="/group-137-1.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#ff6f3c",
            borderRadius: "10px",
            "&:hover": { background: "#ff6f3c" },
          }}
        >
          Edit
        </Button>
        <Button
          className={styles.button}
          startIcon={<img width="18px" height="20px" src="/group-139-1.svg" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#1a3e59",
            fontSize: "18",
            borderColor: "#1a3e59",
            borderRadius: "10px",
            "&:hover": { borderColor: "#1a3e59" },
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card1;
