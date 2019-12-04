import React, { Component } from 'react';
import css, { keyframes } from 'styled-components';
import { FormattedMessage as Msg, navigate, injectIntl, Link, IntlContextConsumer } from 'gatsby-plugin-intl';   // FormattedMessage as Msg,
import { Modal, Button, Input, Icon } from 'antd';
import Badge from '../../components/Badge';
import ajax from 'axios';

import Layout from '../../components/layout/Layout';
import SEO from '../../components/Seo';
import PageTitle from '../../components/PageTitle';
import VoteRule from '../../components/VoteRules';
import Empty from '../../components/Empty';

import _conf from '../../config/conf';

import icon_speaker from '../../images/icon/speaker.png';
import icon_search from '../../images/icon/search.png';
import icon_vote from '../../images/icon/vote.png';
import img_bycoin from '../../images/modal_bycoin.png';

const Cont = css.div`
  width: 100%;
  background-color: #fff;
`;
const BtnPanel = css.div`
  border-top: 1px solid #DEDEDE;
  margin-top: 30px;
  padding: 30px 0 20px 0;
  text-align: center;
`;
const TableLight = css.table`
  font-size: 14px;
  td{
    padding: 8px 0;
    &:last-child p{
      margin: 0;
      display: -webkit-box;   
      overflow: hidden;   
      text-overflow: ellipsis;
      -webkit-line-clamp: 1; 
      -webkit-box-orient: vertical;
      padding-right: 20px;
    }
  }
  tr>td:first-child{
    color: #808A95;
    width: 95px;
  }
  @media (max-width: 640px) {
    p{
      word-break: break-all;
    }
    &:last-child p{
      -webkit-line-clamp: 3; 
      padding-right: 0;
    }
  }
`;
const Head = css.div`
  width: 100%;
  height: 72px;
  position: relative;
  box-sizing: content-box;
  border-bottom: 12px solid #F7F7F7;
`;
const noticeAnimateIn = keyframes`
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  40% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  50% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
  90% {
    transform: rotateX(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
`;
const noticeAnimateOut = keyframes`
  0% {
    transform: rotateX(-90deg);
  }
  40% {
    transform: rotateX(-90deg);
    opacity: 1;
  }
  50% {
    transform: rotateX(0deg);
    opacity: 0;
  }
  90% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(0deg);
    opacity: 0;
  }
`;
const VoteWrap = css.div`
  h1{
    text-align: center;
    color: #1F2021;
    font-size: 20px;
    margin: 10px 0 20px 0;
  }
  &>span:first-of-type{
    display: block;
    text-align: center;
    font-size: 13px;
    color: #808A95;
    margin-bottom: 30px;
  }
  .ant-tabs-nav-wrap{
    text-align: center;
  }
  &>p{
    line-height: 28px;
    padding: 30px 0 20px 0;
  }
`;
const Deadline = css.div`
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  letter-spacing: 0;
  background-color: #fff;
  position: absolute;
  top: -16px;
  left: 32px;
  right: 32px;
  box-shadow: 0px 2px 16px rgba(0,0,0,0.08);
  h1{
    display: inline-block;
    color: #000;
    font-size: 12px;
    font-weight: 400;
    margin-right: 8px;
    margin-bottom: 0;
  }
  img{
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
  span{
    color: #8A8A8A;
  }
  // &>div{
  //   transform-origin: center bottom;
  //   position: absolute;
  //   top: 0px;
  //   width: 100%;
  // }
  // &>div:first-child{
  //   opacity: 0;
  //   animation: 6s ${noticeAnimateIn} ease-out infinite;
  // }
  // &>div:last-child{
  //   animation: 6s 2.4s ${noticeAnimateIn} ease-out infinite;
  // }
`;
const Node = css.div`
  display: flex;
  padding: 12px 0;
  margin: 0 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #F0F0F0;
  &>div{
    display: flex;
    flex: 1;
    margin: 0 18px;
    align-items: center;
    img{
      width: 46px;
      height: 46px;
      border: 0.5px solid #d5d5d5;
      border-radius: 4px;
      display: inline-block;
    }
    div{
      display: inline-block;
      margin-left: 12px;
      h1{
        font-size: 15px;
        color: #101010;
        font-weight: 500;
        margin: 0;
      }
      p{
        font-size: 12px;
        color: #8A8A8A;
        margin: 10px 0 0 0;
      }
    }
  }
`;
const VoteDes = css.div`
  ul{
    padding: 20px 0;
    font-size: 12px;
  }
`;
const Loading = css.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
`;
const Toolbar = css.div`
  display: flex;
  padding: 10px 16px;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  a{
    margin: 0 7px;
    color: #808A95;
  }
  input{
    width: 170px;
    background-color: #f7f7f7;
    border-radius: 30px;
    border: none;
  }
