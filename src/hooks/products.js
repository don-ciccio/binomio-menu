import { graphql, useStaticQuery } from "gatsby";

function useAllShopifyProducts() {
    return useStaticQuery(
        graphql`
            query {
                allShopifyProduct(filter: { status: { eq: ACTIVE } }) {
                    edges {
                        node {
                            productType
                            description
                            handle
                            featuredImage {
                                altText
                                gatsbyImageData
                                src
                            }
                            options {
                                shopifyId
                                name
                                values
                            }
                            variants {
                                shopifyId
                            }
                            priceRangeV2 {
                                minVariantPrice {
                                    amount
                                    currencyCode
                                }
                                maxVariantPrice {
                                    amount
                                    currencyCode
                                }
                            }
                            shopifyId
                            tags
                            title
                            vendor
                        }
                    }
                }
            }
        `
    );
}

export { useAllShopifyProducts };
