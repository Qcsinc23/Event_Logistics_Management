import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Filter.module.css";

export type FilterType = {
  className?: string;
};

const Filter: FunctionComponent<FilterType> = ({ className = "" }) => {
  return (
    <section className={[styles.filter, className].join(" ")}>
      <div className={styles.filterChild} />
      <div className={styles.enterName}>
        <div className={styles.enterNameChild} />
        <div className={styles.searchIcon}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-31.svg"
          />
        </div>
        <div className={styles.searchByDelivery}>
          Search by Delivery ID, Event, or Driver
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.status1}>Status</div>
        <div className={styles.filterDropdown}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.drivers1}>Drivers</div>
        <div className={styles.filterDropdown}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.dataRange1}>Data Range</div>
        <div className={styles.filterDropdown}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4-1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.search}>Search</div>
      </div>
    </section>
  );
};

export default Filter;
