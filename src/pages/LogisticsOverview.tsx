import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import UserContainer from "../components/UserContainer";
import Table from "../components/Table";
import styles from "./LogisticsOverview.module.css";

const LogisticsOverview: FunctionComponent = () => {
  return (
    <div className={styles.logisticsOverview}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img className={styles.logoIcon} loading="lazy" alt="" />
        <div className={styles.content}>
          <div className={styles.frameParent}>
            <div className={styles.layer1Parent}>
              <img className={styles.layer1Icon} loading="lazy" alt="" />
              <img className={styles.layer1Icon} loading="lazy" alt="" />
              <img className={styles.frameChild} loading="lazy" alt="" />
            </div>
            <div className={styles.layer1Group}>
              <div className={styles.layer1}>
                <img className={styles.layer1Child} loading="lazy" alt="" />
              </div>
              <img className={styles.frameItem} loading="lazy" alt="" />
              <img className={styles.frameItem} loading="lazy" alt="" />
              <img className={styles.moneyIcon} loading="lazy" alt="" />
              <img className={styles.layer1Icon2} loading="lazy" alt="" />
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.information}>
              <div className={styles.container}>
                <div className={styles.wrapper}>
                  <div className={styles.events}>Events</div>
                  <div className={styles.navigationContainer}>
                    <div className={styles.logistics}>Logistics</div>
                    <div className={styles.overviewParent}>
                      <div className={styles.overview}>Overview</div>
                      <div className={styles.taskAssignment}>
                        Task Assignment
                      </div>
                      <div className={styles.taskAssignment}>
                        Route Planning
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.management}>
                  <div className={styles.frameGroup}>
                    <img className={styles.frameIcon} loading="lazy" alt="" />
                    <div className={styles.settings}>
                      <div className={styles.settingsChild} />
                      <img
                        className={styles.settingsItem}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.taskAssignment}>Vehicle Management</div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.settingsList}>
                <div className={styles.inventory}>Inventory</div>
                <div className={styles.deliveries}>Deliveries</div>
                <div className={styles.reports}>Reports</div>
                <div className={styles.users}>Users</div>
                <div className={styles.settings2}>Settings</div>
              </div>
              <div className={styles.settingsInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.settings}>
                    <div className={styles.settingsChild} />
                    <img className={styles.arrowIcon} alt="" />
                  </div>
                  <div className={styles.settings}>
                    <div className={styles.settingsChild} />
                    <img className={styles.arrowIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.page}>
        <section className={styles.contentArea}>
          <div className={styles.body}>
            <div className={styles.dashboardContainer}>
              <div
                className={styles.dashboardLogistics}
              >{`Dashboard > Logistics > Overview`}</div>
              <div className={styles.metrics}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild3} />
                  <div className={styles.metricPlaceholder}>03</div>
                  <div className={styles.tasksDueToday}>Tasks Due Today</div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild4} />
                  <div className={styles.div}>05</div>
                  <div className={styles.tasksDueToday}>Over Due Tasks</div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild3} />
                  <div className={styles.div1}>44</div>
                  <div className={styles.openTasks}>Open Tasks</div>
                </div>
              </div>
            </div>
            <div className={styles.userContainerParent}>
              <UserContainer />
              <div className={styles.summary}>
                <div className={styles.summaryChild} />
                <div className={styles.taskStatus}>
                  <div className={styles.tasksByStatus}>Tasks by Status</div>
                  <div className={styles.statusVisuals}>
                    <div className={styles.statusElements}>
                      <div className={styles.statusIconsWrapper}>
                        <div className={styles.statusIcons} />
                      </div>
                      <div className={styles.upcoming}>
                        <b>14</b>
                        <span> Upcoming</span>
                      </div>
                    </div>
                    <div className={styles.statusElements}>
                      <div className={styles.statusIconsWrapper}>
                        <div className={styles.payouts} />
                      </div>
                      <div className={styles.taskAssignment}>
                        <b>{`03 `}</b>
                        <span>Ongoing</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statusContainerParent}>
                  <div className={styles.statusIconsWrapper}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.remainingIcons} />
                    </div>
                  </div>
                  <div className={styles.remainingLabels}>
                    <div className={styles.taskAssignment}>
                      <b>20</b>
                      <span> Not Started</span>
                    </div>
                    <div className={styles.taskAssignment}>
                      <b>{`06 `}</b>
                      <span>Cancelled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.taskListContainerParent}>
            <div className={styles.taskListContainer}>
              <h2 className={styles.taskList}>Task List</h2>
            </div>
            <div className={styles.filterControls}>
              <div className={styles.filterElements}>
                <div className={styles.sortBy}>Sort by:</div>
              </div>
              <FormControl
                className={styles.sort}
                variant="standard"
                sx={{
                  borderColor: "#9e9e9e",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "10px",
                  width: "32.0855614973262%",
                  height: "50px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#9e9e9e",
                    fontSize: 18,
                    fontWeight: "Medium",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
              >
                <InputLabel color="warning" />
                <Select
                  color="warning"
                  disableUnderline
                  displayEmpty
                  IconComponent="null"
                >
                  <MenuItem>Due Date</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className={styles.filterElements}>
                <div className={styles.filterBy}>Filter by:</div>
              </div>
              <FormControl
                className={styles.sort}
                variant="standard"
                sx={{
                  borderColor: "#9e9e9e",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "10px",
                  width: "32.0855614973262%",
                  height: "50px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#9e9e9e",
                    fontSize: 18,
                    fontWeight: "Medium",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
              >
                <InputLabel color="warning" />
                <Select
                  color="warning"
                  disableUnderline
                  displayEmpty
                  IconComponent="null"
                >
                  <MenuItem>Assignee</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <Table />
        </section>
      </main>
    </div>
  );
};

export default LogisticsOverview;
