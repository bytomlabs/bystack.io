import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';


import img_logo from '../../images/logo-home.png';

const links = [
  [
    <Msg id="index_ft_item1_title" />,
    { name: <Msg id="index_ft_8btc" />, link: 'https://www.8btc.com/' },
    { name: <Msg id="index_ft_chainnode" />, link: 'https://www.chainnode.com/' },
    { name: 'MATPool', link: 'https://matpool.io' },
    { name: <Msg id="index_ft_matpool" />, link: 'https://www.matpool.com/' },
  ],
  [
    <Msg id="index_ft_item2_title" />,
    { name: <Msg id="index_ft_bytom" />, link: 'https://bytom.io/' },
    // { name: <Msg id="index_ft_blockmeta" />, link: 'https://blockmeta.com' },
    // { name: <Msg id="index_ft_bycoin" />, link: 'https://bycoin.im' },
    // { name: <Msg id="index_ft_byone" />, link: 'https://chrome.google.com/webstore/detail/byone/nlgbhdfgdhgbiamfdfmbikcdghidoadd' },
  ],
  [<Msg id="index_ft_item3_title" />, 'contact@bystack.com'],
];

const Wrap = css.div`
  width: 100%;
  height: 72px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg,rgba(0,102,255,1) 0%,rgba(45,199,144,1) 52%,rgba(145,211,3,1) 100%);
  position: ${props => (props.fixedFooter ? 'fixed' : 'static')};
  bottom: 0;
  &>span:last-child{
    display: none;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 1.5em;
    padding-top: 16px;
    position: static;
    padding: 16px;
    &>span:last-child{
      display: block;
    }
    &>span:first-child {
      display: none;
    }
  }
`;
const FootNav = css.div`
  width: 100%;
  height: 392px;
  background-color: #000;
  @media (max-width: 640px) {
    display: ${props => props.type === 'wallet' ? 'none' : 'block'};
  }
`;
const Cont = css.div`
  width: 1160px;
  margin: 0 auto;
  padding: 100px 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  &>img{
    width: 178px;
    height: 42px;
  }
  &>ul{
    &>li{
      margin-left: 40px;
      float: left;
      h2{
        color: #fff;
        font-size: 18px;
      }
    }
    ul{
      width: 180px;
      margin-top: 40px;
      li{
        width: 100%;
        margin-top: 10px;
        opacity: .8;
      }
      a, span{
        color: #fff !important;
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    padding: 40px 16px;
    &>img{
      width: 120px;
      height: 28px;
    }
    &>ul>li{
      margin-left: 0;
      width: 50%;
      margin-top: 40px;
      h2{ font-size: 16px; }
      a, span{ font-size: 14px; }
      &>ul{
        margin-top: 20px;
      }
    }
  }
`;

const Footer = ({ home, type, fixedFooter = false, ftStyle }) => {
  return (
    <>
      <FootNav type={type}>
        <Cont>
          <img src={img_logo} alt="" />
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <h2>{item[0]}</h2>
                <ul>
                  {item.slice(1).map((sitem, sindex) => (
                    <li key={sindex}>
                      {typeof sitem === 'string' ? (
                        <span>{sitem}</span>
                      ) : (
                        <a target="_blank" href={sitem.link}>{sitem.name}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Cont>
      </FootNav>
      <Wrap fixedFooter={fixedFooter} home={home}>
        <span>Copyright © 2019 · 杭州超节点信息科技有限公司 · 浙ICP备14013035号-14 · 浙网信备33010619213211320012号</span>
        <span>Copyright © 2019 · 杭州超节点信息科技有限公司<br />浙ICP备14013035号-14<br />浙网信备33010619213211320012号</span>
        {/* <span> · Copyright © 2019 · 杭州时戳信息科技有限公司 · 浙ICP备14013035号-14</span> */}
      </Wrap>
    </>
  );
};

export default Footer;
