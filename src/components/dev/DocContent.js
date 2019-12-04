import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import _ajax from 'axios';
import _conf from '../../config/conf';


const Wrap = css.div`
  padding: 20px;
  font-size: 14px;
  line-height: 1.8em;
`;
const Article = css.div`
  max-width: 800px;
  margin: 0 auto;
  // font-family: 'Tahoma For Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
`;
const Title = css.h1`
  margin: 20px 0 42px 0;
  font-size: 36px;
`;

function DocContent({ id, }) {

  const [content, setContent] = useState({});

  useEffect(() => {
    console.log(id);
    fetchData(id);
  }, [id]);

  const fetchData = (id = 'godnv2') => {
    _ajax.get(`${_conf.doc_detail}?id=${id}`).then( res => {
      console.log(res);
      setContent(res.data.data);
    }).catch(err => console.log(err));
  }

  return (
    <Wrap>
      <Article>
        <Title>{content.title}</Title>
        <article dangerouslySetInnerHTML={{ __html: content.body_html }}></article>
      </Article>
    </Wrap>
  )
}

export default DocContent;
