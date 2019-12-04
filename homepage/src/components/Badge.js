import React from 'react';
import css from 'styled-components';
const colors = (type, disabled) => {
  if(disabled){
    return '#91D303';
  }
  if(!type) {
    return '#87B91E';
  }
  if(type === 'formal'){
    return '#91D303';
  }
  if(type === 'alternative'){
    return '#e2b605';
  }
  return '#6f6e6e';
};

const Wrap = css.span`
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  font-size: 10px;
  white-space: nowrap;
  display: inline-block;
  letter-spacing: 0;
  background-color: ${props => colors(props.type, props.disabled)};
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
`;



export default function Badge({ type, index, disabled = false }) {
  return (
    <Wrap type={type} disabled={disabled}>
      {index}
    </Wrap>
  )
}
