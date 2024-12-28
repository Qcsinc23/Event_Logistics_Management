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
import LeftMenu3 from "../components/LeftMenu3";
import UserContainer from "../components/UserContainer";
import styles from "./AddInventory.module.css";

const AddInventory: FunctionComponent = () => {
  return (
    <div className={styles.addInventory}>
      <LeftMenu3
        logo="/logo1.svg"
        frameBoxFlex="1"
        navigationAlignSelf="stretch"
        tabsAlignSelf="stretch"
        inventoryTabFlex="1"
      />
      <main className={styles.sidebar}>
        <section className={styles.sidebarContent}>
          <header className={styles.breadcrumbParent}>
            <div className={styles.breadcrumb}>
              <div
                className={styles.dashboardInventory}
              >{`Dashboard > Inventory > Add Inventory`}</div>
            </div>
            <UserContainer
              userContainerWidth="289px"
              userContainerAlignSelf="unset"
              userContainerHeight="unset"
              userIconHeight="unset"
              userIconWidth="unset"
              profilePicture="/vector-1.svg"
              userFlex="1"
              userHeight="unset"
              userWidth="unset"
              userNameHeight="unset"
              userNameWidth="unset"
              sherwynGrahamWidth="unset"
              sherwynGrahamHeight="unset"
              sherwynGrahamDisplay="unset"
            />
          </header>
          <h2 className={styles.addNewInventory}>Add New Inventory Item</h2>
          <div className={styles.form}>
            <div className={styles.formChild} />
            <div className={styles.frameParent}>
              <div className={styles.basicInformationParent}>
                <h3 className={styles.basicInformation}>Basic Information</h3>
                <div className={styles.frameParent}>
                  <div className={styles.basicInfoFieldsChild} />
                  <div className={styles.inputFields}>
                    <TextField
                      className={styles.itemName}
                      placeholder="* Item Name"
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
                      className={styles.itemName}
                      placeholder="* SKU/Item Code"
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
                      className={styles.category}
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
                        width: "31.91304347826088%",
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
                          marginLeft: "30.40000000000009px",
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
                        <MenuItem>* Category</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                </div>
              </div>
              <TextField
                className={styles.description}
                placeholder="* Description "
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#9e9e9e" },
                  "& .MuiInputBase-root": {
                    height: "120px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    fontSize: "18px",
                  },
                }}
              />
            </div>
            <div className={styles.additionalInfo}>
              <div className={styles.stockInformationParent}>
                <h3 className={styles.stockInformation}>Stock Information</h3>
                <div className={styles.frameParent}>
                  <div className={styles.basicInfoFieldsChild} />
                  <div className={styles.inputFields}>
                    <TextField
                      className={styles.quantityAvailable}
                      placeholder="* Quantity Available"
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
                      className={styles.quantityAvailable}
                      placeholder="* Reserved Quantity"
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
                      className={styles.quantityAvailable}
                      placeholder="* Minimum Required Quantity"
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
                </div>
              </div>
              <div className={styles.stockInformationParent}>
                <h3 className={styles.stockInformation}>Location Details</h3>
                <div className={styles.frameParent}>
                  <div className={styles.basicInfoFieldsChild} />
                  <div className={styles.primaryLocationParent}>
                    <FormControl
                      className={styles.primaryLocation}
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
                        <MenuItem>* Primary Location</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <TextField
                      className={styles.secondaryLocation}
                      placeholder="* Secondary Location (Optional)"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                        width: "675px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.stockInformationParent}>
                <h3 className={styles.stockInformation}>
                  Supplier Information
                </h3>
                <div className={styles.lineWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.supplierInfo}>
                  <FormControl
                    className={styles.category}
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
                      width: "31.91304347826088%",
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
                      <MenuItem>* Supplier Name</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <TextField
                    className={styles.phoneNumber}
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
                      width: "439.4px",
                    }}
                  />
                  <TextField
                    className={styles.emailAddress}
                    placeholder="* Email address"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#9e9e9e" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        fontSize: "18px",
                      },
                      width: "440.4px",
                    }}
                  />
                </div>
              </div>
              <div className={styles.additionalInfo}>
                <div className={styles.pricingHeader}>
                  <h3 className={styles.stockInformation}>
                    Pricing Information
                  </h3>
                  <div className={styles.basicInfoFieldsChild} />
                </div>
                <div className={styles.pricingFields}>
                  <div className={styles.priceInputs}>
                    <TextField
                      className={styles.itemName}
                      placeholder="* Unit Price"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img width="23px" height="23px" src="/vector-2.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          paddingRight: "25.4px",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                      }}
                    />
                    <TextField
                      className={styles.itemName}
                      placeholder="* Cost Price"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img width="23px" height="23px" src="/vector-3.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          paddingRight: "25.4px",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                      }}
                    />
                    <FormControl
                      className={styles.category}
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
                        width: "31.91304347826088%",
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
                          marginLeft: "30.40000000000009px",
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
                        <MenuItem>* Currency</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <h3 className={styles.images}>Images</h3>
                  <div className={styles.imagesDivider} />
                </div>
              </div>
              <div className={styles.imageUpload}>
                <div className={styles.imageContainer}>
                  <div className={styles.frameGroup}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameInner} />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page11.svg"
                      />
                    </div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameInner} />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page1-1.svg"
                      />
                    </div>
                    <div className={styles.pageControl}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameInner} />
                        <img
                          className={styles.page1Icon}
                          loading="lazy"
                          alt=""
                          src="/page1-1.svg"
                        />
                      </div>
                      <img
                        className={styles.pageControlChild}
                        loading="lazy"
                        alt=""
                        src="/group-183.svg"
                      />
                    </div>
                    <div className={styles.addMoreWrapper}>
                      <div className={styles.addMore}>Add More</div>
                    </div>
                  </div>
                </div>
                <div className={styles.actions}>
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
        </section>
      </main>
    </div>
  );
};

export default AddInventory;