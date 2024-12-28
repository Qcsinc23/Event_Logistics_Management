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
import styles from "./CreateNewEvent.module.css";

const CreateNewEvent: FunctionComponent = () => {
  return (
    <div className={styles.createNewEvent}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.layer1Parent}>
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
            <div className={styles.frameContainer}>
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
                className={styles.ishuIcon}
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
          <div className={styles.menuOptionsWrapper}>
            <div className={styles.menuOptions}>
              <div className={styles.dashboard}>Dashboard</div>
              <div className={styles.eventsParent}>
                <div className={styles.events}>Events</div>
                <div className={styles.calendarOptions}>
                  <div className={styles.eventList}>Event List</div>
                  <div className={styles.eventList}>Event Calendar</div>
                </div>
              </div>
              <div className={styles.eventList}>Logistics</div>
              <div className={styles.inventory}>Inventory</div>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.dealermatixTechnologiesParent}>
              <img
                className={styles.dealermatixTechnologiesIcon}
                loading="lazy"
                alt=""
                src="/placeholder@2x.png"
              />
              <div className={styles.imageParent}>
                <div className={styles.image}>
                  <div className={styles.imageChild} />
                  <img
                    className={styles.imageItem}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
                <div className={styles.image}>
                  <div className={styles.imageChild} />
                  <img
                    className={styles.imageItem}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
                <div className={styles.image}>
                  <div className={styles.imageChild} />
                  <img
                    className={styles.imageItem}
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
      <main className={styles.createNewEventInner}>
        <section className={styles.frameSection}>
          <div className={styles.stepsWrapper}>
            <img
              className={styles.stepsIcon}
              loading="lazy"
              alt=""
              src="/steps.svg"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.dashboardEventsCreateNeParent}>
                  <div
                    className={styles.dashboardEvents}
                  >{`Dashboard > Events > Create New Event`}</div>
                  <h3 className={styles.createNewEvent1}>Create New Event</h3>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.avatarWrapper}>
                  <img
                    className={styles.avatarIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.userParent}>
                  <div className={styles.user}>
                    <div className={styles.userChild} />
                    <img
                      className={styles.buttonBackgroundIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-2@2x.png"
                    />
                    <div className={styles.sherwynGrahamWrapper}>
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
                      width: 180,
                      height: 50,
                    }}
                  >
                    Save as Draft
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.formChild} />
              <div className={styles.basicInformationParent}>
                <div className={styles.basicInformation}>Basic Information</div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.eventNameInputParent}>
                <div className={styles.eventNameInput}>
                  <TextField
                    className={styles.eventName}
                    placeholder="* Event Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#9e9e9e" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        fontSize: "18px",
                      },
                    }}
                  />
                  <FormControl
                    className={styles.eventType}
                    variant="standard"
                    sx={{
                      borderColor: "#9e9e9e",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      width: "48.91304347826087%",
                      height: "60px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "60px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "60px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "60px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "60px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        fontSize: 18,
                        fontWeight: "Regular",
                        fontFamily: "Poppins",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "30px",
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
                      <MenuItem>* Event Type</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <textarea
                  className={styles.description}
                  placeholder="* Description "
                  rows={6}
                  cols={69}
                />
              </div>
              <div className={styles.navigationButtons}>
                <Button
                  className={styles.button1}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "18",
                    borderColor: "#9e9e9e",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    width: 140,
                    height: 50,
                  }}
                >
                  Previous
                </Button>
                <Button
                  className={styles.button2}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "18",
                    background: "#ff6f3c",
                    borderRadius: "10px",
                    "&:hover": { background: "#ff6f3c" },
                    width: 220,
                    height: 50,
                  }}
                >{`Save & Continue`}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateNewEvent;
