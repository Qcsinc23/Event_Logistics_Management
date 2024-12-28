import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Table4.module.css";

export type Table4Type = {
  className?: string;
};

const Table4: FunctionComponent<Table4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.table, className].join(" ")}>
      <div className={styles.tableChild} />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItems}>
          <div className={styles.deliveryId}>Delivery ID</div>
        </div>
        <div className={styles.headerItems1}>
          <div className={styles.recipientName}>Recipient Name</div>
        </div>
        <div className={styles.headerItems2}>
          <div className={styles.recipientName}>Date of Delivery</div>
        </div>
        <div className={styles.status}>Status</div>
        <div className={styles.actions}>Actions</div>
      </div>
      <div className={styles.tableContent}>
        <div className={styles.firstRow}>
          <div className={styles.firstRowData}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.deliveryActions}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.dateStatusActions}>
            <div className={styles.deliveryDate}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.deliveryStatus}>
              <div className={styles.statusIcon}>
                <div className={styles.statusIconChild} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
            <div className={styles.deliveryActions}>
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rowSeparator}>
        <div className={styles.rowSeparatorChild} />
      </div>
      <div className={styles.tableRow}>
        <div className={styles.tableData}>
          <div className={styles.nameDateRow}>
            <div className={styles.nameDate}>
              <div className={styles.lineParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
                <div className={styles.lineDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.aA}>
                  <div className={styles.aa478525}>AA-4785-25</div>
                  <div className={styles.aa478525}>AA-4785-25</div>
                  <div className={styles.aa478525}>AA-4785-25</div>
                  <div className={styles.aa478525}>AA-4785-25</div>
                  <div className={styles.aa478525}>AA-4785-25</div>
                  <div className={styles.aa478525}>AA-4785-25</div>
                </div>
              </div>
              <div className={styles.nameDateItems}>
                <div className={styles.martinGomez}>Martin Gomez</div>
                <div className={styles.martinGomez}>Martin Gomez</div>
                <div className={styles.martinGomez}>Martin Gomez</div>
                <div className={styles.martinGomez}>Martin Gomez</div>
                <div className={styles.martinGomez}>Martin Gomez</div>
                <div className={styles.martinGomez}>Martin Gomez</div>
              </div>
              <div className={styles.nameDateItems}>
                <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
                <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
                <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
                <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
                <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
                <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
              </div>
            </div>
          </div>
          <div className={styles.statusIconsRow}>
            <div className={styles.deliveryStatus}>
              <div className={styles.statusIcon}>
                <div className={styles.statusIconChild} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
            <div className={styles.deliveryStatus}>
              <div className={styles.statusIcon}>
                <div className={styles.frameChild2} />
              </div>
              <div className={styles.pending}>Pending</div>
            </div>
            <div className={styles.deliveryStatus}>
              <div className={styles.statusIcon}>
                <div className={styles.statusIconChild} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
            <div className={styles.deliveryStatus}>
              <div className={styles.statusIcon}>
                <div className={styles.frameChild4} />
              </div>
              <div className={styles.rejected}>Rejected</div>
            </div>
            <div className={styles.deliveryStatus}>
              <div className={styles.statusIcon}>
                <div className={styles.frameChild4} />
              </div>
              <div className={styles.rejected}>Rejected</div>
            </div>
            <div className={styles.deliveryStatus}>
              <div className={styles.statusIcon}>
                <div className={styles.statusIconChild} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
          </div>
          <div className={styles.actionsRow}>
            <div className={styles.frameParent}>
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableItem} />
    </section>
  );
};

export default Table4;
