
import React from 'react';
import { FormattedMessage as Msg, injectIntl, IntlContextConsumer, Link } from 'gatsby-plugin-intl';
import Layout from '../../components/layout_atlas/Layout';
import SEO from '../../components/Seo';
import css from 'styled-components';
import _ajax from 'axios';
import _conf from '../../config/conf';

import Slide from '../../components/dev/Slide';
import NavPanel from '../../components/dev/NavPanel';

const Wrap = css.div`
  .ant-layout{
    background: #fff;
  }
`;

class DevHomePage extends React.Component {

  render() {
    
    return (
      <Layout type={'dev'}>
        <SEO 
          title="Bystack" 
        />
        <Slide />
        <NavPanel />
      </Layout>
    );
  }
}



export default DevHomePage;
