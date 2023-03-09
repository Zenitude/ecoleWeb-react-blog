import styled from "styled-components";
import colors from "../../utils/styles/colors";

export const FooterContainer = styled.footer`
    width: 100%;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow : 0 0 5px ${colors.black};
    margin-top: 20px;
    & p{
        font-weight: bold;
        font-size: 1.3rem;
    }
`;