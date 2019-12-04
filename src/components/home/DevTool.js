import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';


import img_devtool from '../../images/img-tool.png';
import img_devtool_m from '../../images/img-tool-m.png';

const Wrap = css.div`
  width: 1160px;
  height: 262px;
  margin: 100px auto 0 auto;
  color: #fff;
  padding: 60px;
  background: url(${img_devtool}) center / 100% no-repeat;
  &>h1{
    font-size: 24px;
    line-height: 1em;
    color: #fff;
    margin-bottom: 30px;
  }
  &>p{
    font-size: 16px;
    line-height: 32px;
    font-weight: 300;
    padding-right: 50%;
  }
  @media (max-width: 640px) {
    width: auto;
    margin: 0 16px;
    padding: 20px;
    height: 320px;
    border-radius: 8px;
    background: url(${img_devtool_m}) center / 100% no-repeat;
    &>h1{
      font-size: 18px;
      margin-bottom: 20px;
    }
    &>p{
      font-size: 12px;
      line-height: 22px;
      padding: 0;
      opacity: .88;
    }
  }
`;

function DevTool() {
  return (
    <Wrap>
      <Msg id="index_tool_title" tagName="h1" />
      <Msg id="index_tool_des" tagName="p" />
    </Wrap>
  )
}

export default DevTool
