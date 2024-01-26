import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Resume } from "Resume";

describe("Resume", () => {
  test("Render Resume component", () => {
    render(<Resume />);
  });
});
