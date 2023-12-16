import styled from "styled-components";

const NotificationWindowStyled = styled.div`
  .window ::before,
  .window ::after {
    content: attr(title);
    display: block;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  .window {
    &__header {
      background-color: #000;
    }

    &__sexo-ahora {
      color: #000;
      font-weight: 900;
    }
  }
`;

export default NotificationWindowStyled;
