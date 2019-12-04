import React, { useState } from 'react';
import css from 'styled-components';


const Wrap = css.div`
  width: 100%;
  height: 200px;
  display: flex;
`;
const Item = css.div`
  flex: ${props => props.active ? 3 : 2};
  margin: ${props => props.active ? 0 : '20px 0'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FBFCFC;
  border: 1px solid #DEE0E4;
  cursor: pointer;
  transition: all .3s ease-out;
`;

export default function Gallery({ style = {}, data = [] }) {

  const [curActive, handleActive] = useState(0);

  return (
    <Wrap style={style}>
      {
        data.map((item, index) => (
          <Item 
            active={curActive === index}
            onMouseOver={() => handleActive(index)}
          >{item}</Item>
        ))
      }
    </Wrap>
  )
}
