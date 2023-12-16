import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import NotFound from "./NotFound";

describe("Given a PageNotFound page", () => {
  describe("When it is rendered", () => {
    test("Then it should display the heading '404 - Page not found' ", () => {
      const expected404Title = "404 - Page not found";

      customRender(<NotFound />);

      const actual404Title = screen.getByRole("heading", {
        name: expected404Title,
      });

      expect(actual404Title).toBeVisible();
    });
  });
});
