import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Testimonial } from "Testimonials";

describe("Testimonial", () => {
  test("Render Testimonial component", () => {
    render(<Testimonial />);
  });
});
