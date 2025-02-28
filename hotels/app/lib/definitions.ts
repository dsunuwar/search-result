// keep all data type definitions here

type Rating = {
  ratingType: string;
  ratingValue: number;
};

type PreviewImage = {
  caption: string;
  imageType: string;
  url: string;
};

export type Property = {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
};
