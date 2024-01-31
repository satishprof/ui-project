import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("Expect NavBar to render", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});
