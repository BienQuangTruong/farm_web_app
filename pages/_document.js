import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React, { Fragment } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let props = { ...initialProps };

    return props;
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <link
            href="http://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style
            dangerouslySetInnerHTML={{
              __html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }
                    @media (max-width:767px){
                        .post_slider_inner.owl-carousel > .item {
                            width: 100%
                        }
                        .post_slider_inner.owl-carousel > .item:not(:first-of-type) {
                            display: none;
                        }
                    }`,
            }}
          ></style>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (WrappedComponent) => (props) =>
        sheets.collect(<WrappedComponent {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <Fragment>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>
    ),
  };
};

export default MyDocument;
