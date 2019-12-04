import React, { Component } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';

import SEO from '../../../../components/Seo';

const Wrap = css.div`
  width: 100%;
 
`;
const Cont = css.div`
  padding: 0 16px 0 26px;
  h1{
    font-size: 16px;
    font-weight: 400;
    margin: 30px 0 12px;
    color: #1F2021;
    position: relative;
    &::before{
      content: ' ';
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background-color: #2869FA;
      top: 6px;
      left: -15px;
    }
  }
  p{
    font-size: 15px;
    font-weight: 300;
    line-height: 28px;
    color: #808A95;
  }
`;

const Zh = () => (
  <div>
    <h1>投票介绍</h1>
    <p>Vapor采用DPoS+BBFT共识机制，通过投票选举共识节点维护区块链网络。依据BTM得票数量自然排序，前10位为正式共识节点，11-42位为备选共识节点。正式共识节点负责运行节点，参与区块生产。正式共识节点退出，备选共识节点中依照得票数量晋升共识节点。</p>
    <h1>投票规则</h1>
    <p>1个BTM可以抵押成1票，抵押的BTM将在20天后变为可取消状态，用户可以取消投票并投给其他竞选节点。</p>
    <p style={{height: 10}}></p>
    <p>用户取消部分投票时，未取消部分投票会重新进行投票并锁定20天。</p>
  </div>
);
const En = () => (
  <div>
    <h1>Voting Introduction</h1>
    <p>Vapor adopts DPoS+BBFT consensus to protect blockchain network through Block Producer election. Top 10 will be Block Producers and No 11-42 will be Standby Block Producers by votes.Block Producers are responsible for running the nodes and participating in block production. If any Block Producer exits and  Standby Block Producer is promoted according to the number of votes.</p>
    <h1>Voting rules</h1>
    <p>1 BTM for 1 vote, staking BTM can be redeemed in 20 days and then you can cancel votes and vote for other candidates.</p>
    <p style={{height: 10}}></p>
    <p>When you cancel part of the votes, the rest part of the votes will be re-voted and locked for 20 days.</p>
  </div>
);

export default class Guide extends Component {
  render() {
    const lang = 'en';
    return (
      <Wrap>
        <SEO
          title="Voting rules" 
          
        />
        <Cont>
          {
            lang === 'zh' ? <Zh /> : <En />
          }
        </Cont>
      </Wrap>
    )
  }
}