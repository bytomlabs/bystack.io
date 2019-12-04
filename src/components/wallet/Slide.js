import React, { useRef } from 'react';
import css from 'styled-components';
import Button from '../Button';
import { FormattedMessage as Msg, injectIntl } from 'gatsby-plugin-intl';
import BannerAnim, { Element, Arrow } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { animateScroll } from 'react-scroll';
import 'rc-banner-anim/assets/index.css';

import img_bycoin from '../../images/wallet/bycoin.png'
import img_byone from '../../images/wallet/byone.png'
import img_bycoin_bg from '../../images/wallet/bycoin_bg.png'
import img_byone_bg from '../../images/wallet/byone_bg.png'
import img_byone_logo from '../../images/wallet/byone_logo.png'
import img_bycoin_logo from '../../images/wallet/bycoin_logo.png'

import img_arrow from '../../images/wallet/arrow.png'


const Wrap = css.div`
  width: 1160px;
  height: 800px;
  margin: 20px auto 0 auto;
  @media (max-width: 640px) {
    display: none;
  }
`;
const BannerWrapper = css(BannerAnim)`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Item = css.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Cont = css.div`
  width: 50%;
  height: 100%;
  padding-top: 200px;
  box-sizing: border-box;
  &>img{
    height: 60px;
    width: auto;
  }
  &>h1{
    font-size: 70px;
    line-height: 1em;
    margin: 30px 0 20px 0;
  }
  &>p{
    font-size: 24px;
    color: rgba(0, 0, 0, .56);
  }
  &>button{
    margin: 40px 0 0 0;
  }
`;
const Image = css.div`
  width: 50%;
  height: 100%;
  position: relative;
`;
const ImageBg = css.div`
  width: 686px;
  height: 780px;
  position: absolute;
  top: 0;
  left: ${props => props.type === 'byone' ? '35px' : 0};
  z-index: 0;
  background: url(${props => props.type === 'byone' ? img_byone_bg : img_bycoin_bg}) top right / 100% no-repeat;
`;
const ImageFt = css.div`
  z-index: 10;
  position: relative;
`;
const Icon = css.div`
  margin-top: 200px;
  img{
    width: 72px;
    height: 72px;
    cursor: pointer;
  }
`;

function Slide() {
  const slideRef = useRef(null);

  const handleScroll = (dst = 0) => {
    console.log(dst);
    animateScroll.scrollTo(dst, { duration: 300 });
  }

  return (
    <Wrap>
      <BannerWrapper
        type={'grid'}
        // duration={0}
        thumb={false}
        autoPlay
        arrow={false}
        autoPlaySpeed={8000}
        ref={slideRef}
      >
        <Element key="0">
          <Item>
            <Cont>
              <TweenOne animation={{ y: -60, opacity: 0, type: 'from' }}>
                <img height="60" key="0" src={img_bycoin_logo} alt=""/>
              </TweenOne>
              <h1 key="1">
                <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                  <Msg values={{br: ''}} id="wallet_title" />
                </TweenOne>
              </h1>
              <p key="3">
                <TweenOne animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                  <Msg id="wallet_des" />
                </TweenOne>
              </p>
              <TweenOne animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}>
                <Button key="4" onClick={() => handleScroll(1280)} style={{padding: '0 42px', margin: 0}}><Msg id="wallet_download_btn" /></Button>
              </TweenOne>
              <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 300 }}>
                <Icon onClick={() => slideRef.current.next()}><img src={img_arrow} /></Icon>
              </TweenOne>
            </Cont>
            <Image>
              <TweenOne animation={{ x: 50, opacity: 0, type: 'from' }}>
                <ImageBg></ImageBg>
              </TweenOne>
              <TweenOne animation={{ x: -50, z: 50, opacity: 0, type: 'from', delay: 200 }}>
                <ImageFt><img src={img_bycoin} alt=""/></ImageFt>
              </TweenOne>
            </Image>
          </Item>
        </Element>
  
        <Element key="1">
        <Item>
            <Cont>
              <TweenOne animation={{ y: -60, opacity: 0, type: 'from' }}>
                <img height="60" key="0" src={img_byone_logo} alt=""/>
              </TweenOne>
              <h1 key="1">
                <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                  <Msg id="wallet_subtitle" />
                </TweenOne>
              </h1>
              <p key="3">
                <TweenOne animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                  <Msg id="wallet_chrome" />
                </TweenOne>
              </p>
              <TweenOne animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}>
                <Button key="4" onClick={() => handleScroll(1500)} style={{padding: '0 42px', margin: 0}}><Msg id="wallet_download_btn" /></Button>
              </TweenOne>
              <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 300 }}>
                <Icon onClick={() => slideRef.current.prev()}><img src={img_arrow} /></Icon>
              </TweenOne>
            </Cont>
            <Image>
              <TweenOne animation={{ x: -50, opacity: 0, type: 'from' }}>
                <ImageBg type={'byone'}></ImageBg>
              </TweenOne>
              <TweenOne animation={{ x: 50, z: 50, opacity: 0, type: 'from', delay: 200 }}>
                <ImageFt><img src={img_byone} alt=""/></ImageFt>
              </TweenOne>
            </Image>
          </Item>
        </Element>
      </BannerWrapper>
    </Wrap>
  )
}

export default injectIntl(Slide);
