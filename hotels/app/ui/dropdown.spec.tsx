"use client";

import { render, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

describe("Dropdown", () => {
  it("renders sort options", () => {
    const sortOptions = [
      { text: "Price (high-low)", value: "high-low" },
      { text: "Price (low-high)", value: "low-high" },
    ];

    render(
      <Dropdown
        label="Sort by"
        data={sortOptions}
        handleChange={jest.fn()}
        selectedSortValue="high-low"
      />,
    );

    const dropdownElement = screen.getByLabelText("Sort by");

    expect(dropdownElement.childElementCount).toBe(2);
    expect(dropdownElement.firstChild?.textContent).toBe(sortOptions[0].text);
    expect(dropdownElement.lastChild?.textContent).toBe(sortOptions[1].text);
  });
});
