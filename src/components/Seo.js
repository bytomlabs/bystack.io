import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

const keywordList = {
  zh: 'Bystack，BaaS，区块链，Blockchain，比原链，Bytom，MOV，BBFT，Vapor，侧链，跨链，巴比特，长铗，朗豫',
  en: 'Bystack，BaaS，区块链，Blockchain，比原链，Bytom，MOV，BBFT，Vapor，侧链，跨链，巴比特，长铗，朗豫',
};
const descriptionList = {
  zh: 'Bystack是全球首创一主多侧架构BUTXO模型的BaaS平台，为用户提供了开放、稳定、丰富的区块链服务。',
  en: 'Bystack is an enterprise-level Baas platform that helps users to quickly deploy, manage and maintain blockchain networks and commercial blockchain applications.',
};

function SEO({ description, lang, meta, keywords, title, intl, home = false }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={(typeof title === 'string' ? title : title[intl.locale])}
            titleTemplate={`%s`}
            
            meta={[
              {
                name: `description`,
                content: description || descriptionList[intl.locale],
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : {
                    name: `keywords`,
                    content: keywordList[intl.locale],
                  }
              )
              .concat(meta)}
          >
            {
              ['zh', 'en'].map(locale => {
                return <link rel="alternate" href={`https://www.bystack.com/${locale}`} hrefLang={locale} key={locale}/>
              })
            }
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.object,
}

export default injectIntl(SEO);

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
