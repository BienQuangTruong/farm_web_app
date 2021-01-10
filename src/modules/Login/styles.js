import {
  defaultFont,
  primaryColor,
  secondaryColor,
} from "../../common/styles/theme";
const styles = (theme) => ({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: 2,
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  dialog_title: {
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textSignIn: {
    fontSize: 32,
    fontWeight: 800,
    color: secondaryColor,
    fontFamily: defaultFont.fontFamily,
  },
  textWelcomeTo: {
    fontSize: 20,
    fontWeight: 400,
    color: "#006666",
    fontFamily: defaultFont.fontFamily,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    zIndex: 1,
    // "& label.Mui-focused": {
    //   color: "green",
    // },
    // "& .MuiOutlinedInput-root": {
    //   "&.Mui-focused fieldset": {
    //     borderColor: "green",
    //   },
    // },
  },
  helpertext: {
    // "& .MuiFormLabel-root.Mui-focused": {
    //   color: "#006666",
    // },
    // "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#006666",
    // },
    "& .MuiFormHelperText-root.Mui-error": {
      marginTop: "-10px",
      zIndex: 0,
      color: "#ff1744",
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

  textSignUp: {
    color: primaryColor,
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
});

export default styles;
