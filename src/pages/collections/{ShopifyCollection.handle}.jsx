import React from "react";
import FoodView from "../../components/FoodView";
import ItemView from "../../components/ItemView";
import LiquorView from "../../components/LiquorView";

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
                ) : shopifyCollection &&
                  shopifyCollection.title === "Distillati" ? (
                    <LiquorView {...shopifyCollection} />
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
        shopifyCollection(
            id: { eq: $id }
            products: { elemMatch: { status: { eq: ACTIVE } } }
        ) {
            description
            products {
                tags
                handle
                featuredImage {
                    altText
                    src
                    src
                }
                priceRangeV2 {
                    maxVariantPrice {
                        amount
                        currencyCode
                    }
                }
                options {
                    shopifyId
                    name
                    values
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
