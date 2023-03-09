import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 50%;
    min-width: 280px;
    margin: 0 auto;
    padding: 0 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & ul {
        list-style-position: inside;
    }
`;

export const ContactTitle = styled.h1`
    margin: 20px auto;
`;