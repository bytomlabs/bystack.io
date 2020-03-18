import React, { useState, useEffect, useRef, useCallback } from 'react';
import css from 'styled-components';
import _ajax from 'axios';

import { PageHeader, Avatar, Input, Select, message } from 'antd';

const apiHost = 'https://api.bymov.io/faucet/api/v1/get_testnet_coins';

const Cont = css.div`
  padding: 20px 16px;
`;
const Title = css.div`
  font-size: 14px;
  line-height: 32px;
  color: #000;
`;
const Address = css.div`
  padding-top: 30px;
  p{
    word-wrap: break-word;
    color: #999;
  }
`;
const Button = css.div`
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  background-color: #035BD4;
  cursor: pointer;
  &:active {
    opacity: .8;
  }
`;
const W = css.div``;
const assetAmount = {
  btm: '200 BTM',
  btc: '0.01 BTC',
  usdt: '100 USDT',
  eth: '0.5 ETH',
};
let timer = null;
let defaultAddress = '';
const Home = () => {
  try {
    if(window.bytom) {
      defaultAddress = window.bytom.default_account.address;
    }
  } catch (error) {}
  const [curAsset, setCurAsset] = useState('btm');
  const [curAddress, setAddress] = useState(defaultAddress);
  const [countdown, setCountdown] = useState(6);
  const timer = useRef(null);
  const getBytomInfoTimer = useRef(null);

  const handleCountdown = () => {
    timer.current = setInterval(() => {
      setCountdown(cur => cur - 1);
    }, 1000);
  }

  useEffect(() => {
    if(countdown === 0) {
      timer.current && clearInterval(timer.current);
      setCountdown(6);
    }
  }, [countdown])

  useEffect(() => {
    try {
      if(window) {
        document.addEventListener('chromeBytomLoaded', function (res) {
          window.bytom.enable(true).then(res => {
            getAccountInfo();
          });
          getAccountInfo();
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  

  const getAccountInfo = () => {
    try {
      const address = window.bytom.default_account.address;
      if(address) {
        setAddress(address);
        getBytomInfoTimer.current && clearTimeout(getBytomInfoTimer.current);
      }
    } catch (error) {
      console.log(error);
      getBytomInfoTimer.current = setTimeout(() => {
        getAccountInfo();
      }, 1000);
    }
  }

  const handleSubmit = () => {
    setCountdown(5);
    handleCountdown();
    try {
      if(!curAddress) {
        getAccountInfo();
      }
    } catch (error) {
      console.log(error);
    }
    try {
      _ajax
      .post(apiHost, {asset: curAsset, address: 'tp1qjchcu4qlny2xq508mp4a2ekptk5dkugdlseekc'})   // tp1qjchcu4qlny2xq508mp4a2ekptk5dkugdlseekc
      .then(res => {
        if(res.data.tx_id) {
          message.success(`领取成功 ${assetAmount[curAsset]} Success`);
        }
      })
      .catch(err => {
        console.log(err);
        message.error('领取失败 Fail');
      });
    } catch (error) {
      message.error('领取失败 Fail');
    }
  }

  return  (
    <>
      <PageHeader
        style={{ borderBottom: '1px solid rgb(235, 237, 240)', }}
        title={<span style={{ color: '#035BD4' }}>MOV水龙头</span>}
        subTitle={<p style={{textAlign: 'right', margin: 0}}>MOV Faucets</p>}
      ></PageHeader>
      <Cont>
        <Title>选择资产 <span style={{color: 'rgba(0, 0, 0, 0.45)'}}>Select Asset</span></Title>
        <Select 
          defaultValue={curAsset} 
          onChange={setCurAsset}
          size="large"
          style={{ width: '100%', margin: '10px 0 25px' }}
        >
          <Select.Option value="btm">BTM</Select.Option>
        </Select>
        {
          countdown === 6 ? (
            <Button onClick={handleSubmit}>领取 Get</Button>
          ) : <Button style={{opacity: '.7'}}>领取 Get ({countdown})</Button>
        }
        
        
        <Address>
          <Title>我的地址 <span style={{color: 'rgba(0, 0, 0, 0.45)'}}>Address</span>: </Title>
          <p>{curAddress || '---'}</p>
        </Address>
      </Cont>
    </>
  );
};

export default Home;
