// gatsby-config.js
const path = require('path')
const fs = require('fs')

console.log('lksjdlksjdlks', path.join(__dirname, 'content/posts'))
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
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/gatsby-theme-blog`,
        contentPath: path.join(__dirname, 'content/posts'),
        assetPath: path.join(__dirname, 'content/assets'),
      },
    },
  ],
}
