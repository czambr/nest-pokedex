import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/pokemon-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  constructor() {}

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=300',
    );

    data.results.forEach(({ name, url }) => {
      const segment = url.split('/');
      const no: number = +segment[segment.length - 2];

      console.log({ segment, no });
    });
  }
}
