import React from 'react';
import css from 'styled-components';
import { injectIntl, IntlContextConsumer, Link } from 'gatsby-plugin-intl';
import { Popover } from 'antd';
import Wallet from './Wallet';


import img_01 from '../images/bird_rules/1.png';
import img_02 from '../images/bird_rules/2.gif';

import img_01_en from '../images/bird_rules/1-en.png';
import img_02_en from '../images/bird_rules/2-en.gif';


import img_bycoin_1 from '../images/guide/bycoin/cn-01.png';
import img_bycoin_2 from '../images/guide/bycoin/cn-02.png';
import img_bycoin_3 from '../images/guide/bycoin/cn-03.png';

import img_bycoin_en_1 from '../images/guide/bycoin/en-01-Bycoin-Switch.png';
import img_bycoin_en_2 from '../images/guide/bycoin/en-02-Bycoin-Cross-chain.png';
import img_bycoin_en_3 from '../images/guide/bycoin/en-03-Bycoin-Vote.png';

import img_wallet_1 from '../images/guide/wallet/cn-01.png';
import img_wallet_2 from '../images/guide/wallet/cn-02.png';
import img_wallet_3 from '../images/guide/wallet/cn-03.png';
import img_wallet_4 from '../images/guide/wallet/cn-04.png';

import img_wallet_en_1 from '../images/guide/wallet/en-01-Bytom Wallet-Cross-chain.png';
import img_wallet_en_2 from '../images/guide/wallet/en-02-Bytom Wallet-Backup Keystore.png';
import img_wallet_en_3 from '../images/guide/wallet/en-03-Bytom Wallet-Restore From Keystore.png';
import img_wallet_en_4 from '../images/guide/wallet/en-04-Bytom Wallet-Vote.png';

import img_veto_cn_1 from '../images/guide/vote/cn1.png';
import img_veto_en_1 from '../images/guide/vote/en1.png';

const Wrap = css.div`
  &>p{
    font-size: 15px;
    color: #808A95;
    line-height: 28px;
    font-weight: 300;
    letter-spacing: 0;
    &:first-child{
      text-indent: 2em;
    }
  }
  &>h1{
    color: #1F2021;
    font-size: 16px;
    margin: 20px 0;
  }
  &>ol{
    list-style-type: decimal;
    padding-left: 18px;
    li>p{
      margin-bottom: 6px;
    }
  }
  &>ul, &>ol{
    li{
      padding: 5px 0;
      font-size: 15px;
      font-weight: 300;
      ul{
        margin: 0 0 15px 10px;
      }
    }
  }
  &>h2{
    color: #1F2021;
    font-size: 15px;
    text-align: center;
    font-weight: normal;
    margin: 10px 0;
    span{
      display: block;
      font-size: 12px;
      color: #808A95;
    }
  }
  table{
    width: 100%;
    td{
      border: 1px solid #ddd;
      padding: 5px 10px;
      font-size: 13px;
    }
  }
`;
const rewards = [
  {
    count: '10000',
    reward: '102.74',
  },
  {
    count: '50000',
    reward: '513.70',
  },
  {
    count: '100000',
    reward: '1027.40',
  },
]

