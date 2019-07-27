// gatsby-config.js
const path = require('path')
const fs = require('fs')

module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Blog Title`,
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        // basePath defaults to `/`
        basePath: `/gatsby-theme-notes`,
        contentPath: 'gatsby-theme-notes/content/notes',
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // // basePath defaults to `/`
        basePath: `/gatsby-theme-blog`,
        contentPath: 'gatsby-theme-blog/content/posts',
        assetPath: 'gatsby-theme-blog/content/assets',
      },
    },
    // {
    //   resolve: `@joshkennedy00/gatsby-theme-blog-remix`,
    //   options: {
    //     // basePath defaults to `/`
    //     basePath: `/gatsby-theme-blog-remix`,
    //     contentPath: 'gatsby-theme-blog-remix/content/posts',
    //     assetPath: 'gatsby-theme-blog-remix/content/assets',
    //   },
    // },
    // 'gatsby-theme-powerboard-base',
    // {
    //   resolve: `gatsby-theme-stripe-checkout-button`,
    //   options: {
    //     STRIPE_API_KEY: 'pk_test_sCZdKKv3RLpcLwCLybjQVKQE004MOo7pXE',
    //     STRIPE_SECRET_KEY: POTATO,
    //     siteUrl: 'https://gatsby-theme-stripe-checkout-button-example.netlify.com',
    //   },
    // },
  ],
}
