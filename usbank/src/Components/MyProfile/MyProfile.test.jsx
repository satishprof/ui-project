import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import MyProfile from "./MyProfile";

describe("MyProfile", () => {
  test("Expect MyProfile to render", () => {
    render(
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    );
    expect(screen.getByTestId("container-box")).toBeInTheDocument();
  });
});
