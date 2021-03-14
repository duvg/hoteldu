import * as React from "react"
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav';


const LinkHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

const Footer = ({title}) => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer 
            css={css`
                background-color: rgb(44,66,80);
                padding: 1rem;
            `}>
                <div
                    css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    `}
                >

                    <LinkHome to={'/'}>
                    <h1>Hotel DU</h1>
                    </LinkHome>


                    <Navegacion />

                </div>
            </footer>
            <p
                css={css`
                    color: #FFF;
                    text-align: center;
                    background-color:  rgb(44,66,80);
                    margin:0;
                    padding: 1rem;
                `}
            >{title} - Todos los derechos reservados. { year } &copy;</p>
        </>

    )
}

export default Footer;