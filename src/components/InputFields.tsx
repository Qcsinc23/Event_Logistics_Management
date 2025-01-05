import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import styles from "./InputFields.module.css";

export type InputFieldsType = {
  className?: string;
};

const InputFields: FunctionComponent<InputFieldsType> = ({
  className = "",
}) => {
  return (
    <form className={[styles.inputFields, className].join(" ")}>
      <div className={styles.namePhoneInputs}>
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* First Name"
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
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* Last Name"
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
      </div>
      <div className={styles.namePhoneInputs}>
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* Phone number"
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
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* Organization name"
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
      </div>
      <div className={styles.namePhoneInputs}>
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* Location"
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
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* Email"
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
      </div>
      <div className={styles.namePhoneInputs}>
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* Password"
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
        <TextField
          className={styles.namePhoneInputsChild}
          placeholder="* Password confirmation"
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
      </div>
      <FormControl
        className={styles.parent}
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
          width: "100%",
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
          <MenuItem>* Expected number of deliveries per week?</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <div className={styles.rectangleParent}>
        <input className={styles.rectangleInput} type="checkbox" />
        <div className={styles.iHaveReviewedTheBelowLinkWrapper}>
          <div className={styles.iHaveReviewedContainer}>
            <span className={styles.span}>
              <span className={styles.span1}>*</span>
            </span>
            <span className={styles.iHaveReviewedTheBelowLink}>
              <span className={styles.span}> </span>
              <span className={styles.iHaveReviewed}>
                I have reviewed the below linked documents, and agree to the
                terms and conditions set forth herein.
              </span>
            </span>
          </div>
        </div>
      </div>
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
          width: 220,
          height: 50,
        }}
      >
        Create a Account
      </Button>
      <div className={styles.alreadyAQuietContainer}>
        <span className={styles.alreadyAQuietCraftSolution}>
          <span className={styles.alreadyAQuiet}>
            Already a Quiet Craft Solutions Inc customer?
          </span>
          <span className={styles.signIn}> </span>
        </span>
        <span className={styles.signIn}>
          <span className={styles.span1}>Sign in.</span>
        </span>
      </div>
    </form>
  );
};

export default InputFields;
