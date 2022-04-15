import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from './Footer';

describe("Footer", () => {
  test("Render Footer component", () => {
    render(<Footer />);
  });
});
