import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Portfolio } from "./Portfolio";

describe("Portfolio", () => {
  test("Render portfolio component", () => {
    render(<Portfolio />);
  });
});
