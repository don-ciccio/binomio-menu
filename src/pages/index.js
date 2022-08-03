import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import CategoryView from "../components/CategoryView";
import { Seo } from "../components/Seo";

import { useAllShopifyCollection } from "../hooks/collections";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const IndexPage = () => {
    const { allShopifyCollection } = useAllShopifyCollection();
    const metadata = useSiteMetadata();
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
                            {metadata.restaurantName}
                        </h1>
                        <p className='text-base px-4 mb-4 text-gray-800'>
                            {metadata.restaurantDescription}
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
                    <p className='text-gray-700 text-sm text-center mt-4 mb-8 px-4'>
                        {metadata.restaurantFooter}
                    </p>
                    <div className='flex flex-row justify-evenly mb-2'>
                        {Boolean(
                            metadata.instagramLink &&
                                metadata.instagramLink.trim()
                        ) && (
                            <a
                                href={metadata.instagramLink}
                                rel='nofollow noreferrer'
                                target='_blank'
                            >
                                <img src='/instagram.svg' alt='Instagram' />
                            </a>
                        )}
                        {Boolean(
                            metadata.facebookLink &&
                                metadata.facebookLink.trim()
                        ) && (
                            <a
                                href={metadata.facebookLink}
                                rel='nofollow noreferrer'
                                target='_blank'
                            >
                                <img src='/facebook.svg' alt='Facebook' />
                            </a>
                        )}
                        {Boolean(
                            metadata.twitterLink && metadata.twitterLink.trim()
                        ) && (
                            <a
                                href={metadata.twitterLink}
                                rel='nofollow noreferrer'
                                target='_blank'
                            >
                                <img src='/twitter.svg' alt='Twitter' />
                            </a>
                        )}
                        {Boolean(
                            metadata.websiteLink && metadata.websiteLink.trim()
                        ) && (
                            <a
                                href={metadata.websiteLink}
                                rel='nofollow noreferrer'
                                target='_blank'
                            >
                                <img src='/globe.svg' alt='Website' />
                            </a>
                        )}
                    </div>
                </div>
            </>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
