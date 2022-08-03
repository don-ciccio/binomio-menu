import React from "react";
import { navigate } from "gatsby-link";

import useStore from "../context/StoreContext";
import Layout from "../components/layout";

const CartView = () => {
    const { cart, removeLineItem } = useStore();

    return (
        <>
            <Layout>
                <div>
                    <button className='mx-4 my-2' onClick={() => navigate(-1)}>
                        <img src='/arrow-left.svg' alt='Back' />
                    </button>
                    <div className='flex flex-col items-center mt-4 mb-4'>
                        <img src='/shopping-bag.svg' alt='' className='pb-4' />
                        <h1 className='text-3xl text-center'>Ordine</h1>
                    </div>
                    <div className='flex flex-col divide-y-2 divide-gray-300 divide-double'>
                        {cart.length > 0 ? (
                            cart.map((i, idx) => (
                                <div
                                    key={`${i.selectedVariation}`}
                                    className='min-h-16 w-full grid grid-cols-5 p-2'
                                >
                                    <div className='w-full col-start-1 col-end-5'>
                                        <h2 className='text-xl self-center block w-full'>
                                            {i.product.title}
                                            {i.product.options[0].values
                                                .length > 1
                                                ? ` ( ${i.selectedVariation})`
                                                : null}
                                        </h2>
                                        {Boolean(i.notes && i.notes.length) && (
                                            <p className='text-sm text-gray-800'>
                                                {i.notes}
                                            </p>
                                        )}
                                        <p className='text-gray-900'>
                                            {i.quantity > 1
                                                ? `${i.quantity} x `
                                                : ""}
                                            {
                                                i.product.priceRangeV2
                                                    .maxVariantPrice.amount
                                            }
                                            {i.quantity > 1
                                                ? ` = ${(
                                                      i.quantity *
                                                      parseFloat(
                                                          i.product.priceRangeV2
                                                              .maxVariantPrice
                                                              .amount
                                                      )
                                                  ).toFixed(2)}`
                                                : ""}{" "}
                                            €
                                        </p>
                                    </div>
                                    <div className='col-start-5 col-end-6 text-right'>
                                        <button
                                            className='mr-4'
                                            onClick={() =>
                                                removeLineItem(
                                                    i.product.variants[idx]
                                                        ?.shopifyId
                                                )
                                            }
                                        >
                                            <img
                                                src='/x-circle.svg'
                                                alt='Remove'
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='text-md pt-2 px-4 pb-4 text-gray-800'>
                                Carrello vuoto.
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CartView;
