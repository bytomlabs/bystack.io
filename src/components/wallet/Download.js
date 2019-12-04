import React, { useState, useEffect} from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, injectIntl } from 'gatsby-plugin-intl';
import { Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import DownloadBtn from './DownloadBtn'

import img_bycoin from '../../images/wallet/1_bycoin.png';
import img_byone from '../../images/wallet/2_byone.png';
import img_bytom from '../../images/wallet/3_bytom.png';
import img_vapor from '../../images/wallet/4_vapor.png';
import img_qrcode from '../../images/wallet/qrcode.png';

const downloadLinks = {
  ios: 'https://itunes.apple.com/us/app/bycoin/id1442183969?l=zh&ls=1&mt=8',
  apk: 'http://bycoin.oss-cn-shanghai.aliyuncs.com/bycoin/apk/Bycoin.apk',
  byone: 'https://chrome.google.com/webstore/detail/byone/nlgbhdfgdhgbiamfdfmbikcdghidoadd',
  crx: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71275/Byone_v2.1.2.crx',
  bytom: 'https://github.com/Bytom/bytom/releases',
  vapor: 'https://github.com/Bytom/vapor/releases',
  mac: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-mac.zip',
  win32: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-win-ia32.zip',
  win64: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-win-x64.zip',
  linux32: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-linux-ia32.zip',
  linux64: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-linux-x64.zip',
  v_mac: '',
  v_win32: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71821/vapor-1.0.4-windows_386.zip',
  v_win64: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71821/vapor-1.0.4-windows_amd64.zip',
  v_linux32: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71821/vapor-1.0.4-linux_386.tgz',
  v_linux64: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71821/vapor-1.0.4-linux_amd64.tgz',
}

const Wrap = css.div`
  width: 1160px;
  min-height: 300px;
  margin: 0 auto;
  padding: 200px 0 0 0;
  @media (max-width: 640px) {
    display: none;
  }
`;
const Title = css.h1`
  font-size: 44px;
  line-height: 1em;
`;
const Des = css.div`
  font-size: 16px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.56);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  padding-bottom: 20px;
`;
const List = css(QueueAnim)`
  padding: 60px 0;
  min-height: 980px;
  &>h1{
    font-size: 24px;
    line-height: 1em;
  }
`;
const Item = css.div`
  display: flex;
  margin: 30px 0 80px 0;
  &>a{
    line-height: 80px;
  }
`;
const Info = css.div`
  display: flex;
  width: 320px;
  &>img{
    width: 80px;
    height: 80px;
    box-shadow: 0px 2px 12px #E9F0F7;
  }
  &>div{
    margin-left: 40px;
    h2{
      font-size: 24px;
      line-height: 1em;
      margin: 10px 0;
    }
    p{
      font-size: 15px;
      color: rgba(0, 0, 0, .56);
    }
  }
`;
const ButtonGroup = css(QueueAnim)`
  flex: 1;
  display: flex;
  margin: 0 90px;
  margin-top: 15px;
  li{
    position: relative;
    height: 50px;
  }
  li:not(:last-child){
    margin-right: 40px;
    position: relative;
  }
`;
const Button = css(TweenOne)`
  width: 160px;
  height: 50px;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
  font-size: 16px;
  background-color: ${props => ({ios: '#035BD4', apk: '#91D303'}[props.type] || '#fff')};
  cursor: pointer;
  border: ${props => props.type ? '0' : '1px'} solid rgba(0, 0, 0, 0.56);
  box-sizing: border-box;
  a{
    color: ${props => props.type ? '#fff' : 'rgba(0, 0, 0, 0.88)'};
    &:hover{
      color: ${props => props.type ? 'rgba(255, 255, 255, 0.56)' : 'rgba(0, 0, 0, .56)'};
    }
  }
`;
const Appid = css(TweenOne)`
  width: 100%;
  height: 0;
  background-color: rgba(3, 91, 212, .02);
  display: flex;
  border-radius: 16px;
  padding: 0 40px;
  overflow: hidden;
  margin: -60px 0 60px 0;
  box-sizing: border-box;
  position: relative;
  opacity: 0;
  &>h2{
    font-size: 18px;
    color: rgba(0, 0, 0, .88);
  }
  &>div{
    margin-left: 150px;
    font-size: 15px;
    p{
      color: rgba(0, 0, 0, .88);
      span:last-child{
        margin-left: 60px;
      }
    }
    &>span{
      color: rgba(0, 0, 0, .32);
    }
  }
`;
const CloseBtn = css.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 100%;
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgba(0, 0, 0, .22);
  cursor: pointer;
`;
const ExtraBtns = css.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  width: 100%;
  text-align: center;
  transition: all 0.2;
  flex-direction: column;
  a{
    line-height: 50px;
  }
  img{
    width: 100%;
    height: 150px;
    padding: 18px;
  }
`;

const wallets = [
  {
    title: <Msg id="wallet_title_mobile" />,
    logo: img_bycoin,
    name: 'Bycoin',
    des: <Msg id="wallet_bycoin_des" />,
    btns: [
      {text: 'iOS', type: 'ios', link: downloadLinks['ios']},
      {text: 'Android', type: 'apk', link: downloadLinks['apk']},
      {text: <Msg id="wallet_qrcode" />, extra: 'qrcode', extraComponents: <img src={img_qrcode} />},
    ],
    // link: {
    //   text: 'iOS安装教程',
    //   url: '',
    // }
  },
  {
    title: <Msg id="wallet_chrome_crx" />,
    logo: img_byone,
    name: 'Byone',
    des: <Msg id="wallet_chrome_des" />,
    btns: [
      {text: <Msg id="wallet_chrome_store" />, link: downloadLinks['byone']},
      {text: <Msg id="wallet_crx" />, link: downloadLinks['crx']},
    ],
  },
  {
    title: <Msg id="wallet_desktop" />,
    logo: img_bytom,
    name: 'Bytom',
    des: <Msg id="wallet_desktop_bytom" />,
    btns: [
      {text: 'macOS', link: downloadLinks['mac']},
      {text: 'Windows', extra: 'win', extraComponents: <><a href={downloadLinks['win32']}>Windows 32</a><a href={downloadLinks['win64']}>Windows 64</a></>},
      {text: 'Linux', extra: 'linux', extraComponents: <><a href={downloadLinks['linux32']}>Linux 32</a><a href={downloadLinks['linux64']}>Linux 64</a></>},
    ],
    link: {
      text: <Msg id="wallet_more" />,
      url: downloadLinks['bytom'],
    }
  },
  {
    logo: img_vapor,
    name: 'Vapor',
    des: <Msg id="wallet_desktop_vapor" />,
    btns: [
      // {text: 'macOS'},
      {text: 'Windows', extra: 'v_win', extraComponents: <><a href={downloadLinks['v_win32']}>Windows 32</a><a href={downloadLinks['v_win64']}>Windows 64</a></>},
      {text: 'Linux', extra: 'v_linux', extraComponents: <><a href={downloadLinks['v_linux32']}>Linux 32</a><a href={downloadLinks['v_linux64']}>Linux 64</a></>},
    ],
    link: {
      text: <Msg id="wallet_more" />,
      url: downloadLinks['vapor'],
    }
  },
];

function Download() {
  const [curAnims, setAnims] = useState({});
  const [curPaused, setCurPaused] = useState();
  const [curReverse, setCurReverse] = useState();

  const handleBtnAnim = (curBtn, type) => {
    if(type === 'paused'){
      curAnims[curBtn] = {paused: false, reverse: false};
    } else {
      curAnims[curBtn] = {paused: false, reverse: true};
    }
    setAnims(Object.assign({}, curAnims));
  }


  return (
    <Wrap>
      <Title><Msg id="wallet_download_title" /></Title>
      <Des>
        <Msg id="wallet_download_des" values={{br: <br />}} />
      </Des>
      <div
        always={false}
      >
        <List
          type={"bottom"}
          interval={220}
        >
          {
            wallets.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
                <Item>
                  <Info>
                    <img src={item.logo} alt=""/>
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.des}</p>
                    </div>
                  </Info>
                  <ButtonGroup type={'bottom'} component={'ul'}>
                    {
                      item.btns.map((btn, btnIndex) => (
                        <li key={btnIndex}>
                          <Button
                            onMouseOver={() => handleBtnAnim(btn.extra, 'paused')}
                            paused={btn.extra ? (curAnims[btn.extra] ? curAnims[btn.extra].paused : true) : true}
                            reverse={curAnims[btn.extra] ? curAnims[btn.extra].reverse : false}
                            animation={{
                              duration: 100,
                              height: btn.extra === 'qrcode' ? '300%' : '200%',
                              boxShadow: '0px 2px 12px #E9F0F7',
                              borderColor: 'rgba(0, 0, 0, 0)',
                            }}
                            component={'div'}
                            type={btn.type}
                          >
                            {
                              (curAnims[btn.extra] && !curAnims[btn.extra].reverse) && btn.extraComponents ? (
                                <ExtraBtns onMouseOut={() => handleBtnAnim(btn.extra, 'reverse')}>{btn.extraComponents}</ExtraBtns>
                              ) : <a style={{display: 'block'}} href={btn.link}>{btn.text}</a>
                            }
                          </Button>
                        </li>
                      ))
                    }
                  </ButtonGroup>
                  {item.link && (
                    item.name === 'Bycoin' ? 
                      <a onClick={() => handleBtnAnim('appid', 'paused')}>{item.link.text}</a>
                    : <a href={item.link.url}>{item.link.text}</a>
                  )}
                </Item>
                {
                  item.name === 'Bycoin' && (
                    <Appid
                      paused={!(curPaused === 'appid')}
                      reverse={curReverse === 'appid'}
                      animation={{ 
                        duration: 300,
                        height: 138,
                        paddingTop: 40,
                        opacity: 1,
                      }}
                    >
                      <h2>iOS 海外账号</h2>
                      <div>
                        <p>
                          <span>Apple ID：bycoin01@outlook.com</span>
                          <span>密码：Bycoin2018</span>
                        </p>
                        <span>注：仅提供海外账号下载和更新，请不要开启 iCloud 同步，以防个人数据丢失。</span>
                      </div>
                      <CloseBtn 
                        onClick={() => handleBtnAnim('appid', 'reverse')}
                      ><Icon type="close" /></CloseBtn>
                    </Appid>
                  )
                }
              </div>
            ))
          }
        </List>
      </div>
    </Wrap>
  )
}

export default Download;
