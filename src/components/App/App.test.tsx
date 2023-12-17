import userEvent from "@testing-library/user-event";
import customRenderWithMemoryRouter from "../../testUtils/customRenderWithMemoryRouter";

import App from "./App";
import { screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When the user is on the Homepage and clicks 'Get the miska now xD' button", () => {
    test("Then it should redirect to the Krisa Lair and 'Krisa Lair' should be visible", async () => {
      const user = userEvent.setup();

      const expectedLairTitle = "Krisa Lair";

      const getTheMiskaButton = "ENTER THE KRISA LAIR";

      customRenderWithMemoryRouter(<App />, ["/home"]);

      const actualMiskaButton = screen.getByRole("button", {
        name: getTheMiskaButton,
      });

      await user.click(actualMiskaButton);

      const actualLairTitle = screen.getByRole("heading", {
        name: expectedLairTitle,
      });

      expect(actualLairTitle).toBeVisible();
    });
  });
});
