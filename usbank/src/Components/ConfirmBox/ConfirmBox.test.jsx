import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ConfirmBox from "./ConfirmBox";

describe("ConfirmBox", () => {
  test("renders with correct content", () => {
    const handleClose = jest.fn();
    const handleOk = jest.fn();
    const title = "Test Title";
    const description = "Test Description";

    const { getByText } = render(
      <ConfirmBox
        show={true}
        handleClose={handleClose}
        handleOk={handleOk}
        title={title}
        description={description}
      />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  test("calls handleClose when cancel button is clicked", () => {
    const handleClose = jest.fn();
    const handleOk = jest.fn();
    const title = "Test Title";
    const description = "Test Description";

    const { getByText } = render(
      <ConfirmBox
        show={true}
        handleClose={handleClose}
        handleOk={handleOk}
        title={title}
        description={description}
      />
    );

    fireEvent.click(getByText("Cancel"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("calls handleOk when OK button is clicked", () => {
    const handleClose = jest.fn();
    const handleOk = jest.fn();
    const title = "Test Title";
    const description = "Test Description";

    const { getByText } = render(
      <ConfirmBox
        show={true}
        handleClose={handleClose}
        handleOk={handleOk}
        title={title}
        description={description}
      />
    );

    fireEvent.click(getByText("OK"));
    expect(handleOk).toHaveBeenCalledTimes(1);
  });
});
