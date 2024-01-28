import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  test("Render Header component", () => {
    render(<Header data={{}} />);
  });
});
