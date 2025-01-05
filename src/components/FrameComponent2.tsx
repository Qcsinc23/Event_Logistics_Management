import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.itemNameContainerParent, className].join(" ")}>
      <div className={styles.itemNameContainer}>
        <div className={styles.itemNameValue}>
          <div className={styles.itemName}>Item name</div>
          <div className={styles.lowStock}>Low Stock</div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.restock}>Restock</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
