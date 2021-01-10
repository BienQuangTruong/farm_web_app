import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { appWithTranslation } from "../i18n";
import "../src/common/styles/global.less";
import theme from "../src/common/styles/theme";
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp);
