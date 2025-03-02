"use client";

import { sortHotelsBy } from "@/app/lib/utils";
import { hotelSortOptions } from "@/app/lib/constants";
import { describe } from "node:test";

describe("sortHotelsBy", () => {
  it("sorts hotel by Price (high-low)", () => {
    sortHotelsBy([], hotelSortOptions.highLow.value);
  });
});
