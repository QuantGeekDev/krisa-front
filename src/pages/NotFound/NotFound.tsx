import NotFoundStyled from "./NotFoundStyled";

const NotFound = (): React.ReactElement => {
  return (
    <NotFoundStyled>
      <h1 className="not-found__title"> 404 - Page not found</h1>
      <p className="not-found__message">
        {" "}
        We could not find the page you were looking for, sorry!
      </p>
      \
    </NotFoundStyled>
  );
};

export default NotFound;
