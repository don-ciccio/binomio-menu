require("dotenv").config();

module.exports = {
    siteMetadata: {
        restaurantName: "Binomio Beer and Wine",
        restaurantLogo:
            "https://cdn.shopify.com/s/files/1/0268/3034/0214/files/Trevisan0_copia_2048x.jpg?v=1589382506",
        restaurantDescription: "Menu per il servizio al tavolo",
        restaurantFooter:
            "Le informazioni circa la presenza di sostanze o di prodotti che provocano allergie o intolleranze sono disponibili rivolgendosi al personale in servizio.",
        instagramLink: "https://www.instagram.com/binomio_beer_and_wine",
        facebookLink: "https://it-it.facebook.com/binomiobeerandwine",
        twitterLink: "https://twitter.com/binomiobistro",
        websiteLink: "https://binomio.store",
    },
    plugins: [
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-source-shopify",
            options: {
                password: process.env.GATSBY_SHOPIFY_PASSWORD,
                storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
                shopifyConnections: ["collections"],
            },
        },
    ],
};
