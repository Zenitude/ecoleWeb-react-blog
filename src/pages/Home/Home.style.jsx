import styled from "styled-components";

export const TitleHome = styled.h1`
    width: 100%;
    text-align: center;
    margin: 20px 0;
`;

export const ContainerArticles = styled.div`
    width: 100%;
    max-width: 1240px;
    min-width: 280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;