import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import KrisaLairPage from "./KrisaLairPage";

describe("Given a KrisaLairPage page", () => {
  describe("When it is rendered", () => {
    test("Then the title 'Krisa Lair' should be visible", () => {
      const expectedTitle = "Krisa Lair";

      customRender(<KrisaLairPage />);

      const actualKrisaLairTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(actualKrisaLairTitle).toBeVisible();
    });
  });
});
