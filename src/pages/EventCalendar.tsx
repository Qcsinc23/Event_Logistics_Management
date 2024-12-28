import { FunctionComponent } from "react";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import UserContainer from "../components/UserContainer";
import EventTime from "../components/EventTime";
import EventRows from "../components/EventRows";
import styles from "./EventCalendar.module.css";

const EventCalendar: FunctionComponent = () => {
  return (
    <div className={styles.eventCalendar}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.menuContentParent}>
          <div className={styles.menuContent}>
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
                src="/layer-1-12.svg"
              />
            </div>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1072.svg"
              />
              <div className={styles.layer1}>
                <img
                  className={styles.layer1Child}
                  loading="lazy"
                  alt=""
                  src="/group-1111.svg"
                />
              </div>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1131.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1141.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.dashboardParent}>
              <div className={styles.dashboard}>Dashboard</div>
              <div className={styles.eventsParent}>
                <div className={styles.events}>Events</div>
                <div className={styles.eventListParent}>
                  <div className={styles.eventList}>Event List</div>
                  <div className={styles.eventCalendar1}>Event Calendar</div>
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
            <div className={styles.footerContent}>
              <img
                className={styles.placeholderIcon}
                loading="lazy"
                alt=""
                src="/placeholder@2x.png"
              />
              <div className={styles.frameGroup}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.arrowIcon}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.arrowIcon}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.arrowIcon}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.content}>
        <section className={styles.main}>
          <div className={styles.header}>
            <div className={styles.titleBar}>
              <div className={styles.titles}>
                <div
                  className={styles.dashboardEvents}
                >{`Dashboard > Events >  Event Calendar `}</div>
                <div className={styles.eventCalendar2}>Event Calendar</div>
              </div>
            </div>
            <div className={styles.filters}>
              <div className={styles.sort}>
                <div className={styles.sortBy}>Sort by:</div>
              </div>
              <div className={styles.userFilter}>
                <UserContainer />
                <div className={styles.dropdownFilters}>
                  <FormControl
                    className={styles.filter1}
                    variant="standard"
                    sx={{
                      borderColor: "#9e9e9e",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "10px",
                      width: "47.368421052631575%",
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
                      <MenuItem>Event Type</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <FormControl
                    className={styles.filter1}
                    variant="standard"
                    sx={{
                      borderColor: "#9e9e9e",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "10px",
                      width: "47.368421052631575%",
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
                      <MenuItem>Event Status</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.calender}>
            <div className={styles.calenderChild} />
            <div className={styles.calendarContainer}>
              <div className={styles.calendarContent}>
                <Button
                  className={styles.navigationHeader}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "16",
                    borderColor: "#9e9e9e",
                    borderRadius: "6px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    width: 100,
                    height: 42,
                  }}
                >
                  Today
                </Button>
                <div className={styles.calendarControls}>
                  <div className={styles.monthNavigation}>
                    <input
                      className={styles.navigationButtons}
                      type="checkbox"
                    />
                    <div className={styles.november2024}>November, 2024</div>
                    <div className={styles.navigationButtons1}>
                      <div className={styles.groupDiv}>
                        <div className={styles.frameChild5} />
                        <img
                          className={styles.frameChild6}
                          loading="lazy"
                          alt=""
                          src="/arrow-6.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tabs}>
                  <div className={styles.tabsChild} />
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild7} />
                    <div className={styles.day}>Day</div>
                  </div>
                  <div className={styles.tabViewOptions}>
                    <div className={styles.week}>Week</div>
                  </div>
                  <div className={styles.tabViewOptions1}>
                    <div className={styles.month}>Month</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.days}>
              <div className={styles.daysChild} />
              <div className={styles.weekdayNames}>
                <div className={styles.sunday}>Sunday</div>
              </div>
              <div className={styles.weekdayNames1}>
                <div className={styles.monday}>Monday</div>
              </div>
              <div className={styles.tuesday}>Tuesday</div>
              <div className={styles.weekdayNames2}>
                <div className={styles.wednesday}>Wednesday</div>
              </div>
              <div className={styles.weekdayNames3}>
                <div className={styles.thursday}>Thursday</div>
              </div>
              <div className={styles.weekdayNames4}>
                <div className={styles.friday}>Friday</div>
              </div>
              <div className={styles.saturday}>Saturday</div>
            </div>
            <div className={styles.calendarGrid}>
              <div className={styles.gridContent}>
                <div className={styles.gridRows}>
                  <div className={styles.gridCells}>
                    <div className={styles.cellContent}>1</div>
                  </div>
                  <div className={styles.eventMarkers}>
                    <img className={styles.linesIcon} alt="" src="/lines.svg" />
                    <div className={styles.eventPositions}>
                      <img
                        className={styles.disableIcon}
                        loading="lazy"
                        alt=""
                        src="/disable@2x.png"
                      />
                      <div className={styles.eventPlaceholders}>27</div>
                      <div className={styles.eventPlaceholders1}>28</div>
                      <div className={styles.eventPlaceholders2}>29</div>
                      <div className={styles.disabledContent}>
                        <div className={styles.div}>30</div>
                      </div>
                      <div className={styles.eventPlaceholders3}>31</div>
                    </div>
                    <div className={styles.events1}>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild8} />
                        <div className={styles.eventName000000Container}>
                          <p className={styles.eventName}>Event name</p>
                          <p className={styles.p}>00:00:00</p>
                        </div>
                      </div>
                      <div className={styles.eventDetails}>
                        <div className={styles.eventItems}>
                          <div className={styles.eventActions}>
                            <div className={styles.eventList1}>
                              <div className={styles.eventDates}>
                                <div className={styles.eventDate}>3</div>
                              </div>
                              <div className={styles.eventDates1}>
                                <div className={styles.div1}>10</div>
                              </div>
                              <div className={styles.eventDates2}>
                                <div className={styles.div2}>17</div>
                              </div>
                              <EventTime prop="24" />
                            </div>
                          </div>
                          <EventRows
                            timePlaceholder="4"
                            prop="11"
                            prop1="18"
                            prop2="25"
                          />
                          <div className={styles.eventDetails1}>
                            <div className={styles.eventInformation}>
                              <div className={styles.eventDescription}>
                                <div className={styles.descriptionWrapper}>
                                  <div className={styles.description}>5</div>
                                </div>
                                <div className={styles.eventHover}>
                                  <div className={styles.hover}>
                                    <div className={styles.hoverChild} />
                                    <div className={styles.hoverContent}>
                                      <div className={styles.eventNameHere}>
                                        Event name here
                                      </div>
                                      <div className={styles.eventStatus}>
                                        <div className={styles.statusIcon}>
                                          <div
                                            className={styles.statusIconChild}
                                          />
                                        </div>
                                        <div className={styles.upcoming}>
                                          Upcoming
                                        </div>
                                      </div>
                                      <div className={styles.hoverTime}>
                                        00:00:00
                                      </div>
                                    </div>
                                    <div className={styles.hoverActions}>
                                      <img
                                        className={styles.hoverActionsChild}
                                        loading="lazy"
                                        alt=""
                                        src="/group-1401.svg"
                                      />
                                      <img
                                        className={styles.hoverActionsItem}
                                        loading="lazy"
                                        alt=""
                                        src="/group-1372.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.eventLocation}>
                                    <div className={styles.location}>19</div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.eventAttendees}>
                                <div className={styles.attendees}>26</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.eventItems1}>
                            <div className={styles.itemIcon}>
                              <div className={styles.iconContainer}>
                                <div className={styles.iconContainerChild} />
                                <div className={styles.itemTime}>6</div>
                              </div>
                              <div className={styles.itemTitleContainer}>
                                <div className={styles.rectangleParent3}>
                                  <div className={styles.frameChild9} />
                                  <div
                                    className={styles.eventName000000Container}
                                  >
                                    <p className={styles.eventName}>
                                      Event name
                                    </p>
                                    <p className={styles.p}>00:00:00</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.eventItem}>
                              <div className={styles.location}>13</div>
                            </div>
                            <EventTime
                              timeWidth="39px"
                              prop="20"
                              boxWidth="31px"
                              groupBoxBackgroundColor="#ed3006"
                              rectangleBoxBackgroundColor="#ed3006"
                            />
                            <div className={styles.eventItem1}>
                              <div className={styles.div3}>27</div>
                            </div>
                          </div>
                          <div className={styles.thirdItem}>
                            <div className={styles.thirdItemDetails}>
                              <div className={styles.thirdItemTimeContainer}>
                                <div className={styles.thirdItemTime}>7</div>
                              </div>
                              <EventTime
                                timeWidth="34px"
                                prop="14"
                                boxWidth="26px"
                                groupBoxBackgroundColor="#4caf50"
                                rectangleBoxBackgroundColor="#4caf50"
                              />
                              <div className={styles.thirdItemLocation}>
                                <div className={styles.itemLocation}>21</div>
                              </div>
                              <div className={styles.thirdItemAttendees}>
                                <div className={styles.attendees}>28</div>
                              </div>
                            </div>
                          </div>
                          <EventRows
                            timePlaceholder="8"
                            groupBoxBackgroundColor="#4caf50"
                            rectangleBoxBackgroundColor="#4caf50"
                            frameBoxWidth="34px"
                            prop="15"
                            boxWidth="26px"
                            frameBoxWidth1="37px"
                            prop1="22"
                            prop2="29"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.calendarFooter}>
                  <div className={styles.div4}>2</div>
                  <div className={styles.footerActions}>
                    <div className={styles.div5}>9</div>
                    <div className={styles.actionIcons}>
                      <div className={styles.div6}>16</div>
                      <div className={styles.div7}>23</div>
                      <div className={styles.div8}>30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventCalendar;