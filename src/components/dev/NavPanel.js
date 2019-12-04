import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import Button from '../Button';
import { FormattedMessage as Msg, injectIntl, Link } from 'gatsby-plugin-intl';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import _ajax from 'axios';
import _conf from '../../config/conf';

import img_icon from '../../images/dev/icon.png';

const Wrap = css.div`
  width: 1160px;
  height: 1600px;
  margin: 0 auto;
  padding-top: 30px;
`;
const Panel = css(ScrollAnim.OverPack)`
  min-height: 200px;
  &>ul{
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
const Card = css.li`
  width: 33%;
  display: flex;
  margin-top: 100px;
  &>img{
    width: 78px;
    height: 78px;
    padding: 18px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.039);
    border-radius: 100%;
  }
  &>div{
    margin-left: 30px;
    h1{
      font-size: 24px;
      color: #000;
    }
    ul{
      margin-top: 30px;
      li{
        margin-top: 12px;
      }
      a{
        font-size: 16px;
        line-height: 1em;
        color: rgba(0, 0, 0, .56);
      }
    }
  }

`;

function NavPanel() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    _ajax.get(_conf.doc_menu).then(res => {
      const list = res.data.data.content;
      const menu = [];
      list.forEach(item => {
        if(item.depth === 1){
          menu.push(item);
        }
        if(item.depth === 2){
          const parent = menu[menu.length - 1];
          if(parent.children){
            parent.children.push(item);
          } else {
            parent.children = [item];
          }
        }
      });
      const menus = menu.reduce((preItem, item, index) => {
        if(index % 3 === 0){
          preItem.push([item]);
        } else {
          preItem[preItem.length - 1].push(item);
        }
        return preItem;
      }, []);
      setMenu(menus);
      setLoading(false);
    }).catch(err => {
      console.log(err);
      setLoading(false);
    });
  };

  if(loading) {
    return <div style={{ marginTop: 100, textAlign: 'center', fontSize: '26px', color: '#ccc'}}><Icon type="loading" spin /></div>
  }

  return (
    <Wrap>
      {
        menu.map((panel, panelIndex) => (
          <Panel key={panelIndex} playScale={panelIndex === 0 ? 0.2 : 0.3} always={false}>
            <QueueAnim type={'bottom'} component={'ul'}>
              {
                panel.map((item, index) =>(
                  <Card key={index}>
                    <img src={img_icon} alt=""/>
                    <div>
                      <h2>{item.title}</h2>
                      {item.children && (
                        <ul>
                          {
                            item.children.map((child, childIndex) => (
                              <li key={childIndex}><Link to={`/devcenter/docs?id=${child.slug}`}>{child.title}</Link></li>
                            ))
                          }
                        </ul>
                      )}
                    </div>
                  </Card>
                ))
              }
            </QueueAnim>
          </Panel>
        ))
      }
    </Wrap>
  )
}

export default NavPanel;
