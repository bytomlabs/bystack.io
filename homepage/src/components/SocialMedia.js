import React from 'react';
import css from 'styled-components';
import { Popover } from 'antd';


const Wrap = css.div`
  a{
    margin: 0 5px 0 0;
  }
`;

function SocialMedia({ data = '' }) {
  const list = data.split(/\s+|\n/).map(item => item.split('*'));
  console.log(list);
  return (
    <Wrap>
      {list.map((item, index) => (
        /微信|wechat/gi.test(item[0]) ?
          <Popover
            placement="top"
            content={(<span>{item[1]}</span>)}
          ><a>{item[0]}</a></Popover>
        :
          <a target="_blank" href={item[1]}>{item[0]}</a>
      ))}
    </Wrap>
  )
}

export default SocialMedia
