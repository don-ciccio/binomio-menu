import React from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";
import groupBy from "../utils/functions";

const LiquorView = (props) => {
    const { products, title } = props;
    let distillati = groupBy(products, "productType");

    return (
        <>
            <button className='mx-4 my-2' onClick={() => navigate(-1)}>
                <img src='/arrow-left.svg' alt='Back' />
            </button>
            <div className='flex flex-col items-center mt-8 mb-4'>
                <h1 className='text-3xl text-center'>{title}</h1>
            </div>
            <div className='flex flex-col divide-y-2 divide-gray-300 divide-double'>
                <h2 className='pl-4 font-bold text-3xl self-center block w-full mb-5'>
                    Whisky
                </h2>
                {distillati.Whisky.map((i) => {
                    const withVariations = i.options[0].values.length > 1;

                    return (
                        <Link to={`/products/${i.handle}`} key={i.shopifyId}>
                            <div className='min-h-16 w-full p-4 grid grid-cols-4 hover:bg-gray-200 cursor-pointer'>
                                <div
                                    className={
                                        Boolean(i.featuredImage.gatsbyImageData)
                                            ? "col-start-1 col-end-4"
                                            : "col-start-1 col-end-5"
                                    }
                                >
                                    <h2 className='font-semibold text-xl self-center block w-full mb-1'>
                                        {i.title.toUpperCase()}
                                        {Boolean(i.tags.length) &&
                                            i.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className='bg-gray-200 text-base px-2 py-1 mx-2 rounded-lg break-words'
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                    </h2>

                                    <p className='text-sm text-gray-800'>
                                        {i.description.length < 300
                                            ? i.description
                                            : i.description.slice(0, 300) +
                                              "..."}
                                    </p>
                                    {withVariations ? (
                                        <span className='bg-black text-white px-2 py-1 rounded-md'>
                                            {i.options[0].values.length} opzioni
                                        </span>
                                    ) : (
                                        <p className='text-lg font-bold'>
                                            {
                                                i.priceRangeV2.maxVariantPrice
                                                    .amount
                                            }{" "}
                                            €
                                        </p>
                                    )}
                                </div>
                                {Boolean(i.featuredImage) && (
                                    <div className='col-start-4 col-end-5 text-right'>
                                        <div
                                            className='h-24 w-24 bg-cover rounded-lg inline-block'
                                            style={{
                                                backgroundImage: `url(${i.featuredImage.src})`,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className='flex flex-col divide-y-2 divide-gray-300 divide-double'>
                <h2 className='pl-4 font-bold text-3xl self-center block w-full mb-5'>
                    Whisky
                </h2>
                {distillati.Bourbon.map((i) => {
                    const withVariations = i.options[0].values.length > 1;

                    return (
                        <Link to={`/products/${i.handle}`} key={i.shopifyId}>
                            <div className='min-h-16 w-full p-4 grid grid-cols-4 hover:bg-gray-200 cursor-pointer'>
                                <div
                                    className={
                                        Boolean(i.featuredImage.gatsbyImageData)
                                            ? "col-start-1 col-end-4"
                                            : "col-start-1 col-end-5"
                                    }
                                >
                                    <h2 className='font-semibold text-xl self-center block w-full mb-1'>
                                        {i.title.toUpperCase()}
                                        {Boolean(i.tags.length) &&
                                            i.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className='bg-gray-200 text-base px-2 py-1 mx-2 rounded-lg break-words'
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                    </h2>

                                    <p className='text-sm text-gray-800'>
                                        {i.description.length < 300
                                            ? i.description
                                            : i.description.slice(0, 300) +
                                              "..."}
                                    </p>
                                    {withVariations ? (
                                        <span className='bg-black text-white px-2 py-1 rounded-md'>
                                            {i.options[0].values.length} opzioni
                                        </span>
                                    ) : (
                                        <p className='text-lg font-bold'>
                                            {
                                                i.priceRangeV2.maxVariantPrice
                                                    .amount
                                            }{" "}
                                            €
                                        </p>
                                    )}
                                </div>
                                {Boolean(i.featuredImage) && (
                                    <div className='col-start-4 col-end-5 text-right'>
                                        <div
                                            className='h-24 w-24 bg-cover rounded-lg inline-block'
                                            style={{
                                                backgroundImage: `url(${i.featuredImage.src})`,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default LiquorView;
