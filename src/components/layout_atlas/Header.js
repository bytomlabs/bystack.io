import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg, Link } from 'gatsby-plugin-intl';
import { Menu, Dropdown, Icon } from 'antd';
import Toolbar from '../Toolbar';

import _conf from '../../config/conf';

import img_logo from '../../images/logo-home.png';
import img_logo_dark from '../../images/logo_dark.png';
import icon_menu from '../../images/icon/menu.png';

const Wrap = css.div`
  width: 100%;
  height: 92px;
  @media (max-width: 640px) {
    height: 64px;
  }
`;
const Cont = css.div`
  width: 100%;
  padding: 0 40px;
  height: 100%;
  @media (max-width: 640px) {
    padding: 0 16px;
    box-sizing: border-box;
    width: 100%;
  }
`;
const Logo = css.img`
  width: 178px;
  height: 42px;
  margin: 22px 0;
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 640px) {
    width: 120px;
    height: 28px;
    margin: 16px 0;
  }
`;
const Nav = css.ul`
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  li{
    line-height: 92px;
    float: left;
    margin-left: ${props => props.wallet ? '35px' : '60px'};
    a{
      color: ${props => props.wallet ? 'rgba(0,0,0,.56)' : '#fff'};
      font-size: 16px;
      font-weight: 400;
      :hover{
        color: ${props => props.wallet ? 'rgb(0,0,0)' : '#eeebeb'};
      }
    }
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const MobileMenu = css.div`
  width: 100px;
  height: 92px;
  line-height: 92px;
  text-align: right;
  color: #fff;
  float: right;
  cursor: pointer;
  width: 30px;
  display: none;
  @media (max-width: 640px) {
    display: block;
    height: 64px;
    line-height: 64px;
  }
`;

const Header = ({ homeDisable, wallet }) => {

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
        _conf.nav_atlas.map((item, index) => (
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
          <Link to="/"><Logo src={wallet ? img_logo_dark : img_logo} /></Link>
        }
        <Nav wallet={wallet}>
          <MenuList />
        </Nav>
        <MobileMenu>
          <Dropdown trigger={['click']} overlay={mobileMenuList}>
            <a style={{height: '100%', color: '#fff', display: 'inline-block'}}>
              <img width="24" src={icon_menu} alt=""/>
            </a>
          </Dropdown>
        </MobileMenu>
        <Toolbar />
      </Cont>
    </Wrap>
  );
};

export default Header;
