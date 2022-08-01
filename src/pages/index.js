import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import CategoryView from "../components/CategoryView";
import { useAllShopifyCollection } from "../hooks/collections";

const IndexPage = () => {
    const { allShopifyCollection } = useAllShopifyCollection();
    return (
        <Layout>
            <>
                <div>
                    <div className='flex flex-col items-center mt-2 mb-2'>
                        <div className='max-h-full max-w-64 p-4 bg-cover rounded-lg inline-block mb-4 object-contain'>
                            <StaticImage
                                src='https://cdn.shopify.com/s/files/1/0268/3034/0214/files/Trevisan0_copia_2048x.jpg?v=1589382506'
                                alt='Hero image'
                            />
                        </div>
                        <h1 className='text-3xl text-center mb-4'>
                            Binomio Beer and Wine
                        </h1>
                        <p className='px-4 mb-4 text-gray-800 text-sm'>
                            Via Agliana 18/20 Roma
                        </p>
                    </div>
                    <div className='flex flex-col divide-y-2 divide-gray-300 divide-double'>
                        {allShopifyCollection.edges.map((collection, index) => (
                            <CategoryView
                                key={index}
                                category={collection.node}
                            />
                        ))}
                    </div>
                </div>
            </>
        </Layout>
    );
};

export default IndexPage;
