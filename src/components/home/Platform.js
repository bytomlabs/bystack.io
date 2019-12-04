import React from 'react';
import css from 'styled-components';
import BlockTitle from './BlockTitle';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';


import icon_base from '../../images/icon/icon-base.png';
import img_base from '../../images/img-base.png';

const infos = [
  {
    img: icon_base,
    title: <Msg id="index_platform_item1" />,
    des: <Msg id="index_platform_item1_des" />,
  },
  {
    img: icon_base,
    title: <Msg id="index_platform_item2" />,
    des: <Msg id="index_platform_item2_des" />,
  },
  {
    img: icon_base,
    title: <Msg id="index_platform_item3" />,
    des: <Msg id="index_platform_item3_des" />,
  },
];
const Wrap = css.div`
  width: 1160px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0 16px;
  }
  `;
  const Cont = css.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  margin-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  &>ul{
    width: 560px;
    li{
      display: flex;
      &:not(:last-child){
        margin-bottom: 40px;
      }
      img{
        width: 78px;
        height: 78px;
        border-radius: 100%;
        margin-right: 40px;
        box-shadow: 0px 4px 16px rgba(0,0,0,0.04); 
      }
      &>div{
        flex: 1;
      }
      h1{
        font-size: 24px;
        color: rgba(0, 0, 0, 0.88);
        font-weight: 500;
        margin-bottom: 15px;
      }
      p{
        font-size: 15px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.72);
        line-height: 28px;
        margin: 0;
      }
    }
  }
  &>img{
    width: 560px;
    height: 464px;
  }
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    padding: 20px 0;
    &>img{
      width: 100%;
      height: auto;
    }
    &>ul{
      width: 100%;
      margin-top: 40px;
      li{
        &:not(:last-child){
          margin-bottom: 20px;
        }
        img{
          width: 50px;
          height: 50px;
          margin-right: 16px;
        }
        h1{
          font-size: 14px;
          margin-bottom: 8px;
        }
        p{
          font-size: 12px;
          color: #000;
          line-height: 24px;
        }
      }
    }
  }
`;
export default function Platform() {
  return (
    <Wrap>
      <BlockTitle 
        right
        title={<Msg id="index_platform_title" />} 
        subTitle={<Msg id="index_platform_subtitle" values={{br: <br />}} />} 
      />
      <Cont>
        <ul>
          {
            infos.map((item, index) => (
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
        <img src={img_base} alt=""/>
      </Cont>
    </Wrap>
  )
}
