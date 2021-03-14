import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/core'; 

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: { eq: $slug} }) {
            nodes {
                titulo
                contenido
                imagen {
                    gatsbyImageData (
                            width: 1000,
                            placeholder: BLURRED,
                            forceBlurhash: false,
                        )
                } 
                id
                slug
            }
        }
    }
`;

const HabitacionesTemplate = ({data: { allDatoCmsHabitacion: { nodes } }}) => {
    
    const { titulo, contenido, imagen } = nodes[0];

    return (
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;

                    `}
                >{titulo}</h1>

                <p>{contenido}</p>
                
                <GatsbyImage 
                    image={imagen.gatsbyImageData} 
                    alt={titulo} 
                    css={ css`
                        width:100%;
                        border-radius: 2px`
                    }
                />
            </main>  
        </Layout>
    )
}

export default HabitacionesTemplate;
