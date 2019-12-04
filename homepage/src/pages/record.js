import React, { Component } from 'react';
import css from 'styled-components';
import { injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';   // FormattedMessage as Msg, navigate,
import { Icon } from 'antd';
import Empty from '../components/Empty';
import ajax from 'axios';
import { format } from 'date-fns';

import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';

import _conf from '../config/conf';

const Cont = css.div`
  width: 100%;
  min-height: 70vh;
  background-color: #fff;
`;
const Node = css.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #F0F0F0;
  &>span{
    background-color: #91D303;
    display: inline-block;
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    color: #fff;
    border-radius: 30px;
  }
  &>p{
    margin: 0;
    font-size: 15px;
    color: #101010;
    i{
      font-style: normal;
      color: #8A8A8A;
    }
  }
  &>div{
    display: flex;
    flex: 1;
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
const Loading = css.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
`;

class Record extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      reward: 0,
      loading: false
    };
  }

  componentDidMount() {
    const _this = this;
    const isEnable = !!(window.bytom && window.bytom.default_account);
    const address = localStorage.getItem('ADDR');
    if(address){
      this.fetchData(address);
    }
    document.addEventListener('chromeBytomLoaded', function () {
      if(!isEnable && !address){
        window.bytom.enable(true).then(res => {
          const address = window.bytom.default_account.address;
          _this.fetchData(address);
        });
      }
    });
  }
  
  fetchData = (address) => {
    this.setState({ loading: true });
    try {
      // ajax.post(_conf.record, { address: 'bm1qky0lxcx4zyendhr08wpjrwv79cgvqefcykg3ag' }).then(res => {
      ajax.post(_conf.record, { address, pageSize: 200, pageNo: 1 }).then(res => {
        let list = (res.data.data.record || []);
        const reward = res.data.data.reward || 0;
        this.setState({
          list,
          reward,
          loading: false,
        });
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  alert = (msg) => {
    try {
      window.bycoin.callAPI('native.toastInfo', msg);
    } catch (error) {
      console.log(error);
    }
  }

  render() {

    const { list, loading, reward } = this.state;
    const { language = 'zh' } = this.props;
    const isEn = language === 'en';
    return (
      <Layout homeDisable ftStyle={{ marginTop: 0 }}>
        <SEO title="Bystack"  />
        <PageTitle
          title={<span style={{letterSpacing: 0}}>{isEn ? 'Voting records' : '投票记录'}</span>}
          subTitle={<span>{isEn ? 'Expected reward' : '预期收益'} : {reward.toFixed(2)} BTM</span>}
        />
        <Cont>
          {
            loading ? <Loading><Icon type="loading" spin /></Loading> : null
          }
          {
            !list.length && !loading && <Empty />
          }
          {
            list.map((item, index) => (
              <Node key={index}>
                <div>
                  <img src={_conf.imgage_host + item.node.reserved_1} alt=""/>
                  <div>
                    <h1>{isEn ? item.node.name_en : item.node.name}</h1>
                    <p>{format(item.timestamp * 1000, 'YYYY-MM-DD HH:mm:ss')}</p>
                  </div>
                </div>
                <p>{item.confirm_count} <i>BTM</i></p>
              </Node>
            ))
          }
        </Cont>
      </Layout>
    );
  }
};


const LangWrap = () => (
  <IntlContextConsumer>
    {
      ({language}) => <Record language={language} />
    }
  </IntlContextConsumer>
);

export default injectIntl(LangWrap);