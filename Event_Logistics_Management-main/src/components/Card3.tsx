import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Card3.module.css";

export type Card3Type = {
  className?: string;
};

const Card3: FunctionComponent<Card3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.card1, className].join(" ")}>
      <div className={styles.card1Child} />
      <div className={styles.cardIconsParent}>
        <img
          className={styles.cardIcons}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.alertNames} />
        </div>
      </div>
      <div className={styles.alertNameWrapper}>
        <div className={styles.alertName}>Alert Name</div>
      </div>
      <div className={styles.triggerTypeLowStock10Wrapper}>
        <div className={styles.triggerTypeLowContainer}>
          <span className={styles.triggerType}>{`Trigger Type: `}</span>
          <span className={styles.lowStock}>{`"Low Stock < 10"`}</span>
        </div>
      </div>
      <div className={styles.emailChannel}>
        <div className={styles.triggerTypeLowContainer}>
          <span
            className={styles.triggerType}
          >{`Notification Channels: `}</span>
          <span className={styles.lowStock}>Email</span>
        </div>
      </div>
      <div className={styles.pushChannel}>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.pushEditButtons}>
            <img
              className={styles.pushEditButtonsChild}
              loading="lazy"
              alt=""
              src="/group-1373.svg"
            />
          </div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.pushDeleteIcons}>
            <img
              className={styles.pushDeleteIconsChild}
              loading="lazy"
              alt=""
              src="/group-1392.svg"
            />
          </div>
          <div className={styles.delete}>Delete</div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
