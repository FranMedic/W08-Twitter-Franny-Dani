import { render, screen } from "@testing-library/react";
import Timeline from "../pages/timeline/index";
import ReactTestRenderer from "react-test-renderer";

describe("Given a timeline component", () => {
  describe("When it's rendered", () => {
    test("Then it should shows tuits list", () => {
      const tuits = [
        {
          text: "patata\n",
          likes: 0,
          date: "2021-11-18T17:44:40.529Z",
          id: "61969108c5fead84ba7b8a32",
        },
      ];
      render(<Timeline tuits={tuits} />);

      const timeline = screen.getByRole("heading", { name: /Timeline/i });
      expect(timeline).toHaveTextContent("Timeline");
    });
  });

  describe("When it recives and object", () => {
    test("then it should render a tuit with the tuit text inside", () => {
      const tuits = [
        {
          text: "patata\n",
          likes: 0,
          date: "2021-11-18T17:44:40.529Z",
          id: "61969108c5fead84ba7b8a32",
        },
      ];
      const taskComponent = ReactTestRenderer.create(
        <Timeline tuits={tuits} />
      );

      expect(taskComponent.toJSON()).toMatchSnapshot();
    });
  });
});
