import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
const password = 'yxffKcSs96MMXxN8'
@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://erca:${password}@fabioteste.7iby2.mongodb.net/test`),
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
