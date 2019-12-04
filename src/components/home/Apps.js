import React from 'react';
import css from 'styled-components';
import BlockTitle from './BlockTitle';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';


import img_bycoin from '../../images/app/App1@2x.png';
import img_byone from '../../images/app/App2@2x.png';
import img_facede from '../../images/app/App3@2x.png';

const apps = [
  {
    img: img_bycoin,
    title: <Msg id="index_apps_item1_title" />,
    des: <Msg id="index_apps_item1_des" />,
  },
  {
    img: img_byone,
    title: <Msg id="index_apps_item2_title" />,
    des: <Msg id="index_apps_item2_des" />,
  },
  {
    img: img_facede,
    title: <Msg id="index_apps_item3_title" />,
    des: <Msg id="index_apps_item3_des" />,
  },
];

const Wrap = css.div`
  margin-top: 80px;
  width: 1160px;
  margin: 100px auto;
  @media (max-width: 640px) {
    width: 100%;
    margin: 80px auto 20px auto;
  }
`;
const Cont = css.div`
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  padding: 60px 0 0 0;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }
`;
const App = css.div`
  background: url(${props => props.bg}) top center / 100%  no-repeat;
  position: relative;
  width: 360px;
  height: 340px;
  &>div{
    position: absolute;
    background-color: #fff;
    padding: 20px;
    left: 20px;
    right: 20px;
    top: 166px;
    border-radius: 4px;
    box-shadow:0px 4px 16px rgba(0,0,0,0.04);
    h1{
      font-size: 18px;
      color: rgba(0, 0, 0, .88);
      margin-bottom: 10px;
    }
    p{
      color: rgba(0, 0, 0, 0.72);
      font-size: 14px;
      line-height: 28px;
      font-weight: 300;
    }
  }
  @media (max-width: 640px) {
    margin-top: 20px;
    &>div{
      h1{
        font-size: 14px;
      }
      p{
        font-size: 12px;
        color: #000;
        opacity: .72;
        line-height: 22px;
        margin: 0;
      }
    }
  }
`;

export default function Apps() {
  return (
    <Wrap>
      <BlockTitle 
        left
        title={<Msg id="index_apps_title" />}
        subTitle={<Msg id="index_apps_subtitle" values={{br: <br />}} />}
      />
      <Cont>
      {
        apps.map((item, index) => (
          <App bg={item.img} key={index}>
            <div>
              <h1>{item.title}</h1>
              <p>{item.des}</p>
            </div>
          </App>
        ))
      }
      </Cont>
    </Wrap>
  )
}
