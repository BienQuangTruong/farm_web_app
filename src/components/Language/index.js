import React from "react";
import { useRouter } from "next/router";
import { withTranslation, i18n } from "../../../i18n";
import Link from "@material-ui/core/Link";

const Language = () => {
  const [language, setLanguage] = React.useState(true);

  React.useEffect(() => {
    const lang = language ? "vi" : "en";
    i18n.changeLanguage(lang);
  }, [language]);

  const handleOnClick = () => {
    setLanguage(!language);
  }

  return (
    <Link component='button' onClick={handleOnClick}>
      <img src={language ? '/img/trans-vi.png' : '/img/trans-us.png'} style={{height: '25px', width: 'auto'}}/>
    </Link>
  );
}

export default withTranslation()(Language);
