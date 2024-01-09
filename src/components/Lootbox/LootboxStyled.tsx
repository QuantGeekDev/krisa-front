import styled from "styled-components";

const LootboxStyled = styled.div`
  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    70%,
    90% {
      transform: translateX(-3px);
    }
    20%,
    80% {
      transform: translateX(10px);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  max-width: 500px;

  .lootbox {
    &__roll-button {
      padding: 30px;
      font-family: "ms_sans_serif";
      font-size: 1.25rem;
      background-color: #1d1d1b;
      border-style: none;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }

    &__roll-button:hover {
      background-color: #c6c6c6;
      color: #1d1d1b;
    }

    &__roll-button:active {
      transform: scale(0.9);
      box-shadow: 0 2px 6px #000c;
    }

    &__viewport {
      position: relative;
      overflow: hidden;
      width: 100%;
    }
  }
`;

export default LootboxStyled;
