import { makeStyles, TextField } from "@material-ui/core";
// import Button from "../ButtonComponent/index";
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

function RegisterStep2(props) {
  const {t} = props;
  const classes = useStyles();

  const { valueStep2, setValueStep2, setActiveStep, step } = props;

  // const [infoPlatform, setInfoPlatform] = useState({
  //   siteTitleEn: "",
  //   siteTitleVi: "",
  //   logoutUrl: "",
  //   registerUrl: "",
  // });

  const validationSchema = Yup.object().shape({
    siteTitleEn: Yup.string().required(t('helper_empty')),
    siteTitleVi: Yup.string().required(t('helper_empty')),
    logoutUrl: Yup.string().required(t('helper_empty')).url(),
    registerUrl: Yup.string().required(t('helper_empty')).url(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...valueStep2,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //setValuesStep2
      setValueStep2({ ...values });
      //Next Step
      setActiveStep(step + 1);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  const handleBack = () => {
    setActiveStep(step - 1);
  };

  const handleResetClick = () => {
    setValueStep2({
      siteTitleEn: "",
      siteTitleVi: "",
      logoutUrl: "",
      registerUrl: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="siteTitleEn"
          label={t('field_siteTitleEn')}
          name="siteTitleEn"
          autoFocus
          error={errors.siteTitleEn}
          helperText={errors.siteTitleEn}
          value={values.siteTitleEn}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="siteTitleVi"
          label={t('field_siteTitleVi')}
          id="siteTitleVi"
          value={values.siteTitleVi}
          error={errors.siteTitleVi}
          helperText={errors.siteTitleVi}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="logoutUrl"
          label={t('field_logoutUrl')}
          id="logoutUrl"
          value={values.logoutUrl}
          error={errors.logoutUrl}
          helperText={errors.logoutUrl}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="registerUrl"
          label="Register Url"
          id="registerUrl"
          value={values.registerUrl}
          error={errors.registerUrl}
          helperText={errors.registerUrl}
          onChange={handleChange}
          className={classes.helpertext}
        />
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

export default withTranslation(['rigister', 'common'])(RegisterStep2);