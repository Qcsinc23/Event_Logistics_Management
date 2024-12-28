import { FunctionComponent } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import LeftMenu from "../components/LeftMenu";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./CreateNewEvent.module.css";

const CreateNewEvent: FunctionComponent = () => {
  return (
    <div className={styles.createNewEvent}>
      <LeftMenu />
      <main className={styles.createNewEventInner}>
        <section className={styles.frameParent}>
          <div className={styles.stepsWrapper}>
            <img
              className={styles.stepsIcon}
              loading="lazy"
              alt=""
              src="/steps.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <FrameComponent3
              dashboardEventsCreateNewEve={`Dashboard > Events > Create New Event`}
              createNewEvent="Create New Event"
              button="Save as Draft"
            />
            <div className={styles.form}>
              <div className={styles.formChild} />
              <div className={styles.basicInformationParent}>
                <div className={styles.basicInformation}>Basic Information</div>
                <div className={styles.frameChild} />
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
                  className={styles.button}
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
                  className={styles.button1}
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