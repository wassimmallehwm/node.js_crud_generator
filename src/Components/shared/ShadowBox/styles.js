import styled from "styled-components";

const StyledShadowBox = styled.div`
  display: flex;
  min-width: 200px;
  height: 100%;
  background: white;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  flex-grow: 1;
  flex-basis: 200px;
  overflow: auto;
`;

export { StyledShadowBox };
