import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from './Contact';

describe("Contact", () => {
  test("Render Contact component", () => {
    render(<Contact />);
  });
});
