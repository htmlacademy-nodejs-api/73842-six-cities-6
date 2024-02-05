import { Offer, ProposerType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    city,
    previewImage,
    images,
    premium,
    favorites,
    rating,
    type,
    numbersOfRoom,
    numberOfGests,
    price,
    facilities,
    firstName,
    lastName,
    email,
    avatarPath,
    password,
    proposerType
  ] = offerData.replace('\n', '').split('\t');

  const proposer = {
    firstName, lastName, email, avatarPath, password, proposerType: proposerType as ProposerType
  };

  return {
    title,
    description,
    postDate: postDate,
    city,
    previewImage,
    images: images.split(';')
      .map((path) => (path)),
    premium: !!premium,
    favorites: !!favorites,
    rating: Number.parseInt(rating, 10),
    type,
    numbersOfRoom,
    numberOfGests,
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';')
      .map((name) => (name)),
    proposer,
  };
}
