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
import styles from "./GroupComponent3.module.css";

export type GroupComponent3Type = {
  className?: string;
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
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
          "& .MuiInputBase-input": { paddingLeft: "10px", color: "#9e9e9e" },
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
        className={styles.button}
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
  );
};

export default GroupComponent3;
