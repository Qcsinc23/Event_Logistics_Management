import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./TableColumns.module.css";

export type TableColumnsType = {
  className?: string;
  available?: string;

  /** Style props */
  tableColumnsTop?: CSSProperties["top"];
  groupBoxWidth?: CSSProperties["width"];
  availableMinWidth?: CSSProperties["minWidth"];
  ellipseBoxBackgroundColor?: CSSProperties["backgroundColor"];
};

const TableColumns: FunctionComponent<TableColumnsType> = ({
  className = "",
  tableColumnsTop,
  groupBoxWidth,
  available,
  availableMinWidth,
  ellipseBoxBackgroundColor,
}) => {
  const tableColumnsStyle: CSSProperties = useMemo(() => {
    return {
      top: tableColumnsTop,
    };
  }, [tableColumnsTop]);

  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: groupBoxWidth,
    };
  }, [groupBoxWidth]);

  const availableStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: availableMinWidth,
    };
  }, [availableMinWidth]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseBoxBackgroundColor,
    };
  }, [ellipseBoxBackgroundColor]);

  return (
    <div
      className={[styles.tableColumns, className].join(" ")}
      style={tableColumnsStyle}
    >
      <div className={styles.columnOne}>578</div>
      <div className={styles.sectionName}>Section name</div>
      <input className={styles.rectangleInput} type="checkbox" />
      <div className={styles.categoryHere}>Category here</div>
      <div className={styles.columnFour}>2,257</div>
      <div className={styles.abc12345SBl}>ABC-12345-S-BL</div>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image11@2x.png"
      />
      <div className={styles.itemNameHere}>Item name here</div>
      <div className={styles.groupParent}>
        <img
          className={styles.groupChild}
          loading="lazy"
          alt=""
          src="/group-140.svg"
        />
        <img
          className={styles.groupItem}
          loading="lazy"
          alt=""
          src="/group-1371.svg"
        />
        <img className={styles.groupInner} alt="" src="/group-1393.svg" />
      </div>
      <div className={styles.availableParent} style={groupDiv3Style}>
        <div className={styles.available} style={availableStyle}>
          {available}
        </div>
        <div className={styles.ellipseDiv} style={ellipseDivStyle} />
      </div>
      <div className={styles.tableColumnsChild} />
    </div>
  );
};

export default TableColumns;