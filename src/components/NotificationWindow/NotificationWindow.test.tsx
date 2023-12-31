import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import NotificationWindow from "./NotificationWindow";

describe("Given a NotificationWindow component", () => {
  describe("When it is rendered", () => {
    test("Then it should display the header 'New Krisa just dropped' ", () => {
      const expectedHeader = "Welcome to the land of the krisa!";

      customRender(<NotificationWindow />);
      const actualHeader = screen.getByText(expectedHeader);

      expect(actualHeader).toBeVisible();
    });
  });
});
