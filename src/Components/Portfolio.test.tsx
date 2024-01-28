import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Portfolio } from "./Portfolio";

describe("Portfolio", () => {
  test("Render portfolio component", () => {
    render(<Portfolio data={{}} />);
  });
});
