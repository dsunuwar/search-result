// keep all data type definitions here
export enum RatingTypeEnum {
  self = "self",
  star = "star",
}

// Possible union types for usage
type RatingType = "self" | "star";
type ImageType = "PRIMARY";
type PromotionTypes = "MEMBER" | "CAMPAIGN";

// --------- Property

export type RatingT = {
  ratingType: string;
  ratingValue: number;
};

export type PreviewImage = {
  caption: string;
  imageType: string;
  url: string;
};

export type Property = {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: RatingT;
};

export type HotelsT = {
  id: string;
  property: Property;
  offer: OfferT;
};

// --------- Offer

export type PromotionT = {
  title: string;
  type?: string;
};

export enum CancellationType {
  notRefundable = "NOT_REFUNDABLE",
  freeCancellation = "FREE_CANCELLATION",
}

export type OfferT = {
  cancellationOption: {
    cancellationType: string;
  };

  displayPrice: {
    amount: number;
    currency: string;
  };

  name: string;
  promotion: PromotionT;
  saving?: {
    amount: number;
    currency: string;
  };
};
