"use client";

import { RatingTypeEnum, type RatingT } from "@/app/lib/definitions";
import { Fragment } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCircle,
  FaRegCircle,
} from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";

type RateProp = {
  index: number;
  ratingValue: number;
  color: string;
  ratingType: string;
};

const StarRate = ({ index, ratingValue, color, ratingType }: RateProp) => {
  const raterShape = ratingType === "star" ? "star" : "circle";

  // render full star
  if (index < ratingValue && index + 1 <= ratingValue) {
    return ratingType === RatingTypeEnum.star ? (
      <FaStar color={color} title={raterShape} />
    ) : (
      <FaCircle color={color} title={raterShape} />
    );
  }

  // render half star
  if (index < ratingValue && ratingValue < index + 1) {
    return ratingType === RatingTypeEnum.star ? (
      <FaStarHalfAlt color={color} title={raterShape} />
    ) : (
      <FaCircleHalfStroke color={color} title={raterShape} />
    );
  }

  // render empty star
  return ratingType === RatingTypeEnum.star ? (
    <FaRegStar color={color} title={raterShape} />
  ) : (
    <FaRegCircle color={color} title={raterShape} />
  );
};

/**
 * Note: This is display only rating component
 */
export default function Rating({ ratingType, ratingValue }: RatingT) {
  const totalStars = 5;

  return (
    <span
      data-testid="ratings"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {[...new Array(totalStars)].map((item, index) => {
        return (
          <Fragment key={index}>
            <StarRate
              index={index}
              ratingValue={ratingValue}
              color="#FBCB3B"
              ratingType={ratingType}
            />
          </Fragment>
        );
      })}
      {ratingValue}
    </span>
  );
}
