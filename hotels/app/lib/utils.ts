import { CancellationType } from "./definitions";

import { HotelsT } from "./definitions";
import { hotelSortOptions } from "@/app/lib/constants";

export const mapCancellationType = {
  [CancellationType.notRefundable]: "Non-refundable",
  [CancellationType.freeCancellation]: "Free cancellation",
};

export const sortHotelsBy = (
  hotels: HotelsT[],
  sortOption: string,
): HotelsT[] => {
  const ascend = (a: HotelsT, b: HotelsT) =>
    a.offer.displayPrice.amount - b.offer.displayPrice.amount;

  const decend = (a: HotelsT, b: HotelsT) =>
    b.offer.displayPrice.amount - a.offer.displayPrice.amount;

  if (sortOption === hotelSortOptions.highLow.value) {
    return hotels.sort(decend);
  }

  if (sortOption === hotelSortOptions.lowHigh.value) {
    return hotels.sort(ascend);
  }

  return hotels;
};
