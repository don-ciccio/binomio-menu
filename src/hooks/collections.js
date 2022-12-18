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
                                src
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
