import React, { Component } from 'react';
import css from 'styled-components';
import { IntlContextConsumer } from 'gatsby-plugin-intl'; // FormattedMessage as Msg, Link,
import { format } from 'date-fns';
import { Carousel, Icon } from 'antd';
import ajax from 'axios';

import _conf from '../config/conf';

const LeftArrow = css.div`
  border: 1px solid #fff;
  width: 54px;
  height: 54px;
  color: #fff;
  border-radius: 100%;
  font-size: 30px;
  line-height: 54px;
  text-align: center;
  font-weight: 200;
  position: absolute;
  top: 80px;
  left: -100px;
  cursor: pointer;
  transition: all .1s;
  transform: scale(0);
`;
const Wrap = css.div`
  width: 100%;
  margin-top: 80px;
  padding: 32px 0;
  height: 298px;
  // background: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(240,240,240,1) 100%);
  &>div{
    width: 1140px;
    margin: 0 auto;
    position: relative;
  }
  &:hover ${LeftArrow}{
    transform: scale(1);
  }
  @media (max-width: 640px) {
    margin-top: 10px;
    &>div{
      box-sizing: border-box;
      overflow: hidden;
      width: 100%;
      padding: 0 20px;
    }
  }
`;
const Item = css.div`
  width: 255px;
  height: 234px;
  padding: 0 15px;
  img{
    width: 100%;
    height: 153px;
  }
  h1{
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    margin: 8px 0;
    line-height: 1.5em;
    display: -webkit-box;   
    overflow: hidden;   
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
  p{
    color: #808A95;
    font-size: 13px;
    font-weight: 300;
  }
`;

const RightArrow = css(LeftArrow)`
  right: -100px;
  left: auto;
`;
const Loading = css.div`
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
`;

class News extends Component {

  state = {
    list: [],
    loading: false,
  }

  componentDidMount() {
    const { language } = this.props;
    this.fetchData(language);
  }

  fetchData = (lang = 'zh') => {
    this.setState({ loading: true });
    const path = lang === 'zh' ? _conf.news_cn : _conf.news_en;
    ajax.get(path).then(res => {
      this.setState({
        list: res.data.data,
      });
      this.setState({ loading: false });
    }).catch(err => {
      console.log(err);
      this.setState({ loading: false });
    })
  }
  
  render() {
    const { list, loading } = this.state;

    if(loading) {
      return (
        <Wrap><Loading><Icon type="loading" spin /></Loading></Wrap>  
      )
    }
    return (
      <Wrap>
        <div>
          <LeftArrow onClick={() => this.slider.prev()}><Icon type="left" /></LeftArrow>
          <RightArrow onClick={() => this.slider.next()}><Icon type="right" /></RightArrow>
          <Carousel
            slidesToShow={4}
            slidesToScroll={1}
            dots={false}
            ref={c => (this.slider = c)}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1.05,
                  slidesToScroll: 1,
                  initialSlide: 0
                }
              },
            ]}
          >
            {
              list.map((item, index) => (
                <Item key={item.uuid || index}>
                  <a target="_blank" rel="noopener noreferrer" href={item.url}>
                    <img src={_conf.imgage_host + item.image} alt=""/>
                    <h1>{item.title}</h1>
                    <p>{format(item.time, 'YYYY-MM-DD')}</p>
                  </a>
                </Item>
              ))
            }
          </Carousel>
        </div>
      </Wrap>
    )
  }
}

function NewsPanel() {
  return (
    <IntlContextConsumer>
      {
        ({language}) => (
          <News language={language} />
        )
      }
    </IntlContextConsumer>
  );
}

export default NewsPanel;