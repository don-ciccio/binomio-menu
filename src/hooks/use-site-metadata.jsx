import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    restaurantName
                    restaurantLogo
                    restaurantDescription
                    restaurantFooter
                    instagramLink
                    facebookLink
                    twitterLink
                    websiteLink
                }
            }
        }
    `);

    return data.site.siteMetadata;
};
