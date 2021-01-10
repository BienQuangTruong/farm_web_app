import { IconButton, makeStyles, Typography } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { useFormik } from "formik";
import { withTranslation } from "next-i18next";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { closeRegister } from "../../redux/actions/openRegisterAction";
import Stepper from "./Steper";
import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  ...styles(theme),
}));

function Register(props) {
  const {t} = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const { openDialogRegister } = props;
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => {
    const action = closeRegister();
    dispatch(action);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format 'ex: name@gmail.com'")
      .required("Should not be empty!"),

    password: Yup.string()
      .required()
      .min(8, "Minimum 8 characters")
      .required("Should not be empty!")
      .matches(/^[a-zA-Z0-9_-]+$/, "Does not contain special characters"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...account,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // props.dispatch(Login(account));
      // console.log(account);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <div>
      <Dialog
        className={classes.root}
        open={openDialogRegister}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll="body"
      >
        <DialogTitle id="alert-dialog-title">
          <div className={classes.dialog_title}>
            <div>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textSignUp}
              >
                {t('title')}
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                className={classes.textWelcomeTo}
              >
                {t('subTitle')}
              </Typography>
            </div>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
            <Stepper />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withTranslation(['register', 'common'])(Register)