import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';


const Contenido = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: justify;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2em; 
    }

    p {
        margin-top: 0;
        line-height: 2;
    }
`;

const ContenidoNosotros = () => {
    const data = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter: { slug: { eq: "nosotros"}}) {
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
                }
            }
        }
    `);

    const { titulo, contenido, imagen } = data.allDatoCmsPagina.nodes[0];
    return (
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{titulo}</h2>
            <Contenido>
                <p>{ contenido }</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt={titulo} />
                
            </Contenido>   
        </>
    )
}

export default ContenidoNosotros;