import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/pokemon-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed(numberPokemons: number = 10) {
    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${numberPokemons}`,
    );

    // ===> Insercion por cada una
    // data.results.forEach(async ({ name, url }) => {
    //   const segment = url.split('/');
    //   const no: number = +segment[segment.length - 2];

    //   const pokemon = await this.pokemonModel.create({ name, no });
    // });

    // ===> Insersiom multiple basado en multiples promesas
    // const insertPromiseArray = [];
    // data.results.forEach(async ({ name, url }) => {
    //   const segment = url.split('/');
    //   const no: number = +segment[segment.length - 2];
    //   insertPromiseArray.push(this.pokemonModel.create({ name, no }));
    // });
    // await Promise.all(insertPromiseArray);

    const pokemonToInsert: {
      name: string;
      no: number;
    }[] = data.results.map(({ name, url }) => {
      const segment = url.split('/');
      const no: number = +segment[segment.length - 2];
      return { name, no };
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';
  }
}
