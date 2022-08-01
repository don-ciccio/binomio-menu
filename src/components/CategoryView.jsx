import React from "react";
import { Link } from "gatsby";

const CategoryView = ({ category }) => {
    return (
        <Link to={`/collections/${category.handle}`}>
            <div
                key={category.shopifyId}
                className='h-16 w-full flex hover:bg-gray-200 p-4 cursor-pointer'
            >
                <h2 className='text-2xl self-center'>{category.title}</h2>
            </div>
        </Link>
    );
};

export default CategoryView;
