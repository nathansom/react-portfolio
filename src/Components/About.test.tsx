import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { About } from "./About";

describe("About", () => {
  test("Render About component", () => {
    render(<About data={{ image: "", bio: "", resumedownload: "" }} />);
  });
});
