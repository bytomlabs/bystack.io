import React from 'react';
import css from 'styled-components';


const Wrap = css.ul`
  li{
    padding: 3px 0;
  }
`;

function VoteRules({style, href, isEn = false}) {
  return (
    <Wrap style={style}>
      <li>{isEn ? '1. In the early bird voting, Your balance must be more than your total number of early bird votes' : '1、早鸟投票期间，钱包BTM余额不得低于你的早鸟投票总数量，否则无法获得早鸟投票收益。'}</li>
      <li>{isEn ? `2. Official votes should be more than your total number of early bird votes or you can't get early bird reward` : '2、正式投票总数量不得低于你的早鸟投票总数量，否则无法获得早鸟投票收益。'}</li>
      <li>{isEn ? '3. More rules:' : '3、更多规则请查看' }<a target="_blank" rel="noopener noreferrer" href={href}>{isEn ? '《Early-bird Round Voting Rules》' : '《Bystack共识节点早鸟投票规则》'}</a>。</li>
    </Wrap>
  )
}

export default VoteRules
