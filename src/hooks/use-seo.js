import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSeo = () => {

    const data = useStaticQuery(graphql`
        query {
            datoCmsSite {
                globalSeo {
                    titleSuffix
                    siteName
                    fallbackSeo {
                        title
                        description
                        twitterCard
                    }
                }
            }
        }

    `);

    return data.datoCmsSite.globalSeo;
}

export default useSeo;