import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CloseIcon from "@material-ui/icons/Close";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useFormik } from "formik";
import { withTranslation } from "next-i18next";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { errorColor } from "../../common/styles/theme";
import Button from "../../components/ButtonComponent";
import Loading from "../../components/Loading";
import { GRANTTYPE_LOGIN } from "../../Constants";
import { login } from "../../redux/actions/LoginAction";
import { closeLogin } from "../../redux/actions/openLoginAction";
import { openRegister } from "../../redux/actions/openRegisterAction";
import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  ...styles(theme),
}));

function Login(props) {
  const {t} = props;
  const classes = useStyles();
  const { openDialogLogin } = props;
  const dispatch = useDispatch();
  const showLoading = useSelector((state) => state.loading.showLoading);
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const handleClose = () => {
    const action = closeLogin();
    dispatch(action);
  };

  const handleOpenRegister = () => {
    handleClose();
    const action = openRegister();
    dispatch(action);
  };

  const validationSchema = Yup.object().shape({
    userid: Yup.string()
      .email(t('helper_email'))
      .required(t('helper_empty')),

    password: Yup.string()
      .required()
      .min(8, t('helper_password'))
      .required(t('helper_empty')),
    // .matches(/^[a-zA-Z0-9_-\s]+$/, "Does not contain special characters"),
  });

  //_________________________________
  const [showPassword, setShowPassword] = React.useState(false);
  //"true" is displaying password
  //"false" is hiding password

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const passwordField = () => {
    return (
      <FormControl variant="outlined" class={classes.passwordField}>
        <InputLabel htmlFor="outlined-adornment-password">{t('password')}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          fullWidth
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          error={errors.password}
          // helperText={errors.password}
          // className={classes.helpertext}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  };
  //_________________________________

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...account,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      /*Luu va redux */
      const accountLogin = {
        ...account,
        grantType: GRANTTYPE_LOGIN,
      };

      dispatch(login(accountLogin));
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <div>
      {showLoading && <Loading showLoading={showLoading} />}
      <Dialog
        className={classes.root}
        open={openDialogLogin}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className={classes.dialog_title}>
            <div>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textSignIn}
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
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                color={errorColor}
                variant="outlined"
                margin="normal"
                fullWidth
                id="userid"
                label={t('email')}
                name="userid"
                autoComplete="userid"
                autoFocus
                error={errors.userid}
                helperText={errors.userid}
                value={values.userid}
                onChange={handleChange}
                className={classes.helpertext}
              />
              {/* <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                error={errors.password}
                helperText={errors.password}
                onChange={handleChange}
                className={classes.helpertext}
              /> */}

              {/*-------------------------------------*/}
              {passwordField()}
              {/*_____________________________________*/}
              <br />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t('remember')}
              />
              <Button
                onClick={() => {
                  setAccount({
                    userid: values.userid,
                    password: values.password,
                  });
                }}
                type="submit"
                round
                simple
                fullWidth
                color="primary"
                className={classes.submit}
              >
                {t('login')}
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    <p>
                      <i>{t('forget')}</i>
                    </p>
                  </Link>
                </Grid>
                <Grid item>
                  <p>
                    {t('signup_question')} &nbsp;
                    <i
                      className={classes.textSignUp}
                      onClick={handleOpenRegister}
                    >
                      {t('signup_link')}
                    </i>
                  </p>
                </Grid>
              </Grid>
            </form>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
              </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default withTranslation(['login', 'common'])(Login);