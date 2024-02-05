import { Proposer } from "./proposer.type.js";

export type Offer = {
  title: string;
  description: string;
  postDate: string;
  city: string;
  previewImage: string;
  images: string[];
  premium: boolean;
  favorites: boolean;
  rating: number;
  type: string;
  numbersOfRoom: string,
  numberOfGests: string,
  price: number;
  facilities: string[], //TODO добавить списко возможных значенией
  proposer: Proposer,
}
