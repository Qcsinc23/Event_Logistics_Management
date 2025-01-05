import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Card from "./Card";
import Card1 from "./Card1";
import styles from "./AlertCardContainer.module.css";

export type AlertCardContainerType = {
  className?: string;
};

const AlertCardContainer: FunctionComponent<AlertCardContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.alertCardContainer, className].join(" ")}>
      <Card immediate="Immediate" />
      <Card1 inApp="In-App" />
      <Card1
        card2BoxShadow="unset"
        rectangleBoxBoxShadow="unset"
        statusIconShapeLeft="36px"
        statusIconShapeBackgroundColor="#4caf50"
        statusIconShapeBoxShadow="0px 4px 5px rgba(0, 0, 0, 0.15)"
        inApp="Push"
      />
    </div>
  );
};

export default AlertCardContainer;
