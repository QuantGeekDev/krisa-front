import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When it is rendered", () => {
    test("Then the heading 'Krisa' is visible", () => {
      const headingTitle = "KRISA";

      customRender(<Homepage />);

      const actualHeadingTitle = screen.getByRole("heading", {
        name: headingTitle,
      });

      expect(actualHeadingTitle).toBeVisible();
    });
  });
});
