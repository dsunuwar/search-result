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
  activeStar: number;
  color: string;
};

const StarRate = ({ index, activeStar, color }: RateProp) => {
  if (index < activeStar && index + 1 < activeStar) {
    return (
      <>
        <FaStar color={color} />
      </>
    );
  }

  if (index < activeStar && activeStar < index + 1 && activeStar % 1 !== 0) {
    return (
      <>
        <FaStarHalfAlt color={color} />
      </>
    );
  }

  return (
    <>
      <FaRegStar color={color} />
    </>
  );
};

const CircleRate = ({ index, activeStar, color }: RateProp) => {
  if (index < activeStar) {
    return (
      <>
        <FaCircle color={color} />
      </>
    );
  }

  if (index < activeStar && activeStar < index + 1 && activeStar % 1 !== 0) {
    return (
      <>
        <FaCircleHalfStroke color={color} />
      </>
    );
  }

  return (
    <>
      <FaRegCircle color={color} />
    </>
  );
};

export default function Rating({ ratingType, ratingValue }: RatingT) {
  const totalStars = 5;
  const activeStars = ratingValue;

  return (
    <span
      style={{
        display: "flex",
      }}
    >
      {[...new Array(totalStars)].map((item, index) => {
        return (
          <Fragment key={index}>
            {ratingType === RatingTypeEnum.star ? (
              <StarRate
                index={index}
                activeStar={activeStars}
                color="#FBCB3B"
              />
            ) : (
              <CircleRate
                index={index}
                activeStar={activeStars}
                color="#FBCB3B"
              />
            )}
          </Fragment>
        );
      })}
      {activeStars}
    </span>
  );
}
