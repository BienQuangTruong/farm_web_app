import { Dialog, DialogContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";

const useStyles = makeStyles(() => ({
  ...styles(),
}));

function Loading(props) {
  const classes = useStyles();
  const { showLoading } = props;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // });

  // const handleClose = () => {
  //   // setIsLoading(false);
  // };
  return (
    <>
      <Dialog
        className={classes.root}
        maxWidth={50}
        maxHeight={50}
        open={showLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <img
            src="/img/loading2.gif"
            alt="Loading"
            className={classes.iconLoading}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Loading;
