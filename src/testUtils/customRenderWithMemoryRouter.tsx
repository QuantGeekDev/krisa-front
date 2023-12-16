import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../themes/GlobalStyles";
import original from "react95/dist/themes/original";

const customRenderWithMemoryRouter = (
  children: JSX.Element,
  initialEntries: string[]
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <GlobalStyles />
      <ThemeProvider theme={original}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};

export default customRenderWithMemoryRouter;
