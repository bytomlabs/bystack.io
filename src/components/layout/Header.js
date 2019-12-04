import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, IntlContextConsumer, changeLocale, Link } from 'gatsby-plugin-intl';
import { Menu, Dropdown, Icon } from 'antd';

import _conf from '../../config/conf';

import img_logo from '../../images/logo.png';

const Wrap = css.div`
  width: 100%;
  height: 72px;
  background-color: #0F0F0F;
  @media (max-width: 640px) {
    height: 50px;
  }
`;
const Cont = css.div`
  width: 1110px;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
  }
`;
const Logo = css.img`
  width: 154px;
  height: 36px;
  margin: 18px 0;
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 640px) {
    width: 90px;
    height: 20px;
    margin: 15px 0;
  }
`;
const Nav = css.ul`
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  li{
    line-height: 72px;
    float: left;
    margin-left: 30px;
    a{
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      :hover{
        color: #035BD4;
      }
    }
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const Lang = css.div`
  display: block;
  width: 100px;
  height: 72px;
  line-height: 72px;
  text-align: right;
  color: #fff;
  float: right;
  cursor: pointer;
  @media (max-width: 640px) {
    height: 50px;
    line-height: 50px;
  }
`;
const MobileMenu = css.div`
  width: 100px;
  height: 72px;
  line-height: 72px;
  text-align: right;
  color: #fff;
  float: right;
  cursor: pointer;
  width: 30px;
  display: none;
  @media (max-width: 640px) {
    display: block;
    height: 50px;
    line-height: 50px;
  }
`;

const Header = ({ homeDisable }) => {

  const NavItem = ({ link = '', href = '', title = '', target = '_blank' }) => {
    if(href) {
      return <a key={href} target={target} rel="noopener noreferrer" href={href}><Msg id={title} /></a>;
    }
    if(link) {
      return <Link key={link} to={link} ><Msg id={title} /></Link>;
    }
  }

  const mobileMenuList = (
    <Menu>
      {
        _conf.nav.map((item, index) => (
          <Menu.Item key={index}>
            <NavItem {...item} />
          </Menu.Item>
        ))
      }
    </Menu>
  )

  const MenuList = () => (
    _conf.nav.map((item, index) => (
      <li key={index}>
        <NavItem {...item} />
      </li>
    ))
  )

  return (
    <Wrap>
      <Cont>
        {
          homeDisable ?
            <Logo src={img_logo} />
          : 
            <a href="/"><Logo src={img_logo} /></a>
        }
        <Nav>
          <MenuList />
        </Nav>
        <MobileMenu>
          <Dropdown trigger={['click']} overlay={mobileMenuList}>
            <a style={{height: '100%', color: '#fff', display: 'inline-block'}}><Icon type="menu" /></a>
          </Dropdown>
        </MobileMenu>
        <IntlContextConsumer>
          {
            ({languages, language}) => (
              <Lang onClick={() => changeLocale(language === 'zh' ? 'en' : 'zh')}><Msg id="nav_lang" /></Lang>
            )
          }
        </IntlContextConsumer>
      </Cont>
    </Wrap>
  );
};

export default Header;
