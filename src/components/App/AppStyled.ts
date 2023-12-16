import styled from "styled-components";

const AppStyled = styled.section`
  display: flex;

  height: 100%;
  min-height: 100vh;

  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1b;

  & h1 {
    color: #fff;
  }
`;

export default AppStyled;
