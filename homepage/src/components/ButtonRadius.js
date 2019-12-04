import React from 'react';
import css from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const Wrap = css.a`
  display: inline-block;
  width: 106px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: #808A95;
  font-size: 13px;
  border: 1px solid #808A95;
  border-radius: 100px;
  border-color: ${props => props.disabled ? '#ddd' : '#808A95'};
  background: ${props => props.disabled ? '#ddd' : '#fff'};
  &:hover{
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(60,123,209,1) 100%);
    border-color: #035BD4;
    color: #fff;
  }
`;
const Btn = Wrap.withComponent(Link);


export default function Button({children, style = {}, href="", disabled = false}) {
  
  return (
    href ? 
      <Btn to={href} disabled={disabled} style={style}>
        {children}
      </Btn>
    : 
      <Wrap disabled={disabled} style={style}>
        {children}
      </Wrap>
  )
}
