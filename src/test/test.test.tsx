import React from "react";
import { render, screen } from "@testing-library/react";
import Test from "../pages/Test";

test("renders test message with name", () => {
  render(<Test />);
  const testElement = screen.getByText(/Test/i);
  expect(testElement).toBeInTheDocument();
});
