import React from 'react';
import css from 'styled-components';


const Wrap = css.div`
  text-align: ${props => props.right ? 'right' : props.left ? 'left' : 'center'};
  width: ${props => props.right ? '100%' : props.left ? '100%' : '680px'};
  margin: 0 auto;
  h1{
    font-size: 44px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
  }
  h2{
    font-size: 16px;
    color: rgba(0, 0, 0, 0.72);
    margin-top: 20px;
    font-weight: 300;
    line-height: 32px;
  }
  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    h1{
      font-size: 28px;
      line-height: 1em;
      margin: 60px 0 20px 0;
    }
    h2{
      font-size: 13px;
      padding: 0 50px;
      font-weight: 300;
      line-height: 24px;
      color: #000;
    }
  }
`;

export default function BlockTitle({ title = '', subTitle = '', right = false, left = false }) {
  return (
    <Wrap right={right} left={left}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Wrap>
  )
}
