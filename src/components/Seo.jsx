import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Seo = ({ title, description, children }) => {
    const {
        restaurantName: defaultTitle,
        restaurantDescription: defaultDescription,
    } = useSiteMetadata();

    const seo = {
        restaurantName: title || defaultTitle,

        restaurantDescription: description || defaultDescription,
    };

    return (
        <>
            <title>{seo.restaurantName}</title>
            <meta name='description' content={seo.restaurantDescription} />

            <link
                rel='icon'
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>⚫</text></svg>"
            />
            {children}
        </>
    );
};
