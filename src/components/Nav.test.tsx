import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Nav } from "./Nav";

describe("Nav", () => {
  test("Render Nav component", () => {
    render(<Nav />);
  });
});
