import { makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { withTranslation } from "next-i18next";
import React from "react";
import * as Yup from "yup";
// import Button from "@material-ui/core/Button";
import Button from "../../components/ButtonComponent";
// import {
//   changeInfoCompany,
//   resetInfoCompany,
// } from "../../redux/actions/InfoCompany";

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
}));

function RegisterStep1(props) {
  const { t } = props;
  // const infomation = useSelector((state) => state.infoCompany.infoCompany);
  // const dispatch = useDispatch();

  const now = new Date();
  const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  const year = now.getFullYear();
  const expireTimeNow = year + "-" + month + "-" + day;
  //-------------------------------------

  const classes = useStyles();

  const { valueStep1, setValueStep1, setActiveStep, step } = props;

  const validationSchema = Yup.object().shape({
    descriptionEn: Yup.string(),
    address: Yup.string(),
    phone: Yup.string()
      .matches(/^[0-9]+$/, t("helper_phone_matches"))
      .min(10, t("helper_phone_min"))
      .max(11, t("helper_phone_max")),
    contactPerson: Yup.string(),
    name: Yup.string()
      .required(t("helper_empty"))
      .matches(/^[a-zA-Z0-9_-\s]+$/, t("helper_name")),
    taxCode: Yup.string().required(t("helper_empty")),
    website: Yup.string().required(t("helper_empty")).url(),
    expireTime: Yup.string().required(t("helper_empty")),
    maxCustomerThreshold: Yup.number()
      .required(t("helper_empty"))
      .required()
      .positive()
      .integer(),
    companyEmail: Yup.string()
      .required(t("helper_empty"))
      .email(t("helper_email")),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...valueStep1,
      expireTime: expireTimeNow,
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //setValuesStep1
      setValueStep1({ ...values });
      //Next Step
      setActiveStep(step + 1);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  const handleResetClick = () => {
    setValueStep1({
      companyEmail: "",
      descriptionEn: "",
      name: "",
      address: "",
      taxCode: "",
      phone: "",
      website: "",
      contactPerson: "",
      expireTime: "",
      maxCustomerThreshold: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          label={t("field_companyName")}
          name="name"
          autoFocus
          error={errors.name}
          helperText={errors.name}
          value={values.name}
          // defaultValue={valueStep1.name}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="taxCode"
          label={t("field_taxCode")}
          name="taxCode"
          error={errors.taxCode}
          helperText={errors.taxCode}
          value={values.taxCode}
          // defaultValue={valueStep1.taxCode}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="address"
          label={t("field_address")}
          id="address"
          value={values.address}
          // defaultValue={valueStep1.address}
          error={errors.address}
          helperText={errors.address}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="companyEmail"
          label={t("field_companyEmail")}
          id="companyEmail"
          value={values.companyEmail}
          // defaultValue={valueStep1.companyEmail}
          error={errors.companyEmail}
          helperText={errors.companyEmail}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="phone"
          label={t("field_phone")}
          id="phone"
          value={values.phone}
          // defaultValue={valueStep1.phone}
          error={errors.phone}
          helperText={errors.phone}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="website"
          label={t("field_website")}
          id="website"
          value={values.website}
          // defaultValue={valueStep1.website}
          error={errors.website}
          helperText={errors.website}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="descriptionEn"
          label={t("field_description")}
          id="descriptionEn"
          value={values.descriptionEn}
          // defaultValue={valueStep1.descriptionEn}
          error={errors.descriptionEn}
          helperText={errors.descriptionEn}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="contactPerson"
          label={t("field_contactPerson")}
          id="contactPerson"
          value={values.contactPerson}
          // defaultValue={valueStep1.contactPerson}
          error={errors.contactPerson}
          helperText={errors.contactPerson}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          type="date"
          fullWidth
          name="expireTime"
          label={t("field_expireTime")}
          id="expireTime"
          value={values.expireTime}
          // defaultValue={valueStep1.expireTime}
          error={errors.expireTime}
          helperText={errors.expireTime}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="maxCustomerThreshold"
          label={t("field_maximumCustomer")}
          type="maxCustomerThreshold"
          id="maxCustomerThreshold"
          value={values.maxCustomerThreshold}
          // defaultValue={valueStep1.maxCustomerThreshold}
          error={errors.maxCustomerThreshold}
          helperText={errors.maxCustomerThreshold}
          onChange={handleChange}
          className={classes.helpertext}
        />
        <Button
          round
          shadow
          simple
          color="outlinePrimary"
          onClick={handleResetClick}
          style={{ marginRight: "5px", marginTop: 10 }}
        >
          {t("button_reset")}
        </Button>
        <Button
          round
          shadow
          simple
          color="primary"
          type="submit"
          style={{ marginTop: 10 }}
        >
          {t("button_next")}
        </Button>
      </form>
    </div>
  );
}

export default withTranslation(["register", "common"])(RegisterStep1);
