import React, { useState } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, injectIntl } from 'gatsby-plugin-intl';
import TweenOne from 'rc-tween-one';

const Wrap = css.a`
  width: 160px;
  height: 50px;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
  font-size: 16px;
  background-color: ${props => ({ios: '#035BD4', apk: '#91D303'}[props.type] || '')};
  cursor: pointer;
  border: ${props => props.type ? '0' : '1px'} solid rgba(0, 0, 0, 0.56);
  color: ${props => props.type ? '#fff' : 'rgba(0, 0, 0, 0.88)'};
  box-sizing: border-box;
  &:hover{
    color: ${props => props.type ? 'rgba(255, 255, 255, 0.56)' : 'rgba(0, 0, 0, .56)'};
  }
`;

function DownloadBtn({children}) {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

export default DownloadBtn
