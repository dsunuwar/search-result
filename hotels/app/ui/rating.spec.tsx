"use client";

import { render, screen } from "@testing-library/react";
import Rating from "./rating";

describe("Rating", () => {
  it("renders five rating icons", () => {
    render(<Rating ratingType="star" ratingValue={3.5} />);

    const ratingElements = screen.getByTestId("ratings");
    expect(ratingElements.children.length).toEqual(5);
  });
  it("renders star for rating value", () => {
    render(<Rating ratingType="star" ratingValue={3.5} />);

    const ratingElements = screen.getByTestId("ratings");
    expect(ratingElements.firstChild?.firstChild?.textContent).toBe("star");
  });
  it("renders circles rating value", () => {
    render(<Rating ratingType="self" ratingValue={3.5} />);

    const ratingElements = screen.getByTestId("ratings");
    expect(ratingElements.firstChild?.firstChild?.textContent).toBe("circle");
  });
});
