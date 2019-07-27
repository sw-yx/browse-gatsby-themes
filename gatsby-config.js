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
    {
      resolve: 'gatsby-starter-morning-dew',
      options: {},
    },
  ],
}