const ContentZh = () => (
  <>
    <h1>正式投票时间</h1>
    <p>7月20日 Bystack主网上线后开启正式投票</p>
    <h1>
      如何进行正式投票
    </h1>
    <p>
      【推荐】Bycoin App（v1.2.0）<a target="_blank" href="https://bycoin.im">【下载链接】</a>
    </p>
    {/* <p> 安卓新版已上线，iOS新版苹果商店正在审核中，请耐心等待。iOS用户可以使用桌面端钱包或使用iOS内测版进行投票 <Link to="/bycoin">【iOS内测版教程】</Link></p> */}
    <ul>
      <li><p>1、切换至侧链：钱包管理->切换Vapor侧链</p></li>
      <li><img src={img_bycoin_1} alt=""/></li>
      <li>2、BTM资产转移至侧链：跨链->选择转入Vapor侧链</li>
      <li>
        <p>
          *跨链需要少量手续费（小于0.01BTM），跨链交易预计24小时内完成，请耐心等待
        </p>
      </li>
      <li><img src={img_bycoin_2} alt=""/></li>
      <li>3、正式投票：投票->选择节点投票->投票成功</li>
      <li>*投票需要少量手续费（小于0.01BTM），用于投票的BTM资产将会锁定在Vapor侧链钱包，20天后可以进行赎回</li>
      <li>*由于跨链和正式投票需要少量手续费，正式投票与早鸟投票数量允许1 BTM以内误差</li>
      <li><img src={img_bycoin_3} alt=""/></li>
      <li>4、取消投票：投票->取消投票->选择节点</li>
      <li>*用户取消部分投票时，未取消部分投票会重新进行投票并锁定20天。</li>
      <li><img src={img_veto_cn_1} alt=""/></li>
    </ul>

    <p>
      Bytom/Vapor Wallet for Desktop
      <a target="_blank" href="https://github.com/Bytom/vapor/releases/tag/v1.0.0">【Vapor下载】</a>
      <a target="_blank" href="https://github.com/Bytom/bytom/releases">【Bytom下载】</a>
    </p>
    <ul>
      <li>1、BTM资产转移至侧链：使用Bytom钱包转账至联邦地址</li>
      <li><img src={img_wallet_1} alt=""/></li>
      <li>2、切换至侧链：使用Vapor钱包导入Keystore（原Bytom钱包Keystore）</li>
      <li><img src={img_wallet_2} alt=""/></li>
      <li><img src={img_wallet_3} alt=""/></li>
      <li>3、正式投票：使用Vapor钱包投票</li>
      <li><img src={img_wallet_4} alt=""/></li>
    </ul>

    <h1>早鸟投票介绍</h1>
    <p>为了激励所有社区成员参与投票委托，为Bystack生态选出共识节点，我们开启了为期<b>15</b>天的早鸟投票奖励。社区成员拥有的投票权可以决定哪些竞选者成为共识节点，参与社区治理，构建Bystack区块链生态平台。期待所有社区成员参与到投票过程中来创造自己的价值，获得丰厚收益。</p>
    <h1>早鸟投票时间</h1>
    <p>7月5日 15:00 - 7月20日 00:00</p>
    <h1>如何进行早鸟投票</h1>
    <p><span>【推荐】Bycoin App (v1.1.0) <a href="https://bycoin.im" target="_blank">【立即下载】</a></span></p>
    <p>发现页-> Bystack早鸟投票页 -> 选择节点投票->投票成功</p>
    <img src={img_01} alt=""/>
    <p>Bytom Wallet for Desktop <Popover content={<Wallet isZh />}><a>【立即下载】</a></Popover></p>
    <p>选择节点投票 > 使用sign-message 命令对对消息签名 > 提交签名信息 > 投票成功</p>
    <img src={img_02} alt=""/>

    <h1>早鸟投票收益</h1>
    <p>早鸟投票的年化收益率为25%，从投票当天开始至早鸟投票结束，按投票数量计算每日收益。投票数量增加，则当日收益也相应增加。计算公式如下：</p>
    <h2>W=(x1+x2+…+xn)*R</h2>
    <h2 style={{color: '#808A95', fontSize: '12px', margin: '10px 0 20px 0'}}>W = 预期收益   x = 早鸟投票数量   R = 25%*(1/365)</h2>
    <p>例如，你在7月5日进行早鸟投票，预期收益为：</p>
    <table>
      <thead>
        <tr>
          <td>票数</td>
          <td>天数</td>
          <td>预期收益</td>
        </tr>
      </thead>
      <tbody>
        {
          rewards.map((item, index) => (
            <tr key={index}>
              <td>{item.count} BTM</td>
              <td>15</td>
              <td>{item.reward} BTM</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <br/>
    <h1>注意事项</h1>
    <ul>
      <li>1.   早鸟投票期间，钱包BTM余额不得低于你的早鸟投票总数量，否则无法获得早鸟投票收益。</li>
      <li>2.   正式投票总数量不得低于你的早鸟投票总数量，否则无法获得早鸟投票收益。</li>
      <li>3.   正式投票期间，用于投票BTM资产将会锁定在侧链钱包，20天后可以进行赎回。</li>
      <li>4.   投票统计截止至8月1日 00:00，早鸟投票收益将在活动结束后7个工作日内发放至侧链钱包，低于1BTM的收益将不予以发放。</li>
    </ul>
    <p></p>
    <p></p>
    <p>最终解释权归Bytom Foundation所有</p>
  </>
);
const ContentEn = () => (
  <>
    <h1>How to vote officially</h1>
    <p>Official voting: 2019.07.20 Bystack(After the launch of Bystack mainnet)</p>
    <p>Bycoin App(v1.2.0,update after the launch of Bystack mainnet)</p>
      <ul>
        <li>
          1.Switch to sidechain:wallet management->switch to sidechain
        </li>
        <li><img src={img_bycoin_en_1} alt=""/></li>
        <li>
          2.Transfer BTM to sidechain:cross-chain->transfer to Vapor
        </li>
        <li>
          *Cross-chain transaction requires a little fee(less than 0.01BTM).cross-chain transaction will be completed in 24 hours,please wait patiently
        </li>
        <li><img src={img_bycoin_en_2} alt=""/></li>
        <li>
          3.Vote:vote->choose candidates to vote->vote successfully
        </li>
        <li>
          *Voting requires a little fee（less than 0.01BTM）,voted BTM will be locked in Vapor wallet,you can redeem in 20 days
        </li>
        <li><img src={img_bycoin_en_3} alt=""/></li>
        <li>4、Veto:Vote->Veto->Select Node</li>
        <li>*When you cancel part of the votes, the rest part of the votes will be re-voted and locked for 20 days.</li>
        <li><img src={img_veto_en_1} alt=""/></li>
      </ul>

    <p>
      Bytom/Vapor Wallet for Desktop (update after the launch of Bystack mainnet) 
      <a target="_blank" href="https://github.com/Bytom/vapor/releases/tag/v1.0.0">【Vapor Download】</a>
      <a target="_blank" href="https://github.com/Bytom/bytom/releases">【Bytom Download】</a>
    </p>
    <ul>
      <li>1.Transfer BTM to sidechain:transfer to federation address through Bytom wallet; </li>
      <li><img src={img_wallet_en_1} alt=""/></li>
      <li>2.Switch to sidechain:Use Vapor to import Keystore;</li>
      <li><img src={img_wallet_en_2} alt=""/></li>
      <li><img src={img_wallet_en_3} alt=""/></li>
      <li>3.Vote:use Vapor wallet to vote;</li>
      <li><img src={img_wallet_en_4} alt=""/></li>
    </ul>
    
    <h1>Early bird voting</h1>
    <p>In order to incentive all the community to participate in voting and pick out Block Producers,We launched the 15-day early bird voting awards, which provide community members with generous early bird voting rewards and lower threshold voting tools. The votes of community members can determine which candidates become Block Producers, participate in community governance, and build the Bystack blockchain ecosystem. All members of the community are expected to participate in the voting process to create your own value and get benefits.</p>
    <h1>Voting time</h1>
    <p>Early bird voting: 7.05 15:00 - 7.20 00:00</p>
    <h1>How to vote</h1>
    <p><span>Bycoin App(v1.1.0) <a href="https://bycoin.im" target="_blank">【Download Now】</a></span></p>
    <p>Discovery->Bystack early bird voting->choose candidates to vote->vote successfully</p>
    <img src={img_01_en} alt=""/>
    <h1>Bytom Wallet for Desktop <Popover content={<Wallet isZh={false} />}><a>【Download Now】</a></Popover></h1>
    <p>Choose candidates to vote->Use sign-message command to sign the message->Submit signature information successfully</p>
    <img src={img_02_en} alt=""/>

    
    <h1>Voting reward</h1>
    <p>The annual reward of early bird voting is 25%, from  day1 to the end. Vote more and you will get more reward.</p>
    <h2>W=(x1+x2+…+xn)*R</h2>
    <h2 style={{color: '#808A95', fontSize: '12px', margin: '10px 0 20px 0'}}>W = ROI   x = Voted BTM   R = 25%*(1/365)</h2>
    <p>For example</p>
    <table>
      <thead>
        <tr>
          <td>Votes</td>
          <td>Days</td>
          <td>Rewards</td>
        </tr>
      </thead>
      <tbody>
        {
          rewards.map((item, index) => (
            <tr key={index}>
              <td>{item.count} BTM</td>
              <td>15</td>
              <td>{item.reward} BTM</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <br/>
    <p>Notice</p>
    <ul>
      <li>1.   In the early bird voting, Your balance must be  more than your total number of early bird votes.</li>
      <li>2.   Official votes should be more than your total number of early bird votes or you can't get early bird reward.</li>
      <li>3.   In official voting, your BTM will be locked in sidechain wallet and you can redeem in 20 days.</li>
      <li>4.   The deadline for official voting is August 1th,00:00, Early bird reward will be sent to sidechain wallet in 7days. The reward should be more than 1 BTM or we won't send.</li>
    </ul>
    <p></p>
    <p></p>
    <p>All rights reserved by Bytom Foundation</p>
  </>
);

const BirdRuleCont = ({language}) => {
  return language === 'zh' ?
    <ContentZh />
  : <ContentEn />;
}

function RuleCont() {
  return (
    <Wrap>
      <IntlContextConsumer>
        {
          ({language}) => (
            <BirdRuleCont language={language} />
          )
        }
      </IntlContextConsumer>
    </Wrap>
  );
}

export default injectIntl(RuleCont);
