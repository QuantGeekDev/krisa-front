import styled from "styled-components";

const KrisaMonitorStyled = styled.div`
  z-index: 0;
  .monitor {
    &__screen {
      display: flex;
      justify-self: center;
      height: 120px;
      width: 160px;
    }
  }

  :hover {
    animation: tilt-n-move-shaking 0.25s infinite;
  }

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
`;
export default KrisaMonitorStyled;
