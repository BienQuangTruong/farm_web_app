import {
  defaultFont,
  secondaryColor,
  subtitleColor,
  titleColor,
} from "../../common/styles/theme";

const styles = (theme) => ({
  //Title----------------------------------------
  wrapperTitle: {
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperTitleContent: {
    fontSize: "200%",
    width: "fit-content",
    textAlign: "center",
  },
  wrapperTitleDivider: {
    height: 3,
    backgroundColor: secondaryColor,
    margin: "0px 20%",
  },

  //Khung 1--------------------------------------
  wrapper1: {
    margin: 0,
    paddingTop: 200,
    paddingBottom: 120,
    width: "100%",
    backgroundColor: "#f5f5f5",
    height: "auto",
    fontFamily: defaultFont.fontFamily,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 150,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 70,
    },
  },
  wrapper1Container: {
    height: "100%",
  },
  wrapper1GridContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper1GridItem: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper1Left: {
    height: "70%",
    width: "auto",
    paddingLeft: "100px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "30px",
    },
  },
  wrapper1title: {
    height: "80%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  wrapper1titleTitle: {
    fontSize: "50px",
    fontWeight: 900,
    lineHeight: "55px",
    color: titleColor,
  },
  wrapper1titleContent: {
    fontWeight: "700",
    fontSize: "1.25rem",
    lineHeight: "1.4",
    marginTop: 0,
    color: subtitleColor,
  },
  wrapper1content: {
    height: "20%",
    display: "flex",
    flexDirection: "column",
  },
  wrapper1buttonTryFree: {
    width: "auto",
    padding: 15,
  },
  wrapper1img: {
    width: "100%",
    height: "100%",
  },

  //Khung 2-----------------------------------
  wrapper2: {
    margin: 0,
    padding: "0px 50px 50px 50px",
    width: "100%",
    height: "auto",
    fontFamily: defaultFont.fontFamily,
  },

  wrapper2Container: {
    // height: "320px",
    // marginBottom: "50px",
  },

  wrapperTitle: {
    width: "100%",
    // textAlign: "center",
    // height: "120px",
    // paddingTop: "50px",
    paddingBottom: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "150%",
    textAlign: "center",
    width: "fit-content",
    "& .MuiDivider-root": {
      height: 2,
      backgroundColor: secondaryColor,
      margin: "0px 20%",
    },
  },
  wrapperIconCompany: {
    // height: "150px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  IconGridContainer: {
    height: "100%",
    width: "100%",
  },

  IconGridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  IconCompany: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },

  //Khung 3--------------------------------------
  wrapper3: {
    margin: 0,
    padding: 0,
    width: "100%",
    backgroundImage: "linear-gradient(#f5f5f5, #ffffff)",
    height: "auto",
    fontFamily: defaultFont.fontFamily,
  },
  wrapper3Container: {
    height: "auto",
    width: "100%",
  },
  wrapper3Title: {
    width: "100%",
    height: "120px",
    paddingTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper3TitleContent: {
    fontSize: "200%",
    width: "fit-content",
    textAlign: "center",
    "& .MuiDivider-root": {
      height: 5,
      backgroundColor: secondaryColor,
      margin: "0px 20%",
    },
  },
  wrapper3GridContainer: {
    height: "auto",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 50,
  },
  wrapper3GridItem: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  wrapper3BenefitItem: {
    //each icon & content benefit
    width: "100%",
  },
  benefitGridContainer: {
    width: "100%",
    padding: "15px 15px 15px 0px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
    },
  },
  benefitGridItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  benefitCircle: {
    backgroundColor: "#f1feff",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    boxShadow: "10px 10px 30px 0px rgb(63 63 63 / 56%)",
    "&:hover": {
      // color: "white",
      // backgroundColor: secondaryColor,
      transform: "scale(1.2)",
      transitionProperty: "width height",
      transitionDuration: "0.6s",
    },
  },
  benefitContent: {
    display: "flex",
    // alignItems: "center",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  //Khung 4--------------------------------------
  wrapper4: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "auto",
    fontFamily: defaultFont.fontFamily,
    paddingTop: "80px",
  },
  wrapper4GridContainer: {
    height: "auto",
    width: "100%",
    marginBottom: "50px",
  },
  wrapper4GridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    width: "100%",
    textAlign: "center",
    padding: "0px 20px",
  },
  wrapper4WrapperCircle: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: "20px",
  },
  wrapper4Circle: {
    height: "70px",
    width: "70px",
    borderRadius: "50%",
    backgroundColor: "#f1feff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: secondaryColor,
    // boxShadow: "10px 10px 30px 0px #6ae3d2c7",
    boxShadow: "10px 10px 30px 0px rgb(63 63 63 / 56%)",
    "&:hover": {
      color: "white",
      backgroundColor: secondaryColor,
      transition: "background .7s,width .5s",
    },
  },
  wrapper4WrapperContent: {
    width: "100%",
    height: "60%",
    // backgroundColor: "lightgreen",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default styles;
