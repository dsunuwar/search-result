"use client";

import { render, screen } from "@testing-library/react";
import PromotionBadge from "./promotion-badge";

describe("PromotionBadge", () => {
  it("renders Promotion", () => {
    render(<PromotionBadge title="Red Hot" />);
    expect(screen.queryByText("Red Hot"));
  });
});
