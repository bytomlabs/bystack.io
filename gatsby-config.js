module.exports = {
  siteMetadata: {
    title: `@bytom/<%= proj_name %>`,
    description: `@bytom/<%= proj_des %>`,
    author: `bytom`,
    siteUrl: 'http://localhost:8128',
  },
  // pathPrefix: '/node',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bytom`,
        short_name: `bytom`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: './src/images/favicon.png',
    //     icons: {
    //       favicons: true,
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/config/i18n`,
        languages: ['zh', 'en'],
        defaultLanguage: `zh`,
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,   // or 'css'
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        siteId: 'dd7582d64c5b0bbbbdad45353cff9873',
        head: false
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150773613-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["BUILD_FOR_TEST"],
      },
    },
  ],
}
