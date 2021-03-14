import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Card = styled.div`
    border: 1px solid #e1e1e1;
    margin-bottom: 2rem;
    border-radius: 5px;
    box-shadow: 0px 5px 10px -2px rgba(0,0,0, .1);
`;

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80, .85);
    width: 100%;
    color: #FFF; 
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border-radius: 3px;
`;

const HabitacionPreview = ({habitacion}) => {

    const {titulo, contenido, imagen, slug} = habitacion;
    return (
        <Card>
            <GatsbyImage 
                css={css`
                    border-radius: 5px 5px 0px 0px;
                `}
                image={imagen.gatsbyImageData} 
                alt="inicio" 
            />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        text-align: center;
                        font-size: 2.5rem;
                    `}
                >{titulo}</h3>
                <p
                    css={css`
                        text-align: justify;
                    `}
                >{contenido}</p>

                <Boton to={slug}>Ver Habitacción</Boton>
            </div>
        </Card>
    )
}

export default HabitacionPreview;
