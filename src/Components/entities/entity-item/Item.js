import styled from "styled-components";

const Item = styled.div`
    padding: 0.5rem;
    margin: 0.2rem 0;
    height: 40px;
    border-bottom: 0.5px solid lightgray;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background: #f4f4f4;
    }
`;

export { Item };
