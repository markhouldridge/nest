import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { FoodService } from 'apps/food/src/food.service';
import { DogService } from './dog.service';
import { CreateDogDto } from './dtos/create-dog.dto';

@Controller('dog')
export class DogController {
  constructor(
    private readonly dogService: DogService,
    private readonly foodService: FoodService,
  ) {}

  @Get()
  getHello(): string {
    return this.dogService.getHello();
  }

  @Get('food')
  getFood(): string {
    return this.foodService.getFood('dog');
  }

  @Post()
  async create(@Body() dogData: CreateDogDto) {
    return this.dogService.create(dogData);
  }

  @Get('/:name')
  async getByName(@Param('name') name) {
    return this.dogService.findByName(name);
  }
}
