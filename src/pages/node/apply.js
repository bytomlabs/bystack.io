import React, { Component, useState } from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, navigate, injectIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _conf from '../../config/conf';

import Layout from '../../components/layout/Layout';
import SEO from '../../components/Seo';
import PageTitle from '../../components/PageTitle';

import img_upload from '../../images/upload.png';

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
const RadioList = css.div`
  display: flex;
  flex-wrap: wrap;
  &>div:nth-child(3n+1){
    width: ${props => props.isEN ? '22%' : '25%'};
  }
  &>div:nth-child(3n+2){
    width: ${props => props.isEN ? '44%' : '25%'};
  }
  &>div:nth-child(3n+3){
    width: ${props => props.isEN ? '33%' : '25%'};
  }
  &>div{
    margin: 10px 0;
    input{
      cursor: pointer;
      width: 18px;
      height: 18px;
      vertical-align: middle;
    }
    label{
      color: #808A95;
      font-size: 14px;
    }
  }
  @media (max-width: 640px) {
    &>div{
      width: 50%;
    }
  }
`;
const Upload = css.div`
  width: 100%;
  height: 120px;
  input{
    width: 120px;
    height: 120px;
    opacity: 0;
    cursor: pointer;
  }
  &>div{
    display: inline-block;
    width: 120px;
    height: 120px;
    overflow: hidden;
    vertical-align: top;
    border: 1px dotted #808A95;
  }
  &>div:first-child{
    display: inline-block;
    background: #FAFBFC url(${img_upload}) center / 20px no-repeat;
  }
  &>div:last-child{
    img{
      width: 100%;
      height: 100%;
    }
  }

`;
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
const options = [
  "交易所",
  "钱包",
  "投资机构",
  "投资者",
  "DApp开发团队",
  "KOL",
  "门户网站",
  "营销公司",
  "开发者团队",
  "区块生产者/矿工",
  "区块链教育机构",
  "其他"
];
const options_en = [
  "Exchange",
  "Wallet",
  "Investment institution",
  "Investor",
  "DApp development team",
  "KOL",
  "Web portal",
  "Marketing company",
  "Development team",
  "BP/miners",
  "Blockchain education institutions",
  "Others"
];

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} 
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// Radio group
const RadioButtonGroup = ({ children, isEN }) => {
  return (
    <RadioList isEN={isEN}>
      {children}
    </RadioList>
  );
};

const FileUploader = ({setFieldValue}) => {

  const [thumb, setThumb] = useState(null);

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const content = new FormData();
    const file = e.target.files[0];
    content.append('file', file);
    axios.post(_conf.upload, content).then(data => {
      const img = `${_conf.imgage_host}${data.data}`;
      setThumb(img);
      setFieldValue('logo', img);
    }).catch(err => {
      console.log(err);
      toast.info(`图片上传失败${err}`, {
        postion: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        className: "tost-body",
      });
    });
  }
  return (
    <Upload>
      <div style={{background: `url(${thumb ? thumb : img_upload}) center / ${thumb ? 'cover' : '20px no-repeat'}`}}>
        <input accept="image/*" onChange={handleUpload} type="file"/>
      </div>
      {/* {
        thumb ? <div><img src={thumb} alt=""/><a>删除</a></div> : <div style={{visibility: 'hidden'}}></div>
      } */}
    </Upload>
  )
  
}


class ApplyForm extends Component {

  validate = values => {
    let errors = {};
    if (!values.name || !values.name.trim()) {
      errors.name = '请输入名称';
    }
    
    if(!values.email && !values.wechat){
      errors.email = '请输入邮箱地址或微信';
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
      const msg = language === 'en' ? 'Please complete each item of the form.' : '请仔细核对并完善表单';
      this.showMsg(msg, 'error');
      setSubmitting(false)
      return;
    }
    if(values.type){
      const type = options[values.type.split('_')[1]];
      values.type = type;
    }
    console.log('submit..........', values);
    axios.post(_conf.apply, { content: JSON.stringify(values) }).then(data => {
      if(data.status === 200){
        toast.info('提交成功', {
          postion: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
          className: "tost-body",
        });
        setTimeout(() => {
          setSubmitting(false);
          navigate('/');
        }, 2000);
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
        name: 'name',
        label: 'form_label_name',
        des: 'form_label_name_des',
      },
      {
        name: 'intro',
        label: 'form_label_intro',
        des: 'form_label_intro_des',
        type: 'textarea'
      },
      {
        name: 'address',
        label: 'form_label_location',
      },
      {
        name: 'btm',
        label: 'form_label_btm',
        // des: 'form_label_btm_des',
      },
      {
        name: 'email',
        label: 'form_label_email',
      },
      {
        name: 'website',
        label: 'form_label_website',
      },
      {
        name: 'wechat',
        label: 'form_label_wechat',
      },
      {
        name: 'sn',
        label: 'form_label_sn',
        des: 'form_label_sn_des',
      },
      {
        name: 'plan',
        label: 'form_label_plan',
        type: 'textarea'
      },
      {
        name: 'wish',
        label: 'form_label_wish',
        des: 'form_label_wish_des',
        type: 'textarea'
      },
      {
        name: 'reward',
        label: 'form_label_reward',
        des: 'form_label_reward_des',
      },
      {
        name: 'type',
        label: 'form_label_type',
        type: 'select',
        options: isEN ? options_en : options
      },
      {
        name: 'logo',
        label: 'form_label_logo',
        des: 'form_label_logo_des',
        type: 'file',
      },
    ];
    return (
      <Layout>
        <SEO title="Bystack"  />
        <PageTitle
          title={<Msg id="home_title" />}
          subTitle={<Msg id="form_title" />}
        />
        <ToastContainer />
        <Cont>
          <Formik
            // initialValues={{ email: '', password: '' }}
            // validate={this.validate}
            onSubmit={this.handleSubmit}
          >
            {({ isSubmitting, values, errors, setFieldValue }) => (
              <Form>
                {
                  formList.map((item, index) => (
                    <FieldWrap key={index}>
                      <label><Msg id={item.label} /></label>
                      <p>{item.des && <Msg id={item.des} />}</p>
                      {
                        item.type === 'select' ? 
                          <RadioButtonGroup
                            id="radioGroup"
                            isEN={isEN}
                            // value={values.radioGroup}
                            error={errors.type}
                            // touched={touched.radioGroup}
                          >
                            {
                              item.options.map((option, optionIndex) => (
                                <Field
                                  key={optionIndex}
                                  component={RadioButton}
                                  name={item.name}
                                  id={`id_${optionIndex}`}
                                  label={option}
                                />
                              ))
                            }
                          </RadioButtonGroup>
                        : 
                          item.type === 'file' ? 
                            <FileUploader setFieldValue={setFieldValue} />
                          : 
                            <Field component={item.type || 'input'} name={item.name} />
                      }
                      {/* <div><ErrorMessage name={item.name} component="div" /></div> */}
                    </FieldWrap>
                  ))
                }
                <Line />
                <div style={{ textAlign: 'center' }}>
                  <Button loading={isSubmitting} type={isSubmitting ? 'button' : 'submit'} disabled={isSubmitting}>
                    <Msg id="plan_btn_apply" />
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          
        </Cont>
      </Layout>
    );
  }
};


const LangWrap = () => (
  <IntlContextConsumer>
    {
      ({language}) => <ApplyForm language={language} />
    }
  </IntlContextConsumer>
);

export default injectIntl(LangWrap);