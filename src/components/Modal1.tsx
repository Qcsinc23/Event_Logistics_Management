import { FunctionComponent } from "react";
import {
  Box,
  Typography,
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
import styles from "./Modal1.module.css";

export type Modal1Type = {
  className?: string;
};

const Modal1: FunctionComponent<Modal1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.modal, className].join(" ")}>
      <div className={styles.modalChild} />
      <div className={styles.modalActions}>
        <h3 className={styles.createAlert}>Create Alert</h3>
        <div className={styles.createIconContainer}>
          <img
            className={styles.createIconContainerChild}
            loading="lazy"
            alt=""
            src="/group-209.svg"
          />
        </div>
      </div>
      <div className={styles.separator}>
        <div className={styles.separatorChild} />
      </div>
      <TextField
        className={styles.alertName}
        placeholder="* Alert Name"
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
        className={styles.triggerType}
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
          width: "88.88888888888889%",
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
          <MenuItem>* Trigger Type</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <TextField
        className={styles.modalInputFields}
        placeholder="* Parameters"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9e9e9e" },
          "& .MuiInputBase-root": {
            height: "65px",
            borderRadius: "10px",
            fontSize: "18px",
          },
        }}
      />
      <div className={styles.notificationTitle}>
        <div className={styles.notificationChannels}>Notification Channels</div>
        <div className={styles.channels}>
          <div className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <div className={styles.channelTypes}>
              <div className={styles.email}>Email</div>
            </div>
          </div>
          <div className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <div className={styles.channelTypes}>
              <div className={styles.email}>SMS</div>
            </div>
          </div>
          <div className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <div className={styles.channelTypes}>
              <div className={styles.email}>In-App</div>
            </div>
          </div>
          <div className={styles.channelOptions}>
            <input className={styles.channelBackground} type="checkbox" />
            <div className={styles.channelTypes}>
              <div className={styles.push}>Push</div>
            </div>
          </div>
        </div>
      </div>
      <TextField
        className={styles.modalInputFields}
        placeholder="* Email templates"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9e9e9e" },
          "& .MuiInputBase-root": {
            height: "65px",
            borderRadius: "10px",
            fontSize: "18px",
          },
        }}
      />
      <div className={styles.frequency}>
        <div className={styles.notificationChannels}>Frequency Settings</div>
        <div className={styles.frequencyOptions}>
          <div className={styles.frequencyTypes}>
            <div className={styles.frequencySelections}>
              <input className={styles.channelBackground} type="checkbox" />
              <div className={styles.frequencyTypeNames}>
                <div className={styles.immediate}>Immediate</div>
              </div>
            </div>
            <div className={styles.digestOption}>
              <input className={styles.groupInput} type="checkbox" />
              <div className={styles.frequencyTypeNames}>
                <div className={styles.digest}>Digest</div>
              </div>
            </div>
            <div className={styles.frequencySelections1}>
              <input className={styles.channelBackground} type="checkbox" />
              <div className={styles.frequencyTypeNames}>
                <div className={styles.daily}>Daily</div>
              </div>
            </div>
            <div className={styles.frequencySelections1}>
              <input className={styles.channelBackground} type="checkbox" />
              <div className={styles.frequencyTypeNames}>
                <div className={styles.digest}>Weekly</div>
              </div>
            </div>
          </div>
          <div className={styles.actionButtons}>
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
                height: 50,
              }}
            >
              Cancel
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
                height: 50,
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
