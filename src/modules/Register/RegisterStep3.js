import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import { withTranslation } from "next-i18next";
import React from "react";
import * as Yup from "yup";
import Button from "../../components/ButtonComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: 2,
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    zIndex: 1,
  },
  helpertext: {
    "& .MuiFormHelperText-root.Mui-error": {
      marginTop: "-10px",
      zIndex: 0,
      color: " #ff1744",
      textAlign: "right",
      border: "0px solid",
      width: "fit-content",
      backgroundColor: "white",
      fontSize: "10px",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  dialog_title: {
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  btnNext: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
}));

function RegisterStep3(props) {
  const {t} = props;
  const classes = useStyles();

  const {
    valueStep3,
    setValueStep3,
    setValueStep1,
    setValueStep2,
    setActiveStep,
    step,
  } = props;

  // const [account, setAccount] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  // });

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
      <FormControl
        variant="outlined"
        fullWidth
        style={{ marginTop: 16, marginBottom: 8 }}
      >
        <InputLabel htmlFor="outlined-adornment-password">{t('field_password')}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          fullWidth
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          error={errors.password}
          helperText={errors.password}
          className={classes.helpertext}
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

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('helper_email'))
      .required(t('helper_empty')),

    password: Yup.string()
      .required()
      .min(8, t('helper_password'))
      .required(t('helper_empty'))
      .matches(/^[a-zA-Z0-9_-]+$/, t('helper_name')),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...valueStep3,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setValueStep3({ ...values });
      setActiveStep(step + 1);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  const handleBack = () => {
    setActiveStep(step - 1);
  };

  const handleResetClick = () => {
    setValueStep3({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="fullName"
          autoFocus
          label={t('field_fullName')}
          id="fullName"
          value={values.fullName}
          error={errors.fullName}
          helperText={errors.fullName}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label={t('field_email')}
          name="email"
          error={errors.email}
          helperText={errors.email}
          value={values.email}
          onChange={handleChange}
          className={classes.helpertext}
        />
        {/*<TextField
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
        />*/}
        {/*-------------------------------------*/}
        {passwordField()}
        {/*_____________________________________*/}

        <Button
          round
          shadow
          simple
          color="default"
          onClick={handleBack}
          style={{ marginRight: "5px" }}
        >
          {t('button_back')}
        </Button>
        <Button
          round
          shadow
          simple
          color="outlinePrimary"
          onClick={handleResetClick}
          style={{ marginRight: "5px" }}
        >
          {t('button_reset')}
        </Button>
        <Button
          round
          shadow
          simple
          color="primary"
          type="submit"
          className={classes.btnNext}
        >
          {t('button_next')}
        </Button>
      </form>
    </div>
  );
}

export default withTranslation(['register', 'common'])(RegisterStep3)