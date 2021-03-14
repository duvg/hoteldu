import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2em;
    }

    p {
        margin-top: 0;
        line-height: 2;
        text-align: justify;
    }
`;

const ContenidoInicio = () => {

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter: { slug: { eq: "inicio"}}) {
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
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{ titulo }</h2>
            <TextoInicio>
                <p>{ contenido }</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt={titulo} />
            </TextoInicio>
        </>
    )
}

export default ContenidoInicio;

