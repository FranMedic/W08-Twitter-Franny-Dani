import { render, screen } from "@testing-library/react";
import CreateTuit from "../pages/createTuit/index";

describe("Given a CreateTuit component", () => {
  describe("When it's rendered", () => {
    test("Then it should shows the list of tuiterS", () => {
      render(<CreateTuit />);

      const createTuit = screen.getByRole("heading", { name: /New Tuit:/i });
      expect(createTuit).toBeInTheDocument();
    });
  });
});
