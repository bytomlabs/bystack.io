import React from 'react';
import css from 'styled-components';

import img_bystack from '../images/bystack.png';

const Title = css.h1`
  text-align: center;
  font-weight: 200;
  line-height: 1em;
  font-size: 44px;
  color: #fff;
  padding-top: 78px;
  letter-spacing: ${props => props.lang === 'zh' ? '18px' : '2px'};
  @media (max-width: 640px) {
    font-size: 31px;
    letter-spacing: ${props => props.lang === 'zh' ? '8px' : '2px'};
    padding-top: 25px;
    padding-bottom: 12px;
  }
`;
const SubTitle = css(Title)`
  font-size: 24px;
  line-height: 1em;
  margin: 30px 0 60px;
  padding-top: 0;
  font-weight: 400;
  letter-spacing: ${props => props.lang === 'zh' ? '8px' : '2px'};
  @media (max-width: 640px) {
    font-size: 16px;
    margin: 15px 0 25px;
    letter-spacing: 2px;
  }
`;
const Img = css.img`
  display: block;
  width: 200px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;
`;

export default function PageTitle({title = null, subTitle = null, imgTitle = false, lang, extra}) {
  return (
    <>
      { imgTitle && <Img src={img_bystack} alt=""/>}
      <Title lang={lang}>{title}</Title>
      {subTitle && <SubTitle lang={lang}>{subTitle}</SubTitle>}
      {
        extra && <>{extra}</>
      }
    </>
  )
}
