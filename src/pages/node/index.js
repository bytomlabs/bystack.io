import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';
import { animateScroll } from 'react-scroll';

import Layout from '../../components/layout/Layout';
import SEO from '../../components/Seo';
import Button from '../../components/Button';
import CountdownBoard from '../../components/CountdownBoard';
import News from '../../components/News';
import NodeList from '../../components/NodeList';

const Banner = css.div`
  width: 1110px;
  margin: 0 auto 0 auto;
  padding-top: 120px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    width: 100%;
    padding-top: 60px;
    height: 460px;
    flex-direction: column;
    text-align: center;
    &>div>a{
      margin: 50px auto 0 auto !important;
    }
  }
`;
const Title = css.h1`
  font-weight: 200;
  line-height: 52px;
  font-size: 48px;
  padding-top: 20px;
  color: #fff;
  letter-spacing: ${props => props.lang === 'zh' ? '18px' : '2px'};
  @media (max-width: 640px) {
    font-size: 30px;
    letter-spacing: ${props => props.lang === 'zh' ? '8px' : '2px'};
  }
`;
const SubTitle = css(Title)`
  font-size: 32px;
  line-height: 24px;
  padding-top: 0;
  margin: 30px 0;
  font-weight: 300;
  opacity: .8;
  letter-spacing: ${props => props.lang === 'zh' ? '8px' : '2px'};
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;
const BtnGroup = css.div`
  display: flex;
  margin-top: 50px;
  a{
    margin: 0;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    a, div>a{
      margin: 0 0 20px 0 !important;
    }
  }
`;

const handleScroll = () => {
  animateScroll.scrollTo(860, { duration: 300 });
  console.log('click')
  try {
  } catch (error) {
    
  }
}

const Home = () => (
  <Layout home>
    <SEO 
      title="Bystack" 
      
    />
    <Banner>  
      <div>
        <Title><Msg id="home_title" /></Title>
        <SubTitle><Msg id="home_sub_title" /></SubTitle>
        <BtnGroup>
          <Button href="/node/apply" type="ghost"><Msg id="home_btn_apply" /></Button>
          {/* <div onClick={handleScroll}><Button type="ghost"><Msg id="home_btn_vote" /></Button></div> */}
        </BtnGroup>
      </div>
      <CountdownBoard />
    </Banner>

    <News></News>
    <NodeList />
    
  </Layout>
);

export default Home;