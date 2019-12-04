import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="description" content="Bystack是全球首创一主多侧架构BUTXO模型的BaaS平台，为用户提供了开放、稳定、丰富的区块链服务。" />
        <meta name="keywords" content="Bystack，BaaS，区块链，Blockchain，比原链，Bytom，MOV，BBFT，Vapor，侧链，跨链，巴比特，长铗，朗豫" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <link rel="alternate" href="https://www.bystack.com/zh" hreflang="zh"></link>
        <link rel="alternate" href="https://www.bystack.com/en" hreflang="en"></link>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      {
        process.env.BUILD_FOR_TEST === 'true' ? <script src="https://bycoin.oss-cn-shanghai.aliyuncs.com/tools/eruda.min.js"></script> : null
      }
      {/* <script src="http://bycoin.oss-cn-shanghai.aliyuncs.com/tools/eruda.min.js"></script> */}
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
