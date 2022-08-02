import React from "react";
import FoodView from "../../components/FoodView";
import ItemView from "../../components/ItemView";

import { graphql } from "gatsby";
import Layout from "../../components/layout";

const CollectionPage = (props) => {
    const {
        data: { shopifyCollection },
    } = props;

    return (
        <>
            <Layout>
                {shopifyCollection && shopifyCollection.title === "Menu" ? (
                    <FoodView {...shopifyCollection} />
                ) : (
                    <ItemView {...shopifyCollection} />
                )}
            </Layout>
        </>
    );
};

export default CollectionPage;

export const query = graphql`
    query ($id: String!) {
        shopifyCollection(id: { eq: $id }) {
            description
            products {
                tags
                handle
                featuredImage {
                    altText
                    gatsbyImageData
                    src
                }
                priceRangeV2 {
                    maxVariantPrice {
                        amount
                        currencyCode
                    }
                }
                shopifyId
                title
                description
                productType
            }
            shopifyId
            title
        }
    }
`;
