import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import AccountInfo from "./AccountInfo";

describe("AccountInfo", () => {
  test("Expect AccountInfo to render", () => {
    render(
      <BrowserRouter>
        <AccountInfo />
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-box")).toBeInTheDocument();
  });
});
