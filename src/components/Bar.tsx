import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Bar.module.css";

export type BarType = {
  className?: string;
};

const Bar: FunctionComponent<BarType> = ({ className = "" }) => {
  return (
    <div className={[styles.bar, className].join(" ")}>
      <div className={styles.barElement} />
    </div>
  );
};

export default Bar;
