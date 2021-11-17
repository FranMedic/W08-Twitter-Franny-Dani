import { render, screen } from "@testing-library/react";

import Header from "./Header";
describe("Given MyApp component", () => {
  describe("When it's invoke", () => {
    test("Then it should render Links to navigate throw the pages", () => {
      render(<Header />);

      const homeLink = screen.getByRole("link", { name: "Home" });
      const createTuitLink = screen.getByRole("link", { name: "Create Tuit" });
      const timelineLink = screen.getByRole("link", { name: "Timeline" });

      expect(homeLink).toBeInTheDocument();
      expect(createTuitLink).toBeInTheDocument();
      expect(timelineLink).toBeInTheDocument();
    });
  });
});
