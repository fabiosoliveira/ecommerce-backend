import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto[]) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(
    @Query('q') q: string,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    return this.productsService.findAll(q, +page, +size);
  }
}
