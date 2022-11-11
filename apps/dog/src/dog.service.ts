import { HttpException, Injectable } from '@nestjs/common';
import { DogRepository } from './dog.repository';
import { Dog } from './dog.entity';
import { CreateDogDto } from './dtos/create-dog.dto';
import { IDogRO } from './dog.interface';

@Injectable()
export class DogService {
  constructor(private readonly dogRepository: DogRepository) {}

  getHello(): string {
    return 'Hello dogs!';
  }

  private buildDog(dog: Dog) {
    const dogRO = {
      name: dog.name,
      age: dog.age,
    };

    return { dog: dogRO };
  }

  async create(dto: CreateDogDto): Promise<IDogRO> {
    const { name, age } = dto;
    const dog = new Dog(name, age);

    await this.dogRepository.persistAndFlush(dog);
    return this.buildDog(dog);
  }

  async findByName(name: string): Promise<IDogRO> {
    const dog = await this.dogRepository.findOne({ name });

    if (!dog) {
      const errors = { Dog: ' not found' };
      throw new HttpException({ errors }, 401);
    }

    return this.buildDog(dog);
  }
}
