import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./NumberSmall.module.css";

export type NumberSmallType = {
  className?: string;
};

const NumberSmall: FunctionComponent<NumberSmallType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.numberSmall, className].join(" ")}>
      <div className={styles.xSValue}>January</div>
    </div>
  );
};

export default NumberSmall;
