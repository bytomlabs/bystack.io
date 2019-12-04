import React, { Component } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, Link } from 'gatsby-plugin-intl';
import { Table, Modal, Button, Tabs } from 'antd';
import Badge from '../components/Badge';
import Wallet from '../components/Wallet';
import ajax from 'axios';

import BlockTitle from '../components/BlockTitle';

import _conf from '../config/conf';

import img_bycoin from '../images/modal_bycoin.png';
import icon_vote from '../images/icon/vote.png';

const Wrap = css.div`
  width: 100%;
  background-color: #080808;
  padding-bottom: 60px;
  margin-top: 15px;
  td{
    color: #fff;
  }
  .ant-badge-count{
    box-shadow: none;
  }
  .tableOfficial, .tableMobile{
    background-color: #080808;
    td:first-child, th:first-child{
      padding-left: 50px;
    }
    td{
      background-color: #191919;
      font-weight: 300 !important;
      a{
        font-weight: 300 !important;
      }
      img{
        width: 36px;
        height: 36px;
        margin-right: 16px;
        border-radius: 4px;
      }
    }
    .ant-table-tbody > tr > td{
      border-color: #2B2B2B;
    }
    .ant-table-thead > tr > th{
      background-color: #1F1F1F !important;
      color: rgba(255, 255, 255, 0.5) !important;
      border-color: #2B2B2B;
      font-weight: 300 !important;
    }
  }
  .tableOfficial{
    td > a{
      color: #fff;
    }
  }
  .tableMobile{
    td:nth-child(6), td:nth-child(7){
      text-align: right;
    }
    th:nth-child(6), th:nth-child(7){
      text-align: right;
    }
    td:nth-child(2), td:nth-child(3){
      &>a{
        display: flex;
        div{
          color: #fff;
        }
        align-items: center;
        &>div:first-child{
          margin-right: 10px;
        }
      }
    }
    td:nth-child(2){
      display: none;
    }
    th:nth-child(2){
      display: none;
    }
  }
  tr:hover td:nth-child(3){
    div{
      color: #0A72FF;
    }
  }
  @media (max-width: 640px) {
    .tableOfficial{
      td:nth-child(3), td:nth-child(4), td:nth-child(6), td:nth-child(7){
        display: none;
      }
      th:nth-child(3), th:nth-child(4), th:nth-child(6), th:nth-child(7){
        display: none;
      }
      td:first-child, th:first-child{
        padding-left: 10px;
      }
    }
    .tableMobile{
      width: 100%;
      td:nth-child(2){
        display: table-cell;
      }
      th:nth-child(2){
        display: table-cell;
      }
      td:nth-child(3), td:nth-child(5), td:nth-child(6), td:nth-child(4), td:nth-child(7){
        display: none;
      }
      th:nth-child(3), th:nth-child(5), th:nth-child(6), th:nth-child(4), th:nth-child(7){
        display: none;
      }
      td:first-child, th:first-child{
        padding-left: 10px;
      }
      td{
        p{
          margin: 0;
        }
        padding: 12px 10px;
        img{
          width: 46px;
          height: 46px;
          margin-right: 10px;
          border-radius: 2px;
        }
      }
    }
  }
`;
const Cont = css.div`
  width: 1110px;
  margin: 0 auto;
  .ant-tabs-tab{
    color: #fff;
  }
  .ant-tabs-top-content{
    padding-top: 20px;
  }
  .ant-tabs-nav .ant-tabs-tab-active{
    color: #fff;
  }
  .ant-tabs-bar{
    border-color: #191919;
  }
  .ant-tabs{
    background: #191919;
  }
  .ant-tabs-nav-scroll{
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Header = css.div`
  background-color: #080808;
  padding: 30px 0;
`;
const LinkButton = css(Link)`
  width: 80px;
  height: 34px;
  border: 1px solid #fff;
  color: #fff !important;
  text-align: center;
  line-height: 34px;
  border-radius: 50px;
  display: inline-block;
  box-sizing: border-box;
  &:hover{
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(60,123,209,1) 100%);
    border: 1px solid rgba(0,0,0,0);
    color: #fff;
  }
