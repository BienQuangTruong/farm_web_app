const { race } = require("redux-saga/effects");
import React from "react";
import { withTranslation } from "../i18n";

const MyError = () => {
  return (
    <div>
      ahihihi
    </div>
  );
};

MyError.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(MyError);

