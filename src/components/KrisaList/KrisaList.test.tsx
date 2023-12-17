import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import KrisaList from "./KrisaList";
import { krisaMockList } from "../../mocks/KrisaMocks/KrisaMocks";

describe("Given a KrisaList component", () => {
  describe("When it is rendered with a list with Krisa number 1", () => {
    test("Then the heading '1' should be visible", () => {
      const expectedHeading = "1";

      customRender(<KrisaList krisas={krisaMockList} />);

      const actualHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(actualHeading).toBeVisible();
    });
  });
});
