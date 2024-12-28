import { FunctionComponent } from "react";
import { Box, Button } from "@mui/material";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  immediate?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "", immediate }) => {
  return (
    <div className={[styles.card1, className].join(" ")}>
      <div className={styles.card1Child} />
      <div className={styles.cardContentContainer}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.alertNameField} />
        </div>
      </div>
      <div className={styles.alertActionsContainer}>
        <div className={styles.alertName}>Alert Name</div>
      </div>
      <div className={styles.notificationChannelContainerWrapper}>
        <div className={styles.notificationChannelContainer}>
          <div className={styles.triggerTypeLowContainer}>
            <span className={styles.triggerType}>{`Trigger Type: `}</span>
            <span className={styles.lowStock}>{`"Low Stock < 10"`}</span>
          </div>
          <div className={styles.triggerTypeLowContainer}>
            <span
              className={styles.triggerType}
            >{`Notification Channels: `}</span>
            <span className={styles.lowStock}>Email</span>
          </div>
        </div>
      </div>
      <div className={styles.frequencyContainer}>
        <div className={styles.triggerTypeLowContainer}>
          <span className={styles.triggerType}>{`Frequency: `}</span>
          <span className={styles.lowStock}>{immediate}</span>
        </div>
      </div>
      <div className={styles.alertEditActions}>
        <Button
          className={styles.button}
          startIcon={
            <img width="20.9px" height="20.9px" src="/group-137.svg" />
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
          startIcon={<img width="18px" height="20px" src="/group-139.svg" />}
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

export default Card;
