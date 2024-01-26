import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Testimonials } from "./Testimonials";

describe("Testimonial", () => {
  test("Render Testimonial component", () => {
    render(<Testimonials />);
  });
});
