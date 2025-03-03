"use client";

import { render, screen } from "@testing-library/react";
import { searchResults } from "@/app/lib/data";
import { HotelsT } from "@/app/lib/definitions";
import Card from "./card";

describe("Card", () => {
  const cloneHotelsData: HotelsT = searchResults.results.slice(0, 1)[0];

  it("renders a hotel card", () => {
    render(
      <Card
        property={cloneHotelsData.property}
        offer={cloneHotelsData.offer}
      />,
    );

    expect(
      screen.queryByText(cloneHotelsData.offer.promotion.title),
    ).not.toBeNull();
    expect(
      screen.queryByAltText(cloneHotelsData.property.previewImage.caption),
    ).not.toBeNull();

    expect(screen.getByTestId("property-title").textContent).toEqual(
      cloneHotelsData.property.title,
    );

    expect(screen.getByTestId("offer-name").textContent).toEqual(
      cloneHotelsData.offer.name,
    );
    expect(screen.queryByText("Non-refundable")).not.toBeNull();
  });
});
