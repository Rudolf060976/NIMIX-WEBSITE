require('dotenv').config();

console.log(process.env.CLOUDINARY_CLOUD_NAME);

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
        name: `slide`,
        path: `${__dirname}/site/content/slide`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `weoffer`,
        path: `${__dirname}/site/content/weoffer`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `whytobuy`,
        path: `${__dirname}/site/content/whytobuy`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `restaurant`,
        path: `${__dirname}/site/content/restaurant`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hardwarestore`,
        path: `${__dirname}/site/content/hardwarestore`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `liquorstore`,
        path: `${__dirname}/site/content/liquorstore`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shops`,
        path: `${__dirname}/site/content/shops`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `questions`,
        path: `${__dirname}/site/content/questions`,
      }
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      resourceType: `image`,
      type: `upload`,
      prefix: `samples/`
      }
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      resourceType: `video`,
      type: `upload`,
      prefix: `nimix-videos/`
      }
    },
    `gatsby-transformer-remark`,
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
