require("dotenv").config({
  path: ".env"
})

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `A simple portfolio made in react`,
    author: `petizad55@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GATSBY_API_TOKEN,
        graphQLQuery:`
        query getRepos {
          user(login: "petaripetrov") {
              pinnedItems(last: 10) {
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      url
                    }
                  }
                }
              }
            }
          }
        `
      }
    }
  ],
}
