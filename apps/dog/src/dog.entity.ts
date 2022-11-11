import {
  Entity,
  EntityRepositoryType,
  Property,
  PrimaryKey,
} from '@mikro-orm/core';
import { DogRepository } from './dog.repository';

@Entity({ tableName: 'main.dog', customRepository: () => DogRepository })
export class Dog {
  [EntityRepositoryType]?: DogRepository;

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
