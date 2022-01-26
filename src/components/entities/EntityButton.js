import styled from "styled-components";

const EntityButton = styled.button`
    background: ${props => props.color ? props.color : "#b3b3b33"};
    border: none;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    position: ${props => props.absolute ? "absolute" : ""};
    right: ${props => props.top ? props.top + 'px' : "30px"};
    top: ${props => props.top ? props.top + 'px' : "40px"};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 20%);
    &:hover {
        background: ${props => props.hover ? props.hover : "#7c7c7c8a"};
    }
    &:focus {
        border: none;
    }
`;

export { EntityButton };
