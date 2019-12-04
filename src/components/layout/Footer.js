import React from 'react';
import css from 'styled-components';

const Wrap = css.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #707070;
  font-size: 14px;
  background-color: #0F0F0F;
  border-top: solid ${props => props.home ? '0' : '60px'} #000;
  box-sizing: content-box;
  position: ${props => props.fixedFooter ? 'fixed' : 'static'};
  bottom: 0;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 1.5em;
    padding-top: 16px;
    position: static;
  }
`;

const Footer = ({ home, fixedFooter = false, ftStyle }) => {

  return (
    <Wrap fixedFooter={fixedFooter} home={home}>
      <span>Copyright © 2019 Bytom Foundation. All Rights Reserved</span>
      {/* <span> · Copyright © 2019 · 杭州时戳信息科技有限公司 · 浙ICP备14013035号-14</span> */}
    </Wrap>
  )
};

export default Footer;
