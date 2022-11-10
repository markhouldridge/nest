import { Controller, Get, Body, Post } from '@nestjs/common';
import { FoodService } from 'apps/food/src/food.service';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dtos/create-dog.dto';

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

  @Post()
  async create(@Body('dog') dogData: CreateDogDto) {
    return this.dogsService.create(dogData);
  }
}
