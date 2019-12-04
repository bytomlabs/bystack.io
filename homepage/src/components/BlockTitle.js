import React from 'react';
import css from 'styled-components';

const Wrap = css.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #080808;
`;
const Title = css.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`;
const Line = css.span`
  width: 400px;
  display: block;
  height: 1px;
  opacity: 0.25;
  background-color: #fff;
  @media (max-width: 640px) {
    width: 20%;
  }
`;

export default function BlockTitle({title, style}) {
  return (
    <Wrap style={style}>
      <Line />
        <Title>{title}</Title>
      <Line />
    </Wrap>
  )
}