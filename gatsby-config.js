module.exports = {
  siteMetadata: {
    title: `Statistics | Covid-19`,
    siteUrl: `http://thecovidreport.netlify.com`,
    description: `Covid-19 Daily Report`,
    author: "Francis Calizo",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Covid-19 Report`,
        short_name: `Covid-19 Report`,
        start_url: `/`,
        icon: `src/images/mask.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
