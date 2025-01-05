import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./TableRow.module.css";

export type TableRowType = {
  className?: string;
};

const TableRow: FunctionComponent<TableRowType> = ({ className = "" }) => {
  return (
    <div className={[styles.tableRow, className].join(" ")}>
      <div className={styles.tableData}>
        <div className={styles.deliveryInfo}>
          <div className={styles.mainInfo}>
            <div className={styles.deliveryName}>
              <div className={styles.nameBackgroundParent}>
                <div className={styles.nameBackground}>
                  <div className={styles.nameBackgroundChild} />
                </div>
                <div className={styles.aa478525}>AA-4785-25</div>
              </div>
              <div className={styles.eventName}>
                <div className={styles.eventName1}>Event name</div>
                <div className={styles.royAnderson}>Roy Anderson</div>
              </div>
              <div className={styles.streetCityStateParent}>
                <div className={styles.streetCityState}>
                  Street, City, State
                </div>
                <div className={styles.streetCityState1}>
                  Street, City, State
                </div>
              </div>
              <div className={styles.pm}>00:00:00 PM</div>
            </div>
          </div>
          <div className={styles.statusInfo}>
            <div className={styles.statusIconsParent}>
              <div className={styles.statusIcons}>
                <div className={styles.statusIconsChild} />
              </div>
              <div className={styles.inTransit}>In Transit</div>
            </div>
            <div className={styles.duration}>
              <div className={styles.hours}>2 Hours</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventListSeparator} />
      <div className={styles.tableData}>
        <div className={styles.deliveryInfo}>
          <div className={styles.mainInfo}>
            <div className={styles.deliveryName}>
              <div className={styles.nameBackgroundParent}>
                <div className={styles.nameBackground}>
                  <div className={styles.nameBackgroundChild} />
                </div>
                <div className={styles.aa478525}>AA-4785-25</div>
              </div>
              <div className={styles.eventName}>
                <div className={styles.eventName1}>Event name</div>
                <div className={styles.royAnderson}>Roy Anderson</div>
              </div>
              <div className={styles.streetCityStateParent}>
                <div className={styles.streetCityState}>
                  Street, City, State
                </div>
                <div className={styles.streetCityState1}>
                  Street, City, State
                </div>
              </div>
              <div className={styles.pm}>00:00:00 PM</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.statusIconsParent}>
              <div className={styles.statusIcons}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.delivered}>Delivered</div>
            </div>
            <div className={styles.duration}>
              <div className={styles.hours}>-</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventListSeparator} />
      <div className={styles.eventSeparator}>
        <div className={styles.firstEventContainerParent}>
          <div className={styles.tableData}>
            <div className={styles.deliveryInfo}>
              <div className={styles.mainInfo}>
                <div className={styles.deliveryName}>
                  <div className={styles.nameBackgroundParent}>
                    <div className={styles.nameBackground}>
                      <div className={styles.nameBackgroundChild} />
                    </div>
                    <div className={styles.aa478525}>AA-4785-25</div>
                  </div>
                  <div className={styles.eventName}>
                    <div className={styles.eventName1}>Event name</div>
                    <div className={styles.royAnderson}>Roy Anderson</div>
                  </div>
                  <div className={styles.streetCityStateParent}>
                    <div className={styles.streetCityState}>
                      Street, City, State
                    </div>
                    <div className={styles.streetCityState1}>
                      Street, City, State
                    </div>
                  </div>
                  <div className={styles.pm}>00:00:00 PM</div>
                </div>
              </div>
              <div className={styles.statusInfo}>
                <div className={styles.statusIconsParent}>
                  <div className={styles.statusIcons}>
                    <div className={styles.statusIconsChild} />
                  </div>
                  <div className={styles.inTransit}>In Transit</div>
                </div>
                <div className={styles.duration}>
                  <div className={styles.hours}>2 Hours</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eventListSeparator} />
        </div>
        <div className={styles.secondEventContainerParent}>
          <div className={styles.mainInfo}>
            <div className={styles.deliveryName}>
              <div className={styles.nameBackgroundParent}>
                <div className={styles.nameBackground}>
                  <div className={styles.nameBackgroundChild} />
                </div>
                <div className={styles.aa478525}>AA-4785-25</div>
              </div>
              <div className={styles.eventName}>
                <div className={styles.eventName1}>Event name</div>
                <div className={styles.royAnderson}>Roy Anderson</div>
              </div>
              <div className={styles.streetCityStateParent}>
                <div className={styles.streetCityState}>
                  Street, City, State
                </div>
                <div className={styles.streetCityState1}>
                  Street, City, State
                </div>
              </div>
              <div className={styles.pm}>00:00:00 PM</div>
            </div>
          </div>
          <div className={styles.secondEventStatus}>
            <div className={styles.statusIconsParent}>
              <div className={styles.statusIcons}>
                <div className={styles.secondEventStatusCircle} />
              </div>
              <div className={styles.delayed}>Delayed</div>
            </div>
            <div className={styles.secondEventDuration}>
              <div className={styles.hours}>1 Day</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventListSeparator} />
      <div className={styles.tableData}>
        <div className={styles.deliveryInfo}>
          <div className={styles.mainInfo}>
            <div className={styles.deliveryName}>
              <div className={styles.nameBackgroundParent}>
                <div className={styles.nameBackground}>
                  <div className={styles.nameBackgroundChild} />
                </div>
                <div className={styles.aa478525}>AA-4785-25</div>
              </div>
              <div className={styles.eventName}>
                <div className={styles.eventName1}>Event name</div>
                <div className={styles.royAnderson}>Roy Anderson</div>
              </div>
              <div className={styles.streetCityStateParent}>
                <div className={styles.streetCityState}>
                  Street, City, State
                </div>
                <div className={styles.streetCityState1}>
                  Street, City, State
                </div>
              </div>
              <div className={styles.pm}>00:00:00 PM</div>
            </div>
          </div>
          <div className={styles.statusInfo}>
            <div className={styles.statusIconsParent}>
              <div className={styles.statusIcons}>
                <div className={styles.statusIconsChild} />
              </div>
              <div className={styles.inTransit}>In Transit</div>
            </div>
            <div className={styles.duration}>
              <div className={styles.hours}>2 Hours</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventListSeparator} />
      <div className={styles.tableData}>
        <div className={styles.frameParent7}>
          <div className={styles.rectangleFrame}>
            <div className={styles.nameBackgroundChild} />
          </div>
          <div className={styles.eventNameContainer}>
            <div className={styles.aa478525}>AA-4785-25</div>
          </div>
          <div className={styles.eventNameContainer1}>
            <div className={styles.eventName1}>Event name</div>
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.royAnderson}>Roy Anderson</div>
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.streetCityState}>Street, City, State</div>
          </div>
          <div className={styles.dropoffContainer}>
            <div className={styles.streetCityState11}>Street, City, State</div>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.pm5}>00:00:00 PM</div>
          </div>
          <div className={styles.statusIcons}>
            <div className={styles.statusIconsChild} />
          </div>
          <div className={styles.statusValueContainer}>
            <div className={styles.inTransit}>In Transit</div>
          </div>
          <div className={styles.secondEventDuration}>
            <div className={styles.hours}>2 Hours</div>
          </div>
        </div>
      </div>
      <div className={styles.tableData8}>
        <div className={styles.tableDataChild} />
      </div>
      <div className={styles.scroll}>
        <div className={styles.scrollChild} />
        <div className={styles.scrollItem} />
      </div>
    </div>
  );
};

export default TableRow;
