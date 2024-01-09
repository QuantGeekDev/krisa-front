import styled, { css } from "styled-components";

const CarouselStyled = styled.div<{ rolling: boolean }>`
  display: flex;
  white-space: nowrap;
  padding: 10px;
  overflow: visible;

  .carousel {
    &__item {
      height: 300px;
      width: auto;
    }
    &__list {
      display: flex;
      gap: 20px;
    }
  }

  ${({ rolling }) =>
    rolling &&
    css`
      transition: transform 1s ease-out;
    `}

  .carousel-item__image {
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
  }
`;

export default CarouselStyled;
