import { Divider, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Language from "../Language/index";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EuroIcon from "@material-ui/icons/Euro";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import Home from "@material-ui/icons/Home";
import RoomService from "@material-ui/icons/RoomService";
import Work from "@material-ui/icons/Work";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Scroll from "../../common/Function/Scroll";
import DialogLogin from "../../modules/Login/DialogLogin";
import DialogRegister from "../../modules/Register/DialogRegister";
import { openLogin } from "../../redux/actions/openLoginAction";
import { openRegister } from "../../redux/actions/openRegisterAction";
import Button from "../ButtonComponent/index";
import Styles_Header from "./styles";
import { withTranslation } from "next-i18next";

const useStyle = makeStyles((theme) => ({
  ...Styles_Header(theme),
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const {t} = props;
  const openDialogLogin = useSelector((state) => state.openLogin.openLogin);
  const openDialogRegister = useSelector(
    (state) => state.openRegister.openRegister
  );
  const dispatch = useDispatch();
  const classes = useStyle();

  const [state, setState] = React.useState({
    right: false,
  });
  const [backgroundMenu, setBackgroundMenu] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className={classes.titleMenuMobile}>
          <p className={classes.title}>Options</p>
          <Divider />
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>
              <Link href="/">
                <a className={classes.item_List_link}>{t('Home')}</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <RoomService />
            </ListItemIcon>
            <ListItemText>
              <Link href="/">
                <a className={classes.item_List_link}>{t('Booking')}</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText>
              <Link href="/privacy">
                <a className={classes.item_List_p}>{t('Jobs')}</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              const action = openLogin();
              dispatch(action);
            }}
          >
            <ListItemIcon>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText>
              <p className={classes.item_List_p}>{t('Login')}</p>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              const action = openRegister();
              dispatch(action);
            }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText>
              <p className={classes.item_List_p}>{t('Resgister')}</p>
            </ListItemText>
          </ListItem>
        </List>
        <Language />
      </div>
    </>
  );

  const handleClickOpenLogin = () => {
    const action = openLogin();
    dispatch(action);
  };

  const handleClickOpenRegister = () => {
    const action = openRegister();
    dispatch(action);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
    >
      {list("right")}
    </Drawer>
  );

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          component="div"
          position="fixed"
          className={backgroundMenu ? classes.scrollMenu : classes.root}
        >
          <Scroll setBackgroundMenu={setBackgroundMenu} />
          <Toolbar>
            <Container>
              <Grid container className={classes.wrapperGridContainer}>
                <Grid
                  item
                  xs={8}
                  sm={8}
                  md={2}
                  lg={2}
                  className={classes.wrapperGridItemLogo}
                >
                  <Link href="/">
                    <a className={classes.logo}>
                      <img height={50} src="/VN_Farm.png" />
                    </a>
                  </Link>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={10}
                  lg={10}
                  className={classes.wrapperGridItemNavigation}
                >
                  <Grid className={classes.sectionDesktop} container>
                    <Grid item xs={2}>
                      <Link href="/">
                        <a className={classes.item}>{t('Home')}</a>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="/">
                        <a className={classes.item}>{t('Booking')}</a>
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="/privacy">
                        <a className={classes.item}>{t('Jobs')}</a>
                      </Link>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                      <Language />
                    </Grid>
                    <Grid item xs={2} className={classes.wrapperButtonLogin}>
                      <Button
                        round
                        simple
                        color="secondary"
                        onClick={handleClickOpenLogin}
                      >
                        {t('Login')}
                      </Button>
                      {openDialogLogin ? (
                        <DialogLogin openDialogLogin={openDialogLogin} />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        round
                        simple
                        color="outlineSecondary"
                        // style={{ padding: "11px 20px", marginBottom: "5px" }}
                        onClick={handleClickOpenRegister}
                      >
                        {t('Resgister')}
                      </Button>
                      {openDialogRegister ? (
                        <DialogRegister
                          openDialogRegister={openDialogRegister}
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                  <Grid className={classes.sectionMobile} container>
                    <Grid item xs={12} className={classes.wrapperSectionMobile}>
                      <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={toggleDrawer("right", true)}
                        color="inherit"
                      >
                        <MenuIcon className={classes.iconMenu} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {renderMobileMenu}
    </>
  );
}

export default withTranslation(['header', 'common'])(Header);
