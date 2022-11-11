import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { FoodModule } from 'apps/food/src/food.module';

@Module({
  imports: [FoodModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
