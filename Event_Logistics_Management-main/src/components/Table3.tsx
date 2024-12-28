import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Table3.module.css";

export type Table3Type = {
  className?: string;
};

const Table3: FunctionComponent<Table3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.table, className].join(" ")}>
      <div className={styles.tableChild} />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerCells}>
          <div className={styles.deliveryId}>Delivery ID</div>
        </div>
        <div className={styles.headerCells1}>
          <div className={styles.recipientName}>Recipient Name</div>
        </div>
        <div className={styles.headerCells2}>
          <div className={styles.recipientName}>Date of Delivery</div>
        </div>
        <div className={styles.status}>Status</div>
        <div className={styles.actions}>Actions</div>
      </div>
      <div className={styles.tableRows}>
        <div className={styles.tableCells}>
          <div className={styles.iDCells}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.nameCells}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.dateCells}>
            <div className={styles.dateContent}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.statusCells}>
              <div className={styles.statusIcons}>
                <div className={styles.total} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
            <div className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.tableRowsChild} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.tableCells}>
          <div className={styles.iDCells}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.nameCells}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.dateCells}>
            <div className={styles.dateContent}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.statusCells}>
              <div className={styles.statusIcons}>
                <div className={styles.total} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
            <div className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.tableRowsChild} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.tableCells}>
          <div className={styles.iDCells}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.nameCells}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.mmDdYyyyContainer}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.statusCells}>
              <div className={styles.statusIcons}>
                <div className={styles.frameInner} />
              </div>
              <div className={styles.pending}>Pending</div>
            </div>
            <div className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.tableRowsChild} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.tableCells}>
          <div className={styles.iDCells}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.nameCells}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.dateCells}>
            <div className={styles.dateContent}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.statusCells}>
              <div className={styles.statusIcons}>
                <div className={styles.total} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
            <div className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.tableRowsChild} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.tableCells}>
          <div className={styles.iDCells}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.nameCells}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.mmDdYyyyWrapper1}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.statusCells}>
              <div className={styles.statusIcons}>
                <div className={styles.frameChild2} />
              </div>
              <div className={styles.rejected}>Rejected</div>
            </div>
            <div className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.tableRowsChild} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.tableCells}>
          <div className={styles.iDCells}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.nameCells}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.mmDdYyyyWrapper1}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.statusCells}>
              <div className={styles.statusIcons}>
                <div className={styles.frameChild2} />
              </div>
              <div className={styles.rejected}>Rejected</div>
            </div>
            <div className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.tableRowsChild} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.tableCells}>
          <div className={styles.iDCells}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.nameCells}>
            <div className={styles.martinGomez}>Martin Gomez</div>
          </div>
          <div className={styles.dateCells}>
            <div className={styles.dateContent}>
              <div className={styles.mmDdYyyy}>mm-dd-yyyy</div>
            </div>
            <div className={styles.statusCells}>
              <div className={styles.statusIcons}>
                <div className={styles.total} />
              </div>
              <div className={styles.approved}>Approved</div>
            </div>
            <div className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableItem} />
    </div>
  );
};

export default Table3;
