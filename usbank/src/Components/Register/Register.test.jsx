import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";

describe("Register", () => {
  test("Expect Register to render", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    expect(screen.getByTestId("registration-header")).toBeInTheDocument();
  });

  test("Submit form with valid data", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText("Firstname:"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Lastname:"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Username:"), {
      target: { value: "john_doe" },
    });
    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone number:"), {
      target: { value: "1234567890" },
    });
    fireEvent.click(screen.getByText("Register"));
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Registration successful, redirecting to home page to login"
      );
    });
  });
});
