import React from 'react'
import css from 'styled-components';
import { FormattedMessage as Msg, Link, IntlContextConsumer } from 'gatsby-plugin-intl';
import moment from 'moment';
import { Statistic, Progress, Popover } from 'antd';

import img_arrow from '../images/arrow.png';
import img_wechat from '../images/wechat.png';
import icon_wechat from '../images/icon/wechat.png';
import icon_chainnode from '../images/icon/chainnode.png';
import icon_email from '../images/icon/email.png';

const deadline = moment('2019-07-20 00:00:01', 'YYYY-MM-DD HH:mm:ss');
const startDate = moment('2019-06-05 00:00:01', 'YYYY-MM-DD HH:mm:ss')
const percent = (moment().format('X') - startDate.format('X')) / (deadline.format('X') - startDate.format('X'));

const Wrap = css.div`
  width: ${props => props.lang === 'zh' ? '540px' : '660px'};
  height: 275px;
  padding: 15px 45px 25px 45px;
  box-sizing: border-box;
  background-color: #fff;
  font-weight: 300;
  @media (max-width: 640px) {
    width: auto;
    height: 150px;
    margin: 10px 24px 0 24px;
    padding: 20px 30px 30px 30px;
  }
`;
const Countdown = css.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  @media (max-width: 640px) {
    justify-content: center;
  }
`;
const Timer = css.div`
  display: flex;
  p{
    color: #808A95;
    font-size: 56px;
    margin: 0;
    color: #000;
  }
  p:first-child{}
  p:last-child{
    font-size: 18px;
    margin: 42px 0 0 12px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const Line = css.div`
  width: 1px;
  height: 66px;
  background-color: #DEDEDE;
  @media (max-width: 640px) {
    display: none;
  }
`;
const Info = css.div`
  h1{
    font-size: 20px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;
  }
  h2{
    display: none;
  }
  a{
    color: #035BD4;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
    img{
      width: 18px;
      height: 18px;
      margin-right: 8px;
      vertical-align: -4px;
    }
  }
  @media (max-width: 640px) {
    text-align: center;
    h1{
      font-size: 18px;
      display: none;
    }
    h2{
      display: block;
      color: #1F2021;
      font-size: 18px;
      margin-bottom: 16px;
      word-spacing: 10px;
    }
    a{
      font-size: 12px;
    }
  }
`;
const ProgressBar = css.div`
  margin-top: 10px;
  font-size: 13px;
  &>p{
    color: #1F2021;
    display: flex;
    margin: 0;
    align-items: flex-end;
    span{
      flex: 1;
    }
    span:first-child{
      flex: 2.2;
    }
    span:last-child{
      text-align: right;
    }
  }
  p:last-child{
    color: #808A95;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const Contack = css.div`
  display: flex;
  margin-top: 20px;
  img{
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  span{
    font-size: 14px;
    color: #1F2021;
    line-height: 24px;
  }
  &>div{
    margin-right: 24px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const Qrcode = css.div`
  img{
    width: 134px;
    height: 100%;
  }
  p{
    font-size: 14px;
    color: #808A95;
    text-align: center;
    width: 100%;
  }
`;

function CountdownBoard ({ language }) {

  return (
    <Wrap lang={language}>
      <Countdown>
        <Timer>
          <p>7.20</p>
          <p><Msg id="home_plan_title" /></p>
        </Timer>
        <Line />
        <Info>
          {/* <h1><Msg id="home_plan_date" /><Msg id="home_plan_title" /></h1> */}
          {/* <h2><Msg id="home_plan_date" /> <Msg id="home_plan_title" /></h2> */}
          <Link to="/node/detail"><img src={img_arrow} /><Msg id="home_btn_plan" /></Link>
          <Link to="/node/rules"><img src={img_arrow} /><Msg id="home_btn_sub_rule" /></Link>
          {/* <Link to={'/node/vote_reward'}><img src={img_arrow} /><span>早鸟投票收益查询</span></Link> */}
        </Info>
      </Countdown>
      
      <ProgressBar>
        <p>
          <span><Msg id="home_progress_step1" /></span>
          <span><Msg id="home_progress_step2" /></span>
          <span><Msg id="home_progress_step3" /></span>
        </p>
        <Progress
          percent={percent * 100}
          status="active"
          showInfo={false}
          strokeWidth={6}
          strokeColor={{
            from: '#035BD4',
            to: '#5DB4FF'
          }}
        />
        <p>
          <span><Msg id="home_progress_step1_date" /></span>
          <span><Msg id="home_progress_step2_date" /></span>
          <span><Msg id="home_progress_step3_date" /></span>
        </p>
      </ProgressBar>
      <Contack>
        <div>
          <Popover
            placement="bottom"
            content={(
              <Qrcode>
                <img src={img_wechat} alt=""/>
                <p>
                  <Msg id="home_wechat_des1" />
                </p>
              </Qrcode>
            )}
          >
            <img src={icon_wechat} alt=""/>
            <span><Msg id="home_contact_wechat" /></span>
          </Popover>
        </div>
        <div>
          <Popover
            placement="bottom"
            content={(<span>zyx@8btc.com</span>)}
          >
            <a href="mailto:zyx@8btc.com">
              <img src={icon_email} alt=""/>
              <span><Msg id="home_contact_email" /></span>
            </a>
          </Popover>
          
        </div>
        <div>
          <a rel="noopener noreferrer" target="_blank" href="https://www.chainnode.com/post/337525">
            <img src={icon_chainnode} alt=""/>
            <span><Msg id="home_contact_chainnode" /></span>
          </a>
        </div>
      </Contack>
    </Wrap>
  )
}

function Board() {
  return (
    <IntlContextConsumer>
      {
        ({language}) => (
          <CountdownBoard language={language} />
        )
      }
    </IntlContextConsumer>
  );
}

export default Board;