import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';

import icon_empty from '../images/icon/empty.png';

const Wrap = css.div`
  text-align: center;
  padding: 150px;
  img{
    width: 138px;
  }
  p{
    color: #808A95;
    line-height: 50px;
  }
`;

function Empty({ style={} }) {
  return (
    <Wrap style={style}>
      <img src={icon_empty} alt=""/>
      <p><Msg id="empty_list" /></p>
    </Wrap>
  )
}

export default Empty;
