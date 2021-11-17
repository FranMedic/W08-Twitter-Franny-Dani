import { render, screen } from "@testing-library/react";
import Timeline from "../pages/timeline/index";

describe("Given a timeline component", () => {
  describe("When it's rendered", () => {
    test("Then it should shows tuits list", () => {
      render(<Timeline />);

      const timeline = screen.getByRole("heading", { name: /Timeline/i });
      expect(timeline).toHaveTextContent("Timeline");
    });
  });
});
