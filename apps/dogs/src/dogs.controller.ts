import { Controller, Get } from '@nestjs/common';
import { FoodService } from 'apps/food/src/food.service';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(
    private readonly dogsService: DogsService,
    private readonly foodService: FoodService,
  ) {}

  @Get()
  getHello(): string {
    return this.dogsService.getHello();
  }

  @Get('food')
  getFood(): string {
    return this.foodService.getFood('dog');
  }
}
