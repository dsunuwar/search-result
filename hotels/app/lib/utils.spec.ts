import { sortHotelsBy } from "@/app/lib/utils";
import { hotelSortOptions } from "@/app/lib/constants";

import { searchResults } from "@/app/lib/data";
import { HotelsT } from "./definitions";

describe("sortHotelsBy", () => {
  // clone data to be safe from accidental mutation
  const cloneHotelsData: HotelsT[] = JSON.parse(
    JSON.stringify(searchResults.results),
  );

  const lastItem = cloneHotelsData.length - 1;

  it("returns empty when hotel results empty", () => {
    const sortResultHighLow = sortHotelsBy([], hotelSortOptions.highLow.value);
    expect(sortResultHighLow).toEqual([]);
  });

  it("sorts hotel by Price (high-low)", () => {
    const sortResultHighLow = sortHotelsBy(
      cloneHotelsData,
      hotelSortOptions.highLow.value,
    );
    // first value to be high
    expect(sortResultHighLow[0].offer.displayPrice.amount).toEqual(535);
    // last value to be low
    expect(sortResultHighLow[lastItem].offer.displayPrice.amount).toEqual(227);
  });

  it("sorts hotel by Price (low-high)", () => {
    const sortResultHighLow = sortHotelsBy(
      cloneHotelsData,
      hotelSortOptions.lowHigh.value,
    );

    // first value to be low
    expect(sortResultHighLow[0].offer.displayPrice.amount).toEqual(227);
    // last value to be high
    expect(sortResultHighLow[lastItem].offer.displayPrice.amount).toEqual(535);
  });
});
