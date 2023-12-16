import NotFoundStyled from "./NotFoundStyled";

const NotFound = (): React.ReactElement => {
  return (
    <NotFoundStyled className="not-found">
      <img
        src="https://res.cloudinary.com/derffxqir/image/upload/f_auto,q_auto,w_330,h_330/v1/krisas/vmodvqg32ihzanjoxwju"
        alt="a sad krisa"
        className="not-found__image"
      />
      <h1 className="not-found__title"> 404 - Page not found</h1>
      <p className="not-found__message">
        {" "}
        We could not find the miska you were looking for, sorry!
      </p>
      \
    </NotFoundStyled>
  );
};

export default NotFound;
