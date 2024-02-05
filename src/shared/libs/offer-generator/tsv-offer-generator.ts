import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';

const MIN_PRICE = 1000;
const MAX_PRICE = 20000;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    console.log(getRandomItem<string>(this.mockData.cities));
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = getRandomItem<string>(this.mockData.postDates);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const premium = getRandomItem<number>(this.mockData.premium);
    const favorites = getRandomItem<number>(this.mockData.favorites);
    const rating = getRandomItem<number>(this.mockData.rating);
    const type = getRandomItem<string>(this.mockData.types);
    const numberOfRooms = getRandomItem<number>(this.mockData.numberOfRooms);
    const numberOfGests = getRandomItem<number>(this.mockData.numberOfGests);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const name = getRandomItem(this.mockData.proposer.names);
    const email = getRandomItem(this.mockData.proposer.emails);
    const avatar = getRandomItem(this.mockData.proposer.avatarPaths);
    const password = getRandomItem(this.mockData.proposer.passwords);
    const proposerType = getRandomItem(this.mockData.proposer.proposerTypes);

    const [firstname, lastname] = name.split(' ');

    return [
      title, description, postDate,city, previewImage, images,
      premium, favorites, rating, type, numberOfRooms, numberOfGests, price, facilities,
      firstname, lastname, email, avatar, password, proposerType
    ].join('\t');
  }
}
