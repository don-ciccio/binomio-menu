import { graphql } from "gatsby";
import useStore from "../../context/StoreContext";
import React, { useState, useRef } from "react";
import Layout from "../../components/layout";
import { navigate } from "gatsby-link";

const ProductPage = (props) => {
    const [selectedVariation, setSelectedVariation] = useState("");
    const [quantity, setQuantity] = useState(1);
    const notesInput = useRef(null);
    const { addVariantToCart } = useStore();

    const {
        data: { shopifyProduct },
    } = props;
    const withVariations = shopifyProduct.options[0].values.length > 1;

    const addToCart = (e) => {
        e.preventDefault();
        const notes =
            notesInput.current && notesInput.current.value.trim().length > 0
                ? notesInput.current.value.trim()
                : null;
        addVariantToCart(shopifyProduct, quantity, notes, selectedVariation);
    };
    console.log(selectedVariation);
    return (
        <Layout>
            <>
                <button className='mx-4 my-2' onClick={() => navigate(-1)}>
                    <img src='/arrow-left.svg' alt='Back' />
                </button>
                <div className='flex flex-col items-center mt-4 mb-4'>
                    {Boolean(shopifyProduct.featuredImage.gatsbyImageData) && (
                        <div className='col-start-4 col-end-5 text-right'>
                            <div
                                className='h-48 w-64 bg-cover rounded-lg inline-block'
                                style={{
                                    backgroundImage: `url(${shopifyProduct.featuredImage.src})`,
                                }}
                            />
                        </div>
                    )}
                    <h1 className='text-3xl text-center'>
                        {shopifyProduct.title}
                    </h1>
                    <p className='text-md pt-2 px-4 pb-4 text-gray-800'>
                        {shopifyProduct.description}
                    </p>
                    {withVariations ? (
                        <div className='flex flex-col divide-y-2 divide-gray-300 divide-double w-full'>
                            {shopifyProduct.options[0].values.map((v, i) => (
                                <button
                                    key={i}
                                    className='min-h-16 w-full p-4 grid grid-cols-8 hover:bg-gray-200 cursor-pointer'
                                    onClick={() => {
                                        setSelectedVariation(v);
                                    }}
                                >
                                    {selectedVariation === v && (
                                        <img src='/check.svg' alt='Selected' />
                                    )}
                                    <div className='col-start-2 col-end-7 text-left'>
                                        {v}
                                    </div>
                                    <div className='col-start-7 col-end-9'>
                                        {
                                            shopifyProduct.priceRangeV2
                                                .maxVariantPrice.amount
                                        }{" "}
                                        €
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className='text-xl font-bold'>
                            {shopifyProduct.priceRangeV2.maxVariantPrice.amount}{" "}
                            €
                        </p>
                    )}
                    <form className='w-full grid grid-cols-5 mt-4 pt-4 items-center pb-4 border-t-2 border-gray-200'>
                        <p className='col-start-1 col-end-6 text-center text-lg pb-2'>
                            Quantità:
                        </p>
                        <button
                            className='col-start-2 col-end-3 text-lg flex flex-row justify-center w-8 h-8 mx-auto'
                            onClick={(e) => {
                                e.preventDefault();
                                if (quantity > 1) setQuantity(quantity - 1);
                            }}
                        >
                            <img
                                src='/minus-circle.svg'
                                alt='Decrease quantity'
                                height='32'
                                width='32'
                            />
                        </button>
                        <div className='col-start-3 col-end-4 text-center w-full text-3xl'>
                            {quantity}
                        </div>
                        <button
                            className='col-start-4 col-end-5 flex flex-row justify-center w-8 h-8 mx-auto'
                            onClick={(e) => {
                                e.preventDefault();
                                setQuantity(quantity + 1);
                            }}
                        >
                            <img
                                src='/plus-circle.svg'
                                alt='Increase quantity'
                                height='32'
                                width='32'
                            />
                        </button>
                        <textarea
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline col-start-2 col-end-5 mt-2'
                            aria-label='Note'
                            placeholder='Note...'
                            ref={notesInput}
                        />
                        <button
                            className='col-start-2 col-end-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
                            onClick={(e) => addToCart(e)}
                        >
                            Aggiungi
                        </button>
                    </form>
                </div>
            </>
        </Layout>
    );
};

export default ProductPage;

export const query = graphql`
    query ($id: String!) {
        shopifyProduct(status: { eq: ACTIVE }, id: { eq: $id }) {
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
`;
