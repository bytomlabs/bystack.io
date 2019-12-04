import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-components';
import { FormattedMessage as Msg, IntlContextConsumer, changeLocale, Link } from 'gatsby-plugin-intl';
import { Icon, Dropdown, Menu } from 'antd';
import Button from './Button'
import { lang } from 'moment';

const Wrap = css.div`
  display: block;
  float: right;
  height: 92px;
  font-size: 16px;
  ul{
    display: flex;
    align-items: center;
    height: 100%;
    li{
      margin: 0 10px;
      cursor: pointer;
      a{
        color: #fff;
        &:hover{
          color: #fff;
        }
      }
      &:hover{
        color: #fff;
        i{
          color: #fff;
        }
      }
      i{
        color: #ADB3BB;
        font-size: 22px;
        vertical-align: -8px;
      }
    }
  }
  @media (max-width: 640px) {
    height: 64px;
    line-height: 64px;
    ul li i{
      color: #fff;
    }
  }
`;
const Line = css.span`
  width: 1px;
  height: 18px;
  background-color: #ADB3BB;
  display: inline-block;
  vertical-align: -3px;
  margin: 0 20px;
`;

function Toolbar() {
  return (
    <Wrap>
      <ul>
        {/* <li><Button size="xs" type="success"><a href="https://bc.bystack.com">控制台</a></Button></li> */}
        {/* <li><Line /></li> */}
        <li><a target="_blank" href="https://github.com/Bytom/vapor"><Icon type="github" /></a></li>
        <li>
          <IntlContextConsumer>
            {
              ({languages, language}) => (
                <>
                  <Dropdown overlay={
                    <Menu>
                      <Menu.Item key="0">
                        <a onClick={() => changeLocale('zh')}>中文</a>
                      </Menu.Item>
                      <Menu.Item key="1">
                        <a onClick={() => changeLocale('en')}>English</a>
                      </Menu.Item>
                    </Menu>
                  }>
                    <Icon type="global" />
                  </Dropdown>
                </>
              )
            }
          </IntlContextConsumer>
        </li>
      </ul>
    </Wrap>
  );
}

Toolbar.propTypes = {

};

export default Toolbar;