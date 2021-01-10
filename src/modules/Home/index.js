import { Container, Divider, Grid, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckIcon from "@material-ui/icons/Check";
import { withTranslation } from "next-i18next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/ButtonComponent";
import { ALT_IMG, URL_BANNER_INVITE, URL_BENEFIT } from "../../Constants";
import { openRegister } from "../../redux/actions/openRegisterAction";
import styles from "./styles";

const useStyles = makeStyles((theme) => ({
  ...styles(theme),
}));

function HomePage(props) {
  const {t} = props;
  useEffect(() => {});
  const classes = useStyles();
  const openDialogRegister = useSelector(
    (state) => state.openRegister.openRegister
  );
  const dispatch = useDispatch();

  const handleOpenRegister = () => {
    const action = openRegister();
    dispatch(action);
  };
  return (
    <>
      {/*Banner*/}
      <div className={classes.wrapper1}>
        <Container className={classes.wrapper1Container}>
          <Grid container className={classes.wrapper1GridContainer}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={classes.wrapper1GridItem}
            >
              <div className={classes.wrapper1Left}>
                <div className={classes.wrapper1title}>
                  <h1 className={classes.wrapper1titleTitle}>
                    {t('banner_title')}
                  </h1>
                  <p className={classes.wrapper1titleContent}>
                    {t('banner_subTitle')}

                  </p>
                </div>
                <div className={classes.wrapper1content}>
                  <Button
                    round
                    simple
                    color="secondary"
                    onClick={handleOpenRegister}
                    className={classes.wrapper1buttonTryFree}
                    style={{
                      backgroundImage: "linear-gradient(90deg, #f9aa45, #f26530)",
                      border: "unset",
                    }}
                  >
                    {t('banner_actionButton')} &nbsp; <ArrowForwardIcon />
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={classes.wrapper1GridItem}
            >
              <div className={classes.wrapper1Wrapper}>
                <img
                  src={URL_BANNER_INVITE}
                  alt={ALT_IMG}
                  className={classes.wrapper1img}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/*-------------------------------------------------------------------------------------------------*/}

      {/*Benefits*/}
      <div className={classes.wrapper3}>
        <Container className={classes.wrapper3Container}>
          <div className={classes.wrapperTitle}>
            <h1 className={classes.wrapperTitleContent}>
              {t('benefits_title')}
              <Divider className={classes.wrapperTitleDivider} />
            </h1>
          </div>
          <Grid container className={classes.wrapper3GridContainer}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={classes.wrapper3GridItem}
            >
              {/**BENEFIT 1 */}
              <Grid container>
                <Grid item md={12} className={classes.wrapper3BenefitItem}>
                  <Grid container className={classes.benefitGridContainer}>
                    <Grid
                      item
                      xs={12}
                      sm={2}
                      md={2}
                      className={classes.benefitGridItem}
                    >
                      <div className={classes.benefitCircle}>
                        <CheckIcon color="secondary" fontSize="large" />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={10}
                      md={10}
                      className={classes.benefitContent}
                    >
                      <h2>{t('benefits_content01')}</h2>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/**BENEFIT 2 */}
              <Grid container>
                <Grid item md={12} className={classes.wrapper3BenefitItem}>
                  <Grid container className={classes.benefitGridContainer}>
                    <Grid
                      item
                      xs={12}
                      sm={2}
                      md={2}
                      className={classes.benefitGridItem}
                    >
                      <div className={classes.benefitCircle}>
                        <CheckIcon color="secondary" fontSize="large" />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={10}
                      md={10}
                      className={classes.benefitContent}
                    >
                      <h2>
                        {t('benefits_content02')}
                      </h2>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/**BENEFIT 3 */}
              <Grid container>
                <Grid item md={12} className={classes.wrapper3BenefitItem}>
                  <Grid container className={classes.benefitGridContainer}>
                    <Grid
                      item
                      xs={12}
                      sm={2}
                      md={2}
                      className={classes.benefitGridItem}
                    >
                      <div className={classes.benefitCircle}>
                        <CheckIcon color="secondary" fontSize="large" />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={9}
                      md={9}
                      className={classes.benefitContent}
                    >
                      <h2>{t('benefits_content03')}</h2>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className={classes.wrapper1GridItem}
            >
              <img src={URL_BENEFIT} className={classes.wrapper1img}></img>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/*-------------------------------------------------------------------------------------------------*/}

      {/*how it works*/}
      <div id="howitwork" className={classes.wrapper4}>
        <Container>
          <div className={classes.wrapperTitle}>
            <h1 className={classes.wrapperTitleContent}>
              {t('howItWork_title')}
              <Divider className={classes.wrapperTitleDivider} />
            </h1>
          </div>
          <Grid container className={classes.wrapper4GridContainer}>
            <Grid item md={4} className={classes.wrapper4GridItem}>
              <Grid container style={{ height: "100%" }}>
                <Grid item lg={12} className={classes.wrapper4WrapperCircle}>
                  <div className={classes.wrapper4Circle}>
                    <p style={{ fontSize: "250%", fontWeight: 700 }}>1</p>
                  </div>
                </Grid>
                <Grid item lg={12} className={classes.wrapper4WrapperContent}>
                  <h2>{t('howItWork_subTitle01')}</h2>
                  <p style={{ fontSize: "120%", margin: 0 }}>
                    {t('howItWork_content01')}
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} className={classes.wrapper4GridItem}>
              <Grid container style={{ height: "100%" }}>
                <Grid item lg={12} className={classes.wrapper4WrapperCircle}>
                  <div className={classes.wrapper4Circle}>
                    <p style={{ fontSize: "250%", fontWeight: 700 }}>2</p>
                  </div>
                </Grid>
                <Grid item lg={12} className={classes.wrapper4WrapperContent}>
                  <h2>{t('howItWork_subTitle02')}</h2>
                  <p style={{ fontSize: "120%", margin: 0 }}>
                    {t('howItWork_content02')}
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} className={classes.wrapper4GridItem}>
              <Grid container style={{ height: "100%" }}>
                <Grid item lg={12} className={classes.wrapper4WrapperCircle}>
                  <div className={classes.wrapper4Circle}>
                    <p style={{ fontSize: "250%", fontWeight: 700 }}>3</p>
                  </div>
                </Grid>
                <Grid item lg={12} className={classes.wrapper4WrapperContent}>
                  <h2>{t('howItWork_subTitle03')}</h2>
                  <p style={{ fontSize: "120%", margin: 0 }}>
                    {t('howItWork_content03')}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/*-------------------------------------------------------------------------------------------------*/}

      {/*clients*/}
      <Grid container className={classes.wrapper2}>
        <Grid item xs={12}>
          <Container className={classes.wrapper2Container}>
            <div className={classes.wrapperTitle}>
              <h1 className={classes.wrapperTitleContent}>
                {t('clients_title')}
                <Divider className={classes.wrapperTitleDivider} />
              </h1>
            </div>
            <div className={classes.wrapperIconCompany}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  className={classes.IconGridItem}
                />
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  className={classes.IconGridItem}
                >
                  <img
                    style={{
                      marginRight: "10px",
                    }}
                    src="./img/company/logo_TrustPartner.png"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  className={classes.IconGridItem}
                >
                  <img src="./img/company/logo_VinaRobot.png" />
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  className={classes.IconGridItem}
                />
              </Grid>
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default withTranslation(['home', 'common'])(HomePage);
