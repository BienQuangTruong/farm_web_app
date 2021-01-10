import {
  defaultFont,
  primaryColor,
  primaryHoverColor,
  secondaryColor,
  secondaryHoverColor,
} from "../../common/styles/theme";

const Styles_Header = (theme) => ({
  root: {
    backgroundColor: "transparent",
    // backgroundColor: "#00000014 !important",
    height: "auto",
    padding: "5px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0px",
    },
  },
  scrollMenu: {
    backgroundColor: "#f5f5f5",
    height: "auto",
    padding: "5px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0px",
    },
  },

  wrapperGridContainer: {
    alignItems: "center !important",
  },
  wrapperGridItemLogo: {
    padding: "0px 30px",
  },

  logo: {
    [theme.breakpoints.between("xs", "md")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "10px",
    },
  },
  wrapperGridItemNavigation: {
    pdisplay: "flex",
    alignItems: "center",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
    },
  },

  item: {
    // color: "blue",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "700",
    alignItems: "center",
    fontFamily: defaultFont.fontFamily,
    color: secondaryColor,
    "&:hover": {
      color: primaryHoverColor,
    },
    "&:active": {
      color: secondaryHoverColor,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },

  wrapperButtonLogin: {
    display: "flex",
    justifyContent: "flex-end",
  },

  //Section Mobile
  sectionMobile: {
    display: "flex",
    flexDirection: "flex-end",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  wrapperSectionMobile: {
    display: "flex",
    justifyContent: "flex-end",
  },

  iconMenu: {
    fontSize: "30px",
    color: "#006666",
  },

  //list
  list: {
    width: "fit-content",
    padding: "20px 10px 0px 20px",
    "& .MuiListItemIcon-root": {
      minWidth: "40px",
    },
  },
  titleMenuMobile: {
    width: "100%",
    "& .MuiDivider-root": {
      height: 2,
      backgroundColor: "#006666",
      paddingLeft: -10,
    },
  },
  title: {
    margin: 0,
    textAlign: "center",
    fontSize: "150%",
    marginBottom: "15px",
    fontWeight: " 700",
    color: "#006666",
  },

  item_List_link: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: "red",
  },
  item_List_p: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: primaryColor,
    margin: 0,
  },
});

export default Styles_Header;
