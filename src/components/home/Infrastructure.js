import React from 'react';
import css from 'styled-components';
import BlockTitle from './BlockTitle';
import Gallery from './Gallery';
import { Tabs } from 'antd';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';


import img_bytom from '../../images/img-bytom.png';

const Wrap = css.div`
  margin-top: 150px;
  @media (max-width: 640px) {
    margin-top: 110px;
  }
`;
const Cont = css.div`
  padding: 40px 0;
  width: 1160px;
  margin: 0 auto;
  .ant-tabs-nav-scroll{
    text-align: center;
    font-size: 18px;
    color: #1F2021;
  }
  .ant-tabs-nav .ant-tabs-tab-active{
    color: #1F2021;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Pane = css.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  &>img{
    width: 560px;
    height: 436px;
  }
  &>div{
    width: 560px;
    h1{
      color: rgba(0, 0, 0, 0.88);
      font-size: 24px;
      margin-bottom: 15px;
    }
    p{
      color: rgba(0, 0, 0, 0.72);
      font-weight: 300;
      font-size: 15px;
      line-height: 28px;
      margin-bottom: 38px;
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 16px;
    &>img{
      width: 100%;
      height: auto;
      margin-top: 20px;
    }
    &>div{
      width: 100%;
      margin-top: 40px;
      h1{
        font-size: 14px;
        margin-bottom: 8px;
      }
      p{
        font-size: 12px;
        color: #000;
        line-height: 22px;
      }
    }
  }
`;

export default function Infrastructure() {
  return (
    <Wrap>
      <BlockTitle 
        title={<Msg id="index_base_title" />}
        subTitle={<Msg id="index_base_subtitle" values={{br: <br />}} />}
      />
      <Cont>
        <Tabs

        >
          <Tabs.TabPane tab={<Msg id="index_base_tab1" />} key="1">
            <Pane>
              <img src={img_bytom} alt=""/>
              <div>
                <Msg id="index_base_tab1_title" tagName="h1" />
                <Msg id="index_base_tab1_des" tagName="p" />
                {/* <Gallery data={['Bytom', 'Vapor', 'Federation']} /> */}
              </div>
            </Pane>
          </Tabs.TabPane>
          {/* <Tabs.TabPane tab="Vapor链" key="2"></Tabs.TabPane> */}
        </Tabs>
      </Cont>
    </Wrap>
  )
}
