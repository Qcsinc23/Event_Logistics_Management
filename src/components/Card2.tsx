import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Card2.module.css";

export type Card2Type = {
  className?: string;
  push?: string;

  /** Style props */
  card3Top?: CSSProperties["top"];
  card3Left?: CSSProperties["left"];
};

const Card2: FunctionComponent<Card2Type> = ({
  className = "",
  card3Top,
  card3Left,
  push,
}) => {
  const card3Style: CSSProperties = useMemo(() => {
    return {
      top: card3Top,
      left: card3Left,
    };
  }, [card3Top, card3Left]);

  return (
    <div className={[styles.card3, className].join(" ")} style={card3Style}>
      <div className={styles.card3Child} />
      <div className={styles.frameParent}>
        <div className={styles.alertIconsParent}>
          <img
            className={styles.alertIcons}
            loading="lazy"
            alt=""
            src="/vector-21.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.alertNameWrapper}>
          <div className={styles.alertName}>Alert Name</div>
        </div>
        <div className={styles.triggerTypeContentWrapper}>
          <div className={styles.triggerTypeContent}>
            <div className={styles.triggerTypeLowContainer}>
              <span className={styles.triggerType}>{`Trigger Type: `}</span>
              <span className={styles.lowStock}>{`"Low Stock < 10"`}</span>
            </div>
            <div className={styles.triggerTypeLowContainer}>
              <span
                className={styles.triggerType}
              >{`Notification Channels: `}</span>
              <span className={styles.lowStock}>{push}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.editButtons}>
            <img
              className={styles.editButtonsChild}
              loading="lazy"
              alt=""
              src="/group-1373.svg"
            />
          </div>
          <div className={styles.edit}>Edit</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.deleteIcons}>
            <img
              className={styles.deleteIconsChild}
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

export default Card2;
