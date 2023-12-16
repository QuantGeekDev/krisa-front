import { screen } from "@testing-library/react";
import { krisa1Mock } from "../../mocks/KrisaMocks/KrisaMocks";
import customRender from "../../testUtils/customRender";
import KrisaCard from "./KrisaCard";

describe("Given a Krisa Card component", () => {
  describe("When it is rendered with krisa1", () => {
    test("Then the heading '1' should be visible", () => {
      const expectedKrisaId = "1";

      customRender(<KrisaCard krisa={krisa1Mock} />);

      const actualKrisaId = screen.getByRole("heading", {
        name: expectedKrisaId,
      });
      expect(actualKrisaId).toBeVisible();
    });
  });
});
