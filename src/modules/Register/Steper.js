import { Grid } from "@material-ui/core";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import clsx from "clsx";
import { withTranslation } from "next-i18next";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../apis/register";
import { config } from "../../common/model";
import Button from "../../components/ButtonComponent";
import {
  DEFAULT_ADMIN_ACCOUNT,
  ROLE_ADMIN,
  STATUS_ACTIVE,
} from "../../Constants";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";
import RegisterStep3 from "./RegisterStep3";

const ColorlibConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 22,
    [theme.breakpoints.down("xs")]: {
      top: 15,
    },
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, rgb(1 124 113) 0%, rgb(48 223 134) 50%, rgb(239 169 39) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg,rgb(1 124 113) 0%, rgb(48 223 134) 50%,  rgb(239 169 39) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}))(StepConnector);

const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
      "& .MuiSvgIcon-root": {
        width: "0.7em",
        height: "0.7em",
      },
    },
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(239 169 39) 0%, rgb(48 223 134) 50%, rgb(1 124 113) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(239 169 39) 0%, rgb(48 223 134) 50%, rgb(1 124 113) 100%)",
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ContactMailIcon />,
    2: <SettingsIcon />,
    3: <GroupAddIcon />,
    4: <CheckCircleOutlineIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepper: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      "& .MuiStep-horizontal": {
        padding: 0,
      },
    },
  },
  button: {
    marginRight: theme.spacing(1),
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: theme.spacing(1),
    // },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: theme.spacing(2),
    //   marginTop: 0,
    // },
  },
}));

function CustomizedSteppers({t}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);

  const [valueStep1, setValueStep1] = useState({
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

  const [valueStep2, setValueStep2] = useState({
    siteTitleEn: "",
    siteTitleVi: "",
    logoutUrl: "",
    registerUrl: "",
  });

  const [valueStep3, setValueStep3] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const steps = [
    t('step01'),
    t('step02'),
    t('step03'),
    t('step04'),
  ];

  const handleResetAllClick = () => {
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

    setValueStep2({
      siteTitleEn: "",
      siteTitleVi: "",
      logoutUrl: "",
      registerUrl: "",
    });

    setValueStep3({
      fullName: "",
      email: "",
      password: "",
    });

    setActiveStep(0);
  };

  const handleFinish = () => {
    const info = {
      infoClient: {
        ...valueStep1,
        ...valueStep2,
      },
      infoAccountClient: {
        ...valueStep3,
        role: ROLE_ADMIN,
        status: STATUS_ACTIVE,
      },
    };

    const response = fetchRegister(info);
    console.log("handleFinish -> response", response);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <RegisterStep1
            valueStep1={valueStep1}
            setValueStep1={setValueStep1}
            setActiveStep={setActiveStep}
            step={step}
          />
        );
      case 1:
        return (
          <RegisterStep2
            valueStep2={valueStep2}
            setValueStep2={setValueStep2}
            setActiveStep={setActiveStep}
            step={step}
          />
        );
      case 2:
        return (
          <RegisterStep3
            valueStep3={valueStep3}
            setValueStep3={setValueStep3}
            setValueStep1={setValueStep1}
            setValueStep2={setValueStep2}
            setActiveStep={setActiveStep}
            step={step}
          />
        );
      case 3:
        return (
          <Grid
            container
            style={{
              border: "1px solid",
              display: "flex",
              justifyContent: "center",
              padding: " 35px 0px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 0px",
              }}
            >
              <Button
                round
                shadow
                simple
                color="default"
                style={{ marginRight: "5px" }}
                onClick={() => {
                  setActiveStep(step - 1);
                }}
              >
                {t('button_back')}
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 0px",
              }}
            >
              <Button
                round
                shadow
                simple
                color="outlinePrimary"
                style={{ marginRight: "5px" }}
                onClick={handleResetAllClick}
              >
                {t('button_resetAll')}
              </Button>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 0px",
              }}
            >
              <Button
                round
                shadow
                simple
                color="primary"
                onClick={handleFinish}
              >
                {t('button_finish')}
              </Button>
            </Grid>
          </Grid>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        className={classes.stepper}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              {t('finishMessage')}
            </Typography>
            <Button
              round
              shadow
              simple
              color="primary"
              onClick={handleReset}
              className={classes.button}
            >
              {t('button_reset')}
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default withTranslation(['register', 'common'])(CustomizedSteppers);