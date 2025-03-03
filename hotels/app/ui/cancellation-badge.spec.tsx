"use client";
import { render, screen } from "@testing-library/react";
import { CancellationType } from "@/app/lib/definitions";
import CancellationBadge from "./cancellation-badge";

describe("CancellationBadge", () => {
  it("renders Free cancellation badge", () => {
    render(<CancellationBadge type={CancellationType.freeCancellation} />);
    const textElement = screen.queryByText("Free cancellation");
    expect(textElement).not.toBeNull();
    expect(textElement).toHaveStyle("color: rgb(15, 116, 1)");
  });
  it("renders Non-refundable badge", () => {
    render(<CancellationBadge type={CancellationType.notRefundable} />);
    const textElement = screen.queryByText("Non-refundable");
    expect(textElement).not.toBeNull();
    expect(textElement).toHaveStyle("color: rgb(50, 50, 50)");
  });
});
