import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, injectIntl } from 'gatsby-plugin-intl';


import img_blockcenter from '../../images/img-blockcenter.png';
import img_blockcenter_en from '../../images/img-blockcenter-en.png';
import img_bg_blockcenter from '../../images/bg-blockcenter.png';
import img_bg_blockcenter_m from '../../images/bg-blockcenter-m.png';


const Wrap = css.div`
  background: url(${img_bg_blockcenter}) top center / 1920px no-repeat;
  padding-top: 90px;
  @media (max-width: 640px) {
    padding: 40px 16px 0 16px;
    background: url(${img_bg_blockcenter_m}) top center / 100% no-repeat;
  }
`;
const Cont = css.div`
  width: 1160px;
  margin: 0 auto;
  padding: 60px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 4px 64px rgba(0,0,0,0.04);
  @media (max-width: 640px) {
    width: 100%;
    padding: 40px 20px;
    border-radius: 8px;
  }
`;
const Head = css.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  h1{
    font-size: 36px;
    color: rgba(0, 0, 0, 0.88);
  }
  p{
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.72);
    line-height: 28px;
    width: 560px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      font-size: 28px;
    }
    p{
      width: 100%;
      font-size: 13px;
      color: #000;
      line-height: 24px;
    }
  }
`;
const Img = css.img`
  width: 100%;
  height: auto;
  margin-top: 40px;
  @media (max-width: 640px) {
    height: auto;
    margin-top: 40px;
  }
`;

function Blockcenter({ intl }) {
  return (
    <Wrap>
      <Cont>
        <Head>
          <Msg id="index_bc_title" tagName="h1" />
          <Msg id="index_bc_subtitle" tagName="p" />
        </Head>
        {
          intl.locale === 'zh' ? <Img src={img_blockcenter}></Img> : <Img src={img_blockcenter_en}></Img>
        }
      </Cont>
    </Wrap>
  )
}

export default injectIntl(Blockcenter);