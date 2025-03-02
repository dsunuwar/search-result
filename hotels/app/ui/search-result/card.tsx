"use client";

import { Property, OfferT, CancellationType } from "@/app/lib/definitions";
import Image from "@/app/ui/search-result/image";
import Rating from "@/app/ui/rating";
import PromotionBadge from "@/app/ui/promotion-badge";
import CancellationBadge from "@/app/ui/cancellation-badge";

type Props = {
  property: Property;
  offer: OfferT;
};

export default function Card({ property, offer }: Props) {
  const { title, address, previewImage, rating } = property;

  console.log(offer);
  // placeholder dynamic value that should come from parent
  const totalNight = 1;
  return (
    <>
      <section
        style={{
          flex: "0 0 150px",
          marginRight: "10px",
        }}
      >
        <PromotionBadge title={offer.promotion.title} />
        <Image
          caption={previewImage.caption}
          url={previewImage.url}
          imageType={previewImage.imageType}
        />
      </section>
      <div
        style={{
          borderTop: "1px solid #ccc",
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section
          style={{
            flex: "1 1 auto",
          }}
        >
          <h1>
            {`${title},    `}
            <Rating
              ratingType={rating.ratingType}
              ratingValue={rating.ratingValue}
            />
          </h1>
          <p
            style={{
              color: "#999999",
              fontSize: "0.7rem",
            }}
          >
            {address.join(", ")}
          </p>
          <a
            href="#"
            style={{
              color: "#E00E00",
            }}
          >
            {offer.name}
          </a>
          <p>
            <CancellationBadge
              type={
                offer.cancellationOption.cancellationType as CancellationType
              }
            />
          </p>
        </section>
        <section
          style={{
            justifyContent: "flex-end",
          }}
        >
          <p>{`${totalNight} night total ${offer.displayPrice.currency}`}</p>
          <h1>${offer.displayPrice.amount}</h1>
        </section>
      </div>
    </>
  );
}
