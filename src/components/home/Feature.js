import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';


import icon_1 from '../../images/icon/icon1.png';
import icon_2 from '../../images/icon/icon2.png';
import icon_3 from '../../images/icon/icon3.png';
import icon_4 from '../../images/icon/icon4.png';
import icon_arrow from '../../images/icon/icon-arrow.png';
const features_part_1 = [
  {
    img: icon_2,
    title: <Msg id="index_feature_1" />,
    des: <Msg id="index_feature_1_des" />,
  },
  {
    img: icon_4,
    title: <Msg id="index_feature_2" />,
    des: <Msg id="index_feature_2_des" />,
  },
];
const features_part_2 = [
  {
    img: icon_1,
    title: <Msg id="index_feature_3" />,
    des: <Msg id="index_feature_3_des" />,
  },
  {
    img: icon_3,
    title: <Msg id="index_feature_4" />,
    des: <Msg id="index_feature_4_des" />,
  },
];
const Wrap = css.div`
  width: 1160px;
  margin: 0 auto;
  padding: 55px 0 25px;
  display: flex;
  justify-content: space-between;
  ul{
    width: 560px;
    display: flex;
    flex-direction: column;
    margin: 0;
    &:last-child{
      margin-left: 40px;
    }
    li{
      box-shadow: 0px 8px 16px rgba(0,0,0,0.04);
      background-color: #fff;
      border-radius: 12px;
      padding: 40px;
      display: flex;
      &:not(:last-child){
        margin-bottom: 40px;
      }
      img{
        width: 88px;
        height: 96px;
        margin-right: 30px;
      }
      h1{
        color: rgba(0,0,0,0.88);
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      p{
        font-size: 15px;
        color: rgba(0,0,0,0.72);
        font-weight: 300;
        line-height: 28px;
        margin: 0;
      }
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0 16px;
    ul{
      &:last-child{
        margin-left: 0;
      }
      &:first-child>li:first-child{
        display: none;
      }
      width: 100%;
      li{
        padding: 20px;
        border-radius: 8px;
        &:not(:last-child){
          margin-bottom: 20px;
        }
        margin-bottom: 20px;
        img{
          width: 50px;
          height: 52px;
        }
        h1{
          font-size: 14px;
          margin-bottom: 8px;
        }
        p{
          font-size: 12px;
          line-height: 22px;
          color: #000;
        }
      }
    }
  }
`;

export default function Feature() {
  return (
    <Wrap>
      <ul>
        <li style={{ padding: 0, boxShadow: 'none', background: 'transparent',}}><img style={{width: '72px', height: '72px'}} src={icon_arrow} alt=""/></li>
        {
          features_part_1.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt=""/>
              <div>
                <h1>{item.title}</h1>
                <p>{item.des}</p>
              </div>
            </li>
          ))
        }
      </ul>
      <ul>
        {
          features_part_2.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt=""/>
              <div>
                <h1>{item.title}</h1>
                <p>{item.des}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </Wrap>
  )
};
