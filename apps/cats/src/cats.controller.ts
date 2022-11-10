import { Controller, Get } from '@nestjs/common';
import { FoodService } from 'apps/food/src/food.service';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly foodService: FoodService,
  ) {}

  @Get()
  getHello(): string {
    return this.catsService.getHello();
  }

  @Get('food')
  getFood(): string {
    return this.foodService.getFood('cat');
  }
}
