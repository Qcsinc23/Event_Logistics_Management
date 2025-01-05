import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import TableColumns from "./TableColumns";
import styles from "./Table2.module.css";

export type Table2Type = {
  className?: string;
};

const Table2: FunctionComponent<Table2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.table, className].join(" ")}>
      <div className={styles.tableChild} />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <input className={styles.rectangleInput} type="checkbox" />
        <div className={styles.itemName}>Item Name</div>
        <div className={styles.sku}>SKU</div>
        <div className={styles.category}>Category</div>
        <div className={styles.availQty}>{`Avail Qty `}</div>
        <div className={styles.resQty}>Res Qty</div>
        <div className={styles.location}>Location</div>
        <div className={styles.status}>Status</div>
        <div className={styles.actions}>Actions</div>
      </div>
      <TableColumns available="Available" />
      <TableColumns
        tableColumnsTop="195px"
        groupBoxWidth="105px"
        available="Reserved"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#ffeb3b"
      />
      <TableColumns
        tableColumnsTop="305px"
        groupBoxWidth="128px"
        available="Out of Stock"
        availableMinWidth="104px"
        ellipseBoxBackgroundColor="#ed3006"
      />
      <TableColumns
        tableColumnsTop="415px"
        groupBoxWidth="105px"
        available="Available"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#4caf50"
      />
      <TableColumns
        tableColumnsTop="525px"
        groupBoxWidth="105px"
        available="Available"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#4caf50"
      />
      <TableColumns
        tableColumnsTop="635px"
        groupBoxWidth="105px"
        available="Reserved"
        availableMinWidth="81px"
        ellipseBoxBackgroundColor="#ffeb3b"
      />
      <div className={styles.row}>
        <div className={styles.rowItems}>578</div>
        <div className={styles.sectionName}>Section name</div>
        <input className={styles.rectangleInput1} type="checkbox" />
        <div className={styles.categoryHere}>Category here</div>
        <div className={styles.rowItems1}>2,257</div>
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
          <img
            className={styles.groupInner}
            loading="lazy"
            alt=""
            src="/group-1393.svg"
          />
        </div>
        <div className={styles.outOfStockParent}>
          <div className={styles.outOfStock}>Out of Stock</div>
          <div className={styles.ellipseDiv} />
        </div>
        <div className={styles.rowChild} />
      </div>
    </section>
  );
};

export default Table2;