import styled from "styled-components";

const KrisaCardStyled = styled.article`
  display: flex;
  flex-direction: column;

  .krisa {
    &__id {
      font-size: 2rem;
      color: #fff;
      text-align: center;
      padding: 2px;
    }
    &__image {
      height: 330px;
      width: 330px;
      border: solid #fff 3px;
    }
  }
`;

export default KrisaCardStyled;
