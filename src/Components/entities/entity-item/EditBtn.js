import styled from "styled-components";

const EditBtn = styled.button`
    background: #e7f4ff;
    border: none;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 20%);
    &:hover {
        background: #b9dfff;
    }
    &:focus {
        border: none;
    }
`;

export { EditBtn };
