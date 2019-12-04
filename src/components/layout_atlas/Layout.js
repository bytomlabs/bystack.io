import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';

import css from 'styled-components';
import Header from './Header';
import Footer from './Footer';

import img_bg from '../../images/bg-home.png';
import img_bg_mobile from '../../images/bg-mobile.png';
import img_wallet_bg from '../../images/wallet/bg.png';
import img_wallet_bg_m from '../../images/wallet/bg_m.png';
import img_dev_bg from '../../images/dev/dev_bg.png';

const bgImgs = {
  default: {
    pc: img_bg,
    mobile: img_bg_mobile,
  },
  wallet: {
    pc: img_wallet_bg,
    mobile: img_wallet_bg_m
  },
  dev: {
    pc: img_dev_bg,
    mobile: img_dev_bg,
  }
}

const Bg = css.div`
  width: 100%;
  min-width: 1160px;
  background: url(${props => bgImgs[props.type].pc}) top center / 1920px no-repeat, 
              linear-gradient(169deg, #FAFCFE ${props => props.type === 'wallet' ? '0px' : '2260px'}, #fff 2260px);
  @media (max-width: 640px) {
    width: 100%;
    min-width: 100%;
    background: url(${props => bgImgs[props.type].mobile}) center top / 100% no-repeat, linear-gradient(169deg, #FAFCFE 2320px, #fff 2320px);
  }

`;
const Wrap = css.div`
  padding-bottom: 100px;
  @media (max-width: 640px) {
    padding-bottom: 60px;
  }
`;

const Layout = ({ 
  children, 
  home,
  type = 'default',
}) => (
  <Bg type={type}>
    <Header wallet={type === 'wallet'} />
    <Wrap>
      {children}
    </Wrap>
    <Footer type={type} />
  </Bg>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);
