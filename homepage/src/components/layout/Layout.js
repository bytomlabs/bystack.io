import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';

import css from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrap = css.div`
  width: 100%;
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
