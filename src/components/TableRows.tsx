import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./TableRows.module.css";

export type TableRowsType = {
  className?: string;

  /** Style props */
  spanColor?: CSSProperties["color"];
};

const TableRows: FunctionComponent<TableRowsType> = ({
  className = "",
  spanColor,
}) => {
  const spanStyle: CSSProperties = useMemo(() => {
    return {
      color: spanColor,
    };
  }, [spanColor]);

  return (
    <div className={[styles.tableRows, className].join(" ")}>
      <h3 className={styles.taskName}>Task name</h3>
      <div className={styles.assigneeRobertSteveParent}>
        <div className={styles.assigneeRobertSteveContainer}>
          <span>{`Assignee: `}</span>
          <span className={styles.robertSteve}>Robert Steve</span>
        </div>
        <div className={styles.dueDateDdMmYyyyWrapper}>
          <div className={styles.dueDateDdMmYyyyContainer}>
            <span>
              <span>Due Date:</span>
            </span>
            <span>
              <span style={spanStyle}>{` `}</span>
              <span className={styles.ddMmYyyy}>dd-mm-yyyy</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableRows;
