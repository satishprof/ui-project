import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import LoanDetails from "./LoanDetails";

describe("LoanDetails", () => {
  test("Expect LoanDetails to render", () => {
    render(
      <BrowserRouter>
        <LoanDetails />
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-box")).toBeInTheDocument();
  });
});
