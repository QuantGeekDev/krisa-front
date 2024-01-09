import styled from "styled-components";

const TarotStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .tarot {
    &__space {
      height: 50px;
    }
    &__title {
      font-size: 2rem;
      color: #fff;
    }
    &__pull-card {
      background-color: #eee;
      color: #000;
      font-size: 1.25rem;

      &:hover {
        background-color: #000;
        color: #eee;
      }
    }

    &__try-again {
      background-color: #eee;
      color: #000;
      font-size: 1.25rem;

      &:hover {
        background-color: #000;
        color: #eee;
      }
    }

    &__card {
      height: 400px;
      width: auto;
    }
  }
`;

export default TarotStyled;
