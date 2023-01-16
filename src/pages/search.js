import React, { useState, useEffect } from "react";
import { navigate } from "gatsby-link";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { useAllShopifyProducts } from "../hooks/products";

const SearchView = () => {
    const [search, setSearch] = useState("");
    const { allShopifyProduct } = useAllShopifyProducts();
    const products = allShopifyProduct.edges;

    useEffect(() => {
        setSearch(
            typeof document !== undefined
                ? document.location.search.substring(7).split("=")[0]
                : ""
        );
    }, []);

    return (
        <>
            <Layout>
                <div>
                    <button className='mx-4 my-2' onClick={() => navigate(-1)}>
                        <img src='/arrow-left.svg' alt='Back' />
                    </button>
                    <div className='flex flex-col items-center mt-4 mb-4'>
                        <img src='/search.svg' alt='' className='pb-4' />
                        <h1 className='text-3xl text-center'>Cerca</h1>
                    </div>
                    <div className='flex flex-col divide-y-2 divide-gray-300 divide-double'>
                        <input
                            type='search'
                            className='shadow appearance-none border rounded w-auto mx-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2'
                            aria-label='Search'
                            placeholder='Cerca...'
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                    </div>
                    <div className='flex flex-col divide-y-2 divide-gray-300 divide-double'>
                        {products
                            .filter(
                                (p) =>
                                    p.node.title
                                        .toUpperCase()
                                        .includes(search.toUpperCase()) ||
                                    p.node.productType
                                        .toUpperCase()
                                        .includes(search.toUpperCase()) ||
                                    (p.node.title
                                        .toUpperCase()
                                        .includes(search.toUpperCase()) &&
                                        p.node.productType
                                            .toUpperCase()
                                            .includes(search.toUpperCase()))
                            )
                            .map((p, i) =>
                                !search ? null : (
                                    <Link
                                        to={`/products/${p.node.handle}`}
                                        key={p.node.shopifyId}
                                    >
                                        <div
                                            className='column is-3'
                                            style={{ marginBottom: "40px" }}
                                            key={i}
                                        >
                                            <div
                                                key={p.node.title}
                                                className='min-h-16 w-full p-4 grid grid-cols-4 hover:bg-gray-200 cursor-pointer'
                                            >
                                                <div
                                                    className={
                                                        Boolean(
                                                            p.node.featuredImage
                                                        )
                                                            ? "col-start-1 col-end-4"
                                                            : "col-start-1 col-end-5"
                                                    }
                                                >
                                                    <h2 className='text-xl self-center block w-full mb-1'>
                                                        {p.node.title}
                                                        {Boolean(
                                                            p.node.tags.length
                                                        ) &&
                                                            p.node.tags.map(
                                                                (tag) => (
                                                                    <span
                                                                        key={
                                                                            tag
                                                                        }
                                                                        className='bg-gray-200 text-base px-2 py-1 mx-2 rounded-lg'
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                )
                                                            )}
                                                    </h2>
                                                    <p className='text-sm text-gray-800'>
                                                        {p.node.description}
                                                    </p>

                                                    <p className='text-lg font-bold'>
                                                        {
                                                            p.node.priceRangeV2
                                                                .maxVariantPrice
                                                                .amount
                                                        }{" "}
                                                        €
                                                    </p>
                                                </div>
                                                {Boolean(
                                                    p.node.featuredImage.src
                                                ) && (
                                                    <div className='col-start-4 col-end-5 text-right'>
                                                        <div
                                                            className='h-24 w-24 bg-cover rounded-lg inline-block'
                                                            style={{
                                                                backgroundImage: `url(${p.node.featuredImage.src})`,
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SearchView;
