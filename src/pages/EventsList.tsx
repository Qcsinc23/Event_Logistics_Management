import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import styles from "./EventsList.module.css";

const EventsList: FunctionComponent = () => {
  return (
    <div className={styles.eventsList}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.layersParent}>
            <div className={styles.layers}>
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-11.svg"
              />
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-1-11.svg"
              />
            </div>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-107.svg"
              />
              <div className={styles.layer1}>
                <img
                  className={styles.layer1Child}
                  loading="lazy"
                  alt=""
                  src="/group-111.svg"
                />
              </div>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-113.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-114.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </div>
          </div>
          <div className={styles.menuWrapper}>
            <div className={styles.menu}>
              <div className={styles.dashboard}>Dashboard</div>
              <div className={styles.eventsParent}>
                <div className={styles.events}>Events</div>
                <div className={styles.eventListParent}>
                  <div className={styles.eventList}>Event List</div>
                  <div className={styles.eventCalendar}>Event Calendar</div>
                </div>
              </div>
              <div className={styles.logistics}>Logistics</div>
              <div className={styles.inventory}>Inventory</div>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.logoiconParent}>
              <img
                className={styles.logoicon}
                loading="lazy"
                alt=""
                src="/placeholder@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.eventsListInner}>
        <section className={styles.breadcrumbItemsParent}>
          <div className={styles.breadcrumbItems}>
            <div className={styles.titleContent}>
              <div className={styles.dashboardEventsEventLisParent}>
                <div
                  className={styles.dashboardEvents}
                >{`Dashboard > Events > Event List`}</div>
                <h2 className={styles.eventManagement}>Event Management</h2>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.profile}>
                <div className={styles.user}>
                  <div className={styles.userChild} />
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                  <div className={styles.profileName}>
                    <div
                      className={styles.sherwynGraham}
                    >{`Sherwyn Graham `}</div>
                  </div>
                </div>
                <Button
                  className={styles.button}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#1a3e59",
                    fontSize: "18",
                    borderColor: "#1a3e59",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#1a3e59" },
                    height: 50,
                  }}
                >
                  Create New Event
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild5} />
            <TextField
              className={styles.enterName}
              placeholder="Enter name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="18px" height="18px" src="/vector-2.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#9e9e9e" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  paddingLeft: "20px",
                  borderRadius: "8px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "10px",
                  color: "#9e9e9e",
                },
              }}
            />
            <FormControl
              className={styles.location}
              variant="standard"
              sx={{
                borderColor: "#9e9e9e",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "14.864864864864863%",
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
                  fontWeight: "Regular",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent="null"
              >
                <MenuItem>Location</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.location}
              variant="standard"
              sx={{
                borderColor: "#9e9e9e",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "14.864864864864863%",
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
                  fontWeight: "Regular",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent="null"
              >
                <MenuItem>Event type</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.location}
              variant="standard"
              sx={{
                borderColor: "#9e9e9e",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "14.864864864864863%",
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
                  fontWeight: "Regular",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent="null"
              >
                <MenuItem>Date Range</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.status}
              variant="standard"
              sx={{
                borderColor: "#9e9e9e",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "10.81081081081081%",
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
                  fontWeight: "Regular",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent="null"
              >
                <MenuItem>Status</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <Button
              className={styles.button1}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#ff6f3c",
                borderRadius: "10px",
                "&:hover": { background: "#ff6f3c" },
                width: 125,
                height: 50,
              }}
            >
              Search
            </Button>
          </div>
          <div className={styles.table}>
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
                <div className={styles.status1}>Status</div>
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
                      src="/group-139.svg"
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
                    <div className={styles.eventNameHere}>
                      721 Broadway, NY, USA
                    </div>
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
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-139.svg"
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
                <div className={styles.eventNameHereWrapper}>
                  <div className={styles.eventNameHere}>Event name here</div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.ddMmYyyyParent}>
                    <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                    <div className={styles.eventNameHere}>
                      Broome St, NY, USA
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent4}>
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
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-139.svg"
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
                <div className={styles.frameParent7}>
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
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-139.svg"
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
                <div className={styles.eventNameHereFrame}>
                  <div className={styles.eventNameHere}>Event name here</div>
                </div>
                <div className={styles.frameWrapper3}>
                  <div className={styles.ddMmYyyyParent}>
                    <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                    <div className={styles.eventNameHere}>
                      Mercer Street, NY, USA
                    </div>
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
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-139.svg"
                    />
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
                <div className={styles.frameParent13}>
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
                      src="/group-139.svg"
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
                <div className={styles.frameWrapper5}>
                  <div className={styles.eventNameHereParent}>
                    <div className={styles.eventNameHere}>Event name here</div>
                    <div className={styles.dateLocation}>
                      <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                      <div className={styles.eventNameHere}>
                        Sullivan St, NY, USA
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
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-139.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tableRows1}>
              <div className={styles.componentRow} />
            </div>
            <div className={styles.tableRows}>
              <div className={styles.frameParent19}>
                <div className={styles.frameWrapper7}>
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
                <div className={styles.frameParent20}>
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
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-139.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tableItem} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventsList;
