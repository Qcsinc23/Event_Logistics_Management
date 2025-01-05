import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Table.module.css";

export type TableType = {
  className?: string;
};

const Table: FunctionComponent<TableType> = ({ className = "" }) => {
  return (
    <div className={[styles.table, className].join(" ")}>
      <div className={styles.tableChild} />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.taskNameContainer}>
          <input className={styles.colorIndicator} type="checkbox" />
          <div className={styles.taskName}> Task Name</div>
        </div>
        <div className={styles.headerItems}>
          <div className={styles.assignee}>Assignee</div>
        </div>
        <div className={styles.headerItems1}>
          <div className={styles.relatedEvent}>Related Event</div>
        </div>
        <div className={styles.priorityLevel}>Priority Level</div>
        <div className={styles.headerItems2}>
          <div className={styles.dueDate}>Due Date</div>
        </div>
        <div className={styles.headerItems3}>
          <div className={styles.status}>Status</div>
        </div>
        <div className={styles.actions}>Actions</div>
      </div>
      <div className={styles.tableStructure}>
        <div className={styles.rowSeparator}>
          <div className={styles.rowContainer}>
            <div className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <div className={styles.taskNameHere}>Task name here</div>
            </div>
          </div>
          <div className={styles.assigneeRow}>
            <div className={styles.frankShawParent}>
              <div className={styles.frankShaw}>Frank Shaw</div>
              <div className={styles.taskNameHere}>Event name here</div>
            </div>
          </div>
          <div className={styles.priorityRow}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.priorityIcons} />
            </div>
            <div className={styles.high}>High</div>
          </div>
          <div className={styles.dueDateRow}>
            <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.statusIconParent}>
              <div className={styles.priorityIconsWrapper}>
                <div className={styles.statusIconChild} />
              </div>
              <div className={styles.ongoing}>Ongoing</div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-140.svg"
                />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-1371.svg"
                />
                <img
                  className={styles.frameInner}
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
      </div>
      <div className={styles.tableStructure1}>
        <div className={styles.tableStructureChild} />
      </div>
      <div className={styles.tableStructure2}>
        <div className={styles.frameContainer}>
          <div className={styles.rowContainer}>
            <div className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <div className={styles.taskNameHere}>Task name here</div>
            </div>
          </div>
          <div className={styles.frankShawWrapper}>
            <div className={styles.frankShaw}>Frank Shaw</div>
          </div>
          <div className={styles.frankShawWrapper}>
            <div className={styles.taskNameHere}>Event name here</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.dueDateIcons} />
            </div>
            <div className={styles.medium}>Medium</div>
          </div>
          <div className={styles.dueDateRow}>
            <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.statusIconChild} />
            </div>
            <div className={styles.ongoing}>Ongoing</div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img className={styles.frameInner} alt="" src="/group-1381.svg" />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableStructure1}>
        <div className={styles.tableStructureChild} />
      </div>
      <div className={styles.tableStructure2}>
        <div className={styles.frameParent5}>
          <div className={styles.frameWrapper2}>
            <div className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <div className={styles.taskNameHere}>Task name here</div>
            </div>
          </div>
          <div className={styles.frankShawContainer}>
            <div className={styles.frankShaw}>Frank Shaw</div>
          </div>
          <div className={styles.eventNameHereContainer}>
            <div className={styles.taskNameHere}>Event name here</div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.dueDateIcons} />
            </div>
            <div className={styles.medium}>Medium</div>
          </div>
          <div className={styles.ddMmYyyyContainer}>
            <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.statusIcons} />
            </div>
            <div className={styles.upcoming}>Upcoming</div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild7}
                loading="lazy"
                alt=""
                src="/group-140-2.svg"
              />
              <img
                className={styles.frameChild8}
                loading="lazy"
                alt=""
                src="/group-137-2.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/group-138-2.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-139-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableStructure1}>
        <div className={styles.tableStructureChild} />
      </div>
      <div className={styles.tableStructure2}>
        <div className={styles.frameParent5}>
          <div className={styles.frameWrapper2}>
            <div className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <div className={styles.taskNameHere}>Task name here</div>
            </div>
          </div>
          <div className={styles.frankShawContainer}>
            <div className={styles.frankShaw}>Frank Shaw</div>
          </div>
          <div className={styles.eventNameHereContainer}>
            <div className={styles.taskNameHere}>Event name here</div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.dueDateIcons} />
            </div>
            <div className={styles.medium}>Medium</div>
          </div>
          <div className={styles.ddMmYyyyContainer}>
            <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.statusIcons} />
            </div>
            <div className={styles.upcoming}>Upcoming</div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild7}
                loading="lazy"
                alt=""
                src="/group-140-2.svg"
              />
              <img
                className={styles.frameChild8}
                loading="lazy"
                alt=""
                src="/group-137-2.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/group-138-2.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-139-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableStructure1}>
        <div className={styles.tableStructureChild} />
      </div>
      <div className={styles.tableStructure}>
        <div className={styles.frameParent17}>
          <div className={styles.frameWrapper8}>
            <div className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <div className={styles.taskNameHere}>Task name here</div>
            </div>
          </div>
          <div className={styles.frameWrapper9}>
            <div className={styles.frankShawParent}>
              <div className={styles.frankShaw}>Frank Shaw</div>
              <div className={styles.taskNameHere}>Event name here</div>
            </div>
          </div>
          <div className={styles.frameParent19}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.frameChild17} />
            </div>
            <div className={styles.low}>Low</div>
          </div>
          <div className={styles.frameParent20}>
            <div className={styles.dueDateRow}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
            </div>
            <div className={styles.statusRowParent}>
              <div className={styles.statusIconParent}>
                <div className={styles.priorityIconsWrapper}>
                  <div className={styles.statusIcons} />
                </div>
                <div className={styles.upcoming}>Upcoming</div>
              </div>
              <div className={styles.progressRow}>
                <div className={styles.frameGroup}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-140-2.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-137-2.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-138-2.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-139-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableStructure1}>
        <div className={styles.tableStructureChild} />
      </div>
      <div className={styles.tableStructure}>
        <div className={styles.frameParent17}>
          <div className={styles.frameWrapper8}>
            <div className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <div className={styles.taskNameHere}>Task name here</div>
            </div>
          </div>
          <div className={styles.frameWrapper9}>
            <div className={styles.frankShawParent}>
              <div className={styles.frankShaw}>Frank Shaw</div>
              <div className={styles.taskNameHere}>Event name here</div>
            </div>
          </div>
          <div className={styles.frameParent19}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.frameChild17} />
            </div>
            <div className={styles.low}>Low</div>
          </div>
          <div className={styles.frameParent20}>
            <div className={styles.dueDateRow}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
            </div>
            <div className={styles.frameParent26}>
              <div className={styles.statusIconParent}>
                <div className={styles.priorityIconsWrapper}>
                  <div className={styles.frameChild23} />
                </div>
                <div className={styles.notStarted}>Not Started</div>
              </div>
              <div className={styles.progressRow}>
                <div className={styles.frameGroup}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-140.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-1371.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-1381.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-1391.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableStructure1}>
        <div className={styles.tableStructureChild} />
      </div>
      <div className={styles.tableStructure}>
        <div className={styles.frameParent17}>
          <div className={styles.frameWrapper8}>
            <div className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <div className={styles.taskNameHere}>Task name here</div>
            </div>
          </div>
          <div className={styles.frameWrapper9}>
            <div className={styles.frankShawParent}>
              <div className={styles.frankShaw}>Frank Shaw</div>
              <div className={styles.taskNameHere}>Event name here</div>
            </div>
          </div>
          <div className={styles.frameParent19}>
            <div className={styles.priorityIconsWrapper}>
              <div className={styles.frameChild17} />
            </div>
            <div className={styles.low}>Low</div>
          </div>
          <div className={styles.frameParent20}>
            <div className={styles.dueDateRow}>
              <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
            </div>
            <div className={styles.statusRowParent}>
              <div className={styles.statusIconParent}>
                <div className={styles.priorityIconsWrapper}>
                  <div className={styles.frameChild23} />
                </div>
                <div className={styles.upcoming}>Upcoming</div>
              </div>
              <div className={styles.progressRow}>
                <div className={styles.frameGroup}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-140.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-1371.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-1381.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-1391.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableItem} />
    </div>
  );
};

export default Table;