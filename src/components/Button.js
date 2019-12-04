import React from 'react';
import css from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const sizes = {
  xs: [88, 40],
  small: [130, 50],
  normal: [174, 50],
  large: [174, 50],
};
// 0 color, 1 hover:color, 2 border-color , 3 bg-color, 4 hover:bg-color
const types = {
  primary: ['#fff', '#fff', '#035BD4', '#035BD4', '#035BD4'],   
  ghost: ['#fff', '#000', '#fff', 'rgba(255, 255, 255, 0)', '#fff'],
  success: ['#fff', '#fff', '#91D303', '#91D303', '#91D303'],
  normal: ['#393F49', '#393F49', '#393F49', '#fff', '#fff'],
  temp: ['', '', '', '', ''],
}

const Wrap = css.button`
  display: block;
  border: 1px solid #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  padding: 0 20px;
  border-radius: 4px;
  // width: ${props => sizes[props.size][0]}px;
  height: ${props => sizes[props.size][1]}px;
  line-height: ${props => sizes[props.size][1]}px;
  color: ${props => types[props.type][0]};
  border-color: ${props => types[props.type][2]};
  &:hover {
    color: ${props => types[props.type][1]};
    background-color: ${props => types[props.type][4]};
  }
  background-color: ${props => types[props.type][3]};
  margin: 0 auto;
  transition: all 0.2s;
  &:hover{
    opacity: 0.8;
  }
  @media (max-width: 640px) {
    // width: 130px;
    height: 42px;
    font-size: 14px;
    line-height: 42px;
  }
`;
const Btn = Wrap.withComponent(Link);


export default function Button({children, size = 'normal', onClick = null, type = 'primary', style = {}, href=""}) {
  
  return (
    href ? 
      <Btn onClick={onClick} to={href} size={size} type={type} style={style}>
        {children}
      </Btn>
    : 
      <Wrap onClick={onClick} size={size} type={type} style={style}>
        {children}
      </Wrap>
  )
}
