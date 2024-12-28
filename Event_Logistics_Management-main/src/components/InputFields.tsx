import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const InputFields: FunctionComponent<InputFieldsType> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    organization: "",
    location: "",
    email: "",
    password: "",
    passwordConfirm: "",
    expectedDeliveries: "",
    agreedToTerms: false
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation here
    if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    // Here you would typically make an API call to create the account
    console.log("Form submitted:", formData);
    navigate("/dashboard"); // Redirect to dashboard after successful signup
  };

  return (
    <form className={[styles.inputFields, className].join(" ")} onSubmit={handleSubmit}>
      <div className={styles.namePhoneInputs}>
        <TextField
          className={styles.namePhoneInputsChild}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="* First Name"
          variant="outlined"
          required
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
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="* Last Name"
          variant="outlined"
          required
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
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="* Phone number"
          variant="outlined"
          required
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
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="* Organization name"
          variant="outlined"
          required
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
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="* Location"
          variant="outlined"
          required
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="* Email"
          type="email"
          variant="outlined"
          required
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
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="* Password"
          type="password"
          variant="outlined"
          required
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
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          placeholder="* Password confirmation"
          type="password"
          variant="outlined"
          required
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
        variant="outlined"
        required
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
        <InputLabel>Expected number of deliveries per week</InputLabel>
        <Select
          name="expectedDeliveries"
          value={formData.expectedDeliveries}
          onChange={handleChange}
          label="Expected number of deliveries per week"
        >
          <MenuItem value="1-5">1-5 deliveries</MenuItem>
          <MenuItem value="6-10">6-10 deliveries</MenuItem>
          <MenuItem value="11-20">11-20 deliveries</MenuItem>
          <MenuItem value="21+">21+ deliveries</MenuItem>
        </Select>
      </FormControl>
      <div className={styles.rectangleParent}>
        <input 
          className={styles.rectangleInput} 
          type="checkbox"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
          required
        />
        <div className={styles.iHaveReviewedTheBelowLinkWrapper}>
          <div className={styles.iHaveReviewedContainer}>
            <span className={styles.span}>
              <span className={styles.span1}>*</span>
            </span>
            <span className={styles.iHaveReviewedTheBelowLink}>
              <span className={styles.span}> </span>
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
        type="submit"
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
          <span className={styles.signIn}> </span>
        </span>
        <span 
          className={styles.signIn}
          onClick={() => navigate('/login')}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          <span className={styles.span1}>Sign in.</span>
        </span>
      </div>
    </form>
  );
};

export default InputFields;
