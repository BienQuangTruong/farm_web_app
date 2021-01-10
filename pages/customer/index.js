import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import Customer from "../../src/modules/customers";
import Header from "../../src/components/Header";
import configStore from "../../src/redux/store";

const CustomerPage = () => {
  const store = configStore();
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Customers</title>
        </Head>
        <Header />
        <Customer />
      </div>
    </Provider>
  );
};

export default CustomerPage;
