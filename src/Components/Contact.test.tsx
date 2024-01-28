import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Contact } from "./Contact";

describe("Contact", () => {
  test("Render Contact component", () => {
    render(<Contact />);
  });
});
