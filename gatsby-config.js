module.exports = {
  siteMetadata: {
    title: "Frontsigner",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-TQNSZP62DW",
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
};