`;
const Vote = css.div`
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
const Rules = css.ul`
  background-color: #F8F8F8;
  padding: 20px;
  padding-left: 40px;
  font-size: 13px;
  line-height: 22px;
  margin-top: 20px;
  li{
    color: #808A95;
    padding-left: 10px;
  }
`;
const BtnPanel = css.div`
  border-top: 1px solid #DEDEDE;
  margin-top: 30px;
  padding: 30px 0 20px 0;
  text-align: center;
`;
const VoteAmount = css.div`
  width: 100%;
  height: 40px;
  color: #fff;
  margin-top: 10px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  font-weight: normal;
  background: linear-gradient(225deg, rgba(145,211,3,1) 0%,rgba(74,162,158,1) 52%,rgba(0,69,255,1) 100%);
  img{
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  
`;
export default class NodeList extends Component {

  state = {
    list: [],
    officialList: {},
    nodeDetail: {},
    visibleVote: false,
    data: {},
    vote_amount: 0,     // 总票数
    curActiveKey: 'official',   // early
    loading: true,
    loadingFormal: true,
  }

  componentDidMount() {
    this.fetchData();
    this.fetchOfficialVotes();
  }

  fetchData = () => {
    try {
      this.setState({ loading: true });
      ajax.get(_conf.node_list).then(res => {
        console.log(res.data);
        const list = (res.data.data || []);
        const nodeDetail = {};
        let vote_amount = 0;
        list.sort((a, b) => +b.vote_count - +a.vote_count);
        list.forEach(item => {
          vote_amount += item.vote_count;
          item.public_key && (nodeDetail[item.public_key] = item);
        });
        this.setState({
          list,
          vote_amount,
          nodeDetail,
          loading: false,
        });
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  fetchOfficialVotes = () => {
    try {
      this.setState({ loadingFormal: true });
      ajax.get('https://vapor.blockmeta.com/api/v1/nodes?page=1&limit=200').then(res => {
        const list = res.data.data || [];
        this.setState({
          officialList: list,
          loadingFormal: false,
        });
      })
    } catch (error) {
      console.log(error);
      this.setState({ loadingFormal: false });
    }
  }

  handleTabChange = (key) => {
    this.setState({
      curActiveKey: key,
    });
  }

  handleVote = () => {
    this.setState({ 
      visibleVote: true
     });
  }
  
  render() {
    const { list, officialList, visibleVote, vote_amount, curActiveKey, nodeDetail, loading, loadingFormal } = this.state;
    const { lang } = this.props;
    const isZh = lang === 'zh';
    const defaultLogo = '/uploads/1563260790.2127788logo.png';
    if(loading || loadingFormal) return (<span></span>)
    const getDetail = (key, attr, isZh = true) => {
      try {
        return nodeDetail[key][isZh ? attr : `${attr}_en`];
      } catch (error) {
        return '';
      }
    }
    const vote_amount_all = curActiveKey === 'early' ? vote_amount : officialList.vote_total_count / 10**8;
    const officialColumns = [
      {
        title: '排名',
        render: (text, item, index) => <Badge type={item.type} index={index + 1} />
      },
      {
        title: <Msg id="node_list_node" />,
        key: 'node_mobile',
        width: 300,
        render: (text, item) => (
          <>
            <a target="_blank" style={{color: '#fff'}} href={`https://vapor.blockmeta.com/node/${item.pub_key}`}>
              <div><img width="50" height="50" src={_conf.imgage_host + (getDetail(item.pub_key, 'reserved_1') || defaultLogo)} /></div>
              <div>
                {item[`name${isZh ? '' : '_en'}`] || '---'}
                <p style={{color: '#8A8A8A', marginTop: 10, fontSize: '12px'}}>{Math.round((item.vote_count || 0) / 10**8) + ' BTM'} ({`${(item.vote_count / officialList.vote_total_count * 100).toFixed(2)}%` || '0%'})</p>
              </div>
            </a>
          </>
        )
      },
      {
        title: <Msg id="node_list_node" />,
        key: 'node',
        render: (text, item) => (
          <>
            <a target="_blank" style={{color: '#fff'}} href={`https://vapor.blockmeta.com/node/${item.pub_key}`}>
              <div><img width="50" height="50" src={_conf.imgage_host + (getDetail(item.pub_key, 'reserved_1') || defaultLogo)} /></div>
              <div>{item[`name${isZh ? '' : '_en'}`] || '---'}</div>
            </a>
          </>
        )
      },
      {
        title: <Msg id="node_list_location" />,
        render: (text, item) => item[`location${isZh ? '' : '_en'}`] || '---'
      },
      {
        title: <Msg id="node_list_type" />,
        key: 'type',
        render: (text, item) => getDetail(item.pub_key, 'node_type', isZh)
      },
      {
        title: <Msg id="node_list_votes" />,
        render: (text, item) => (item.vote_count / (10**8)).toFixed(0) + ' BTM'
      },
      {
        title: <Msg id="node_list_percent" />,
        render: (text, item) => (item.vote_count / officialList.vote_total_count * 100).toFixed(2) + ' %'
      },
      {
        title: '',
        render: (text, item) => <LinkButton type="primary" ghost onClick={() => this.handleVote(item)}><Msg id="node_list_btn_vote" /></LinkButton>
      },
    ];
    // early bird
    const columns = [
      {
        title: <Msg id="node_list_rank" />,
        width: 100,
        render: (text, item, index) => <Badge index={index + 1} disabled={!item.vote_count} />
      },
      {
        title: <Msg id="node_list_node" />,
        key: 'node_mobile',
        width: 300,
        render: (text, item) => (
          <>
            <Link style={{color: '#fff'}} to={`/node_detail?id=${item.uuid}`}>
              <div><img width="50" height="50" src={_conf.imgage_host + item.reserved_1} /></div>
              <div>
                {item[`name${isZh ? '' : '_en'}`]}
                <p style={{color: '#8A8A8A', marginTop: 10, fontSize: '12px'}}>{Math.round(item.vote_count || 0) + ' BTM'} ({`${(+item.percent * 100 || 0).toFixed(2)}%` || '0%'})</p>
              </div>
            </Link>
          </>
        )
      },
      {
        title: <Msg id="node_list_node" />,
        key: 'node',
        render: (text, item) => (
          <>
            <Link style={{color: '#fff'}} to={`/node_detail?id=${item.uuid}`}>
              <div><img width="50" height="50" src={_conf.imgage_host + item.reserved_1} /></div>
              <div>{item[`name${isZh ? '' : '_en'}`]}</div>
            </Link>
          </>
        )
      },
      {
        title: <Msg id="node_list_location" />,
        key: 'location',
        render: (text, item) => item[`location${isZh ? '' : '_en'}`]
      },
      {
        title: <Msg id="node_list_type" />,
        key: 'type',
        render: (text, item) => item[`node_type${isZh ? '' : '_en'}`]
      },
      {
        title: <Msg id="node_list_votes" />,
        key: 'count',
        render: (text, item) => <span>{Math.round(item.vote_count || 0)} BTM</span>
      },
      {
        title: <Msg id="node_list_percent" />,
        render: (text, item) => `${(+item.percent * 100 || 0).toFixed(2)}%` || '0%'
      },
      {
        title: '',
        render: (text, item) => <LinkButton type="primary" ghost onClick={() => this.handleVote(item)}><Msg id="node_list_btn_vote" /></LinkButton>
      },
    ];
    return (
      <Wrap>
        <Cont>
          <Header>
            {/* <BlockTitle title={<Msg id="node_list_title" />} /> */}
            <VoteAmount>
              <img src={icon_vote} alt=""/>
              { !isZh ? 'All Votes: ' : curActiveKey === 'early' ? '早鸟投票总计: ' : '正式投票总计: '}
              {(Math.round(vote_amount_all) + '').replace(/\d{1,3}(?=(\d{3})+$)/g, str => str + ',')} BTM
            </VoteAmount>
          </Header>
          <Tabs size="large" defaultActiveKey="official" onChange={this.handleTabChange}>
            <Tabs.TabPane
                key="official"
                tab={isZh ? '正式投票' : 'Official voting'}
              >
                <Table
                  columns={officialColumns}
                  dataSource={officialList.lists}
                  rowKey={(item, index) => index}
                  className="tableMobile"
                  pagination={false}
                />
            </Tabs.TabPane>
            <Tabs.TabPane
              key="early"
              tab={isZh ? '早鸟投票' : 'Early-Bird voting'}
            >
              <Table
                columns={columns}
                dataSource={list}
                rowKey={(item, index) => index}
                className="tableMobile"
                pagination={false}
              />
            </Tabs.TabPane>
          </Tabs>
        </Cont>
        <Modal
          visible={visibleVote}
          width={660}
          footer={null}
          bodyStyle={{padding: '40px'}}
          onCancel={() => this.setState({ visibleVote: false })}
          destroyOnClose
        >
          <Vote>
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
                }} type="primary" size="large"><Link to="/rules"><Msg id="modal_web_submit" /></Link></Button>
            </BtnPanel>
          </Vote>
        </Modal>
      </Wrap>
    )
  }
}