`;

class Vote extends Component {

  state = {
    list: [],
    voted: [],   // 投票记录
    data: {
      name: ''
    },
    loading: true,
    isVoting: false,
    curVote: '',
    visibleVoteMobile: false,
    reward: '', // 预期收益
    voteMore: false, // 是否追加投票
    vote_amount: 0,  // 总票数
  }

  componentDidCatch(error) {
    console.log(error);
  }

  componentDidMount() {
    this.getBytomInfo();
  }

  getBytomInfo = () => {
    const _this = this;
    const isEnable = !!(window.bytom && window.bytom.default_account);
    try {
      if(!isEnable){
        window.bytom.enable(true);
      } else {
        _this.info = window.bytom.default_account;
        localStorage.setItem('ADDR', _this.info.address);
        _this.fetchData();
        return;
      }
    } catch (error) {
      console.log(error);
    }
    _this.timer = setTimeout(() => {
      if(!isEnable){
        _this.getBytomInfo();
      } else {
        clearTimeout(_this.timer);
        for(let i = 0; i < 100; i++){
          clearTimeout(i);
        }
        _this.info = window.bytom.default_account;
        localStorage.setItem('ADDR', _this.info.address);
        this.fetchData();
      }
    }, 2800);
  }

  // 打开投票弹窗
  handleVote = (e, data) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      visibleVoteMobile: true,
      data,
      // curVote: data.vote_count || 0,
    });
  }

  handleSearch = (e) => {
    let { list } = this.state;
    const keyword = e.target.value || '';
    if(!this.backupList){
      this.backupList = list;
    }
    let dataSrc = JSON.stringify(this.backupList);
    let data = JSON.parse(dataSrc);
    if(keyword){
      data = data.filter(item => (item.name || '').toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    } else {
      data = this.backupList;
    }
    this.setState({ list: data });
  }

  fetchData = () => {
    const address = (this.info && this.info.address) || localStorage.getItem('ADDR');
    try {
      this.setState({ loading: true }); 
      ajax.post(_conf.recordAll, { address }).then(res => {
        let list = (res.data.data.supernode || []);
        list = list.sort((a, b) => (b.percent - a.percent));
        let vote_amount = 0;
        list.forEach(item => vote_amount += item.all_vote_count);
        this.setState({
          list,
          vote_amount,
          loading: false,
        });
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  handleVoteChange = (e) => {
    this.setState({
      curVote: e.target.value,
    })
  }

  handleVoteSubmit = (uuid, name) => {
    const { language = 'zh' } = this.props;
    const _this = this;
    const { curVote, list } = this.state;
    let balance = 0;
    let votedCount = 0;
    const clientInfo = this.info;
    (clientInfo.balance || clientInfo.balances || []).forEach(item => {
      if(item.asset === _conf.btm_asset_id){
        balance = +item.balance / (10**8);
      }
    });
    list.forEach(item => {
      votedCount += +item.my_vote_count;
    });
    
    const signParams = {
      address: clientInfo.address,
      message: `Bystack_Vote`
    }
    if(!curVote) {
      this.alert(_conf.msgs[language].count);
      return;
    }
    if(+curVote > (balance - votedCount)){
      this.alert(_conf.msgs[language].balance);
      return;
    }
    if(+curVote < 1){
      window.bycoin.callAPI('native.toastInfo', _conf.msgs[language].one);
      return;
    }
    this.setState({ 
      visibleVoteMobile: false, 
      isVoting: false,
    });
    window.bytom.sign_message(signParams).then(function (resp) {
      console.log('resp...:', resp);
      _this.vote(clientInfo, resp.signature, uuid);
    }).catch(function (err){
      console.log(err);
      this.setState({ isVoting: false });
    })
  }

  alert = (msg) => {
    try {
      window.bycoin.callAPI('native.toastInfo', msg);
    } catch (error) {
      console.log(error);
    }
  }

  vote = (clientInfo, signature, uuid) => {
    const { language = 'zh' } = this.props; 
    const { curVote } = this.state;
    console.log(clientInfo);
    const data = {
      sign: signature,
      address: clientInfo.address,
      // address: 'bm1q3yt265592czgh96r0uz63ta8fq40uzu5a8c2h0',
      public_key: clientInfo.rootXPub,
      msg: 'Bystack_Vote',
      vote_count: +curVote,
      uuid,
    };
    ajax.post(_conf.vote, data).then(data => {
      console.log(data.data)
      if(data.data.status === 'success') {
        this.fetchData();
        this.alert(_conf.msgs[language].success);
        this.setState({
          isVoting: false,
          // visibleVoteMobile: false,
          visibleVote: false,
          reward: data.data.reward,
        });
        navigate('/record');
      } else {
        this.alert(_conf.msgs[language].fail);
        this.handleClose();
      }
    }).catch(error => {
      console.log(error);
      this.alert(_conf.msgs[language].again);
      this.handleClose();
    });
  }

  handleClose = () => {
    this.setState({ 
      visibleVoteMobile: false, 
      isVoting: false,
      voteMore: false,
      curVote: '',
    });
    // this.fetchData();
  }

  render() {

    const { isVoting, visibleVoteMobile, list, loading, data, vote_amount, curVote, voteMore } = this.state;
    const { language = 'zh' } = this.props;
    const isEn = language === 'en';

    return (
      <Layout homeDisable ftStyle={{marginTop: 0}}>
        <SEO title="Bystack"  />
        <PageTitle
          title={<p style={{marginBottom: 26}}><Msg id="vote_mobile_title" /></p>}
          imgTitle
          // subTitle={<Msg id="form_title" />}
        />
        <Cont>
          <Head>
            <Deadline>
              <div>
                <img src={icon_speaker} alt=""/>
                <h1><Msg id="vote_mobile_end" /></h1>
                <span>{isEn ? '07.20 00:00' : '7月20日 00:00'}</span>
              </div>
              {/* <div>
                <img src={icon_vote} alt=""/>
                <h1>{ isEn ? 'All Votes: ' : '早鸟投票全网总计: '}</h1>
                {(Math.round(vote_amount) + '').replace(/\d{1,3}(?=(\d{3})+$)/g, str => str + ',')} BTM
              </div> */}
            </Deadline>
            <Toolbar>
              <div>
                
                <Link to={'/node/record'}><Msg id="vote_mobile_record" /></Link>
                <Link to={'/node/rules'}><Msg id="vote_mobile_rule" /></Link>
              </div>
              <Link to={'/node/vote_reward'}>投票收益</Link>
              {/* <Input
                prefix={<img width="14" src={icon_search} />}
                style={{width: 170, lineHeight: '30px'}}
                placeholder={_conf.msgs[language].name}
                onPressEnter={this.handleSearch}
                onChange={this.handleSearch}
              /> */}
            </Toolbar>
          </Head>
          
          {
            loading ? <Loading><Icon type="loading" spin /></Loading> : null
          }
          {
            !list.length && !loading && <Empty />
          }
          {
            list.map((item, index) => (
              <Link key={index} to={`/node/node_detail?id=${item.uuid}`}>
                <Node>
                  <Badge index={index + 1} disabled={!item.all_vote_count} />
                  <div>
                    <img src={_conf.imgage_host + item.reserved_1} alt=""/>
                    <div>
                      <h1>{item[isEn ? 'name_en' : 'name']}</h1>
                      <p>{(item.all_vote_count || 0).toFixed(0)} BTM ({(`${(+item.percent * 100 || 0).toFixed(2)}%`)})</p>
                    </div>
                  </div>
                  {
                    <Button style={{width: 72}} onClick={(e) => this.handleVote(e, item)} type="primary" ghost><Msg id="vote_mobile_vote" /></Button> 
                  }
                </Node>
              </Link>
            ))
          }
        </Cont>
        <Modal
          visible={visibleVoteMobile}
          footer={null}
          style={{bottom: 0,}}
          onCancel={this.handleClose}
        >
          <VoteWrap>
            <h1><Msg id="modal_web_title" /></h1>
            {/* <span><Msg id="modal_web_des" /></span> */}
            <img src={img_bycoin} alt=""/>
            <p><Msg id="modal_vote_tips" /></p>
            <BtnPanel>
              <Button style={{
                  backgroundColor: '#035BD4',
                  width: 174,
                  height: 50,
                  lineHeight: '50px',
                }} type="primary" size="large"><Link to="/node/rules"><Msg id="modal_web_submit" /></Link></Button>
            </BtnPanel>
          </VoteWrap>
        </Modal>
      </Layout>
    );
  }
};


const LangWrap = () => (
  <IntlContextConsumer>
    {
      ({language}) => <Vote language={language} />
    }
  </IntlContextConsumer>
);

export default injectIntl(LangWrap);