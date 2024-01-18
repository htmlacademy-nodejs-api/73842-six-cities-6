import { CitiesType } from "./cities-type.enum.js";
import { OfferType } from "./offer-type.enum.js";
import { Proposer } from "./proposer.type.js";

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: CitiesType;
  previewImage: string;
  images: string[];
  premium: boolean;
  favorites: boolean;
  rating: number;
  type: OfferType;
  numbersOfRoom: string,
  numberOfGests: string,
  price: number;
  facilities: string[], //TODO добавить списко возможных значенией
  proposer: Proposer,
}
