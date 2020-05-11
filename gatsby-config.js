module.exports = {
  siteMetadata: {
    title: `Nimix 1 Administrativo`,
    description: `Sistema Administrativo bajo Windows`,
    author: `Ing. Rafael E. Urbina N.`,
    keywords: `Sistema Administrativo Nimix1`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `features`,
        path: `${__dirname}/site/content/features`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/site/content/news`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `features`,
        path: `${__dirname}/site/content/slide`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `features`,
        path: `${__dirname}/site/content/weoffer`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `features`,
        path: `${__dirname}/site/content/whytobuy`,
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
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
        icon: `src/images/nimix-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`    
  ],
}
