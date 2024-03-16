import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  // id: string <=== Mongo lo genera

  @Prop({ unique: true, index: true }) // Podria hacer busquedas por este campo
  name: string;

  @Prop({ unique: true, index: true }) // Podria hacer busquedas por este campo
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
