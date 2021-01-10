import { Container, Divider } from "@material-ui/core";
import { withTranslation } from "next-i18next";
import React from "react";
import { Provider } from "react-redux";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import configStore from "../src/redux/store";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { primaryColor, secondaryColor } from "../src/common/styles/theme";

import HomeIcon from '@material-ui/icons/Home';

const Privacy = ({t}) => {
  const store = configStore();
  return (
    <Provider store={store}>
      <Header />
      <Divider variant='fullWidth' style={{marginTop: '75px',}}/>
      <Container style={{margin: '20px auto 100px auto',}}>
        <Breadcrumbs style={{marginBottom: '80px'}}>
          <Link color="inherit" href="/">{t('breadcrumbs_home')}</Link>
          <span style={{color: primaryColor,}}>{t('breadcrumbs_currents')}</span>
        </Breadcrumbs>
        {/*---------------------------------Content___________________________________*/}
        <h1 style={{color: primaryColor,}}>Referral privacy policy</h1>
        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our referral program.</p>
        <p>By using the referral program, you agree to the collection and use of information in accordance with this policy.</p>
        <h2 style={{color: primaryColor,}}>What personal information do we collect from the people that visit our website, app?</h2>
        <p>When registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.</p>
        <h2 style={{color: primaryColor,}}>When information do we collect?</h2>
        <p>We collect information from you when you register on our system, invite friend subscribe to a newsletter, fill out a form, open a support ticket or enter information on our site.</p>
        <h2 style={{color: primaryColor,}}>How do we use your information?</h2>
        <p>We may use the information we collect from you when you register, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
        <ul>
          <li>To personalize your experience and to allow us to deliver suitable UIUX which you are most interested.</li>
          <li>To improve our system in order to better serve you.</li>
          <li>To allow us to better service you in responding to your customer service requests.</li>
          <li>To administer a contest, promotion, survey or other site feature.</li>
          <li>To quickly process your transactions.</li>
          <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
        </ul>
        <h2 style={{color: primaryColor,}}>How do we protect your information?</h2>
        <p>We do not use vulnerability scanning and/or scanni</p>
        <p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>
        <p>We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.</p>
        <h2 style={{color: primaryColor,}}>Do we use 'cookies'?</h2>
        <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
        <h2 style={{color: primaryColor,}}>We use cookies to:</h2>
        <ul>
          <li>Understand and save user's preferences for future visits.</li>
          <li>Keep track of advertisements.</li>
          <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
        </ul>
        <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
        <p>If you turn cookies off, some of the features that make your site experience more efficient may not function properly. It won't affect the user's experience that make your site experience more efficient and may not function properly.</p>
        <h2 style={{color: primaryColor,}}>Third-party disclosure</h2>
        <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>
        <h2 style={{color: primaryColor,}}>Third-party links</h2>
        <p>We do not include or offer third-party products or services on our website.</p>
        <h2 style={{color: primaryColor,}}>We have implemented the following:</h2>
        <ul>
          <li>Demographics and Interests Reporting</li>
        </ul>
        <p>We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</p>
        <h2 style={{color: primaryColor,}}>We agree to the following:</h2>
        <ul>
          <li>Users can visit our site anonymously.</li>
          <li>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</li>
          <li>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</li>
          <li>You will be notified of any Privacy Policy changes on our Privacy Policy Page.</li>
          <li>Can change your personal information by logging in to your account.</li>
        </ul>
        <h2 style={{color: primaryColor,}}>How does our site handle Do Not Track signals?</h2>
        <p>We honour Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>
        <h2 style={{color: primaryColor,}}>Does our site allow third-party behavioural tracking?</h2>
        <p>It's also important to note that we allow third-party behavioural tracking</p>
        <p>We do not specifically market to children under the age of 13 years old.</p>
        {/* <h2 style={{color: primaryColor,}}>Contacting Us</h2> */}
      </Container>
      <Footer />
    </Provider>
  );
}

export default withTranslation(["privacy", "common"])(Privacy);
