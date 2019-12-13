import React, { useState, useEffect, useRef, useCallback } from 'react';
import css from 'styled-components';
import _ajax from 'axios';

import { PageHeader, Avatar, Input, Select, message } from 'antd';

const apiHost = 'http://52.82.24.162:5000/api/v1/get_testnet_coins';

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
  color: #000;
  background: rgba(228, 176, 90);
  cursor: pointer;
  &:active {
    opacity: .8;
  }
`;
const W = css.div``;
let timer = null;
const Home = () => {
  const [curAsset, setCurAsset] = useState('usdt');
  const [curAddress, setAddress] = useState('');
  const [countdown, setCountdown] = useState(6);
  const timer = useRef(null);

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
        document.addEventListener('chromeBytomLoaded', bytomExtension => {
          getAccountInfo();
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  

  const getAccountInfo = async () => {
    try {
      const account = await window.bytom.enable();
      console.log(account.address)
      if(account.address) {
        setAddress(account.address);
        timer && clearTimeout(timer);
      }
    } catch (error) {
      console.log(error);
      timer = setTimeout(() => {
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
    _ajax
      .post(apiHost, {asset: curAsset, address: curAddress})   // tp1qjchcu4qlny2xq508mp4a2ekptk5dkugdlseekc
      .then(res => {
        if(res.data.tx_id) {
          message.success('领取成功 Success');
        }
      })
      .catch(err => {
        console.log(err);
        message.error('领取失败 Fail');
      })
  }

  return  (
    <>
      <PageHeader
        style={{ borderBottom: '1px solid rgb(235, 237, 240)', }}
        title={<span style={{ color: 'rgb(228, 176, 90)' }}>MOV水龙头</span>}
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
          <Select.Option value="usdt">USDT</Select.Option>
          <Select.Option value="btc">BTC</Select.Option>
          <Select.Option value="eth">ETH</Select.Option>
          <Select.Option value="btm">BTM</Select.Option>
        </Select>
        {
          countdown === 6 ? (
            <Button onClick={handleSubmit}>领取 Get</Button>
          ) : <Button style={{opacity: '.7'}}>领取 Get ({countdown})</Button>
        }
        
        
        <Address>
          <Title>我的地址 <span style={{color: 'rgba(0, 0, 0, 0.45)'}}>Address</span>: </Title>
          <p>{curAddress}</p>
        </Address>
      </Cont>
    </>
  );
};

export default Home;
