import { datatype, commerce, image, vehicle, name, lorem, date } from 'faker';
import { Promo } from '../types/promo';
import { Camera } from '../types/camera';
import { Review } from '../types/review';
import { Cameras } from '../types/cameras';

export const makeFakePromo = (): Promo => ({
  id: datatype.number({ precision: 1 }),
  name: commerce.productName(),
  previewImg: image.imageUrl(1120, 960, 'camera', true),
  previewImg2x: image.imageUrl(2240, 1920, 'camera', true),
  previewImgWebp: image.imageUrl(1120, 960, 'camera', true),
  previewImgWebp2x: image.imageUrl(1120, 960, 'camera', true),
});
export const makeFakeCamera = (): Camera => ({
  id: datatype.number({ precision: 1 }),
  name: commerce.productName(),
  previewImg: image.imageUrl(1120, 960, 'camera', true),
  previewImg2x: image.imageUrl(2240, 1920, 'camera', true),
  previewImgWebp: image.imageUrl(1120, 960, 'camera', true),
  previewImgWebp2x: image.imageUrl(1120, 960, 'camera', true),
  rating: datatype.number({ min: 1, max: 5, precision: 1 }),
  description: commerce.productDescription(),
  type: commerce.product(),
  price: Number(commerce.price()),
  level: commerce.productAdjective(),
  reviewCount: datatype.number(),
  vendorCode: vehicle.vin(),
  category: commerce.productMaterial(),
});
export const makeFakeCameras = (): Camera[] =>
  Array.from({ length: 40 }, makeFakeCamera);
export const makeFakeSimilarCameras = (): Camera[] =>
  Array.from({ length: 9 }, makeFakeCamera);
export const makeFakeStateCameras = (): Cameras => {
  const cameras = {
    items: Array.from({ length: 9 }, makeFakeCamera),
    total: 40,
  };
  return cameras;
};
export const makeFakeReview = (): Review => ({
  id: datatype.uuid(),
  userName: name.firstName(),
  advantage: lorem.word(),
  disadvantage: lorem.word(),
  rating: datatype.number({ min: 1, max: 5, precision: 1 }),
  review: lorem.sentence(),
  createAt: String(date.recent()),
  cameraId: datatype.number({ precision: 1 }),
});
export const makeFakeReviews = (): Review[] =>
  Array.from({ length: 10 }, makeFakeReview);
