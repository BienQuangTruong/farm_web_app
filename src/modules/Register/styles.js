import { defaultFont, secondaryColor } from "../../common/styles/theme";

const styles = (theme) => ({
  //Dialog Register
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: 2,
      margin: "32px 0px",
    },
  },
  dialog_title: {
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textSignUp: {
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

  //Stepper
});
export default styles;
