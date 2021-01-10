import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from "react-nextjs-toast";
import { Provider } from "react-redux";
import { config } from "../src/common/model";
import { withTranslation } from "../i18n";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HomePage from "../src/modules/Home";
import configStore from "../src/redux/store";

const Home = () => {
  const router = useRouter();
  const store = configStore();
  const isToken = router.query ? router.query.token_sso : "";

  if (isToken) {
    router.push("/admin");
  }

  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>{config.titleWebsite}</title>
          <link rel="icon" href="/Logo-simple.png" />
        </Head>
        <Header />
        <HomePage />
        <Footer />
      </div>
      <ToastContainer />
    </Provider>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home);
