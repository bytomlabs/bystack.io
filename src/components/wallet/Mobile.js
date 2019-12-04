import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, injectIntl } from 'gatsby-plugin-intl';
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import MobileBtn from './DownloadBtn';

import img_bycoin from '../../images/wallet/1_bycoin.png';
import img_banner from '../../images/wallet/banner_m.png';
import icon_1 from '../../images/wallet/icon/1.png';
import icon_2 from '../../images/wallet/icon/2.png';
import icon_3 from '../../images/wallet/icon/3.png';
import icon_4 from '../../images/wallet/icon/4.png';
import icon_5 from '../../images/wallet/icon/5.png';

const downloadLinks = {
  testFight: 'https://testflight.apple.com/join/Ky3WQpCE',
  ios: 'https://itunes.apple.com/us/app/bycoin/id1442183969?l=zh&ls=1&mt=8',
  apk: 'https://cdn.bystack.com/bycoin/apk/Bycoin.apk',
  yyb: '',
  googleplay: 'https://play.google.com/store/apps/details?id=io.bytom.bycoin',
};

const Wrap = css.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;
const Head = css(QueueAnim)`
  height: 200px;
  padding: 20px 0 0 16px;
  h1{
    font-size: 36px;
    line-height: 54px;
  }
  p{
    font-size: 18px;
    color: rgba(0, 0, 0, .56);
    margin-top: 10px;
  }
`;
const Download = css.div`
  padding: 20px 16px;
  min-height: 100px;
`;
const Item = css.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 2px 16px rgba(2, 33, 76, 0.07);
  &:not(:last-child){
    margin-bottom: 16px;
  }
  `;
const ItemCont = css.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  &>img{
    width: 48px;
    height: 48px;
    border-radius: 8px;
    box-shadow: 0px 2px 12px #E9F0F7;
  }
  &>div{
    flex: 1;
    padding: 0 10px;
    &>h2{
      font-size: 18px;
      margin: 0;
      span{
        color: #fff;
        font-weight: 300;
        display: inline-block;
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        padding: 0 6px;
        border-radius: 4px;
        background-color: #91D303;
        vertical-align: 2px;
      }
    }
    &>p{
      font-size: 12px;
      margin: 5px 0 0 0;
      color: rgba(0, 0, 0, .32);
    }
  }
`;
const ItemDes = css.div`
  padding: 16px;
  background: rgba(3, 92, 212, 0.02);
  border-radius: 16px;
  &>h2{
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  &>p{
    font-size: 12px;
    margin-bottom: 5px;
  }
  p:last-child{
    color: rgba(0, 0, 0, .32);
    margin: 10px 0 0 0;
  }
`;
const Button = css.a`
  width: 92px;
  height: 36px;
  line-height: 36px;
  color: ${props => props.light ? '#035BD4' : '#fff'};
  text-align: center;
  border-radius: 18px;
  font-size: 13px;
  border: 1px solid #035bd4;
  background-color: ${props => props.light ? '#fff' : '#035BD4'};
  &:active {
    opacity: .8;
  }
`;
const ButtonApk = css.a`
  width: 92px;
  height: 36px;
  line-height: 36px;
  color: ${props => props.light ? '#035BD4' : '#fff'};
  text-align: center;
  border-radius: 18px;
  font-size: 13px;
  border: 1px solid #035bd4;
  background-color: ${props => props.light ? '#fff' : '#035BD4'};
  &:active {
    opacity: .8;
  }
`;
const Banner = css.div`
  &>h1{
    font-size: 22px;
    margin: 50px 0 30px 0;
    text-align: center;
  }
  li{
    font-size: 15px;
    img{
      width: 12px;
      height: 12px;
      vertical-align: 0px;
      margin-right: 8px;
    }
  }
  ul:first-of-type{
    text-align: center;
    li{
      display: inline-block;
    }
    li:first-child{
      margin-right: 30px;
    }
  }
  ul:last-of-type{
    display: flex;
    justify-content: space-around;
    padding: 0 16px;
    flex-wrap: wrap;
  }
  &>img{
    width: 100%;
  }
`;
const More = css.div`
  text-align: center;
  background-color: #000;
  line-height: 54px;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: -60px;
  font-size: 12px;
  a{
    margin: 0 10px;
    color: rgba(255, 255, 255, .72);
  }
`;

