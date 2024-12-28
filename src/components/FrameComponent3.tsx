import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  dashboardEventsCreateNewEve?: string;
  createNewEvent?: string;
  button?: string;

  /** Style props */
  dashboardEventsDisplay?: CSSProperties["display"];
  buttonWidth?: CSSProperties["width"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  dashboardEventsCreateNewEve,
  createNewEvent,
  button,
  dashboardEventsDisplay,
  buttonWidth,
  buttonAlignSelf,
}) => {
  const dashboardEventsStyle: CSSProperties = useMemo(() => {
    return {
      display: dashboardEventsDisplay,
    };
  }, [dashboardEventsDisplay]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      alignSelf: buttonAlignSelf,
    };
  }, [buttonWidth, buttonAlignSelf]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.dashboardEventsCreateNeParent}>
          <div className={styles.dashboardEvents} style={dashboardEventsStyle}>
            {dashboardEventsCreateNewEve}
          </div>
          <h3 className={styles.createNewEvent}>{createNewEvent}</h3>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className={styles.userParent}>
          <div className={styles.user}>
            <div className={styles.userChild} />
            <img
              className={styles.buttonBackgroundIcon}
              loading="lazy"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <div className={styles.sherwynGrahamWrapper}>
              <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
            </div>
          </div>
          <Button
            className={styles.button}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#1a3e59",
              fontSize: "18",
              borderColor: "#1a3e59",
              borderRadius: "10px",
              "&:hover": { borderColor: "#1a3e59" },
              width: 180,
              height: 50,
            }}
            style={buttonStyle}
          >
            {button}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
