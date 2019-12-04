import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';

import Layout from '../../components/layout_atlas/Layout';
import SEO from '../../components/Seo';
import Slide from '../../components/wallet/Slide';
import Download from '../../components/wallet/Download';
import Mobile from '../../components/wallet/Mobile';

const Home = () => (
  <Layout type={'wallet'}>
    <SEO
      title="Bystack" 
    />
   <Slide />
   <Download />
   <Mobile />
  </Layout>
);

export default Home;
