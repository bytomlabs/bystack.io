
import React from 'react';
import { Layout as LayoutAntd, Menu, Breadcrumb, Icon } from 'antd';
import CustomContent from '../../../components/dev/DocContent';
import { FormattedMessage as Msg, injectIntl, IntlContextConsumer, Link } from 'gatsby-plugin-intl';
import Layout from '../../../components/layout/Layout';
import SEO from '../../../components/Seo';
import css from 'styled-components';
import _ajax from 'axios';
import _conf from '../../../config/conf';

const { SubMenu } = Menu;
const { Content, Sider } = LayoutAntd;

const Wrap = css.div`
  .ant-layout{
    background: #fff;
  }
  .ant-menu-vertical > .ant-menu-item, .ant-menu-vertical-left > .ant-menu-item, .ant-menu-vertical-right > .ant-menu-item, .ant-menu-inline > .ant-menu-item, .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title{
    line-height: 30px;
    height: 30px;
  }
`;
const Logo = css.div`
  float: left;
  width: 200px;
  height: 100%;
  color: #1590ff;
  font-size: 28px;
`;
const Header = css.div`
  height: 64px;
  line-height: 64px;
  padding: 0 50px;
  background: #fff;
  flex: 0 0 auto;
  box-sizing: border-box;
  box-shadow: 0 2px 8px #f0f1f2;
`;

class DocHomePage extends React.Component {

  state = {
    loading: false,
    menu: [],
    content: '',
  }

  componentDidMount() {
    this.fetchData();
  }

  filter = (data = []) => {
    const list = [];
    let preNode = void 0;
    let preDepth = 0;
    const pushNode = (nodeList = [], node) => {
      const lastNode = nodeList[nodeList.length - 1];
      if(lastNode) {
        if(node.children){
          pushNode(node.children);
        }
      } else {
        nodeList.push(node);
      }
    }
    data.forEach((item, index) => {
      if(item.depth !== preDepth) {
        pushNode(list, item);
        preDepth = item.depth;
        preNode = item;
      } else {
        preNode.children ? (preNode.children.push(item)) : (preNode.children = [item]);
      }
    });
    
  }

  filter2 = (data) => {
    const menu = [];
    const list = data.map((item, index) => {
      item.index = index;
      return item;
    })
    let curParentIndex = 0;
    list.forEach((item, index) => {
      if(item.depth !== 1){
        if(item.depth !== list[index - 1].depth){
          curParentIndex = list[index - 1].index;
        }
        item.parenIndex = curParentIndex;
      }
    })
    console.log(list);

    const pushNode = (parentIndex, node) => {
      menu.forEach(item =>{
        if(item.index === parentIndex){
          item.children ? item.children.push(node) : (item.children = [node]);
        } else {
          
        }
      })
    }

    list.forEach((item, index) => {
      if(item.parenIndex){

      } else {
        menu.push(item);
      }
    })

    console.log(menu);

  }

  fetchData = () => {
    _ajax.get(_conf.doc_menu).then(res => {
      const list = res.data.data.content;
      const menu = [];
      // console.log(this.filter2(list))
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
        if(item.depth === 3){
          const sparent = menu[menu.length - 1].children[menu[menu.length - 1].children.length - 1];
          if(sparent.children){
            sparent.children.push(item);
          } else {
            sparent.children = [item];
          }
        }
      });
      console.log(menu)
      this.setState({ menu });
    }).catch(err => {
      console.log(err);
    });
  }
  
  render() {
    const { menu } = this.state;
    const { location } = this.props;
    console.log(location.search.split('=')[1])
    const contentHashId = location.search.split('=')[1];
    return (
      <>
        <SEO 
          title="Bystack" 
          
        />
        <Wrap>
          <LayoutAntd style={{minHeight: '100vh'}}>
            <Header style={{background: '#fff'}}>
              <Logo><Link to="/">BYSTACK</Link></Logo>
              <p style={{textAlign: 'right'}}>开发者中心</p>
            </Header>
            <LayoutAntd style={{marginTop: 20}}>
              <Sider width={260} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  style={{ height: '100%', }}
                  defaultSelectedKeys={[contentHashId || 'godnv2']}
                  defaultOpenKeys={['0']}
                >
                  {
                    menu.map((item, index) => (
                      item.children ? 
                        <SubMenu key={index} title={item.title}>
                          {
                            item.children.map((child, childIndex) => (
                              child.children ? 
                                <SubMenu key={index} title={child.title}>
                                  {
                                    child.children.map((schild, schildIndex) =>(
                                      <Menu.Item key={`${schild.slug}`}><Link to={`/devcenter/docs?id=${schild.slug}`}>{schild.title}</Link></Menu.Item> 
                                    ))
                                  }
                                </SubMenu>
                              :
                                <Menu.Item key={`${child.slug}`}><Link to={`/devcenter/docs?id=${child.slug}`}>{child.title}</Link></Menu.Item> 
                            ))
                          }
                        </SubMenu>
                      :
                      <Menu.Item key={index}>{item.title}</Menu.Item> 
                    ))
                  }
                </Menu>
              </Sider>
              <LayoutAntd style={{ padding: '0 24px 24px' }}>
                <Content>
                  <CustomContent id={contentHashId} />
                </Content>
              </LayoutAntd>
            </LayoutAntd>
          </LayoutAntd>
        </Wrap>
      </>
    );
  }
}



export default DocHomePage;
