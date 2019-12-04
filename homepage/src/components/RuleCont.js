import React from 'react';
import css from 'styled-components';
import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';


import img_01 from '../images/rules/01.png';
import img_02 from '../images/rules/02.png';
import img_03 from '../images/rules/03.png';
import img_04 from '../images/rules/04.png';

import img_1 from '../images/rules/en/01.png';
import img_2 from '../images/rules/en/02.png';
import img_3 from '../images/rules/en/03.png';
import img_4 from '../images/rules/en/04.png';
// import img_05 from '../images/rules/05.png';

const Wrap = css.div`
  &>p{
    font-size: 15px;
    color: #808A95;
    line-height: 28px;
    font-weight: 400;
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
  &>img{

  }
`;

const ContentZh = () => (
  <>
    <p>即日起我们正式启动节点招募，任何符合入选条件的主体都可以参与节点竞选，本文将详细介绍Bystack的节点竞选规则，帮助有志于成为Bystack节点的个人和机构更快、更好地了解Bystack的节点选举机制。</p>
    <h1>Bystack节点竞选时间规划</h1>
    <img src={img_01} alt=""/>
    <h1>Bystack 节点招募指引</h1>
    <ol>
      <li>
        	2019年6月4日启动节点招募，节点招募长期开放；
      </li>
      <li>
        	符合准入条件的候选者，可即刻提交候选人申请（准入条件可在下方查看）；
      </li>
      <li>
        	报名过程中同时进行筛选;
      </li>
      <li>
        候选人通过审核后，网站将公开候选人信息和实时余额，发布候选人排名动态结果，结束时按排名前后入选。详情请密切关注官网;
      </li>
      <li>
        实时余额只可增加，不能减少。一旦发现减少，将取消资格;
      </li>
      <li>
        	若有节点成功入选后自行退出，我们将按照顺序补录后续节点。
      </li>
    </ol>
    <h1>Bystack 节点准入条件</h1>
    <p>节点候选人应符合以下基本条件：</p>
    <ol>
      <li>
        参与节点招募的候选人须至少抵押100万BTM;
      </li>
      <li>
        拥有可运行节点的服务器和节点运维技术人员(具体软硬件要求请参考后文细则);
      </li>
      <li>
      	拥有一定规模的社区用户优先考虑；
      </li>
      <li>
        对比原生态做过贡献者优先考虑；
      </li>
    </ol>
    <h1>节点软硬件和网络环境要求</h1>
    <img src={img_02} alt=""/>
    <h1>参与节点招募的主要角色</h1>
    <img src={img_03} alt=""/>
    <ul>
      <li>
        ·	投票委托人
        <ul>
          <li>定义：持有任何数量BTM均是投票委托人。</li>
          <li>权利与义务：通过投票参与Bystack共识节点选举，并获得分红奖励。</li>
        </ul>
      </li>
      
      <li>
        ·	竞选节点
        <ul>
          <li>定义：提交竞选节点申请表，满足基本要求并得到比原链基金会认可，即可参与共识节点竞选。</li>
          <li>权利与义务：对Bystack网络贡献开发和宣传资源，并获得社区投票。</li>
        </ul>
      </li>
      <li>
        ·	共识节点：
        <ul>
          <li>定义：节点角色的产生将依据BTM得票数量自然排序。前10位为正式共识节点，11-42位为备选共识节点。</li>
          <li>权利义务：正式共识节点负责运行节点，参与区块生产。正式共识节点退出，备选共识节点中依照得票数量晋升共识节点。</li>
        </ul>
      </li>
    </ul>
    <h1>Bystack节点奖励</h1>
      <ul>
        <li>
          ·	节点的收益主要来自出块奖励和转账手续费，其中出块奖励金额由比原链基金会决定。
        </li>
        <li>
          ·	节点运行第一年比原链基金会将捐赠1000万个BTM注入系统资金池作为节点出块奖励。根据侧链运行综合情况在每年5月确定次年BTM捐赠数量。
        </li>
        <li>
          ·	随着侧链生态不断成长，链上交易也将更加频繁，出块的手续费奖励也将持续上涨。
        </li>
        <li>
          ·	节点每年抵押收益预计在10%~60%。
        </li>
      </ul>
      <p>比原链基金会捐赠的BTM将分配给正式共识节点和备选共识节点。</p>
      <img src={img_04} alt=""/>
      <p>收益举例：</p>
      <p>假设正式节点A得票排名第5位，第一年该节点的区块生产奖励约为：</p>
      <h2>(10,000,000× 60.98%)/10 = 609,800BTM</h2>

      <h1>Bystack节点招募FAQ</h1>
      <ol>
        <li>
          <p>问题：正式共识节点和备选共识节点的收益是如何确定的？</p>
          <span>答: 比原链基金第一年会提供1000万btm。10个正式共识节点一年一共会有超600万BTM的奖励，每个正式共识节点一年会有60万的btm奖励，正式共识节点第1-10个具有相同的出块概率，收益相同。备选的32个共识节点一年一共会有近400万btm奖励，备选共识节点按获得的投票比例分配备选节点奖励。</span>
        </li>
        <li>
          <p>问题：共识节点多长时间能拿到奖励？</p>
          <span>答：正式共识节点会在出块后，实时收到节点奖励；备选共识节点收到奖励不会超过一天。</span>
        </li>
        <li>
          <p>问题：共识节点多长时间统计一次投票，更新一次排名情况？</p>
          <span>答：每天更新排名。</span>
        </li>
        <li>
          <p>问题：投票委托人还有分红奖励，这部分奖励会是多少呢？</p>
          <span>答：给投票人的分红奖励由节点自行设定。</span>
        </li>
        <li>
          <p>问题：报名时是否需要质押BTM，质押的BTM如何赎回。是否有赎回流程？</p>
          <span>答：报名节点不需要质押，只需要提供自己拥有的btm地址，地址持有100万以上btm就行。后续侧链上线前，会提供赎回的操作说明。</span>
        </li>
        <li>
          <p>问题：有投票规则吗？那么现在是否能够知道投票的规则？比如一票多少投？多久可以改投？投的票会不会同时冻结？</p>
          <span>答：我们会在7月5日开启投票，到时会提供app方便投票委托人参与，我们是一票一投，投票后btm会被锁定，解锁需要20天的时间，解锁后可继续投票。</span>
        </li>
        <li>
          <p>问题：持有符合要求数量的BTM，但技术实力相对薄弱，是否会提供配套，做简单技术部署就能参与竞选节点？</p>
          <span>答：巴比特旗下matpool矿池会为节点方提供托管的技术服务，方便想参与竞选节点的社区用户，会在7月5日前提供托管技术服务。</span>
        </li>
        <li>
          <p>问题：节点收益的设定原则，第二年或者以后会提供多少btm作为侧链奖励，依据什么？</p>
          <span>答：节点收益设定原则主要依据两点，一是提供尽量丰厚的收益回报给节点方和委托人，吸引更多人参与侧链建设，壮大侧链生态；二是不影响比原链主链pow矿工收益。</span>
        </li>
        <li>
          <p>问题：Bystack推荐的配置比较高，是什么原因？</p>
          <span>答：这个配置是推荐配置，不是最低配置。侧链上线初期可能不会用到这么高的配置，但随着侧链生态的发展，侧链数据的增多，配置会需要达到我们的推荐配置才能稳定出块。</span>
        </li>
        <li>
          <p>问题：看白皮书，侧链支持共识插拔，那10 个共识节点要如何支持所有侧链的出块？</p>
          <span>答：我们采用的是BBFT模式，10个正式共识节点轮流出块，三分之一以内的正式共识节点出问题，侧链依然可以正常运行。</span>
        </li>
        <li>
          <p>问题：节点对CPU主频的要求是什么？</p>
          <span>答：建议CPU类型：Intel Xeon E5-2682 v4（Broadwell）或Platinum 8163（Skylake）2.5 GHz。</span>
        </li>
      </ol>
  </>
);
const ContentEn = () => (
  <>
    <p>We officially launch the Block Producer recruitment and anyone meets the requirements can participate in the Block Producer election. This paper will introduce the Block Producer election rules of Bystack in detail, so as to help individuals and institutions who are willing to be the Block Producer of Bystack.</p>
    <h1>Bystack Block Producer campaign </h1>
    <img src={img_1} alt=""/>
    <h1>Bystack Block Producer  recruitment guidance</h1>
    <ol>
      <li>
        Block Producer recruitment will be launched on June 5, 2019, which will be open for long-term;
      </li>
      <li>
        Candidates who meet the requirements can submit their applications immediately (  conditions can be viewed below);
      </li>
      <li>
      Filtering during the registration process;
      </li>
      <li>
      After the candidate passes the audit, the website will publish the candidate information and real-time staking balance as well as the dynamic results of the candidate ranking. In the end, the candidates will be selected according to the ranking. For details, please pay close attention to the official website;
      </li>
      <li>
      Real-time staking balance can only be increased. Any reduction found will be immediately disqualified;
      </li>
      <li>
      If any Block Producer exits after being successfully selected, we will make up the subsequent  Block Producer according to the sequence;
      </li>
    </ol>
    <h1>Bystack Block Producer conditions</h1>
    <p>Node candidates should meet the following basic conditions:</p>
    <ol>
      <li>
      Candidates participating in Block Producer recruitment must stake at least 1,000,000 BTM;
      </li>
      <li>
      You should have your own servers, Block Producer operation and maintenance technologies that can run Block Producers (please refer to the detailed rules below for specific software and hardware requirements);
      </li>
      <li>
      A certain scale of community users will be priority;
      </li>
      <li>
      Those who have contributed a lot of Bytom ecosystem will be priority;
      </li>
    </ol>
    <h1>Node hardware, software, and network environment requirements</h1>
    <img src={img_2} alt=""/>
    <h1>Three roles in Block Producer Recruitment</h1>
    <img src={img_3} alt=""/>
    <ul>
      <li>
        ·	Voter
        <ul>
          <li>Definition:  BTM holders with any amount are voters.</li>
          <li>Rights and obligations: Participate in Bystack Block Producer election by voting and get bonus.</li>
        </ul>
      </li>
      
      <li>
        ·	Candidate Node
        <ul>
          <li>Definition: Submit the application form of Block Producer, meet the basic requirements and be recognized by Bytom Foundation, then you can  participate in the Block Producer election.</li>
          <li>Rights and obligations: Contribute development and promotion resources to the Bystack network and get votes from the community .</li>
        </ul>
      </li>
      <li>
        ·	Block Producer
        <ul>
          <li>Definition: Block Producers are generated in a natural order based on the number of votes received by BTM. The top 10  are Block Producers, and 11-42  are Standby Block Producers.</li>
          <li>Rights and obligations: the Block Producers are responsible for running the nodes and participating in block production. If any Block Producer exits and the Standby Block Producer is promoted according to the number of votes.</li>
        </ul>
      </li>
    </ul>
    <h1>Bystack Block Producer reward</h1>
      <ul>
        <li>
          ·	The profits of Block Producers are mainly from Block Production reward and transaction fees and the Block Production reward are determined by Bytom Foundation.
        </li>
        <li>
          ·	First year, Bytom Foundation will donate 10,000,000 BTM to the capital pool as the Block Production reward. According to the comprehensive situation of sidechain operation, the amount of BTM donation in the following year will be determined in every May.
        </li>
        <li>
          ·	The reward from transaction fee will increase continuously as the ecosystem of sidechain will develop continuously and the on-chain transaction will be more frequent.
        </li>
        <li>
          ·	ROI for Block Producers of every year is about 10%~60%.
        </li>
      </ul>
      <p>BTM donated by Bytom Foudnation will be distributed to Block Producers and Standby Block Producers</p>
      <img src={img_4} alt=""/>
      <p>Examples:</p>
      <p>Block Producer A ranks no.5  so its Block Production reward is approximate:</p>
      <h2>(10,000,000× 60.98%)/10 = 609,800BTM</h2>

      <h1>Bystack Block Producer recruitment FAQ</h1>
      <ol>
        <li>
          <p>Q：What's the rewards of Block Producers and Standby Block Producers?</p>
          <span>A: Bytom Foundation will donate 10million BTM in the first year. 10 Block Producers will be rewarded more than 6 million BTM in total and every Block Producer will be rewarded 600K BTM. The rewards of Block Producers are same. 32 Standby Block Producers will be rewarded about 4 million in total for one year and their rewards are determined by voting proportion.</span>
        </li>
        <li>
          <p>Q:When can Block Producers get the reward?</p>
          <span>A:After Block Producers produced a block and they will get Block Production Reward; Standby Block Producers will get rewards within one day.</span>
        </li>
        <li>
          <p>Q: How often does Bystack statistic votes and update the ranking?</p>
          <span>A: Everyday.</span>
        </li>
        <li>
          <p>Q: Voters can get the voting bonus, what's the bonus?</p>
          <span>A: It's determined by Block Producers.</span>
        </li>
        <li>
          <p>Q: Should I stake BTM when I apply, How can I redeem the staking BTM, is there a redemption flow?</p>
          <span>A: You don't need to stake when you apply and provide your own BTM address. We will provide redemption guidance before the launch of the sidechain.</span>
        </li>
        <li>
          <p>Q: Is there any voting rule? Can we know the voting rules now? How many candidates can 1 BTM vote? When can I vote to someone else again? Will my BTM be frozen?</p>
          <span>A: We will launch the vote on July 5th and we will provide app for votes.One BTM, one vote. BTM will be locked after voting and your BTM will be unlocked in 20 days, then you can vote for others.</span>
        </li>
        <li>
          <p>Q: I have the qualified amount of BTM but my technical skills are weak and will you provide supporting facilities then I can participate in Block Producer election after simple deployment?</p>
          <span>Matpool under the umbrella of 8BTC will provide technical service for Block Producers before July 5th.</span>
        </li>
        <li>
          <p>Q: How much will the sidechain reward be after the first year? What do you refer to?</p>
          <span>A: The rewards of Block Producers refer to 2 points
            <p>1. Provide rewards to Block Producers and voters as much as possible, attract more people to participate in the sidechain ecosystem.</p>
            <p>2. It shouldn't influence the profits of POW miners.</p>
          </span>
        </li>
        <li>
          <p>Q:  what the recommended configuration of Bystack is so high?</p>
          <span>A: It's recommended configuration, not the minimum configuration. We won't require such a high configuration at the initial stage of the sidechain, but with the development of the sidechain ecosystem and the increase of the sidechain data, the configuration will need to meet our recommended configuration to produce block stably.</span>
        </li>
        <li>
          <p>Q: As mentioned in the whitepaper, sidechain supports pluggable consensus, how can 10 Block Producers support the Block Production of all the sidechain?</p>
          <span>A: We adopted BBFT and 10 Producers produce a block in turn. If less than a third of the Block Producers fail, sidechain can still run normally.</span>
        </li>
        <li>
          <p>Q: what is the requirement of node CPU for main frequency?</p>
          <span>A: recommended CPU type: Intel Xeon e5-2682 v4 (Broadwell) or Platinum 8163 (Skylake) 2.5 GHz.</span>
        </li>
      </ol>
  </>
);

const RuleWrap = ({language}) => {
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
            <RuleWrap language={language} />
          )
        }
      </IntlContextConsumer>
    </Wrap>
  );
}

export default injectIntl(RuleCont);
