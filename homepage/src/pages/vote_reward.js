import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, navigate } from 'gatsby-plugin-intl';
import ajax from 'axios';
import { format } from 'date-fns';

import _conf from '../config/conf';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';
import { Input, Card } from 'antd';


let isMobile = false;
let url = '/';
try {
  isMobile = /Android|iPhone/.test(window.navigator.userAgent);
  let address = localStorage.getItem('ADDR');
  if(isMobile && address) {
    url = '/vote'
  }
} catch (error) { console.log(error) };

const Cont = css.div`
  width: 920px;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;
  padding: 60px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: auto;
    height: auto;
    margin: 0;
    padding: 20px;
    padding-bottom: 30px;
  }
`;
const Content = css.div`
  height: auto;
  color: #808A95;
  font-size: 14px;
  table{
    width: 100%;
    td, th{
      border: 1px solid #ddd;
      padding: 8px 10px;
      font-size: 13px;
      &:last-child{
        width: 36%;
      }
    }
  }
  &>p{
    line-height: 50px;
  }
  .ant-card{
    margin-bottom: 20px;
  }
  .ant-card-body{
    h1{
      font-size: 18px;
      font-weight: normal;
    }
    p{
      font-size: 14px;
      word-break: break-all;
    }
  }
  @media (max-width: 640px) {
    min-height: 100px;
    height: auto;
  }
`;

const msg = {
  1001: '8月1日前的正式投票数量小于早鸟投票数量',
  1002: '投票奖励不足1BTM',
  1003: '2019-07-05 19:01:42 你的Bytom钱包余额（0.33139 BTM）少于当日投票总数（13030 BTM），不符合早鸟投票规则 “早鸟投票期间，钱包BTM余额不得低于你的早鸟投票总数量，否则无法获得早鸟投票收益”。',
  1004: '查询地址不存在',
};

const Rewrad = () => {

  let defaultAddress = '';
  try {
    defaultAddress = localStorage.getItem('ADDR');
  } catch (error) { console.log(error) }
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(defaultAddress);
  const [info, setInfo] = useState({});
  const [earlyRecord, setEarlyRecord] = useState({});

  // 获取奖励详情
  useEffect(() => {
    if(!address) return;
    setLoading(true);
    ajax.get(`${_conf.reward}/${address}`).then(res => {
      console.log(res.data);
      setInfo(res.data)
      setLoading(false);
    }).catch(err => {
      console.log(err);
      setLoading(false);
    });
  }, [address])

  // // 获取早鸟投票记录
  // useEffect(() => {
  //   setLoading(true);
  //   ajax.post(`${_conf.record}`, { address, pageSize: 200 }).then(res => {
  //     console.log(res.data);
  //     setEarlyRecord(res.data)
  //     setLoading(false);
  //   }).catch(err => {
  //     console.log(err);
  //     setLoading(false);
  //   });
  // }, [address])

  const handleSearch = (addr) => {
    const rule = /^(bm|vp)/;
    if(rule.test(addr)){
      console.log(addr)
      setAddress(addr);
    }
  }

  return (
    <Layout>
      <SEO 
        title="Bystack" 
        
      />
      <PageTitle title={<Msg id="home_title" />} subTitle={<span>早鸟投票收益</span>} />
      <Cont>
        <Content>
          <Input.Search
            placeholder="请输入钱包地址查询（Bytom/Vapor地址）"
            onSearch={handleSearch}
            defaultValue={address}
            size={ isMobile ? 'default' : 'large'}
            enterButton
            allowClear
          ></Input.Search>
          <p>*根据你的早鸟投票记录、早鸟投票期间余额以及正式投票记录发放早鸟投票收益</p>
          <Card
            loading={loading}
            title="早鸟投票实际收益"
          >
            <h1>{info.reward || 0} BTM</h1>
            {
              info.code === 200 ?
                <p>备注：奖励已发放至你的Vapor侧链钱包：{info.vapor_address ? <a href={`https://vapor.blockmeta.com/address/${info.vapor_address}`}>{info.vapor_address || '---'}</a> : '---' }</p>
              : <><p>备注：{msg[info.code] || '---'}</p> <p>{info.code == '1003' && <a target="_blank" href="https://blockmeta.com/address/bm1qu7mfdsxcnjlrnnu9m5fqe83pkzjhq3dpayg57e">查看交易记录</a>}</p></>
            }
          </Card>
          <Card
            loading={loading}
            title="早鸟投票预期收益"
          >
            <h1>{info.reward || 0} BTM</h1>
            <p>计算公式：</p>
            <p>W=(x1+x2+…+xn)*R </p>
            <p>W = 预期收益 x = 早鸟投票数量 R = 25%*(1/365)</p>
          </Card>
          <Card
            loading={loading}
            title="早鸟投票记录"
          >
            <p>投票地址：{info.bytom_address ?  <a href={`https://blockmeta.com/address/${info.bytom_address}`}>{info.bytom_address || '---'}</a> : '---'}</p>
            <table>
              <thead>
                <tr>
                  <th>节点名称</th>
                  <th>投票数量</th>
                  <th>投票时间</th>
                </tr>
              </thead>
              <tbody>
                {
                  (info.vote_recode || []).map((item, index) => (
                    <tr key={index}>
                      <td>{item.node_name}</td>
                      <td>{item.confirm_count}</td>
                      <td>{format(item.timestamp * 1000, 'YYYY-MM-DD HH:mm:ss')}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </Card>
          <Card
            loading={loading}
            title="正式投票记录"
          >
            <p>投票地址：{info.vapor_address ? <a href={`https://vapor.blockmeta.com/address/${info.vapor_address}`}>{info.vapor_address || '---'}</a> : '---'}</p>
            <table>
              <thead>
                <tr>
                  <th>节点名称</th>
                  <th>投票数量</th>
                  <th>投票时间</th>
                </tr>
              </thead>
              <tbody>
                {
                  (info.vapor_vote_recode || []).map((item, index) => (
                    <tr key={index}>
                      <td>{item.node_name}</td>
                      <td>{item.vote_amount}</td>
                      <td>{format(item.timestamp, 'YYYY-MM-DD HH:mm:ss')}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </Card>
        </Content>
      </Cont>
    </Layout>
  )
};

export default Rewrad;
