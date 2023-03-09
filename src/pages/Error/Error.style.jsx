import { Link } from 'react-router-dom';
import styled from "styled-components";
import colors from '../../utils/styles/colors';

export const ErrorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    & svg{
        width: 60%;
        fill: ${colors.secondary}
    };
`;

export const ErrorParagraph = styled.p`
    font-size: 1.5rem;
`;

export const ErrorLink = styled(Link)`
    color: ${colors.secondary};
`;