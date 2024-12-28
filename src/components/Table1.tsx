import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Table1.module.css";

export type Table1Type = {
  className?: string;
};

const Table1: FunctionComponent<Table1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.table, className].join(" ")}>
      <div className={styles.tableChild} />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItems}>
          <div className={styles.eventName}>Event Name</div>
        </div>
        <div className={styles.headerItems1}>
          <div className={styles.dates}>Date’s</div>
        </div>
        <div className={styles.headerItems2}>
          <div className={styles.locations}>Location’s</div>
        </div>
        <div className={styles.headerItems3}>
          <div className={styles.status}>Status</div>
        </div>
        <div className={styles.assignee}>Assignee</div>
        <div className={styles.actions}>Actions</div>
      </div>
      <div className={styles.tableRows}>
        <div className={styles.rowItems}>
          <div className={styles.rowData}>
            <div className={styles.eventNameHere}>Event name here</div>
          </div>
          <div className={styles.assigneeData}>
            <div className={styles.assigneeItems}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
            </div>
            <div className={styles.canceledStatus}>
              <div className={styles.eventNameHere}>
                Clark St, Brooklyn, NY, USA
              </div>
            </div>
            <div className={styles.upcomingStatus}>
              <div className={styles.upcomingIcons}>
                <div className={styles.imageComponent} />
              </div>
              <div className={styles.upcoming}>Upcoming</div>
            </div>
            <div className={styles.alexMartin}>Alex Martin</div>
          </div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                loading="lazy"
                alt=""
                src="/group-1381.svg"
              />
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1391.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.componentRow} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.rowItems}>
          <div className={styles.dateItemParent}>
            <div className={styles.dateItem}>
              <div className={styles.eventNameHere}>Event name here</div>
            </div>
            <div className={styles.canceledStatus}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
            </div>
            <div className={styles.assigneeItems}>
              <div className={styles.eventNameHere}>721 Broadway, NY, USA</div>
            </div>
            <div className={styles.statusItem}>
              <div className={styles.upcomingIcons}>
                <div className={styles.div} />
              </div>
              <div className={styles.ongoing}>Ongoing</div>
            </div>
          </div>
          <div className={styles.andrewDilton}>Andrew Dilton</div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                loading="lazy"
                alt=""
                src="/group-1381.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.componentRow} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.rowItems}>
          <div className={styles.eventNameHereWrapper}>
            <div className={styles.eventNameHere}>Event name here</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.ddMmYyyyParent}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
              <div className={styles.eventNameHere}>Broome St, NY, USA</div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.statusItem}>
              <div className={styles.upcomingIcons}>
                <div className={styles.descriptionLabel} />
              </div>
              <div className={styles.completed}>Completed</div>
            </div>
            <div className={styles.harveyWest}>Harvey West</div>
          </div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                loading="lazy"
                alt=""
                src="/group-1381.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.componentRow} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.rowItems}>
          <div className={styles.frameParent4}>
            <div className={styles.eventNameHereContainer}>
              <div className={styles.eventNameHere}>Event name here</div>
            </div>
            <div className={styles.ddMmYyyyWrapper}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
            </div>
            <div className={styles.canceledStatus}>
              <div className={styles.eventNameHere}>
                Union Square W, NY, USA
              </div>
            </div>
            <div className={styles.statusItem}>
              <div className={styles.upcomingIcons}>
                <div className={styles.input} />
              </div>
              <div className={styles.canceled}>Canceled</div>
            </div>
          </div>
          <div className={styles.monicaBrettWrapper}>
            <div className={styles.harveyWest}>Monica Brett</div>
          </div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                alt=""
                src="/group-1381.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.componentRow} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.rowItems}>
          <div className={styles.eventNameHereFrame}>
            <div className={styles.eventNameHere}>Event name here</div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.ddMmYyyyParent}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
              <div className={styles.eventNameHere}>Mercer Street, NY, USA</div>
            </div>
          </div>
          <div className={styles.statusItem}>
            <div className={styles.upcomingIcons}>
              <div className={styles.imageComponent} />
            </div>
            <div className={styles.upcoming}>Upcoming</div>
          </div>
          <div className={styles.solomonEllisWrapper}>
            <div className={styles.solomonEllis}>Solomon Ellis</div>
          </div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                alt=""
                src="/group-1381.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.componentRow} />
      </div>
      <div className={styles.tableRows10}>
        <div className={styles.rowItems}>
          <div className={styles.eventNameHereWrapper1}>
            <div className={styles.eventNameHere}>Event name here</div>
          </div>
          <div className={styles.frameParent10}>
            <div className={styles.canceledStatus}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
            </div>
            <div className={styles.canceledStatus}>
              <div className={styles.eventNameHere}>
                East 14th Street, NY, USA
              </div>
            </div>
            <div className={styles.statusItem}>
              <div className={styles.upcomingIcons}>
                <div className={styles.descriptionLabel} />
              </div>
              <div className={styles.completed}>Completed</div>
            </div>
            <div className={styles.walterJeff}>Walter Jeff</div>
          </div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                loading="lazy"
                alt=""
                src="/group-1381.svg"
              />
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1391.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.componentRow} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.rowItems}>
          <div className={styles.frameWrapper4}>
            <div className={styles.eventNameHereParent}>
              <div className={styles.eventNameHere}>Event name here</div>
              <div className={styles.dateLocation}>
                <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                <div className={styles.eventNameHere}>Sullivan St, NY, USA</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <div className={styles.upcomingIcons}>
              <div className={styles.input} />
            </div>
            <div className={styles.canceled}>Canceled</div>
          </div>
          <div className={styles.andrewDilton}>Anthony Rolfe</div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                loading="lazy"
                alt=""
                src="/group-1381.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableRows1}>
        <div className={styles.componentRow} />
      </div>
      <div className={styles.tableRows}>
        <div className={styles.frameParent16}>
          <div className={styles.frameWrapper6}>
            <div className={styles.eventNameHereParent}>
              <div className={styles.eventNameHere}>Event name here</div>
              <div className={styles.ddMmYyyyParent1}>
                <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                <div className={styles.eventNameHere}>
                  Greenwich St, NY, USA
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.upcomingIcons}>
              <div className={styles.input} />
            </div>
            <div className={styles.canceled}>Canceled</div>
          </div>
          <div className={styles.jenniferMartin}>Jennifer Martin</div>
          <div className={styles.moreAssigneeData}>
            <div className={styles.moreAssigneeItems}>
              <img
                className={styles.moreAssigneeItemsChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.moreAssigneeItemsItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img
                className={styles.moreAssigneeItemsInner}
                loading="lazy"
                alt=""
                src="/group-1381.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableItem} />
    </div>
  );
};

export default Table1;
