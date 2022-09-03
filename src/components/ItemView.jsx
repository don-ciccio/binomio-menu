import React from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";

const ItemView = (props) => {
    const { products, title } = props;

    return (
        <>
            <button className='mx-4 my-2' onClick={() => navigate(-1)}>
                <img src='/arrow-left.svg' alt='Back' />
            </button>
            <div className='flex flex-col items-center mt-8 mb-4'>
                <h1 className='text-3xl text-center'>{title}</h1>
            </div>
            <div className='flex flex-col divide-y-2 divide-gray-300 divide-double'>
                {products.map((i) => {
                    const withVariations = i.priceRangeV2.length > 1;

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
                                            {i.priceRangeV2.length} options
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

export default ItemView;
