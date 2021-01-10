import { makeStyles } from "@material-ui/core";
import { withTranslation } from "next-i18next";
import React from "react";
import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  ...styles(theme),
}));

const Footer = ({t}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.content}>
        Copyright © 2020 Digitech Solutions. All Rights Reserved.
      </p>
    </div>
  );
};

export default withTranslation('common')(Footer);
