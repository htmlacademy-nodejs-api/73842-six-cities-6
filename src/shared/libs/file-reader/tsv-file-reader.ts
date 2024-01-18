import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, OfferType } from '../../types/index.js';
import { CitiesType } from '../../types/cities-type.enum.js';
import { ProposerType } from '../../types/proposer-type.enum.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map((
        [
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
          name,
          email,
          avatarPath,
          password,
          proposerType
        ]
        ) => ({
        title,
        description,
        postDate: new Date(postDate),
        city: CitiesType[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        previewImage,
        images: images.split(';')
        .map((path) => (path)),
        premium: !!premium,
        favorites: !!favorites,
        rating: Number.parseInt(rating, 10),
        type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
        numbersOfRoom,
        numberOfGests,
        price: Number.parseInt(price, 10),
        facilities: facilities.split(';')
          .map((name) => (name)),
        proposer: { name, email, avatarPath, password, proposerType: proposerType as ProposerType },
      }));
  }
}