const wallets = {
  ios: [
    {
      name: 'Bycoin',
      logo: img_bycoin,
      subTitle: 'TestFlight',
      label: <Msg id="wallet_m_label" />,
      link: downloadLinks['testFight'],
      btnText: <Msg id="wallet_m_download" />,
      des: {
        title: <Msg tagName="h2" id="wallet_m_testfight_title" />,
        cont: [<Msg id="wallet_m_testfight_des_1" />, <Msg id="wallet_m_testfight_des_2" />],
        des: <Msg tagName="p" id="wallet_m_testfight_des" />
      }
    },
    {
      name: 'Bycoin',
      logo: img_bycoin,
      subTitle: <Msg id="wallet_m_global" />,
      link: downloadLinks['ios'],
      btnText: <Msg id="wallet_m_store_apple" />,
      des: {
        title: <Msg tagName="h2" id="wallet_m_global_title" />,
        cont: [<Typography.Paragraph copyable={{text: 'bycoin01@outlook.com'}}><Msg id="wallet_m_global_des_1" /></Typography.Paragraph>, <Msg id="wallet_m_global_des_2" />],
        des: <Msg tagName="p" id="wallet_m_global_des" />
      }
    },
  ],
  android: [
    {
      name: 'Bycoin',
      logo: img_bycoin,
      subTitle: <Msg id="wallet_m_apk" />,
      label: <Msg id="wallet_m_label" />,
      link: downloadLinks['apk'],
      type: 'apk',
      btnText: <Msg id="wallet_m_download" />
    },
    {
      name: 'Bycoin',
      logo: img_bycoin,
      subTitle: 'Google Play',
      link: downloadLinks['googleplay'],
      btnText: <Msg id="wallet_m_store_yyb" />
    },
  ],
};

function Mobile({ intl }) {
  const isZh = intl.locale === 'zh';
  let isIos = true;
  let list = []
  try {
    isIos = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
    list = isIos ? wallets['ios'] : wallets['android'];
  } catch (err) { console.log(err) };

  return (
    <Wrap>
      <Head type="bottom">
        <Msg key="title" tagName="h1" values={{br: <br />}} id="wallet_title" />
        <Msg key="des" tagName="p" id="wallet_des" />
      </Head>
      <Download type={'bottom'}>
        {
          list.map((item, index) => (
            <Item key={index}>
              <ItemCont>
                <img src={item.logo} alt=""/>
                <div>
                  <h2>Bycoin {item.label && isZh && <>{item.label}</>}</h2>
                  <p>{item.subTitle}</p>
                </div>
                <Button key={index} light={index !== 0} href={item.link}>{item.btnText}</Button>
              </ItemCont>
              {
                item.des && (
                  <ItemDes>
                    {item.des.title}
                    {
                      item.des.cont.map((sitem, sindex) => <p key={sindex}>{sitem}</p>)
                    }
                    {item.des.des}
                  </ItemDes>
                )
              }
            </Item>
          ))
        }
      </Download>
      <Banner>
        <Msg tagName="h1" id="wallet_m_banner_title" />
        <ul>
          <li><img src={icon_1} alt=""/><Msg id="wallet_m_banner_des_1" /></li>
          <li><img src={icon_2} alt=""/><Msg id="wallet_m_banner_des_2" /></li>
        </ul>
        <ul>
          <li><img src={icon_3} alt=""/><Msg id="wallet_m_banner_des_3" /></li>
          <li><img src={icon_4} alt=""/><Msg id="wallet_m_banner_des_4" /></li>
          <li><img src={icon_5} alt=""/><Msg id="wallet_m_banner_des_5" /></li>
        </ul>
        <img src={img_banner} alt=""/>
      </Banner>
      <More>
        <Msg id="wallet_m_ft_des" />
        <a href="//www.bystack.com/wallet">bystack.com/wallet</a>
      </More>
    </Wrap>
  );
}

export default injectIntl(Mobile);
