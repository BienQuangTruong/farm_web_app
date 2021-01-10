import {
  primaryColor,
  primaryHoverColor,
  secondaryColor,
  secondaryHoverColor,
} from "../../common/styles/theme";

const buttonStyles = {
  button: {
    height: "40px",
    width: "auto",
    cursor: "pointer",
    padding: "11px 25px",
    fontSize: "14px",
    fontWeight: 600,
    transition: "0.3s",
    lineHeight: "16px",
    color: "#fd8e59",
    borderRadius: "unset",
  },

  //color button - you can choose one of colors
  primary: {
    color: "#ffffff",
    backgroundColor: primaryColor,
    border: `1px solid ${primaryColor}`,
  },

  outlinePrimary: {
    color: primaryColor,
    backgroundColor: "#e0e0e000",
    border: `1px solid ${primaryColor}`,
  },

  secondary: {
    color: "#ffffff",
    backgroundColor: secondaryColor,
    border: `1px solid ${secondaryColor}`,
  },
  outlineSecondary: {
    color: secondaryColor,
    backgroundColor: "#e0e0e000",
    border: `1px solid ${secondaryColor}`,
  },
  default: {
    color: "#1C1C1C",
    backgroundColor: "#e0e0e0",
    border: "1px solid #F0F0F0",
  },
  round: {
    borderRadius: "4px",
  },

  shadow: {
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);",
  },

  fullWidth: {
    width: "100%",
  },

  // Simple - If you want to let user hover into them
  simple: {
    "&$primary": {
      "&:hover": {
        color: "#ffffff", //white
        backgroundColor: primaryHoverColor,
        // backgroundImage: "linear-gradient(to right, #F2B403 , #F16433)",
        border: `1px solid ${primaryHoverColor}`,
        transition: "background 0.3s,width 0.2s",
      },
    },

    "&$outlinePrimary": {
      "&:hover": {
        color: "#ffffff", //white
        backgroundColor: primaryHoverColor,
        // backgroundImage: "linear-gradient(to right, #F2B403 , #F16433)",
        border: `1px solid ${primaryHoverColor}`,
        transition: "background 0.3s,width 0.2s",
      },
    },

    "&$secondary": {
      "&:hover": {
        color: "#ffffff", //white
        backgroundColor: secondaryHoverColor,
        // backgroundImage: "linear-gradient(to right, #F2B403 , #F16433)",
        border: `1px solid ${secondaryHoverColor}`,
        transition: "background 0.3s,width 0.2s",
      },
    },
    "&$outlineSecondary": {
      "&:hover": {
        color: "#ffffff", //white
        backgroundColor: secondaryHoverColor,
        // backgroundImage: "linear-gradient(to right, #F2B403 , #F16433)",
        border: `1px solid ${secondaryHoverColor}`,
        transition: "background 0.3s,width 0.2s",
      },
    },
    "&$default": {
      "&:hover": {
        color: "#1C1C1C", //white
        backgroundColor: "#D5D5D5",
        // backgroundImage: "linear-gradient(to right, #F2B403 , #F16433)",
        border: `1px solid #F0F0F0`,
        transition: "background .3s,width .2s",
      },
    },
  },
};

export default buttonStyles;
