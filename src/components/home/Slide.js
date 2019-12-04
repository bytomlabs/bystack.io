import React from 'react';
import css from 'styled-components';
import Button from '../Button';
import { FormattedMessage as Msg, injectIntl } from 'gatsby-plugin-intl';


const Wrap = css.div`
  width: 1160px;
  height: 700px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    height: 670px;
  }
`;
const Item = css.li`
  &>h1{
    font-size:70px;
    font-weight:400;
    line-height: 1em;
    padding: 215px 0 0 0;
    color: #fff;
    letter-spacing: 5px;
  }
  &>p{
    font-size: 24px;
    font-weight:300;
    line-height:1em;
    margin: 30px 0 40px 0;
    color: #fff;
    opacity: .7;
  }
  @media (max-width: 640px) {
    text-align: center;
    &>h1{
      font-size: 44px;
      padding: 76px 0 0 0;
    }
    &>p{
      font-size: 15px;
      margin: 30px 60px 40px 60px;
      line-height: 28px;
    }
  }
`;
const BtnGroup = css.div`
  display: flex;
  justify-content: flex-start;
  a{
    margin: 0 20px 0 0;
  }
  @media (max-width: 640px) {
    justify-content: center;
    a{
      margin: 0 10px;
    }
  }
`;

function Slide({ intl }) {
  const whitepapers = {
    zh: 'https://www.bystack.com/Bystack_WhitePaper.pdf',
    en: 'https://www.bystack.com/Bystack_WhitePaper_En.pdf'
  };
  return (
    <Wrap>
      <ul>
        <Item>
          <Msg id="index_title" values={{br: <br />}} tagName="h1" />
          <Msg id="index_sub_title" tagName="p" />
          <BtnGroup>
            <a target="_blank" href={whitepapers[intl.locale || 'zh']}><Button type="primary" size="small"><Msg id="index_btn_white_paper" /></Button></a>
            {/* <a href="https://www.bystack.com/MOV_WhitePaper.pdf"><Button type="primary" size="small"><Msg id="index_btn_mov_white_paper" /></Button></a> */}
          </BtnGroup>
        </Item>
      </ul>
    </Wrap>
  )
}

export default injectIntl(Slide);
