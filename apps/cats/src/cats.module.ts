import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { FoodModule } from 'apps/food/src/food.module';

@Module({
  imports: [FoodModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
