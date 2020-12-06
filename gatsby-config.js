require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `src/images/bolderlogo.png`,
    description: `Looking for somewhere to eat in Boulder CO? Look no further than Bolders Pub! We offer something for everyone!`,
    author: `@Matt McCarthy`,
    // siteUrl: `http://localhost:8000`,
    // disqus: {
    //   shortName: process.env.GATSBY_DISQUS_NAME,
    // },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://gmail.us7.list-manage.com/subscribe/post?u=2eb62c489c8fc63ed37a17e64&amp;id=320c30bd69`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bolderlogo.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
