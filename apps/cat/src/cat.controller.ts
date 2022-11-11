import { Controller, Get } from '@nestjs/common';
import { FoodService } from 'apps/food/src/food.service';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly foodService: FoodService,
  ) {}

  @Get()
  getHello(): string {
    return this.catService.getHello();
  }

  @Get('food')
  getFood(): string {
    return this.foodService.getFood('cat');
  }
}
