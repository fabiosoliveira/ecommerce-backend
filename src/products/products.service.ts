import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './entities/product.entity';
import { convertToIntPositiv } from './util/util';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto[]) {
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  async findAll(search: string, page: number, size: number) {
    page = convertToIntPositiv(page);
    size = convertToIntPositiv(size);
    const skip = (page - 1) * size;

    const regexp = new RegExp(search, 'i');

    const count = await this.productModel.where({ name: regexp }).count();

    const products = await this.productModel
      .find({ name: regexp })
      .select('name')
      .skip(skip)
      .limit(size);

    const totalElements = count;
    const totalPages = Math.ceil(totalElements / size);

    const response = {
      page: {
        size: products.length,
        totalElements,
        totalPages,
        number: page,
      },
      _embedded: { products },
    };

    return response;
  }
}
