import React, { Component, useState } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, navigate, injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _conf from '../config/conf';
import { Collapse } from 'antd';

import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';

import img_1 from '../images/bycoin/1.png';
import img_2 from '../images/bycoin/2.png';
import img_3 from '../images/bycoin/3.png';
import img_4 from '../images/bycoin/4.png';
import img_5 from '../images/bycoin/5.jpeg';
import img_6 from '../images/bycoin/6.png';


const Cont = css.div`
  width: 800px;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;
  padding: 60px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: auto;
    margin: 0 20px;
    padding: 30px 24px;
    margin-bottom: 30px;
  }
`;
const Line = css.div`
  width: 100%;
  height: 1px;
  margin: 50px 0 30px;
  background-color: #DEDEDE;
`;
const FieldWrap = css.div`
  padding-bottom: 30px;
  input, textarea{
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #808A95;
    &:focus{
      outline: none;
      border-color: #035BD4;
    }
  }
  textarea{
    height: 120px;
    padding: 12px;
  }
  select{
    width: 300px;
    height: 40px;
    background-color: #fff;
    &:focus{
      outline: none;
      border-color: #035BD4;
    }
  }
  label{
    font-size: 16px;
    line-height: 2em;
    cursor: pointer;
  }
  &>p{
    font-size: 14px;
    color: #808A95;
    padding: 6px 0;
  }
  &>div{
    color: #DB2323;
    font-size: 14px;
    margin: 8px 0;
  }
  @media (max-width: 640px) {
    label{
      font-size: 14px;
    }
  }
`;
const ImgWrap = css.div`
  img{
    width: 100%;
  }
`
const Button = css.button`
  cursor: pointer;
  width: 174px;
  height: 50px;
  line-height: 50px;
  background-color: #035BD4;
  color: #fff;
  border: none;
  opacity: ${props => props.loading ? 0.6 : 1}
`;
const Title = css.div`
  color: #fff;
  text-align: center;
  font-size: 32px;
  padding: 30px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

class Bycoin extends Component {

  validate = values => {
    let errors = {};
    const email_pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!email_pattern.test(values.email)){
      errors.email = '请输入邮箱地址';
    }
    console.log('errors:', errors);
    
    return errors;
  }

  showMsg = (cont, type = 'info') => {
    toast[type](cont, {
      postion: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      className: "tost-body",
    });
  }
  
  handleSubmit = (values, { setSubmitting }) => {
    const { language } = this.props;
    const validate = this.validate(values);
    if(JSON.stringify(validate) !== '{}'){
      const msg = language === 'en' ? 'Please complete each item of the form.' : '邮箱地址有误';
      this.showMsg(msg, 'error');
      setSubmitting(false)
      return;
    }
    console.log('submit..........', values);
    axios.post('https://api.bystack.com/supernode/v1/email', { ...values }).then(data => {
      if(data.status === 200){
        
        toast.info('提交成功, 内测邮件将尽快发出，请耐心等待（24小时内完成）', {
          postion: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          className: "tost-body",
        });
        setTimeout(() => {
          setSubmitting(false);
          navigate('/');
        }, 3000);
      }
    }).catch(err => {
      setSubmitting(false);
    });
  }

  render() {
    const { language = 'zh' } = this.props;
    let isEN = language === 'en';
    const formList = [
      {
        name: 'email',
        des: isEN ? '' : '',
        label: 'form_label_email',
      },
    ];
    return (
      <Layout fixedFooter>
        <SEO title="Bystack"  />
        <Title>Bycoin 1.2.0下载</Title>
        <ToastContainer />
        <Cont>
         
                
                      <h2>Bycoin 1.2.0下载</h2>
                      <p>Bycoin 1.2.0 iOS新版已上架App Store，请前往下载</p>
                <Line />
                <div style={{ textAlign: 'center' }}>
                  <>
                    <a href="https://bycoin.im"><Button>立即下载</Button></a>
                  </>
                </div>
          
        </Cont>
      </Layout>
    );
  }
};


const LangWrap = () => (
  <IntlContextConsumer>
    {
      ({language}) => <Bycoin language={language} />
    }
  </IntlContextConsumer>
);

export default injectIntl(LangWrap);