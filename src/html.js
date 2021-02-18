import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png?v=wAOwmp6R8l"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png?v=wAOwmp6R8l"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png?v=wAOwmp6R8l"
        />
        <link
          rel="manifest"
          href="/assets/favicon/site.webmanifest?v=wAOwmp6R8l"
        />
        <link
          rel="shortcut icon"
          href="/assets/favicon/favicon.ico?v=wAOwmp6R8l"
        />
        <meta name="apple-mobile-web-app-title" content="Andrew Westling" />
        <meta name="application-name" content="Andrew Westling" />
        <meta name="msapplication-TileColor" content="#050708" />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml?v=wAOwmp6R8l"
        />
        <meta name="theme-color" content="#050708"></meta>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
