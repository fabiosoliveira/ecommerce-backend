import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  previewPrice: string;

  @Prop()
  currentPrice: string;

  @Prop()
  color: string;

  @Prop()
  department: string;

  @Prop()
  productAdjective: string;

  @Prop()
  productMaterial: string;

  @Prop()
  product: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
