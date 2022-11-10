import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { FoodModule } from 'apps/food/src/food.module';

@Module({
  imports: [FoodModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
