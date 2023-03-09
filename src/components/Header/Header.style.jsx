import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import colors from "../../utils/styles/colors";

export const HeaderContainer = styled.header`
    width: 100%;
    min-height: 70px;
    background: ${colors.secondary};
    position: relative;
`;

export const Navigation = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({dimension}) => dimension < 400 ? 'column' : 'row'};
    ${({dimension}) => dimension < 400 && `
        transform: translateY(70px);
    `}
    ${({dimension}) => dimension > 400 && `
        justify-content: center;
        align-items:center;
        gap: 20px;
    `}
`;

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.primary};
    ${({dimension}) => dimension < 400 && `
        width: 100%;
        border-top: 1px solid ${colors.primary};
        line-height: 70px;
        background-color: ${colors.secondary};
    `}
`;

export const BurgerMenu = styled.button`
    width: 50px;
    height: 50px;
    margin: auto 0;
    background: transparent;
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
    & svg{
        width: 75%;
        height: 75%;
        fill: ${colors.primary};
        font-size: 1.5rem;
    }
`;