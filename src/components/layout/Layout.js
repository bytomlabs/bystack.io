import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';

import css from 'styled-components';
import Header from './Header';
import Footer from './Footer';


import img_bg from '../../images/bg.png';
import img_bgm from '../../images/bgm.png';

const Wrap = css.div`
  width: 100%;
  background: #000 url(${img_bg}) top center / 1920px no-repeat;
  @media (max-width: 640px) {
    background: #000 url(${img_bgm}) top center / 100% no-repeat;
  }
`;

const Layout = ({ 
  children, 
  light = false, 
  home = false, 
  fixedFooter = false, 
  homeDisable = false,
  ftStyle = {}
}) => (
  <>
    <Header light={light} homeDisable={homeDisable} />
    <Wrap>
      <IntlContextConsumer>
        {
          ({language}) => (
            React.Children.map(children, child =>
              React.cloneElement(child, { lang: language })
            )
          )
        }
      </IntlContextConsumer>
    </Wrap>
    <Footer home={home} fixedFooter={fixedFooter} ftStyle={ftStyle} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);