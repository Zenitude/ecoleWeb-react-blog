import styled from "styled-components";
import colors from "../../utils/styles/colors";

export const FormContainer = styled.form`
    width: 50%;
    padding: 0 10px;
    min-width: 280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Container = styled.div`
    width: 100%;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FormLabel = styled.label`
    font-size : 1.2rem;
    min-width: 260px;
`;

export const FormInput = styled.input`
    min-width: 260px;
    font-size: 1.2rem;
    padding: 0 15px;
`;

export const FormMessage = styled.textarea`
    min-width: 260px;
    font-size: 1.2rem;
    padding: 15px;
`;

export const FormButton = styled.button`
    align-self: flex-start;
    padding: 10px 15px;
    background: ${colors.secondary};
    color: ${colors.primary};
    border: none;
    box-shadow: 5px 5px 5px ${colors.black};
    &:hover:active {
        background: ${colors.secondary};
        color: ${colors.primary};
        border: none;
        box-shadow: 0 0 0 ${colors.black};
        position: relative;
        top: 5px;
        left: 5px;
    }
    &:hover {
        background: ${colors.primary};
        color: ${colors.secondary};
        border: 1px solid ${colors.secondary};
    }
`;