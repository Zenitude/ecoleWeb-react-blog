import styled from "styled-components";
import colors from "../../utils/styles/colors";

export const CardContainer = styled.article`
    width: 100%;
    max-width: 296px;
    min-width: 260px;
    margin: 0 auto;
    height: 260px;
    box-shadow: 0 0 5px ${colors.black};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`;

export const CardTitle = styled.h2``;