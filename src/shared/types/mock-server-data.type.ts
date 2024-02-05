export type MockServerData = {
  titles: string[];
  descriptions: string[];
  postDates: string[];
  cities: string[];
  previewImages: string[];
  images: string[];
  premium: number[];
  favorites: number[];
  rating: number[];
  types: string[];
  numberOfRooms: number[];
  numberOfGests: number[];
  prices: number[];
  facilities: string[], //TODO добавить списко возможных значенией
  proposer: {
    names: string[];
    emails: string[];
    avatarPaths: string[];
    passwords: string[];
    proposerTypes: string[];
  };
};
