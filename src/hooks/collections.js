import { graphql, useStaticQuery } from "gatsby";

function useAllShopifyCollection() {
    return useStaticQuery(
        graphql`
            {
                allShopifyCollection(sort: { fields: [title] }) {
                    edges {
                        node {
                            description
                            handle
                            image {
                                altText
                                gatsbyImageData
                            }
                            shopifyId
                            title
                        }
                    }
                }
            }
        `
    );
}

export { useAllShopifyCollection };
