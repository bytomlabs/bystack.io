import React, { useRef } from 'react';
import css from 'styled-components';
import Button from '../Button';
import { FormattedMessage as Msg, injectIntl, Link } from 'gatsby-plugin-intl';
import TweenOne from 'rc-tween-one';


const Wrap = css.div`
  width: 1160px;
  height: 520px;
  margin: 0 auto;
`;
const Cont = css.div`
  padding: 110px 0;
  &>h1{
    color: #fff;
    font-size: 70px;
    line-height: 1em;
  }
  &>p{
    font-size: 24px;
    line-height: 1em;
    color: rgba(255, 255, 255, .72);
    margin-top: 30px;
  }
`;


function Slide() {
  const slideRef = useRef(null);

  return (
    <Wrap>
      <Cont>
        <h1>
          <TweenOne animation={{ y: 50, opacity: 0, type: 'from' }}>
            开发者中心
          </TweenOne>
        </h1>
        <p>
          <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 100 }}>
            欢迎加入 Bystack 开源社区 
          </TweenOne>
        </p>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }}>
          <Button href="/devcenter/docs" style={{width: '160px', margin: '50px 0 0 0'}}>开发文档</Button>
        </TweenOne>
      </Cont>
    </Wrap>
  )
}

export default injectIntl(Slide);
