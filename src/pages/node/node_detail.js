import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import { Table, Modal, Button, Input } from 'antd';
import ajax from 'axios';

import Layout from '../../components/layout/Layout';
import SEO from '../../components/Seo';
import BlockTitle from '../../components/BlockTitle';
import SocialMedia from '../../components/SocialMedia';

import _conf from '../../config/conf';
import { format } from 'date-fns';


const Cont = css.div`
  width: 1110px;
  margin: 0 auto;
  position: relative;
  z-index: 99;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Header = css.div`
  background-color: #fff;
  box-shadow:0px 2px 4px rgba(0,0,0,0.04);
  height: auto;
  width: 100%;
  padding-bottom: 20px;
  @media (max-width: 640px) {
    width: auto;
    margin: 0 20px;
    height: auto;
  }
`;
const Head = css.div`
  display: flex;
  padding: 30px 40px;
  align-items: center;
  box-shadow:0px 2px 4px rgba(0,0,0,0.04);
  &>img{
    width: 96px;
    height: 96px;
    display: inline-block;
    border: 1px solid #ececec;
    border-radius: 8px;
  }
  &>div:first-of-type{
    flex: 1;
    margin: 0 30px;
    p{
      color: #808A95;
      font-size: 13px;
      line-height: 1.6em;
      font-weight: 300;
    }
    h1{
      color: #1F2021;
      font-size: 18px;
      line-height: 2em;
      margin: 5px 0 0 0;
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 30px 20px;
    box-shadow:0px 2px 4px rgba(0,0,0,0);
    &>div:last-of-type{
      padding-top: 15px;
    }
    &>div:first-of-type{
      margin: 0;
      p{
        width: auto;
      }
      h1{
        text-align: center;
      }
    }
  }
`;
const Line = css.div`
  height: 1px;
  border-top: 0.5px solid #ECEEEF;
  margin: 0 40px 20px 40px;
`;
const TableLight = css.table`
  font-size: 14px;
  td{
    padding: 4px 0;
    vertical-align: top;
    word-break: break-word;
    &:last-child p{
      margin: 0;
    }
  }
  tr>td:first-child{
    padding-right: 18px;
    color: #808A95;
    width: 95px;
    font-weight: 300;
  }
  @media (max-width: 640px) {
    p{
      word-break: break-all;
    }
    tr>td:first-child{
      width: 80px;
      padding-right: 0;
    }
    &:last-child p{
      -webkit-line-clamp: 3; 
      padding-right: 0;
    }
  }
`;
const Detail = css.div`
  display: flex;
  padding: 0 40px;
  ${TableLight}{
    width: 50%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 0 20px;
    ${TableLight}{
      width: 100%;
    }
  }
`;
const Voter = css.div`
  background: #fcfcfc;
  margin-top: -60px;
  padding-top: 90px;
  min-height: 600px;
  .table_detail{
    background-color: #fff;
    box-shadow:0px 2px 4px rgba(0,0,0,0.01);
    tr:hover{
      td{
        background-color: #e6f7ff !important;

      }
    }
  }
  .ant-table-thead{
    background-color: #f4f4f4;
  }
`;
const Address = css.div`
  width: 35vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

class Node extends React.Component {
  state = {
    list: [],
    data: {},
    pagination: {
      current: 1,
      total: 0,
    },
    loading: false,
  }

  componentDidMount() {
    const { location } = this.props;
    const id = location.search.split('=')[1];
    this.fetchData(id);
  }

  handlePageChange = (page, size) => {
    const { location } = this.props;
    const id = location.search.split('=')[1];
    this.fetchData(id, page, size);
  }

  fetchData = (id, page, limit) => {
    if(!id) return;
    ajax.get(`${_conf.node_detail}/${id}`, {params: {pageNo: page, pageSize: limit}}).then(res => {
      const data = {...res.data.data.super_node_data, percent: res.data.data.percent, vote: res.data.data.vote_count}
      this.setState({
        data,
        pagination: res.data.pagination,
        list: (res.data.data.vote || []).filter(item => !!item.confirm_count),
      });
    }).catch(error => {
      console.log(error);
    })
  }

  render () {
    const { data, list } = this.state;
    const { lang } = this.props;
    const isZh = lang === 'zh';
    const pagination = {
      hideOnSinglePage: true,
      pageSize: 25,
      current: 1,
      onChange: this.handlePageChange,
      ...this.state.pagination,
    };
    const columns = [
      {
        title: <Msg id="node_detail_list_address" />,
        render: (text, item) => <Address>{item.address}</Address>
      },
      {
        title: <Msg id="node_detail_list_amount" />,
        width: '30%',
        render: (text, item) => <span>{Math.round((item.confirm_count || 0) * 100) / 100} BTM</span>
      },
      {
        title: <Msg id="node_detail_list_time" />,
        render: (text, item) => format(item.vote_timestamp * 1000, 'YYYY-MM-DD HH:mm:ss')
      },
    ];
    const info = [
      [
        {title: <Msg id="node_detail_homepage" />, value: data.homepage},
        {title: <Msg id="node_detail_reward" />, value: `${data.reward || ''}`},
        {title: <Msg id="node_detail_location" />, value: data[`location${isZh ? '' : '_en'}`]},
        {title: <Msg id="node_detail_type" />, value: data[`node_type${isZh ? '' : '_en'}`]},
      ],
      [
        {title: <Msg id="node_detail_sn" />, value: <SocialMedia data={data[`social_list${isZh ? '' : '_en'}`]} />},
        {title: <Msg id="node_detail_manifesto" />, value: data[`declaration${isZh ? '' : '_en'}`]},
        {title: <Msg id="node_list_votes" />, value: <span>{Math.round(data.vote || 0)} BTM</span>},
        {title: <Msg id="node_list_percent" />, value: `${(data.percent * 100).toFixed(2)} %`},
        // {title: '钱包余额', value: data.wallet_amount},
        // {title: '钱包地址', value: data.wallet_address},
      ]
    ]
    return (
      <Layout>
        <SEO 
          title="Bystack" 
          
        />
        <Cont>
          <div style={{padding: '50px 0 30px'}}>
            <BlockTitle style={{ backgroundColor: 'inherit' }} title={<Msg id="node_detail_title" />} />
          </div>
          <Header>
            <Head>
              <img src={`${_conf.imgage_host}${data.reserved_1 || data.logo}`} alt=""/>
              <div>
                <h1>{data.name}</h1>
                <p>{data.introduce}</p>
              </div>
            </Head>
            <Line />
            <Detail>
              <TableLight>
                <tbody>
                  {
                    info[0].map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td><>{item.value}</></td>
                      </tr>
                    ))
                  }
                </tbody>
              </TableLight>
              <TableLight>
                <tbody>
                  {
                    info[1].map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td><>{item.value}</></td>
                      </tr>
                    ))
                  }
                </tbody>
              </TableLight>
            </Detail>
          </Header>
        </Cont>
        <Voter>
          <Cont>
            <Table
              columns={columns}
              dataSource={list}
              className="table_detail"
              pagination={pagination}
            ></Table>
          </Cont>
        </Voter>
      </Layout>
    );
  }
  
}

const LangWrap = (props) => (
  <IntlContextConsumer>
    {
      ({language}) => <Node {...props} lang={language} />
    }
  </IntlContextConsumer>
);

export default injectIntl(LangWrap);
