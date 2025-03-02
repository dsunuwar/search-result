"use client";

import { RatingTypeEnum, type RatingT } from "@/app/lib/definitions";

/**
 * TODO: Create rating component or use existing lib
 */
export default function Rating({ ratingType, ratingValue }: RatingT) {
  return ratingType === RatingTypeEnum.star ? (
    <>*:{ratingValue}</>
  ) : (
    <>o:{ratingValue}</>
  );
}
