import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import KrisaMonitor from "./KrisaMonitor";
describe("Given a KrisaMonitor component", () => {
  describe("When it is rendered", () => {
    test("Then the image of the original krisa should be visible", () => {
      const originalKrisaAltText = "original krisa";

      customRender(<KrisaMonitor />);

      const actualOriginalKrisa = screen.getByRole("img", {
        name: originalKrisaAltText,
      });

      expect(actualOriginalKrisa).toBeVisible();
    });
  });
});
