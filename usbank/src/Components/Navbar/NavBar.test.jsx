import { render, screen, fireEvent } from "@testing-library/react";
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

  test("Expect toggle to be called when button is clicked", () => {
    const toggleMock = jest.fn();

    render(
      <BrowserRouter>
        <NavBar toggle={{ setToggle: toggleMock }} />
      </BrowserRouter>
    );

    const toggleButton = screen.getByLabelText("Toggle navigation");
    fireEvent.click(toggleButton);

    expect(toggleMock).toHaveBeenCalled();
  });
});
