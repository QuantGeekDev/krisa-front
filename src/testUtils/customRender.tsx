import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../themes/GlobalStyles";
import original from "react95/dist/themes/original";

const customRender = (children: JSX.Element) => {
  return render(
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={original}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default customRender;
