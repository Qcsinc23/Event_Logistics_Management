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
  TextField,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./AddProofOfDelivery.module.css";

const AddProofOfDelivery: FunctionComponent = () => {
  return (
    <div className={styles.addProofOfDelivery}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.navigation}>
          <div className={styles.navigationItems}>
            <img
              className={styles.navigationIcons}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <div className={styles.navigationIcons1}>
              <div className={styles.navigationIconsChild} />
              <img
                className={styles.navigationIconsItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </div>
            <img
              className={styles.navigationIcons}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <img
              className={styles.navigationIcons}
              loading="lazy"
              alt=""
              src="/placeholder@2x.png"
            />
          </div>
          <div className={styles.menuOptions}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.events}>Events</div>
            <div className={styles.logistics}>Logistics</div>
            <div className={styles.inventory}>Inventory</div>
            <div className={styles.deliveriesParent}>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.liveTrackingMapParent}>
                <div className={styles.liveTrackingMap}>Live Tracking Map</div>
                <div className={styles.liveTrackingMap}>Status Updates</div>
                <div className={styles.liveTrackingMap}>Proof of Delivery</div>
              </div>
              <div className={styles.reportsParent}>
                <div className={styles.reports}>Reports</div>
                <div className={styles.users}>Users</div>
              </div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
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
                src="/layer-1-14.svg"
              />
              <img
                className={styles.layersChild}
                loading="lazy"
                alt=""
                src="/group-1074.svg"
              />
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-1114.svg"
                />
                <div className={styles.layer1} />
              </div>
              <img
                className={styles.layersItem}
                loading="lazy"
                alt=""
                src="/group-1134.svg"
              />
            </div>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1143.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector3.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <main className={styles.content}>
        <section className={styles.header}>
          <div className={styles.dashboardHeader}>
            <div className={styles.dashboardTitle}>
              <div
                className={styles.dashboardDelivery}
              >{`Dashboard > Delivery > Proof of Delivery >  Add New POD`}</div>
            </div>
            <div className={styles.userIconParent}>
              <div className={styles.userIcon}>
                <img
                  className={styles.userImageIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-15.svg"
                />
              </div>
              <div className={styles.user}>
                <div className={styles.userChild} />
                <img
                  className={styles.imagePlaceholderIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2@2x.png"
                />
                <div className={styles.userName}>
                  <div
                    className={styles.sherwynGraham}
                  >{`Sherwyn Graham `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.addProofOfDeliveryParent}>
            <h3 className={styles.addProofOf}>Add Proof of Delivery</h3>
            <div className={styles.form}>
              <div className={styles.formChild} />
              <div className={styles.deliverySelectionParent}>
                <FormControl
                  className={styles.deliverySelection}
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
                    IconComponent={undefined}
                  >
                    <MenuItem>* Delivery Selection</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className={styles.recipientNameParent}>
                  <TextField
                    className={styles.recipientName}
                    placeholder="* Recipient Name"
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
                    className={styles.recipientName}
                    placeholder="* ID Verification"
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
              <div className={styles.digitalSignatureParent}>
                <div className={styles.digitalSignature}>Digital Signature</div>
                <div className={styles.lineParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.quantityAvailableParent}>
                    <textarea
                      className={styles.quantityAvailable}
                      placeholder="Signature Capture"
                      rows={7}
                      cols={22}
                    />
                    <div className={styles.imageInputWrapper}>
                      <div className={styles.imageInput}>
                        <img
                          className={styles.imageInputChild}
                          loading="lazy"
                          alt=""
                          src="/group-1831.svg"
                        />
                        <div className={styles.addImage}>
                          <div className={styles.addImage1}>Add Image</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.digitalSignatureParent}>
                <div className={styles.digitalSignature}>Photo Capture</div>
                <div className={styles.lineParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.frameContainer}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page12.svg"
                      />
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.page1Icon}
                          loading="lazy"
                          alt=""
                          src="/page1-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.addMoreInputWrapper}>
                      <div className={styles.addMoreInput}>
                        <img
                          className={styles.imageInputChild}
                          loading="lazy"
                          alt=""
                          src="/group-183-1.svg"
                        />
                        <div className={styles.addMoreWrapper}>
                          <div className={styles.addMore}>Add More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className={styles.description}>
                <div className={styles.descriptionChild} />
                <div className={styles.comments}>
                  <span>*</span>
                  <span className={styles.comments1}> Comments</span>
                </div>
              </footer>
              <div className={styles.buttonParent}>
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
        </section>
      </main>
    </div>
  );
};

export default AddProofOfDelivery;
