"use client";

import { render, screen } from "@testing-library/react";
import { searchResults } from "@/app/lib/data";
import Results from "./cards";

describe("Cards", () => {
  const mockData = searchResults.results.slice(1);
  it("renders search result count", () => {
    const city = "Sydney";
    render(<Results results={mockData} city={city} />);

    expect(screen.getByTestId("result-count").textContent).toContain(
      `${mockData.length} hotels in ${city}.`,
    );
  });
});
