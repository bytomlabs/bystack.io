import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';

import SEO from '../components/Seo';
import { PageHeader, Avatar, Input, Select, Button } from 'antd';

const Cont = css.div`
  padding: 20px 16px;
`;
const Title = css.div`
  font-size: 14px;
  line-height: 32px;
`;
const W = css.div``;

const Home = () => {
  const [curAsset, setCurAsset] = useState('btm');

  return  (
    <>
      <SEO
        title="比原链水龙头" 
      />
      <PageHeader
        style={{ borderBottom: '1px solid rgb(235, 237, 240)', }}
        title={<><Avatar style={{ color: '#fff', backgroundColor: '#87d068' }}>BTM</Avatar> 比原链水龙头</>}
        subTitle="Bytom Faucet"
      ></PageHeader>
      <Cont>
        <Title>选择资产</Title>
        <Select 
          defaultValue={curAsset} 
          onChange={setCurAsset}
          style={{ width: '100%', margin: '10px 0 25px' }}
        >
          <Select.Option value="btm">BTM</Select.Option>
          <Select.Option value="btc">BTC</Select.Option>
          <Select.Option value="eth">ETH</Select.Option>
          <Select.Option value="usdt">USDT</Select.Option>
        </Select>
        <Title>填写地址</Title>
        <Input
          allowClear
          style={{ width: '100%', margin: '10px 0 25px' }}
          placeholder="请输入钱包地址"
        />
        <Button 
          block 
          ghost 
          size="large" 
          type="primary"
          style={{ marginTop: 20 }}
        >领取资产</Button>
      </Cont>
    </>
  );
};

export default Home;
