import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Nav } from "./Nav";

describe("Nav", () => {
  test("Render Nav component", () => {
    render(<Nav />);
  });
});
