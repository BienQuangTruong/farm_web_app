import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import buttonStyles from "./styles";

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyles,
}));

const PrimaryButton = React.forwardRef((props, ref) => {
  const {
    color = "default",
    simple,
    round,
    shadow,
    fullWidth,
    block,
    shape,
    children,
    ...rest
  } = props;
  const classes = makeComponentStyles();
  const className = classNames({
    [classes.button]: true,
    [classes.round]: round,
    [classes.shadow]: shadow,
    [classes.fullWidth]: fullWidth,
    [classes.simple]: simple,
    [classes[block]]: block,
    [classes[color]]: color,
    [classes[shape]]: shape,
  });

  return (
    <Button {...rest} ref={ref} classes={{ root: className }}>
      {children}
    </Button>
  );
});

PrimaryButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "outlinePrimary",
    "secondary",
    "outlineSecondary",
    "success",
    "default",
    "error",
    "warning",
    "info",
    "normal",
    "inherit",
    "default-secondary",
  ]),
  block: PropTypes.oneOf(["large", "medium", "small"]),
  round: PropTypes.bool,
  simple: PropTypes.bool,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["subscribe", "narrow", "wide"]),
};

export default PrimaryButton;
