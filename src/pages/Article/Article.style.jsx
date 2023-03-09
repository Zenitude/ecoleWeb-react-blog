import styled from "styled-components";

export const ArticleContainer = styled.article`
    width: 60%;
    min-width: 260px;
    margin: 20px auto;
    ${({dimension}) => dimension > 710 && `text-align: justify;`}
`;

export const ArticleTitle = styled.h1`
    width: 100%;
    font-size: 1.7rem;
    margin-bottom: 20px;
`;

export const ArticleBody = styled.p`
    font-size: 1.2rem;
`; 