import { Injectable } from '@nestjs/common';
import { DogsRepository } from './dogs.repository';
import { Dog } from './dog.entity';
import { CreateDogDto } from './dtos/create-dog.dto';
import { IDogRO } from './dog.interface';

@Injectable()
export class DogsService {
  //constructor(private readonly dogsRepository: DogsRepository) {}

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

    //await this.dogsRepository.persistAndFlush(dog);
    return this.buildDog(dog);
  }
}
