import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import AppBarKrisa from "./AppBarKrisa";

describe("Given an AppBarKrisa component", () => {
  describe("When it is rendered", () => {
    test("Then it should display the 'Start' button", () => {
      const expectedStartButtonText = "Krisa logo Start";

      customRender(<AppBarKrisa />);

      const actualStartButtonText = screen.getByRole("button", {
        name: expectedStartButtonText,
      });

      expect(actualStartButtonText).toBeVisible();
    });
  });
});
