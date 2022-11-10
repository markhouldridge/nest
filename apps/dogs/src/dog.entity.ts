import {
  Entity,
  EntityRepositoryType,
  Property,
  PrimaryKey,
} from '@mikro-orm/core';
import { DogsRepository } from './dogs.repository';

@Entity({ customRepository: () => DogsRepository })
export class Dog {
  [EntityRepositoryType]?: DogsRepository;

  @PrimaryKey()
  name: string;

  @Property()
  age?: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/*
interface DogDTO extends EntityDTO<Dog> {
  following?: boolean;
}
*/
