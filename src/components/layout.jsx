import React from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";

import useStore from "../context/StoreContext";

const Layout = ({ children }) => {
    const { cart } = useStore();
    const totalPrice = cart.reduce((a, i) => {
        a +=
            parseFloat(i.product.priceRangeV2.maxVariantPrice.amount) *
            i.quantity;
        return a;
    }, 0.0);

    return (
        <>
            <div className='container mx-auto max-w-3xl pt-4 pb-20 min-h-screen flex flex-col justify-between'>
                {children}
            </div>
            <div className='font-sans fixed bottom-0 left-0 right-0 h-16 border-t-2 border-gray-200 bg-white grid grid-cols-12'>
                <Link
                    to='/'
                    className='col-start-1 col-end-3 flex items-center justify-center'
                >
                    <img src='/home.svg' alt='' className='px-4' />
                    <span className='hidden sm:inline'>Home</span>
                </Link>

                <button
                    onClick={() => navigate("/cart")}
                    className='col-start-3 col-end-11 text-2xl'
                >
                    {totalPrice.toFixed(2)} €
                </button>
                <Link
                    to='/search'
                    className='col-start-11 col-end-13 flex items-center justify-center'
                >
                    <img src='/search.svg' alt='' className='px-4' />
                    <span className='hidden sm:inline'>Cerca</span>
                </Link>
            </div>
        </>
    );
};

export default Layout;
